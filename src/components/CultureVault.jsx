'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { LANGUAGES } from '../data/languages';
import { useAdminContent } from '../context/AdminContentContext';
import { soundEngine } from '../lib/audio';
import { 
  Sparkles, 
  Volume2, 
  Search, 
  BookMarked, 
  Compass, 
  Smile, 
  HeartHandshake,
  Lightbulb,
  ChevronDown,
  Layers,
  Utensils,
  Flame,
  Coffee,
  Building,
  Check,
  FolderOpen,
  Edit3
} from 'lucide-react';

// Helper icon selector based on subsection name
function getSubSectionIcon(categoryName) {
  const lower = categoryName.toLowerCase();
  if (lower.includes('dining') || lower.includes('table') || lower.includes('food')) {
    return Utensils;
  }
  if (lower.includes('café') || lower.includes('hospitality') || lower.includes('coffee')) {
    return Coffee;
  }
  if (lower.includes('sauna') || lower.includes('sisu')) {
    return Flame;
  }
  if (lower.includes('city') || lower.includes('work') || lower.includes('society') || lower.includes('equality')) {
    return Building;
  }
  if (lower.includes('conversation') || lower.includes('mindset') || lower.includes('intellect')) {
    return Lightbulb;
  }
  if (lower.includes('nature') || lower.includes('festival') || lower.includes('lifestyle')) {
    return Compass;
  }
  if (lower.includes('slang') || lower.includes('verlan') || lower.includes('argot')) {
    return Smile;
  }
  if (lower.includes('idiom') || lower.includes('metaphor')) {
    return Sparkles;
  }
  if (lower.includes('salutation') || lower.includes('greeting') || lower.includes('decorum')) {
    return HeartHandshake;
  }
  return BookMarked;
}

