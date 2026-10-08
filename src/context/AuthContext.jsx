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
  updateDoc
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
      const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
        // Guest (anonymous) sessions are not allowed.
        if (fbUser && fbUser.isAnonymous) {
          await fbSignOut(auth);
          return;
        }
        if (fbUser) {
          setLoading(true);
          setUser(fbUser);
          await loadUserProfile(fbUser.uid, fbUser.displayName, fbUser.email);
        } else {
          setUser(null);
          setProfile(DEFAULT_PROFILE);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    }

    // Local demo mode (Firebase not configured): the account lives in this browser only.
    try {
      const savedUser = localStorage.getItem(DEMO_USER_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        const savedProfile = localStorage.getItem(DEMO_PROFILE_KEY);
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
        setProfile({ ...DEFAULT_PROFILE, ...snap.data() });
      } else {
        const newProfile = {
          ...DEFAULT_PROFILE,
          displayName: name,
          email: email || null,
          createdAt: new Date().toISOString()
        };
        await setDoc(userRef, newProfile);
        setProfile(newProfile);
      }
    } catch (err) {
      console.warn("Could not load profile from Firestore:", err);
      setProfile({ ...DEFAULT_PROFILE, displayName: name });
    } finally {
      pendingNameRef.current = null;
    }
  };

  const saveProfileData = async (updatedFields) => {
    const updated = { ...profile, ...updatedFields };
    setProfile(updated);

    if (isFirebaseConfigured && db && user?.uid) {
      try {
        await updateDoc(doc(db, 'users', user.uid), updatedFields);
      } catch (err) {
        console.warn("Firestore update error:", err);
      }
    } else {
      try {
        localStorage.setItem(DEMO_PROFILE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn("Local storage write error:", e);
      }
    }
  };

  const startDemoSession = (demoUser) => {
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoUser));
    const savedProfile = localStorage.getItem(DEMO_PROFILE_KEY);
    setProfile(
      savedProfile
        ? JSON.parse(savedProfile)
        : { ...DEFAULT_PROFILE, displayName: demoUser.displayName, email: demoUser.email }
    );
    setUser(demoUser);
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
