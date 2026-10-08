'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import LessonPath from '../../components/LessonPath';
import FlashcardsView from '../../components/FlashcardsView';
import CultureVault from '../../components/CultureVault';
import LeaderboardView from '../../components/LeaderboardView';
import QuizModal from '../../components/QuizModal';
import HeartModal from '../../components/HeartModal';
import { useGame } from '../../context/GameContext';
import { useAuth } from '../../context/AuthContext';

export default function LearnPage() {
  const router = useRouter();
  const { activeTab } = useGame();
  const { user, loading } = useAuth();

  // Every learner must have an account: send visitors without one to sign up.
  useEffect(() => {
    if (!loading && !user) {
      router.replace('/signup');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="app-shell" aria-busy="true">
        <p className="auth-gate-message">Loading your lessons…</p>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="main-content-area" id="main-content">
        {activeTab === 'learn' && <LessonPath />}
        {activeTab === 'flashcards' && <FlashcardsView />}
        {activeTab === 'culture' && <CultureVault />}
        {activeTab === 'leaderboard' && <LeaderboardView />}
      </main>

      <QuizModal />
      <HeartModal />
    </div>
  );
}
