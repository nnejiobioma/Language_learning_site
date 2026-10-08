'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { soundEngine } from '../lib/audio';
import confetti from 'canvas-confetti';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const { profile, saveProfileData } = useAuth();

  const [currentLanguage, setCurrentLanguage] = useState('spanish');
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
    if (profile?.currentLanguage) {
      setCurrentLanguage(profile.currentLanguage);
    }
  }, [profile?.currentLanguage]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.setEnabled(next);
  };

  const switchLanguage = (langId) => {
    setCurrentLanguage(langId);
    saveProfileData({ currentLanguage: langId });
  };

  const startLesson = (lesson) => {
    if (hearts <= 0) {
      setShowHeartModal(true);
      return;
    }
    setActiveLesson(lesson);
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

    saveProfileData({
      xp: xp + earnedXp,
      completedLessons: nextCompleted,
      level: Math.floor((xp + earnedXp) / 100) + 1
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
