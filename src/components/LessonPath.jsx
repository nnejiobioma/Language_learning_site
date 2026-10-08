'use client';

import React from 'react';
import { useGame } from '../context/GameContext';
import { LANGUAGES } from '../data/languages';
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
  Flame,
  Volume2,
  Shield,
  Compass,
  Smile,
  GraduationCap
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

  const langData = LANGUAGES[currentLanguage] || LANGUAGES.pidgin;

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
          {langData.units.map((unit, unitIdx) => {
            const UnitIcon = iconMap[unit.icon] || BookOpen;
            return (
              <div key={unit.id} className="unit-card-wrapper">
                {/* Unit Header */}
                <div 
                  className="unit-header-box" 
                  style={{ 
                    borderLeftColor: unit.color,
                    background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.07))` 
                  }}
                >
                  <div className="unit-icon-badge" style={{ backgroundColor: unit.color }}>
                    <UnitIcon size={22} color="#ffffff" />
                  </div>
                  <div className="unit-header-text">
                    <span className="unit-eyebrow">UNIT {unitIdx + 1}</span>
                    <h2 className="unit-heading">{unit.title}</h2>
                    <p className="unit-desc">{unit.subtitle}</p>
                  </div>
                </div>

                {/* Lesson Nodes Tree */}
                <div className="lesson-nodes-grid">
                  {unit.lessons.map((lesson, lessonIdx) => {
                    const isCompleted = completedLessons.includes(lesson.id);
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
                        className={`lesson-node-card ${isCompleted ? 'completed' : ''} ${isUnlocked ? 'unlocked' : 'locked'}`}
                      >
                        <div className="lesson-node-inner">
                          <button
                            className={`node-circle-btn ${isCompleted ? 'completed' : ''} ${isUnlocked ? 'active-pulse' : 'locked'}`}
                            onClick={() => isUnlocked && startLesson(lesson)}
                            disabled={!isUnlocked}
                            aria-label={`Start lesson ${lesson.title}`}
                            id={`lesson-node-${lesson.id}`}
                          >
                            {isCompleted ? (
                              <Check size={26} strokeWidth={3} className="node-icon-check" />
                            ) : isUnlocked ? (
                              <Play size={24} fill="currentColor" className="node-icon-play" />
                            ) : (
                              <Lock size={20} className="node-icon-lock" />
                            )}
                          </button>

                          <div className="lesson-node-meta">
                            <span className="lesson-step-tag">Lesson {lessonIdx + 1}</span>
                            <h3 className="lesson-node-title">{lesson.title}</h3>
                            <p className="lesson-node-desc">{lesson.description}</p>
                            
                            <div className="lesson-action-row">
                              <span className="lesson-xp-tag">+{lesson.xp} XP</span>
                              {isUnlocked && (
                                <button 
                                  className="node-start-label-btn"
                                  onClick={() => startLesson(lesson)}
                                >
                                  {isCompleted ? 'Review' : 'Start'} <ChevronRight size={14} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                alt="FiksLingo Sunbird Mascot" 
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
