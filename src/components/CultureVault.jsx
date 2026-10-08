'use client';

import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { LANGUAGES } from '../data/languages';
import { soundEngine } from '../lib/audio';
import { 
  Sparkles, 
  Volume2, 
  Search, 
  BookMarked, 
  Compass, 
  Smile, 
  HeartHandshake,
  Lightbulb
} from 'lucide-react';

export default function CultureVault() {
  const { currentLanguage } = useGame();
  const langData = LANGUAGES[currentLanguage] || LANGUAGES.pidgin;
  const vault = langData.cultureVault;

  const [searchQuery, setSearchQuery] = useState('');

  const filteredSlangs = vault.slangs.filter(s => 
    s.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.example.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSpeak = (text) => {
    soundEngine.speak(text, currentLanguage);
  };

  return (
    <div className="culture-vault-container">
      {/* Vault Hero Banner */}
      <div className="vault-hero-card">
        <div className="vault-hero-left">
          <div className="vault-pill-badge">
            <Compass size={16} />
            <span>Cultural Wisdom & Street Etiquette</span>
          </div>
          <h2 className="vault-title">The {langData.name} Culture Vault</h2>
          <p className="vault-desc">
            Language is the heartbeat of culture. Discover the proverbs, everyday slangs, and traditional customs that bring {langData.nativeName} to life.
          </p>
        </div>

        <div className="proverb-spotlight-box">
          <div className="proverb-tag">
            <Sparkles size={16} className="sparkle-gold" />
            <span>Proverb of the Day</span>
          </div>
          <h3 className="proverb-highlight-text">"{vault.proverbOfDay.proverb}"</h3>
          <p className="proverb-trans">
            <strong>Translation:</strong> {vault.proverbOfDay.translation}
          </p>
          <p className="proverb-context">
            <strong>Cultural Context:</strong> {vault.proverbOfDay.context}
          </p>
          <button 
            className="speak-proverb-btn"
            onClick={() => handleSpeak(vault.proverbOfDay.proverb)}
          >
            <Volume2 size={18} />
            <span>Hear Native Tone</span>
          </button>
        </div>
      </div>

      {/* Cultural Etiquette Tips Section */}
      <section className="culture-tips-section">
        <div className="section-title-row">
          <HeartHandshake size={22} className="accent-icon" />
          <h3 className="section-title">Cultural Etiquette & Social Codes</h3>
        </div>

        <div className="tips-grid">
          {vault.cultureTips.map((tip, idx) => (
            <div key={idx} className="tip-card">
              <div className="tip-header">
                <span className="tip-number">0{idx + 1}</span>
                <Lightbulb size={20} className="tip-bulb" />
              </div>
              <h4 className="tip-title">{tip.title}</h4>
              <p className="tip-desc">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slang & Idiom Lexicon */}
      <section className="slang-lexicon-section">
        <div className="lexicon-header-row">
          <div className="lexicon-title-wrap">
            <Smile size={22} className="accent-icon" />
            <h3 className="section-title">Street Slang & Expressive Phrases</h3>
          </div>

          {/* Search box */}
          <div className="lexicon-search-bar">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder={`Search ${langData.name} slangs...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="slang-cards-grid">
          {filteredSlangs.length === 0 ? (
            <div className="no-results-box">
              <p>No slangs matching "{searchQuery}". Try another keyword!</p>
            </div>
          ) : (
            filteredSlangs.map((slang, idx) => (
              <div key={idx} className="slang-card">
                <div className="slang-card-top">
                  <div className="term-group">
                    <span className="slang-term">{slang.term}</span>
                    <button 
                      className="mini-speak-btn"
                      onClick={() => handleSpeak(slang.term)}
                      aria-label={`Pronounce ${slang.term}`}
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                </div>

                <p className="slang-meaning">{slang.meaning}</p>

                <div className="slang-example-bubble">
                  <span className="bubble-label">Usage:</span>
                  <p className="bubble-example">"{slang.example}"</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
