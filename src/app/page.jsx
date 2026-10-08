'use client';

import React from 'react';
import Header from '../components/Header';
import LessonPath from '../components/LessonPath';
import FlashcardsView from '../components/FlashcardsView';
import CultureVault from '../components/CultureVault';
import LeaderboardView from '../components/LeaderboardView';
import QuizModal from '../components/QuizModal';
import HeartModal from '../components/HeartModal';
import AuthModal from '../components/AuthModal';
import { useGame } from '../context/GameContext';

export default function HomePage() {
  const { activeTab } = useGame();

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
      <AuthModal />
    </div>
  );
}
