'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
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
  signInAnonymously,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from '../lib/firebase';

const AuthContext = createContext(null);

const DEFAULT_PROFILE = {
  xp: 120,
  hearts: 5,
  streak: 3,
  level: 1,
  completedLessons: ['es-u1-l1'],
  currentLanguage: 'spanish',
  displayName: 'Lingo Explorer',
  photoURL: null,
  role: 'student'
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  // Initialize and listen to Auth
  useEffect(() => {
    // If Firebase Auth is configured and available
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
        if (fbUser) {
          setUser(fbUser);
          setIsGuest(fbUser.isAnonymous);
          await loadUserProfile(fbUser.uid, fbUser.displayName || 'Learner', fbUser.email);
        } else {
          // Check for local guest session
          loadLocalGuest();
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // Offline / Demo mode
      loadLocalGuest();
      setLoading(false);
    }
  }, []);

  const loadLocalGuest = () => {
    try {
      const saved = localStorage.getItem('lingo_profile');
      if (saved) {
        setProfile(JSON.parse(saved));
      } else {
        setProfile(DEFAULT_PROFILE);
      }
      const guestUser = {
        uid: 'guest_' + Math.random().toString(36).substring(2, 9),
        displayName: 'Guest Explorer',
        email: null,
        isAnonymous: true,
      };
      setUser(guestUser);
      setIsGuest(true);
    } catch {
      setProfile(DEFAULT_PROFILE);
    }
  };

  const loadUserProfile = async (uid, defaultName, email) => {
    if (!db) return;
    try {
      const userRef = doc(db, 'users', uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        setProfile(snap.data());
      } else {
        const newProfile = {
          ...DEFAULT_PROFILE,
          displayName: defaultName,
          email: email || null,
          createdAt: new Date().toISOString()
        };
        await setDoc(userRef, newProfile);
        setProfile(newProfile);
      }
    } catch (err) {
      console.warn("Could not fetch profile from Firestore, using local:", err);
      loadLocalGuest();
    }
  };

  const saveProfileData = async (updatedFields) => {
    const updated = { ...profile, ...updatedFields };
    setProfile(updated);

    // Save locally
    try {
      localStorage.setItem('lingo_profile', JSON.stringify(updated));
    } catch (e) {
      console.warn("Local storage write error:", e);
    }

    // Save to Firestore if connected
    if (isFirebaseConfigured && db && user?.uid && !user.uid.startsWith('guest_')) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, updatedFields);
      } catch (err) {
        console.warn("Firestore update error:", err);
      }
    }
  };

  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured || !auth) {
      // Simulate guest sign-in
      const demoUser = {
        uid: 'demo_google_' + Date.now(),
        displayName: 'Google Explorer',
        email: 'explorer@example.com'
      };
      setUser(demoUser);
      setIsGuest(false);
      return;
    }
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const loginWithEmail = async (email, password) => {
    if (!isFirebaseConfigured || !auth) {
      const demoUser = {
        uid: 'demo_' + Date.now(),
        displayName: email.split('@')[0],
        email: email
      };
      setUser(demoUser);
      setIsGuest(false);
      return;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signupWithEmail = async (email, password, displayName) => {
    if (!isFirebaseConfigured || !auth) {
      const demoUser = {
        uid: 'demo_' + Date.now(),
        displayName: displayName || email.split('@')[0],
        email: email
      };
      setUser(demoUser);
      setIsGuest(false);
      return;
    }
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (cred.user && db) {
      const userRef = doc(db, 'users', cred.user.uid);
      const newProfile = {
        ...DEFAULT_PROFILE,
        displayName: displayName || email.split('@')[0],
        email: email,
        createdAt: new Date().toISOString()
      };
      await setDoc(userRef, newProfile);
      setProfile(newProfile);
    }
    return cred;
  };

  const loginAsGuest = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        return await signInAnonymously(auth);
      } catch (err) {
        console.warn("Anonymous auth failed, falling back to local guest:", err);
      }
    }
    loadLocalGuest();
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth && !user?.uid?.startsWith('guest_')) {
      await fbSignOut(auth);
    }
    loadLocalGuest();
  };

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isGuest,
      isFirebaseConfigured,
      saveProfileData,
      loginWithGoogle,
      loginWithEmail,
      signupWithEmail,
      loginAsGuest,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
