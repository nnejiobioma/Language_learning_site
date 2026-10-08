'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { getExamsForLanguage } from '../data/cbtExams';
import { LANGUAGES } from '../data/languages';
import { soundEngine } from '../lib/audio';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Flag, 
  Volume2, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Award, 
  FileText, 
  HelpCircle, 
  X,
  Play,
  Check,
  ShieldCheck,
  BookOpen,
  Headphones
} from 'lucide-react';

export default function CBTExamView() {
  const { currentLanguage } = useGame();
  const langData = LANGUAGES[currentLanguage] || LANGUAGES.pidgin;
  const availableExams = getExamsForLanguage(currentLanguage);

  // States: 'hub' | 'active' | 'results'
  const [viewState, setViewState] = useState('hub');
  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // User answers map: { [questionId]: selectedOptionString }
  const [answers, setAnswers] = useState({});
  // Flagged questions set: Set<questionId>
  const [flaggedIds, setFlaggedIds] = useState(new Set());

  // Timer states
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const timerRef = useRef(null);

  // Submit modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Filter for review in results
  const [resultFilter, setResultFilter] = useState('all'); // 'all' | 'incorrect' | 'flagged'

  // Start an exam
  const handleStartExam = (exam) => {
    setSelectedExam(exam);
    setAnswers({});
    setFlaggedIds(new Set());
    setCurrentQuestionIndex(0);
    setSecondsRemaining(exam.timeLimitMinutes * 60);
    setViewState('active');
    soundEngine.playSuccess();
  };

  // Timer tick
  useEffect(() => {
    if (viewState !== 'active') return;

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [viewState]);

  const handleAutoSubmit = () => {
    setShowSubmitModal(false);
    calculateAndShowResults();
  };

  const handleManualSubmit = () => {
    setShowSubmitModal(false);
    clearInterval(timerRef.current);
    calculateAndShowResults();
  };

  const calculateAndShowResults = () => {
    setViewState('results');
    // Calculate score
    if (!selectedExam) return;
    const total = selectedExam.questions.length;
    let correct = 0;
    selectedExam.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const percent = Math.round((correct / total) * 100);
    const passed = percent >= selectedExam.passPercentage;

    if (passed) {
      soundEngine.playFanfare();
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    } else {
      soundEngine.playError();
    }
  };

  // Option select
  const handleSelectOption = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option
    }));
  };

  // Clear answer
  const handleClearAnswer = (questionId) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  // Flag toggle
  const handleToggleFlag = (questionId) => {
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  // Play audio for listening comprehension
  const handlePlayAudio = (phrase) => {
    soundEngine.speak(phrase, currentLanguage);
  };

  // Format MM:SS
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // =========================================================================
  // RENDER: EXAM SELECTION HUB
  // =========================================================================
  if (viewState === 'hub') {
    return (
      <div className="cbt-container">
        {/* Banner */}
        <section className="cbt-hero-banner" style={{ '--accent': langData.accentColor }}>
          <div className="cbt-hero-badge">
            <GraduationCap size={28} />
            <span>Standard Computer Based Testing (CBT) Center</span>
          </div>
          <h1 className="cbt-hero-title">Official {langData.name} Examination Practice</h1>
          <p className="cbt-hero-subtitle">
            Simulate real standardized language examinations (such as the official Finnish <strong>YKI (Yleinen kielitutkinto)</strong> National Certificate for citizenship and employment). Timed sections, authentic passages, listening comprehension, and immediate score analytics.
          </p>
        </section>

        {/* Exams Catalog */}
        <div className="cbt-catalog-section">
          <div className="cbt-section-header">
            <h2 className="cbt-section-title">Available Examination Papers</h2>
            <span className="cbt-catalog-count">{availableExams.length} Standard Papers Available</span>
          </div>

          <div className="cbt-exams-grid">
            {availableExams.map((exam) => (
              <div key={exam.id} className="cbt-exam-card">
                <div className="cbt-exam-top">
                  <span className="cbt-badge-pill">{exam.badgeText || exam.level}</span>
                  <span className="cbt-time-pill">
                    <Clock size={14} /> {exam.timeLimitMinutes} Mins
                  </span>
                </div>

                <h3 className="cbt-exam-title">{exam.title}</h3>
                <p className="cbt-exam-subtitle">{exam.subtitle}</p>
                <p className="cbt-exam-desc">{exam.description}</p>

                <div className="cbt-exam-meta-row">
                  <div className="cbt-meta-item">
                    <span className="meta-label">Questions</span>
                    <strong className="meta-val">{exam.questions.length} Items</strong>
                  </div>
                  <div className="cbt-meta-item">
                    <span className="meta-label">Pass Threshold</span>
                    <strong className="meta-val">{exam.passPercentage}% Required</strong>
                  </div>
                  <div className="cbt-meta-item">
                    <span className="meta-label">Level</span>
                    <strong className="meta-val">{exam.level}</strong>
                  </div>
                </div>

                {exam.sections && (
                  <div className="cbt-sections-list">
                    <span className="sections-title">Testing Domains:</span>
                    <div className="sections-pills">
                      {exam.sections.map((sec, i) => (
                        <span key={i} className="cbt-sec-tag">{sec}</span>
                      ))}
                    </div>
                  </div>
                )}

                <button 
                  className="cbt-start-exam-btn"
                  onClick={() => handleStartExam(exam)}
                  id={`start-exam-${exam.id}`}
                >
                  <Play size={18} fill="currentColor" />
                  <span>Start Examination</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Official YKI Examination Structure & Subtests Overview */}
        <div className="cbt-subtests-overview-card">
          <div className="instructions-header">
            <BookOpen size={22} className="inst-icon" />
            <h3>Official YKI Examination Structure (Yleiset kielitutkinnot)</h3>
          </div>
          <p className="cbt-subtests-intro">
            The standard official language test in Finland is the National Certificate of Language Proficiency (YKI). It is an intense, practical exam designed for adults that takes <strong>5 to 6 hours</strong> to complete on a single examination day across four distinct subtests:
          </p>

          <div className="cbt-subtests-grid">
            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">📖</span>
                <strong>Reading Comprehension</strong>
                <span className="subtest-time-tag">60 Mins</span>
              </div>
              <p>You read 6 different authentic texts (emails, advertisements, news articles, or public notices). Questions include multiple-choice, true/false, and open-ended text questions.</p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">✍️</span>
                <strong>Writing</strong>
                <span className="subtest-time-tag">55 Mins</span>
              </div>
              <p>You complete 3 practical writing tasks: a casual message or email (to a friend or coworker), a formal complaint or inquiry (e.g., to a landlord or agency), and an opinion essay arguing your stance.</p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">🎧</span>
                <strong>Listening Comprehension</strong>
                <span className="subtest-time-tag">40 Mins</span>
              </div>
              <p>You listen to 4–7 recordings (voice messages, transit announcements, radio clips). Audio tracks are played twice at basic and intermediate levels. Evaluates main ideas and key details.</p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">🗣️</span>
                <strong>Speaking</strong>
                <span className="subtest-time-tag">25 Mins</span>
              </div>
              <p>Conducted simultaneously in a language laboratory/computer room wearing headsets. You respond to recorded prompts, simulated phone calls, and structured discussion questions.</p>
            </div>
          </div>
        </div>

        {/* Standard Candidate Guidelines & Rules */}
        <div className="cbt-instructions-card">
          <div className="instructions-header">
            <ShieldCheck size={22} className="inst-icon" />
            <h3>Candidate Exam Guidelines & Regulations</h3>
          </div>
          <ul className="instructions-list">
            <li><strong>Arrival and Rigorous ID Checks:</strong> You must present a valid, official ID (such as a passport, official EU national ID card, or Finnish alien's passport / residence permit card). <em>A Finnish driver's license is strictly NOT accepted.</em> If you arrive late, you are barred from entering.</li>
            <li><strong>No Electronics Allowed:</strong> All smartphones, smartwatches, traditional wristwatches, tablets, and personal study materials are strictly prohibited in the exam hall. Examiners check thoroughly before entry.</li>
            <li><strong>The "Noise" in Speaking:</strong> In the language laboratory, all candidates speak at the same time into their individual headsets. The room can get loud and buzzing; candidates must practice focusing on their own speech while tuning out background noise.</li>
            <li><strong>Communication Over Perfection:</strong> Graders prioritize your ability to react promptly, convey a clear message, and fulfill the communicative function under pressure. Minor grammatical slips do not disqualify you if your message is comprehensible.</li>
            <li><strong>Grading & Finnish Citizenship (Migri):</strong> Each subtest is graded individually against the CEFR scale (Perustaso 1–2 / A1–A2, Keskitaso 3–4 / B1–B2, Ylintaso 5–6 / C1–C2). To qualify for <strong>Finnish citizenship</strong>, Migri requires at least <strong>Grade 3 (B1 level)</strong> in an approved combination of oral and written subtests (e.g., Speaking + Writing, or Listening + Writing, or Reading + Speaking).</li>
            <li><strong>Digital Certificates:</strong> Certificates are issued approximately 2 months after the test date and are accessible electronically directly in your <em>My Studyinfo (Oma Opintopolku)</em> portal via strong identification (Suomi.fi).</li>
          </ul>
        </div>
      </div>
    );
  }

  // Current active question
  const currentQuestion = selectedExam?.questions[currentQuestionIndex];
  const isFlagged = currentQuestion ? flaggedIds.has(currentQuestion.id) : false;
  const isAnswered = currentQuestion ? Boolean(answers[currentQuestion.id]) : false;

  // Answered count
  const answeredCount = selectedExam ? Object.keys(answers).length : 0;
  const totalQuestions = selectedExam ? selectedExam.questions.length : 0;

  // =========================================================================
  // RENDER: ACTIVE EXAMINATION MODE
  // =========================================================================
  if (viewState === 'active' && selectedExam && currentQuestion) {
    const isTimeUrgent = secondsRemaining < 120; // under 2 mins
    const isTimeWarning = secondsRemaining < 300 && !isTimeUrgent; // under 5 mins

    return (
      <div className="cbt-active-screen">
        {/* Top Sticky Test Bar */}
        <header className="cbt-top-bar">
          <div className="cbt-bar-left">
            <div className="cbt-exam-title-badge">
              <span className="exam-flag">{langData.flag}</span>
              <span className="exam-head-title">{selectedExam.title}</span>
            </div>
            <span className="cbt-level-indicator">{selectedExam.level}</span>
          </div>

          <div className="cbt-bar-center">
            <div className={`cbt-timer-widget ${isTimeUrgent ? 'urgent' : isTimeWarning ? 'warning' : ''}`}>
              <Clock size={18} className="timer-icon" />
              <span className="timer-text">{formatTime(secondsRemaining)}</span>
              {isTimeUrgent && <span className="time-alert-tag">Ending Soon!</span>}
            </div>
          </div>

          <div className="cbt-bar-right">
            <button 
              className={`cbt-flag-btn ${isFlagged ? 'flagged' : ''}`}
              onClick={() => handleToggleFlag(currentQuestion.id)}
              title="Flag question for later review"
            >
              <Flag size={16} />
              <span>{isFlagged ? 'Flagged' : 'Flag Question'}</span>
            </button>

            <button 
              className="cbt-submit-nav-btn"
              onClick={() => setShowSubmitModal(true)}
              id="cbt-submit-trigger-btn"
            >
              <CheckCircle2 size={16} />
              <span>Submit Exam</span>
            </button>
          </div>
        </header>

        {/* Main Examination Stage */}
        <div className="cbt-main-layout">
          {/* Left / Center: Question and Passage Area */}
          <div className="cbt-stage-content">
            <div className="cbt-question-header-row">
              <div className="question-meta-tags">
                <span className="q-number-pill">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                {currentQuestion.section && (
                  <span className="q-section-pill">{currentQuestion.section}</span>
                )}
              </div>

              {isAnswered && (
                <span className="answered-indicator">
                  <Check size={14} /> Answer Recorded
                </span>
              )}
            </div>

            {/* Reading Comprehension Passage */}
            {currentQuestion.passage && (
              <div className="cbt-passage-container">
                <div className="passage-header">
                  <BookOpen size={16} />
                  <span>Reading Text (Lue teksti huolellisesti)</span>
                </div>
                <div className="passage-body">
                  <pre className="passage-text">{currentQuestion.passage}</pre>
                </div>
              </div>
            )}

            {/* Listening Comprehension Audio Card */}
            {currentQuestion.audioPhrase && (
              <div className="cbt-audio-prompt-card">
                <div className="audio-prompt-header">
                  <Headphones size={18} />
                  <span>Listening Comprehension (Kuuntelutehtävä)</span>
                </div>
                <div className="audio-player-action">
                  <button 
                    className="cbt-audio-play-btn"
                    onClick={() => handlePlayAudio(currentQuestion.audioPhrase)}
                    aria-label="Play audio listening prompt"
                  >
                    <Volume2 size={20} />
                    <span>Click to Listen to Native Recording</span>
                  </button>
                  <span className="audio-hint">Listen as many times as needed to answer the question.</span>
                </div>
              </div>
            )}

            {/* Question Prompt */}
            <div className="cbt-prompt-box">
              <h2 className="cbt-prompt-text">{currentQuestion.prompt}</h2>
            </div>

            {/* Options List */}
            <div className="cbt-options-grid">
              {currentQuestion.options.map((option, optIdx) => {
                const isSelected = answers[currentQuestion.id] === option;
                return (
                  <button
                    key={optIdx}
                    className={`cbt-option-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(currentQuestion.id, option)}
                  >
                    <span className="option-radio-indicator">
                      {isSelected ? <div className="radio-dot" /> : null}
                    </span>
                    <span className="option-text-label">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Question Controls */}
            <div className="cbt-bottom-controls">
              <div className="ctrl-left">
                <button
                  className="cbt-nav-btn prev"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                >
                  <ChevronLeft size={18} />
                  <span>Previous</span>
                </button>

                <button
                  className="cbt-nav-btn next"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="ctrl-right">
                {isAnswered && (
                  <button 
                    className="cbt-clear-answer-btn"
                    onClick={() => handleClearAnswer(currentQuestion.id)}
                  >
                    Clear Response
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Candidate Palette Grid */}
          <aside className="cbt-palette-sidebar">
            <div className="palette-header">
              <h3>Question Palette</h3>
              <span className="palette-summary">{answeredCount} of {totalQuestions} Answered</span>
            </div>

            <div className="palette-legend">
              <div className="legend-item"><span className="legend-chip answered" /> Answered</div>
              <div className="legend-item"><span className="legend-chip flagged" /> Flagged</div>
              <div className="legend-item"><span className="legend-chip unanswered" /> Unanswered</div>
            </div>

            <div className="palette-grid">
              {selectedExam.questions.map((q, idx) => {
                const ans = Boolean(answers[q.id]);
                const flg = flaggedIds.has(q.id);
                const isCur = idx === currentQuestionIndex;

                let statusClass = 'unanswered';
                if (ans) statusClass = 'answered';
                if (flg) statusClass = 'flagged';
                if (ans && flg) statusClass = 'answered-flagged';

                return (
                  <button
                    key={q.id}
                    className={`palette-num-btn ${statusClass} ${isCur ? 'current' : ''}`}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    aria-label={`Jump to question ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="palette-submit-box">
              <button 
                className="palette-submit-action-btn"
                onClick={() => setShowSubmitModal(true)}
              >
                <CheckCircle2 size={18} />
                <span>Submit My Test</span>
              </button>
            </div>
          </aside>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div className="cbt-modal-overlay">
            <div className="cbt-modal-dialog">
              <div className="modal-top">
                <AlertCircle size={28} className="warn-icon" />
                <h3>Ready to Submit Examination?</h3>
              </div>

              <p className="modal-desc">
                Once submitted, your answers will be finalized and evaluated against official CEFR / YKI grade benchmarks.
              </p>

              <div className="modal-summary-box">
                <div className="summary-row">
                  <span>Total Questions:</span>
                  <strong>{totalQuestions}</strong>
                </div>
                <div className="summary-row">
                  <span>Answered Questions:</span>
                  <strong className="text-emerald">{answeredCount}</strong>
                </div>
                <div className="summary-row">
                  <span>Unanswered Questions:</span>
                  <strong className={totalQuestions - answeredCount > 0 ? "text-amber" : "text-muted"}>
                    {totalQuestions - answeredCount}
                  </strong>
                </div>
                <div className="summary-row">
                  <span>Flagged for Review:</span>
                  <strong className="text-gold">{flaggedIds.size}</strong>
                </div>
              </div>

              {totalQuestions - answeredCount > 0 && (
                <div className="modal-warning-alert">
                  <AlertCircle size={16} />
                  <span>You still have {totalQuestions - answeredCount} unanswered questions! You can go back and answer them before submitting.</span>
                </div>
              )}

              <div className="modal-action-row">
                <button 
                  className="modal-btn-cancel"
                  onClick={() => setShowSubmitModal(false)}
                >
                  Return to Test
                </button>
                <button 
                  className="modal-btn-confirm"
                  onClick={handleManualSubmit}
                >
                  Yes, Finish & Grade Exam
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // RENDER: RESULTS & PERFORMANCE REPORT
  // =========================================================================
  if (viewState === 'results' && selectedExam) {
    const total = selectedExam.questions.length;
    let correctCount = 0;
    const sectionStats = {};

    selectedExam.questions.forEach((q) => {
      const sec = q.section || 'General';
      if (!sectionStats[sec]) sectionStats[sec] = { total: 0, correct: 0 };
      sectionStats[sec].total++;

      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
        sectionStats[sec].correct++;
      }
    });

    const scorePercentage = Math.round((correctCount / total) * 100);
    const passed = scorePercentage >= selectedExam.passPercentage;

    // Filter questions for detailed answer key
    const displayedQuestions = selectedExam.questions.filter((q) => {
      const isUserCorrect = answers[q.id] === q.correctAnswer;
      const isUserFlagged = flaggedIds.has(q.id);

      if (resultFilter === 'incorrect') return !isUserCorrect;
      if (resultFilter === 'flagged') return isUserFlagged;
      return true;
    });

    return (
      <div className="cbt-container cbt-results-screen">
        {/* Results Hero Header */}
        <section className={`cbt-results-card ${passed ? 'passed' : 'failed'}`}>
          <div className="results-emblem">
            {passed ? <Award size={56} className="award-icon" /> : <RotateCcw size={56} className="fail-icon" />}
          </div>

          <div className="results-header-text">
            <span className="results-grade-pill">
              {passed ? "HYVÄKSYTTY (PASSED)" : "UUDELLEEN (NEEDS RETAKE)"}
            </span>
            <h1 className="results-title">
              {passed 
                ? `Congratulations! You Passed the ${selectedExam.title}!`
                : `Exam Completed: Keep Practicing for the ${selectedExam.title}`}
            </h1>
            <p className="results-subtitle">
              {passed 
                ? `You scored ${scorePercentage}%, successfully meeting the ${selectedExam.passPercentage}% official passing benchmark for ${selectedExam.level}.`
                : `You scored ${scorePercentage}%. The official passing benchmark is ${selectedExam.passPercentage}%. Review the explanations below and try again!`}
            </p>
          </div>

          <div className="results-score-badge">
            <div className="score-number-circle">
              <span className="score-pct">{scorePercentage}%</span>
              <span className="score-fraction">{correctCount} / {total} Correct</span>
            </div>
          </div>
        </section>

        {/* Section Breakdown Grid */}
        <div className="cbt-breakdown-section">
          <h2 className="breakdown-heading">Domain Performance Breakdown</h2>
          <div className="breakdown-cards-grid">
            {Object.entries(sectionStats).map(([secName, stat]) => {
              const secPct = Math.round((stat.correct / stat.total) * 100);
              return (
                <div key={secName} className="sec-breakdown-card">
                  <div className="sec-card-header">
                    <span className="sec-card-title">{secName}</span>
                    <span className="sec-card-score">{stat.correct} / {stat.total} ({secPct}%)</span>
                  </div>
                  <div className="sec-bar-track">
                    <div 
                      className={`sec-bar-fill ${secPct >= 70 ? 'good' : secPct >= 50 ? 'medium' : 'low'}`}
                      style={{ width: `${secPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="cbt-results-actions">
          <button 
            className="cbt-btn-retake"
            onClick={() => handleStartExam(selectedExam)}
          >
            <RotateCcw size={18} />
            <span>Retake This Examination</span>
          </button>

          <button 
            className="cbt-btn-hub"
            onClick={() => setViewState('hub')}
          >
            <BookOpen size={18} />
            <span>Choose Another Exam Paper</span>
          </button>
        </div>

        {/* Detailed Answer Key & Explanations */}
        <div className="cbt-answer-key-section">
          <div className="answer-key-header">
            <div className="ak-left">
              <h2>Comprehensive Examination Review & Explanations</h2>
              <p>Analyze your answers with pedagogical grammar explanations, correct options, and translations.</p>
            </div>

            {/* Filter Tabs */}
            <div className="ak-filter-pills">
              <button 
                className={`ak-pill ${resultFilter === 'all' ? 'active' : ''}`}
                onClick={() => setResultFilter('all')}
              >
                All Questions ({total})
              </button>
              <button 
                className={`ak-pill ${resultFilter === 'incorrect' ? 'active' : ''}`}
                onClick={() => setResultFilter('incorrect')}
              >
                Incorrect Only ({total - correctCount})
              </button>
              <button 
                className={`ak-pill ${resultFilter === 'flagged' ? 'active' : ''}`}
                onClick={() => setResultFilter('flagged')}
              >
                Flagged Items ({flaggedIds.size})
              </button>
            </div>
          </div>

          <div className="answer-key-list">
            {displayedQuestions.map((q, idx) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              const originalIndex = selectedExam.questions.findIndex(item => item.id === q.id);

              return (
                <div 
                  key={q.id} 
                  className={`ak-card ${isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <div className="ak-card-top">
                    <div className="ak-tag-group">
                      <span className="ak-num-badge">Question {originalIndex + 1}</span>
                      {q.section && <span className="ak-sec-tag">{q.section}</span>}
                      {flaggedIds.has(q.id) && <span className="ak-flag-tag"><Flag size={12} /> Flagged</span>}
                    </div>

                    <span className={`ak-verdict-pill ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? (
                        <><CheckCircle2 size={16} /> Correct</>
                      ) : (
                        <><AlertCircle size={16} /> Incorrect / Missed</>
                      )}
                    </span>
                  </div>

                  <h3 className="ak-prompt">{q.prompt}</h3>

                  {q.passage && (
                    <div className="ak-passage-quote">
                      <strong>Reference Text:</strong>
                      <p>{q.passage}</p>
                    </div>
                  )}

                  {q.audioPhrase && (
                    <div className="ak-audio-quote">
                      <button 
                        className="ak-play-audio-btn"
                        onClick={() => handlePlayAudio(q.audioPhrase)}
                      >
                        <Volume2 size={16} /> Listen to prompt audio
                      </button>
                      <span className="ak-audio-text">"{q.audioPhrase}"</span>
                    </div>
                  )}

                  <div className="ak-options-review">
                    <div className="ak-chosen-row">
                      <span className="ak-label">Your Response:</span>
                      <strong className={isCorrect ? 'text-emerald' : 'text-rose'}>
                        {userAnswer || 'No answer selected (Skipped)'}
                      </strong>
                    </div>
                    {!isCorrect && (
                      <div className="ak-correct-row">
                        <span className="ak-label">Correct Answer:</span>
                        <strong className="text-emerald">{q.correctAnswer}</strong>
                      </div>
                    )}
                  </div>

                  {q.explanation && (
                    <div className="ak-explanation-box">
                      <HelpCircle size={16} className="exp-icon" />
                      <div className="exp-content">
                        <strong>Official Explanation:</strong>
                        <p>{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
