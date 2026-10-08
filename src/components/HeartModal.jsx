'use client';

import React from 'react';
import { useGame } from '../context/GameContext';
import { Heart, X, Sparkles, Zap, ShieldAlert } from 'lucide-react';

export default function HeartModal() {
  const { showHeartModal, setShowHeartModal, hearts, refillHearts, currentLanguage } = useGame();

  if (!showHeartModal) return null;

  return (
    <div className="heart-modal-overlay">
      <div className="heart-modal-card">
        <button 
          className="heart-close-btn"
          onClick={() => setShowHeartModal(false)}
          aria-label="Close hearts dialog"
        >
          <X size={20} />
        </button>

        <div className="heart-graphic-area">
          <div className="floating-heart-icon">
            <Heart size={64} className="giant-heart pulsing" fill="#ef4444" color="#ef4444" />
          </div>
          <span className="current-hearts-count">{hearts} / 5 Hearts Left</span>
        </div>

        <h3 className="heart-modal-title">
          {hearts === 0 ? "You're Out of Hearts!" : "Need More Hearts?"}
        </h3>

        <p className="heart-modal-desc">
          Hearts protect you when answering questions during lessons. Making mistakes uses up hearts, but learning from them makes you stronger!
        </p>

        <div className="refill-action-container">
          <button 
            className="full-refill-btn"
            onClick={refillHearts}
          >
            <Zap size={20} />
            <span>Refill All 5 Hearts (Free)</span>
          </button>
        </div>

        <div className="heart-tip-box">
          <Sparkles size={16} className="sparkle-icon" />
          <span>Pro Tip: Review flashcards in the Flashcard tab anytime without using any hearts!</span>
        </div>
      </div>
    </div>
  );
}
