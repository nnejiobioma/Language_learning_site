'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import LessonPath from '../../components/LessonPath';
import FlashcardsView from '../../components/FlashcardsView';
import CultureVault from '../../components/CultureVault';
import CBTExamView from '../../components/CBTExamView';
import LeaderboardView from '../../components/LeaderboardView';
import QuizModal from '../../components/QuizModal';
import HeartModal from '../../components/HeartModal';
import SubscribeButton from '../../components/SubscribeButton';
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
        {activeTab === 'cbt' && <CBTExamView />}
        {activeTab === 'leaderboard' && <LeaderboardView />}
      </main>

      <footer className="app-main-footer">
        <div className="app-footer-container">
          <p className="app-footer-copy">© {new Date().getFullYear()} FiksLingo · Master 12 World Languages.</p>
          <div className="app-footer-links">
            <SubscribeButton
              source="app_footer"
              label="Weekly Newsletter"
              icon="bell"
              className="app-footer-sub-btn"
              buttonId="learn-footer-subscribe-btn"
            />
            <Link href="/terms" target="_blank" rel="noopener noreferrer" className="app-footer-link">
              Terms of Use
            </Link>
            <Link href="/profile" className="app-footer-link">
              Profile & Settings
            </Link>
          </div>
        </div>
      </footer>

      <QuizModal />
      <HeartModal />
    </div>
  );
}
