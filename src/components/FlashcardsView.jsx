'use client';

import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { LANGUAGES } from '../data/languages';
import { soundEngine } from '../lib/audio';
import { 
  Volume2, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Shuffle, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function FlashcardsView() {
  const { currentLanguage } = useGame();
  const langData = LANGUAGES[currentLanguage] || LANGUAGES.pidgin;
  const cards = langData.flashcards || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [masteredIds, setMasteredIds] = useState([]);

  // Extract distinct categories
  const categories = ['All', ...new Set(cards.map(c => c.category))];

  const filteredCards = selectedCategory === 'All' 
    ? cards 
    : cards.filter(c => c.category === selectedCategory);

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleSpeak = (e, text) => {
    e.stopPropagation();
    soundEngine.speak(text, currentLanguage);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const toggleMastered = (e, cardId) => {
    e.stopPropagation();
    if (masteredIds.includes(cardId)) {
      setMasteredIds(masteredIds.filter(id => id !== cardId));
    } else {
      soundEngine.playSuccess();
      setMasteredIds([...masteredIds, cardId]);
    }
  };

  if (!currentCard) return null;

  const isCurrentMastered = masteredIds.includes(currentCard.id);

  return (
    <div className="flashcards-container">
      {/* View Header */}
      <div className="flashcards-header">
        <div className="header-meta">
          <div className="category-pill-active">
            <BookOpen size={16} />
            <span>Interactive SRS Flashcard Deck</span>
          </div>
          <h2 className="view-title">Master Essential {langData.name} Vocabulary</h2>
          <p className="view-subtitle">
            Tap the card to flip between native phrases and English definitions. Listen to authentic pronunciations!
          </p>
        </div>

        {/* Mastered Counter */}
        <div className="mastery-stat-card">
          <span className="mastery-label">Deck Mastery</span>
          <div className="mastery-progress-row">
            <span className="mastery-score">{masteredIds.length} / {cards.length}</span>
            <div className="mastery-bar-track">
              <div 
                className="mastery-bar-fill" 
                style={{ width: `${(masteredIds.length / cards.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="category-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive 3D Card Stage */}
      <div className="card-stage-wrapper">
        <div 
          className={`flashcard-3d-scene ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
          role="button"
          tabIndex={0}
          aria-label="Click to flip flashcard"
        >
          {/* Front Face (Native) */}
          <div className="flashcard-face flashcard-front">
            <div className="card-top-tags">
              <span className="card-cat-tag">{currentCard.category}</span>
              <button
                className={`mastery-star-btn ${isCurrentMastered ? 'mastered' : ''}`}
                onClick={(e) => toggleMastered(e, currentCard.id)}
                title={isCurrentMastered ? "Marked as mastered" : "Mark as mastered"}
              >
                <Check size={18} />
                <span>{isCurrentMastered ? 'Mastered' : 'Mark Learned'}</span>
              </button>
            </div>

            <div className="card-main-word-area">
              <span className="card-word-native">{currentCard.front}</span>
              <span className="card-phonetic">Phonetics: /{currentCard.phonetic}/</span>
              
              <button 
                className="card-audio-speaker-btn"
                onClick={(e) => handleSpeak(e, currentCard.front)}
                title="Listen to pronunciation"
              >
                <Volume2 size={24} />
                <span>Play Sound</span>
              </button>
            </div>

            <div className="card-bottom-hint">
              <RotateCw size={15} />
              <span>Tap anywhere to flip card & view translation</span>
            </div>
          </div>

          {/* Back Face (English Translation & Example) */}
          <div className="flashcard-face flashcard-back">
            <div className="card-top-tags">
              <span className="card-cat-tag">Meaning & Context</span>
              <span className="flip-back-tag">Tap to flip</span>
            </div>

            <div className="card-main-word-area">
              <span className="card-translation-text">{currentCard.back}</span>
              {currentCard.example && (
                <div className="card-example-box">
                  <span className="example-label">Example in sentence:</span>
                  <p className="example-quote">"{currentCard.example}"</p>
                </div>
              )}
            </div>

            <div className="card-bottom-hint">
              <RotateCw size={15} />
              <span>Tap to return to front</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Controls & Navigation */}
      <div className="flashcards-controls-row">
        <button 
          className="card-nav-arrow-btn"
          onClick={handlePrev}
          aria-label="Previous card"
        >
          <ChevronLeft size={22} />
          <span>Previous</span>
        </button>

        <div className="card-counter-indicator">
          <span>Card {currentIndex + 1} of {filteredCards.length}</span>
        </div>

        <button 
          className="shuffle-btn"
          onClick={handleShuffle}
          title="Random card"
        >
          <Shuffle size={18} />
          <span>Shuffle</span>
        </button>

        <button 
          className="card-nav-arrow-btn next"
          onClick={handleNext}
          aria-label="Next card"
        >
          <span>Next</span>
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
