'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { 
  auth, 
  db, 
  isFirebaseConfigured,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  fbSignOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot
} from '../lib/firebase';

const AuthContext = createContext(null);

// Every learner must have an account, so a new account starts from zero.
const DEFAULT_PROFILE = {
  xp: 0,
  hearts: 5,
  streak: 0,
  level: 1,
  completedLessons: [],
  currentLanguage: 'spanish',
  displayName: 'Learner',
  photoURL: null,
  role: 'student'
};

const DEMO_USER_KEY = 'lingo_demo_user';
const DEMO_PROFILE_KEY = 'lingo_profile';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [loading, setLoading] = useState(true);
  // Name chosen on the signup form, used when the profile document is first created.
  const pendingNameRef = useRef(null);

  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      let unsubscribeProfile = null;
      const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
        if (unsubscribeProfile) {
          unsubscribeProfile();
          unsubscribeProfile = null;
        }
        // Guest (anonymous) sessions are not allowed.
        if (fbUser && fbUser.isAnonymous) {
          await fbSignOut(auth);
          return;
        }
        if (fbUser) {
          setLoading(true);
          setUser(fbUser);
          await loadUserProfile(fbUser.uid, fbUser.displayName, fbUser.email);
          // Keep the profile in sync with the cloud so changes made on another
          // device (e.g. a new profile picture) appear everywhere.
          if (db) {
            unsubscribeProfile = onSnapshot(
              doc(db, 'users', fbUser.uid),
              (snap) => {
                if (snap.exists()) setProfile({ ...DEFAULT_PROFILE, ...snap.data() });
              },
              (err) => console.warn('Profile sync error:', err)
            );
          }
        } else {
          setUser(null);
          setProfile(DEFAULT_PROFILE);
        }
        setLoading(false);
      });
      return () => {
        if (unsubscribeProfile) unsubscribeProfile();
        unsubscribe();
      };
    }

    // Local demo mode (Firebase not configured): the account lives in this browser only.
    try {
      const savedUserStr = localStorage.getItem(DEMO_USER_KEY);
      if (savedUserStr) {
        const savedUser = JSON.parse(savedUserStr);
        setUser(savedUser);
        const userProfileKey = `lingo_profile_${savedUser.uid}`;
        const savedProfile = localStorage.getItem(userProfileKey) || localStorage.getItem(DEMO_PROFILE_KEY);
        setProfile(savedProfile ? JSON.parse(savedProfile) : DEFAULT_PROFILE);
      }
    } catch {
      // Ignore unreadable local data and treat as signed out.
    }
    setLoading(false);
  }, []);

  const loadUserProfile = async (uid, defaultName, email) => {
    if (!db) return;
    const name = pendingNameRef.current || defaultName || (email ? email.split('@')[0] : 'Learner');
    try {
      const userRef = doc(db, 'users', uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        setProfile({ ...DEFAULT_PROFILE, ...data });
        try {
          localStorage.setItem(`lingo_profile_${uid}`, JSON.stringify({ ...DEFAULT_PROFILE, ...data }));
        } catch {}
      } else {
        let cached = null;
        try {
          const cachedStr = localStorage.getItem(`lingo_profile_${uid}`);
          if (cachedStr) cached = JSON.parse(cachedStr);
        } catch {}

        const newProfile = {
          ...DEFAULT_PROFILE,
          ...(cached || {}),
          displayName: cached?.displayName || name,
          email: email || null,
          createdAt: cached?.createdAt || new Date().toISOString()
        };
        await setDoc(userRef, newProfile);
        setProfile(newProfile);
        try {
          localStorage.setItem(`lingo_profile_${uid}`, JSON.stringify(newProfile));
        } catch {}
      }
    } catch (err) {
      console.warn("Could not load profile from Firestore, checking local backup:", err);
      let cached = null;
      try {
        const cachedStr = localStorage.getItem(`lingo_profile_${uid}`);
        if (cachedStr) cached = JSON.parse(cachedStr);
      } catch {}
      setProfile(cached ? { ...DEFAULT_PROFILE, ...cached } : { ...DEFAULT_PROFILE, displayName: name });
    } finally {
      pendingNameRef.current = null;
    }
  };

  const saveProfileData = async (updatedFields) => {
    const currentUid = user?.uid || auth?.currentUser?.uid;
    const nextData = { ...profile, ...updatedFields };

    setProfile(nextData);

    if (isFirebaseConfigured && db && currentUid) {
      try {
        // merge: true creates or updates the document
        await setDoc(doc(db, 'users', currentUid), updatedFields, { merge: true });
        try {
          localStorage.setItem(`lingo_profile_${currentUid}`, JSON.stringify(nextData));
        } catch {}
      } catch (err) {
        console.warn("Cloud save failed, caching locally:", err);
        try {
          localStorage.setItem(`lingo_profile_${currentUid}`, JSON.stringify(nextData));
        } catch {}
        throw err;
      }
    } else {
      try {
        const key = currentUid ? `lingo_profile_${currentUid}` : DEMO_PROFILE_KEY;
        localStorage.setItem(key, JSON.stringify(nextData));
      } catch (e) {
        console.warn("Local storage write error:", e);
      }
    }
  };

  const startDemoSession = (demoUser) => {
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoUser));
    const userProfileKey = `lingo_profile_${demoUser.uid}`;
    const savedProfile = localStorage.getItem(userProfileKey) || localStorage.getItem(DEMO_PROFILE_KEY);
    const initial = savedProfile
      ? JSON.parse(savedProfile)
      : { ...DEFAULT_PROFILE, displayName: demoUser.displayName, email: demoUser.email };
    setProfile(initial);
    setUser(demoUser);
    try {
      localStorage.setItem(userProfileKey, JSON.stringify(initial));
    } catch {}
  };

  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured || !auth) {
      startDemoSession({ uid: 'demo_google', displayName: 'Google Learner', email: 'learner@example.com' });
      return;
    }
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const loginWithEmail = async (email, password) => {
    if (!isFirebaseConfigured || !auth) {
      startDemoSession({ uid: 'demo_' + email, displayName: email.split('@')[0], email });
      return;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signupWithEmail = async (email, password, displayName) => {
    const name = displayName?.trim() || email.split('@')[0];
    if (!isFirebaseConfigured || !auth) {
      startDemoSession({ uid: 'demo_' + email, displayName: name, email });
      return;
    }
    pendingNameRef.current = name;
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });
      return cred;
    } catch (err) {
      pendingNameRef.current = null;
      throw err;
    }
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      await fbSignOut(auth);
    } else {
      localStorage.removeItem(DEMO_USER_KEY);
      setUser(null);
      setProfile(DEFAULT_PROFILE);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isAuthenticated: Boolean(user),
      isFirebaseConfigured,
      saveProfileData,
      loginWithGoogle,
      loginWithEmail,
      signupWithEmail,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