export default function CultureVault() {
  const { currentLanguage } = useGame();
  const { getLanguageData, isAdmin, openQuickEdit } = useAdminContent();
  const langData = (getLanguageData ? getLanguageData(currentLanguage) : null) || LANGUAGES[currentLanguage] || LANGUAGES.pidgin;
  const vault = langData.cultureVault;

  const [searchQuery, setSearchQuery] = useState('');

  // Group culture tips by category
  const tipCategories = useMemo(() => {
    const groups = {};
    (vault.cultureTips || []).forEach((tip, idx) => {
      const cat = tip.category || 'General Cultural Etiquette';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ ...tip, originalIndex: idx });
    });
    return groups;
  }, [vault.cultureTips]);

  // Filter slangs by search query
  const filteredSlangs = useMemo(() => {
    return (vault.slangs || []).filter(s => 
      s.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.example.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.category && s.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [vault.slangs, searchQuery]);

  // Group filtered slangs by category
  const slangCategories = useMemo(() => {
    const groups = {};
    filteredSlangs.forEach((slang, idx) => {
      const cat = slang.category || 'General Street Slang & Phrases';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ ...slang, originalIndex: idx });
    });
    return groups;
  }, [filteredSlangs]);

  // Open categories tracking (all open by default for rich exploration)
  const [openTipCategories, setOpenTipCategories] = useState(() => new Set(Object.keys(tipCategories)));
  const [openSlangCategories, setOpenSlangCategories] = useState(() => new Set(Object.keys(slangCategories)));

  // Sync open categories when language changes
  useEffect(() => {
    setOpenTipCategories(new Set(Object.keys(tipCategories)));
    setOpenSlangCategories(new Set(Object.keys(slangCategories)));
  }, [currentLanguage]);

  // If user types a search query, ensure all categories with matching results are expanded
  useEffect(() => {
    if (searchQuery.trim()) {
      setOpenSlangCategories(new Set(Object.keys(slangCategories)));
    }
  }, [searchQuery, slangCategories]);

  const toggleTipCategory = (cat) => {
    setOpenTipCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const toggleAllTips = () => {
    const allCats = Object.keys(tipCategories);
    if (openTipCategories.size === allCats.length) {
      setOpenTipCategories(new Set());
    } else {
      setOpenTipCategories(new Set(allCats));
    }
  };

  const toggleSlangCategory = (cat) => {
    setOpenSlangCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const toggleAllSlangs = () => {
    const allCats = Object.keys(slangCategories);
    if (openSlangCategories.size === allCats.length) {
      setOpenSlangCategories(new Set());
    } else {
      setOpenSlangCategories(new Set(allCats));
    }
  };

  const handleSpeak = (text) => {
    soundEngine.speak(text, currentLanguage);
  };

  const totalTipsCount = (vault.cultureTips || []).length;
  const totalSlangsCount = (vault.slangs || []).length;
  const allTipsOpen = openTipCategories.size === Object.keys(tipCategories).length;
  const allSlangsOpen = openSlangCategories.size === Object.keys(slangCategories).length;

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
            Language is the heartbeat of culture. Explore {totalTipsCount} cultural etiquette social codes and {totalSlangsCount} street slangs, neatly grouped into interactive subsections. Tap any subsection to drop it down or collapse!
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

          {isAdmin && (
            <button
              className="admin-inline-btn"
              style={{ marginTop: 8 }}
              onClick={() => openQuickEdit({ ...vault.proverbOfDay, id: 'proverbOfDay' }, 'culture', { langId: currentLanguage, section: 'proverbOfDay' })}
              title="Admin: Edit Proverb of the Day"
            >
              <Edit3 size={13} />
              <span>Edit Proverb</span>
            </button>
          )}
        </div>
      </div>

      {/* Cultural Etiquette Tips Section */}
      <section className="culture-tips-section">
        <div className="section-title-row">
          <div className="section-title-left">
            <HeartHandshake size={24} className="accent-icon" />
            <h3 className="section-title">Cultural Etiquette & Social Codes</h3>
            <span className="section-count-badge">{totalTipsCount} Social Codes</span>
          </div>
          
          <button 
            className="vault-toggle-all-btn"
            onClick={toggleAllTips}
            type="button"
            aria-label={allTipsOpen ? "Collapse all etiquette subsections" : "Expand all etiquette subsections"}
          >
            <Layers size={16} />
            <span>{allTipsOpen ? "Collapse All Subsections" : "Expand All Subsections"}</span>
          </button>
        </div>

        {/* Grouped Subsections with Dropdowns */}
        <div className="vault-subsections-container">
          {Object.entries(tipCategories).map(([category, tips]) => {
            const isOpen = openTipCategories.has(category);
            const SubIcon = getSubSectionIcon(category);

            return (
              <div key={category} className="vault-subsection-block">
                <div 
                  className={`vault-sub-header ${isOpen ? 'is-open' : 'is-collapsed'}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleTipCategory(category)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleTipCategory(category);
                    }
                  }}
                >
                  <div className="vault-sub-header-left">
                    <div className="vault-sub-icon-badge">
                      <SubIcon size={19} />
                    </div>
                    <div className="vault-sub-header-text">
                      <h4 className="vault-sub-title">{category}</h4>
                      <span className="vault-sub-meta">{tips.length} Cultural Guidelines</span>
                    </div>
                  </div>

                  <div className="vault-sub-header-right">
                    <span className="vault-sub-pill">
                      {tips.length} {tips.length === 1 ? 'Rule' : 'Codes'}
                    </span>
                    <div className={`vault-sub-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>

                {/* Sub-section Content (Grid of Tip Cards) */}
                {isOpen && (
                  <div className="tips-grid vault-sub-content">
                    {tips.map((tip) => (
                      <div key={tip.originalIndex} className="tip-card">
                        <div className="tip-header">
                          <span className="tip-number">{(tip.originalIndex + 1).toString().padStart(2, '0')}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            {isAdmin && (
                              <button
                                className="admin-inline-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openQuickEdit({ ...tip, id: tip.title || `tip-${tip.originalIndex}` }, 'culture', { langId: currentLanguage, type: 'tip' });
                                }}
                                title="Admin: Edit this cultural guideline"
                              >
                                <Edit3 size={11} />
                                <span>Edit</span>
                              </button>
                            )}
                            <Lightbulb size={20} className="tip-bulb" />
                          </div>
                        </div>
                        <h5 className="tip-title">{tip.title}</h5>
                        <p className="tip-desc">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Slang & Idiom Lexicon Section */}
      <section className="slang-lexicon-section">
        <div className="lexicon-header-row">
          <div className="lexicon-title-wrap">
            <Smile size={24} className="accent-icon" />
            <h3 className="section-title">Street Slang & Expressive Phrases</h3>
            <span className="section-count-badge">{totalSlangsCount} Expressions</span>
          </div>

          <div className="lexicon-controls-wrap">
            {/* Search box */}
            <div className="lexicon-search-bar">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder={`Search ${langData.name} slangs & idioms...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <button 
              className="vault-toggle-all-btn"
              onClick={toggleAllSlangs}
              type="button"
              aria-label={allSlangsOpen ? "Collapse all slang subsections" : "Expand all slang subsections"}
            >
              <Layers size={16} />
              <span>{allSlangsOpen ? "Collapse All Subsections" : "Expand All Subsections"}</span>
            </button>
          </div>
        </div>

        {/* Grouped Slang Subsections with Dropdowns */}
        <div className="vault-subsections-container">
          {Object.keys(slangCategories).length === 0 ? (
            <div className="no-results-box">
              <p>No slangs matching "{searchQuery}". Try another keyword or clear search!</p>
            </div>
          ) : (
            Object.entries(slangCategories).map(([category, slangs]) => {
              const isOpen = openSlangCategories.has(category);
              const SubIcon = getSubSectionIcon(category);

              return (
                <div key={category} className="vault-subsection-block">
                  <div 
                    className={`vault-sub-header ${isOpen ? 'is-open' : 'is-collapsed'}`}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => toggleSlangCategory(category)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleSlangCategory(category);
                      }
                    }}
                  >
                    <div className="vault-sub-header-left">
                      <div className="vault-sub-icon-badge slang-badge-color">
                        <SubIcon size={19} />
                      </div>
                      <div className="vault-sub-header-text">
                        <h4 className="vault-sub-title">{category}</h4>
                        <span className="vault-sub-meta">{slangs.length} Colloquial Expressions</span>
                      </div>
                    </div>

                    <div className="vault-sub-header-right">
                      <span className="vault-sub-pill">
                        {slangs.length} {slangs.length === 1 ? 'Phrase' : 'Phrases'}
                      </span>
                      <div className={`vault-sub-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Sub-section Content (Grid of Slang Cards) */}
                  {isOpen && (
                    <div className="slang-cards-grid vault-sub-content">
                      {slangs.map((slang) => (
                        <div key={slang.originalIndex} className="slang-card">
                          <div className="slang-card-top">
                            <div className="term-group">
                              <span className="slang-term">{slang.term}</span>
                              <button 
                                className="mini-speak-btn"
                                onClick={() => handleSpeak(slang.term)}
                                aria-label={`Pronounce ${slang.term}`}
                                title={`Pronounce ${slang.term}`}
                              >
                                <Volume2 size={16} />
                              </button>
                            </div>
                            {isAdmin && (
                              <button
                                className="admin-inline-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openQuickEdit({ ...slang, id: slang.term || `slang-${slang.originalIndex}` }, 'culture', { langId: currentLanguage, type: 'slang' });
                                }}
                                title="Admin: Edit this slang phrase"
                              >
                                <Edit3 size={11} />
                                <span>Edit</span>
                              </button>
                            )}
                          </div>

                          <p className="slang-meaning">{slang.meaning}</p>

                          <div className="slang-example-bubble">
                            <span className="bubble-label">Usage:</span>
                            <p className="bubble-example">"{slang.example}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
