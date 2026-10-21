'use client';

import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { LANGUAGES } from '../data/languages';
import { useAdminContent } from '../context/AdminContentContext';
import InlineEditableText from './InlineEditableText';
import { 
  Check, 
  Lock, 
  Play, 
  Sparkles, 
  BookOpen, 
  Utensils, 
  ShoppingBag, 
  Sun, 
  Award,
  ChevronRight,
  ChevronDown,
  Flame,
  Volume2,
  Shield,
  Compass,
  Smile,
  GraduationCap,
  Edit2
} from 'lucide-react';
import { soundEngine } from '../lib/audio';

// Map icon strings to Lucide components
const iconMap = {
  HandMetal: Sparkles,
  Utensils: Utensils,
  ShoppingBag: ShoppingBag,
  Sun: Sun,
  BookOpen: BookOpen,
  Award: Award,
  Flame: Flame,
  Shield: Shield,
  Compass: Compass,
  Smile: Smile,
  GraduationCap: GraduationCap
};

export default function LessonPath() {
  const { 
    currentLanguage, 
    startLesson, 
    completedLessons, 
    streak, 
    xp,
    setActiveTab 
  } = useGame();

  const { 
    getLanguageData, 
    isAdmin, 
    adminEditMode, 
    openQuickEdit, 
    updateUnit, 
    updateLesson 
  } = useAdminContent();
  const langData = (getLanguageData ? getLanguageData(currentLanguage) : null) || LANGUAGES[currentLanguage] || LANGUAGES.pidgin;

  const getUnitKey = (u, idx) => u.id || u.unitId || `unit-${idx}`;

  // Track which units are open/expanded (all open by default)
  const [openUnitIds, setOpenUnitIds] = useState(() => new Set((langData.units || []).map(getUnitKey)));

  // Sync open units when language changes
  useEffect(() => {
    setOpenUnitIds(new Set((langData.units || []).map(getUnitKey)));
  }, [currentLanguage, langData.units]);

  const toggleUnit = (unitId) => {
    setOpenUnitIds(prev => {
      const next = new Set(prev);
      if (next.has(unitId)) {
        next.delete(unitId);
      } else {
        next.add(unitId);
      }
      return next;
    });
  };

  const toggleAllUnits = () => {
    if (openUnitIds.size > 0) {
      setOpenUnitIds(new Set());
    } else {
      setOpenUnitIds(new Set((langData.units || []).map(getUnitKey)));
    }
  };

  const handleSpeak = (text) => {
    soundEngine.speak(text, currentLanguage);
  };

  return (
    <div className="curriculum-container">
      {/* Hero Language Banner */}
      <section className="course-hero-banner" style={{ '--accent': langData.accentColor }}>
        <div className="hero-content">
          <div className="hero-badge-container">
            <img 
              src={langData.badge} 
              alt={`${langData.name} badge`} 
              className="course-emblem-img"
            />
          </div>

          <div className="hero-text-meta">
            <div className="hero-badge-pill">
              <span className="pill-flag">{langData.flag}</span>
              <span>{langData.nativeName}</span>
            </div>
            <h1 className="hero-title">{langData.name} Learning Path</h1>
            <p className="hero-motto">{langData.motto}</p>
            
            <div className="hero-audio-greeting" onClick={() => handleSpeak(langData.greeting)}>
              <button className="speak-bubble-btn" aria-label="Listen to greeting">
                <Volume2 size={18} />
              </button>
              <span className="greeting-label">Native greeting:</span>
              <strong className="greeting-text">"{langData.greeting}"</strong>
              <span className="listen-hint">(Click to hear)</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="hero-summary-chips">
          <div className="summary-chip">
            <span className="chip-label">Units Available</span>
            <span className="chip-val">{langData.units.length} Units</span>
          </div>
          <div className="summary-chip">
            <span className="chip-label">Total Lessons</span>
            <span className="chip-val">
              {langData.units.reduce((acc, u) => acc + u.lessons.length, 0)} Lessons
            </span>
          </div>
          <div className="summary-chip">
            <span className="chip-label">Completed</span>
            <span className="chip-val">
              {completedLessons.filter(id => id.startsWith(langData.id.slice(0, 2) + '-') || id.startsWith(currentLanguage.slice(0, 2))).length} Completed
            </span>
          </div>
        </div>
      </section>

      {/* Main Roadmap Area with Units */}
      <div className="curriculum-layout">
        {/* Left / Center: Units and Lessons Path */}
        <div className="units-roadmap-flow">
          {/* Quick Collapse / Expand All Control */}
          <div className="roadmap-toolbar">
            <button 
              className="roadmap-toggle-all-btn"
              onClick={toggleAllUnits}
              aria-label={openUnitIds.size > 0 ? "Collapse all units" : "Expand all units"}
            >
              <ChevronDown 
                size={14} 
                style={{ 
                  transform: openUnitIds.size === 0 ? 'rotate(-90deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.2s ease' 
                }} 
              />
              <span>{openUnitIds.size > 0 ? 'Collapse all units' : 'Expand all units'}</span>
            </button>
          </div>

          {langData.units.map((unit, unitIdx) => {
            const unitKey = getUnitKey(unit, unitIdx);
            const UnitIcon = iconMap[unit.icon] || BookOpen;
            const isOpen = openUnitIds.has(unitKey);
            const completedInUnit = unit.lessons.filter(l => completedLessons.includes(l.id)).length;
            const isUnitComplete = completedInUnit === unit.lessons.length && unit.lessons.length > 0;

            return (
              <div key={unitKey} className="unit-card-wrapper">
                {/* Collapsible Unit Header */}
                <div 
                  className={`unit-header-box ${isOpen ? 'is-open' : 'is-collapsed'}`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggleUnit(unitKey)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleUnit(unitKey);
                    }
                  }}
                  style={{ 
                    borderLeftColor: unit.color 
                  }}
                >
                  <div className="unit-icon-badge" style={{ backgroundColor: unit.color }}>
                    <UnitIcon size={22} color="#ffffff" />
                  </div>
                  <div className="unit-header-text">
                    <span className="unit-eyebrow">UNIT {unitIdx + 1}</span>
                    <InlineEditableText
                      value={unit.title}
                      tagName="h2"
                      className="unit-heading"
                      fieldLabel="Unit Title"
                      onSave={(newVal) => updateUnit(unit.id, { title: newVal })}
                    />
                    <InlineEditableText
                      value={unit.subtitle}
                      tagName="p"
                      className="unit-desc"
                      multiline={true}
                      fieldLabel="Unit Subtitle"
                      onSave={(newVal) => updateUnit(unit.id, { subtitle: newVal })}
                    />
                  </div>

                  <div className="unit-header-right">
                    {isAdmin && adminEditMode && (
                      <button
                        className="admin-inline-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openQuickEdit(unit, 'unit', { unitId: unit.id, langId: currentLanguage });
                        }}
                        title="Edit Unit details"
                      >
                        <Edit2 size={13} />
                        <span>Edit Unit</span>
                      </button>
                    )}
                    <span className={`unit-progress-pill ${isUnitComplete ? 'completed' : ''}`}>
                      {isUnitComplete ? '✓ Completed' : `${completedInUnit}/${unit.lessons.length} Lessons`}
                    </span>
                    <div className={`unit-chevron-btn ${isOpen ? 'open' : ''}`} aria-hidden="true">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>

                {/* Lesson Nodes Tree (visible only when unit is dropped down) */}
                {isOpen && (
                  <div className="lesson-nodes-grid">
                    {unit.lessons.map((lesson, lessonIdx) => {
                      const isCompleted = completedLessons.includes(lesson.id);
                      const isReview = lesson.isReview || lesson.id.includes('review') || lesson.title.toLowerCase().includes('review');
                      // Determine if lesson is unlocked:
                      // First lesson of Unit 1 is always unlocked.
                      // Subsequent lessons unlocked if previous lesson is completed or if already completed.
                      const isFirstEver = unitIdx === 0 && lessonIdx === 0;
                      let isUnlocked = isFirstEver || isCompleted;

                      if (!isUnlocked) {
                        // Check previous lesson
                        if (lessonIdx > 0) {
                          const prevLesson = unit.lessons[lessonIdx - 1];
                          isUnlocked = completedLessons.includes(prevLesson.id);
                        } else if (unitIdx > 0) {
                          const prevUnit = langData.units[unitIdx - 1];
                          const lastOfPrev = prevUnit.lessons[prevUnit.lessons.length - 1];
                          isUnlocked = completedLessons.includes(lastOfPrev.id);
                        }
                      }

                      return (
                        <div 
                          key={lesson.id} 
                          className={`lesson-node-card ${isCompleted ? 'completed' : ''} ${isUnlocked ? 'unlocked' : 'locked'} ${isReview ? 'review-checkpoint-card' : ''}`}
                        >
                          <div className="lesson-node-inner">
                            <button
                              className={`node-circle-btn ${isCompleted ? 'completed' : ''} ${isUnlocked ? 'active-pulse' : 'locked'} ${isReview ? 'review-circle-btn' : ''}`}
                              onClick={() => isUnlocked && startLesson(lesson)}
                              disabled={!isUnlocked}
                              aria-label={`Start ${lesson.title}`}
                              id={`lesson-node-${lesson.id}`}
                            >
                              {isCompleted ? (
                                <Check size={26} strokeWidth={3} className="node-icon-check" />
                              ) : isReview ? (
                                <Award size={26} className="node-icon-award" />
                              ) : isUnlocked ? (
                                <Play size={24} fill="currentColor" className="node-icon-play" />
                              ) : (
                                <Lock size={20} className="node-icon-lock" />
                              )}
                            </button>

                            <div className="lesson-node-meta">
                              {isReview ? (
                                <span className="lesson-step-tag review-checkpoint-tag">
                                  <Award size={13} /> Unit {unitIdx + 1} Checkpoint Review
                                </span>
                              ) : (
                                <span className="lesson-step-tag">Lesson {lessonIdx + 1}</span>
                              )}
                              <InlineEditableText
                                value={lesson.title}
                                tagName="h3"
                                className="lesson-node-title"
                                fieldLabel="Lesson Title"
                                onSave={(newVal) => updateLesson(lesson.id, { title: newVal })}
                              />
                              <InlineEditableText
                                value={lesson.description}
                                tagName="p"
                                className="lesson-node-desc"
                                multiline={true}
                                fieldLabel="Lesson Description"
                                onSave={(newVal) => updateLesson(lesson.id, { description: newVal })}
                              />
                              
                              <div className="lesson-action-row">
                                <span className={`lesson-xp-tag ${isReview ? 'review-xp-tag' : ''}`}>
                                  +{lesson.xp} XP
                                </span>
                                {isAdmin && adminEditMode && (
                                  <button
                                    className="admin-inline-btn lesson-edit-btn"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openQuickEdit(lesson, 'lesson', { lessonId: lesson.id, unitId: unit.id, langId: currentLanguage });
                                    }}
                                    title="Edit Lesson details"
                                  >
                                    <Edit2 size={12} />
                                    <span>Edit Lesson</span>
                                  </button>
                                )}
                                {isUnlocked && (
                                  <button 
                                    className={`node-start-label-btn ${isReview ? 'review-start-btn' : ''}`}
                                    onClick={() => startLesson(lesson)}
                                  >
                                    {isCompleted ? 'Retake Review' : isReview ? 'Start Checkpoint' : 'Start'} <ChevronRight size={14} />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Sidebar: Mascot, Daily Goal & Culture Snack */}
        <aside className="curriculum-sidebar">
          {/* Mascot Motivational Card */}
          <div className="sidebar-widget mascot-widget">
            <div className="mascot-img-wrap">
              <img 
                src="/images/mascot.jpg" 
                alt="FliksLingo Sunbird Mascot" 
                className="sidebar-mascot-img"
              />
            </div>
            <div className="mascot-speech-bubble">
              <span className="speech-quote">"</span>
                {currentLanguage === 'spanish' && "¡Vamos! Every phrase you practice connects you with over 500 million speakers worldwide. ¡Tú puedes!"}
                {currentLanguage === 'french' && "Bienvenue ! A little practice every day brings effortless Parisian elegance and fluency."}
                {currentLanguage === 'german' && "Guten Tag! Step by step, daily deliberate practice builds true mastery. Viel Erfolg!"}
                {currentLanguage === 'japanese' && "ようこそ (Yōkoso)! Embrace the journey of discovery, sentence by sentence. がんばって!"}
                {currentLanguage === 'mandarin' && "加油 (Jiāyóu)! A journey of a thousand miles begins with a single character. Keep going!"}
                {currentLanguage === 'portuguese' && "Vamos lá! Practice brings fluency and opens doors across Brazil, Portugal, and beyond!"}
                {currentLanguage === 'swedish' && "Välkommen! Lagom och trevligt — steady daily practice makes Swedish second nature!"}
                {currentLanguage === 'finnish' && "Tervetuloa! Harness your inner Sisu — persistence and curiosity conquer any language!"}
                {currentLanguage === 'igbo' && "Ndewoo! Onye gbara mbọ ga-eri uru ya. Keep up the high energy and master Igbo!"}
                {currentLanguage === 'hausa' && "Barka da zuwa! Sannu a hankali ake gina gida — step by step you achieve fluency!"}
                {currentLanguage === 'pidgin' && "Bros, no slack today! One lesson a day keeps ignorance far away!"}
                {currentLanguage === 'yoruba' && "Ẹ káàbọ̀! Consistency is the royal crown of language fluency. Keep shining!"}
            </div>
          </div>

          {/* Daily Quest Card */}
          <div className="sidebar-widget quest-widget">
            <div className="widget-header">
              <Flame size={18} className="flame-accent" />
              <h3>Today's Quests</h3>
            </div>
            <div className="quest-list">
              <div className="quest-item">
                <div className="quest-info">
                  <span className="quest-title">Earn 50 XP</span>
                  <div className="quest-progress-bar">
                    <div 
                      className="quest-fill" 
                      style={{ width: `${Math.min(100, (xp % 100))} %` }} 
                    />
                  </div>
                </div>
                <span className="quest-reward">🌟 +10 Bonus</span>
              </div>

              <div className="quest-item">
                <div className="quest-info">
                  <span className="quest-title">Complete 1 Lesson</span>
                  <div className="quest-progress-bar">
                    <div 
                      className="quest-fill" 
                      style={{ width: `${completedLessons.length > 0 ? 100 : 0}%` }} 
                    />
                  </div>
                </div>
                <span className="quest-reward">🔥 Maintain Streak</span>
              </div>
            </div>
          </div>

          {/* Culture Snack Widget */}
          <div className="sidebar-widget culture-snack-widget">
            <div className="widget-header">
              <Sparkles size={18} className="sparkle-accent" />
              <h3>Lingo Culture Snack</h3>
            </div>
            <blockquote className="proverb-quote">
              "{langData.cultureVault.proverbOfDay.proverb}"
            </blockquote>
            <p className="proverb-meaning">
              <strong>Meaning:</strong> {langData.cultureVault.proverbOfDay.translation}
            </p>
            <button 
              className="view-vault-btn"
              onClick={() => setActiveTab('culture')}
            >
              Explore Culture Vault <ChevronRight size={15} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
