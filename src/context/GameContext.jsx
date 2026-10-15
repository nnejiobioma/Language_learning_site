'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { soundEngine } from '../lib/audio';
import confetti from 'canvas-confetti';
import { getSavedLanguage, saveLanguagePreference } from '../lib/cookies';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const { profile, saveProfileData: saveToCloud } = useAuth();
  // Game progress saves happen in the background; log failures instead of throwing.
  const saveProfileData = (fields) =>
    saveToCloud(fields).catch((err) => console.warn('Progress save failed:', err));

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return typeof window !== 'undefined' ? getSavedLanguage('spanish') : 'spanish';
  });
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('learn'); // 'learn' | 'flashcards' | 'culture' | 'leaderboard'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showHeartModal, setShowHeartModal] = useState(false);
  const [combo, setCombo] = useState(0);

  // Sync state from profile
  const hearts = profile?.hearts ?? 5;
  const xp = profile?.xp ?? 0;
  const streak = profile?.streak ?? 1;
  const completedLessons = profile?.completedLessons ?? [];

  useEffect(() => {
    // Check URL query parameter first (e.g. /learn?lang=pidgin)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang) {
        const clean = urlLang.toLowerCase().trim();
        if (clean && clean !== currentLanguage) {
          setCurrentLanguage(clean);
          saveLanguagePreference(clean);
          saveProfileData({ currentLanguage: clean });
          return;
        }
      }
    }

    if (profile?.currentLanguage) {
      const saved = typeof window !== 'undefined' ? getSavedLanguage(null) : null;
      if (saved && saved !== profile.currentLanguage) {
        // User explicitly picked a language stored in cookie/localStorage
        setCurrentLanguage(saved);
        saveProfileData({ currentLanguage: saved });
      } else {
        setCurrentLanguage(profile.currentLanguage);
        saveLanguagePreference(profile.currentLanguage);
      }
    }
  }, [profile?.currentLanguage]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.setEnabled(next);
  };

  const switchLanguage = (langId) => {
    setCurrentLanguage(langId);
    saveLanguagePreference(langId); // 365-day persistent cookie
    saveProfileData({ currentLanguage: langId });
  };

  const startLesson = (lesson) => {
    if (hearts <= 0) {
      setShowHeartModal(true);
      return;
    }
    setActiveLesson({ ...lesson, _startedAt: Date.now() });
    setCombo(0);
  };

  const closeLesson = () => {
    setActiveLesson(null);
    setCombo(0);
  };

  const onAnswerCorrect = (xpBonus = 10) => {
    const newCombo = combo + 1;
    setCombo(newCombo);

    if (newCombo >= 3) {
      soundEngine.playStreak();
    } else {
      soundEngine.playSuccess();
    }

    const totalGain = xpBonus + (newCombo > 2 ? 5 : 0);
    saveProfileData({
      xp: xp + totalGain,
    });
    return totalGain;
  };

  const onAnswerWrong = () => {
    setCombo(0);
    soundEngine.playError();
    const nextHearts = Math.max(0, hearts - 1);
    saveProfileData({ hearts: nextHearts });
    if (nextHearts === 0) {
      setShowHeartModal(true);
    }
    return nextHearts;
  };

  const completeLesson = (lessonId, earnedXp = 20) => {
    soundEngine.playFanfare();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }

    const nextCompleted = completedLessons.includes(lessonId)
      ? completedLessons
      : [...completedLessons, lessonId];

    const nextStreak = (streak || 0) + 1;
    const nextXp = (xp || 0) + earnedXp;

    saveProfileData({
      xp: nextXp,
      streak: nextStreak,
      completedLessons: nextCompleted,
      level: Math.floor(nextXp / 100) + 1,
      lastActive: new Date().toISOString()
    });
  };

  const refillHearts = () => {
    soundEngine.playSuccess();
    saveProfileData({ hearts: 5 });
    setShowHeartModal(false);
  };

  return (
    <GameContext.Provider value={{
      currentLanguage,
      switchLanguage,
      activeLesson,
      startLesson,
      closeLesson,
      activeTab,
      setActiveTab,
      soundEnabled,
      toggleSound,
      hearts,
      xp,
      streak,
      combo,
      completedLessons,
      onAnswerCorrect,
      onAnswerWrong,
      completeLesson,
      refillHearts,
      showAuthModal,
      setShowAuthModal,
      showHeartModal,
      setShowHeartModal
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
