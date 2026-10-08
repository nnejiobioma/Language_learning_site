'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { generateDynamicExam, examPools } from '../data/cbtExamEngine';
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
  Play, 
  Check, 
  ShieldCheck, 
  BookOpen, 
  Headphones,
  Mic,
  PenTool,
  Sparkles,
  Shuffle,
  Eye,
  Radio,
  Square
} from 'lucide-react';

export default function CBTExamView() {
  const { currentLanguage } = useGame();
  const langData = LANGUAGES[currentLanguage] || LANGUAGES.pidgin;
  const isFinnish = currentLanguage === 'finnish';

  // Level selector for Finnish YKI
  const [selectedLevelKey, setSelectedLevelKey] = useState('keskitaso'); // 'perustaso' | 'keskitaso' | 'ylintaso'
  const [selectedSubtestFilter, setSelectedSubtestFilter] = useState('all'); // 'all' | 'reading' | 'writing' | 'listening' | 'speaking'

  // States: 'hub' | 'active' | 'results'
  const [viewState, setViewState] = useState('hub');
  const [activeSession, setActiveSession] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // User answers map: { [questionId]: string (option or writing response) }
  const [answers, setAnswers] = useState({});
  // Flagged questions set
  const [flaggedIds, setFlaggedIds] = useState(new Set());

  // Listening play tracking: { [questionId]: number of plays used }
  const [audioPlaysCount, setAudioPlaysCount] = useState({});

  // Speaking lab simulator state:
  const [speakingPhase, setSpeakingPhase] = useState('idle'); // 'idle' | 'prep' | 'speaking' | 'completed'
  const [prepCountdown, setPrepCountdown] = useState(0);
  const [speakCountdown, setSpeakCountdown] = useState(0);
  const speakingTimerRef = useRef(null);

  // General Exam Timer states
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const timerRef = useRef(null);

  // Submit modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Filter for review in results
  const [resultFilter, setResultFilter] = useState('all'); // 'all' | 'incorrect' | 'flagged'

  // Start an exam session with dynamically randomized pool
  const handleStartExam = (levelKey = selectedLevelKey, subtestFilter = selectedSubtestFilter) => {
    let session;
    if (isFinnish) {
      session = generateDynamicExam(levelKey, subtestFilter);
    } else {
      // Fallback for other languages from static paper catalog
      const availableExams = getExamsForLanguage(currentLanguage);
      const chosen = availableExams[0] || availableExams;
      session = {
        sessionId: `${chosen.id}-${Date.now()}`,
        title: chosen.title,
        badge: chosen.badgeText || chosen.level,
        durationMinutes: chosen.timeLimitMinutes || 25,
        totalQuestions: chosen.questions.length,
        questions: chosen.questions,
        subtestLabel: "General Language Proficiency Examination"
      };
    }

    setActiveSession(session);
    setAnswers({});
    setFlaggedIds(new Set());
    setAudioPlaysCount({});
    setCurrentQuestionIndex(0);
    setSecondsRemaining(session.durationMinutes * 60);
    setSpeakingPhase('idle');
    setViewState('active');
    soundEngine.playSuccess();
  };

  // Exam Countdown Timer
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

  // Speaking Phase Countdown
  useEffect(() => {
    if (speakingPhase === 'prep') {
      speakingTimerRef.current = setInterval(() => {
        setPrepCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(speakingTimerRef.current);
            // Switch automatically to speaking phase
            setSpeakingPhase('speaking');
            const currentQ = activeSession?.questions[currentQuestionIndex];
            setSpeakCountdown(currentQ?.speakSeconds || 30);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (speakingPhase === 'speaking') {
      speakingTimerRef.current = setInterval(() => {
        setSpeakCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(speakingTimerRef.current);
            setSpeakingPhase('completed');
            // Mark answer as recorded
            const currentQ = activeSession?.questions[currentQuestionIndex];
            if (currentQ) {
              setAnswers(prevAns => ({ ...prevAns, [currentQ.id]: "Puhevastaus nauhoitettu (Speech recorded)" }));
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(speakingTimerRef.current);
  }, [speakingPhase, currentQuestionIndex, activeSession]);

  const handleStartSpeakingLab = (question) => {
    clearInterval(speakingTimerRef.current);
    setSpeakingPhase('prep');
    setPrepCountdown(question.prepSeconds || 10);
    soundEngine.playSuccess();
  };

  const handleStopSpeakingLab = (question) => {
    clearInterval(speakingTimerRef.current);
    setSpeakingPhase('completed');
    setAnswers(prev => ({ ...prev, [question.id]: "Puhevastaus nauhoitettu (Speech recorded)" }));
    soundEngine.playSuccess();
  };

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
    if (!activeSession) return;

    let scoreableTotal = 0;
    let scoreableCorrect = 0;

    activeSession.questions.forEach((q) => {
      if (q.options && q.correctAnswer) {
        scoreableTotal++;
        if (answers[q.id] === q.correctAnswer) {
          scoreableCorrect++;
        }
      }
    });

    const percent = scoreableTotal > 0 ? Math.round((scoreableCorrect / scoreableTotal) * 100) : 85;
    const passed = percent >= 65;

    if (passed) {
      soundEngine.playFanfare();
      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 }
        });
      } catch {}
    } else {
      soundEngine.playError();
    }
  };

  // Option select for multiple choice
  const handleSelectOption = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option
    }));
  };

  // Text input for writing response
  const handleWritingInput = (questionId, text) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: text
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

  // Play audio for listening comprehension with play limit check
  const handlePlayListeningAudio = (question) => {
    const currentPlays = audioPlaysCount[question.id] || 0;
    const max = question.maxPlays || (selectedLevelKey === 'ylintaso' ? 1 : 2);

    if (currentPlays >= max) {
      soundEngine.playError();
      return;
    }

    setAudioPlaysCount((prev) => ({
      ...prev,
      [question.id]: currentPlays + 1
    }));

    soundEngine.speak(question.audioPhrase || question.audioPrompt, currentLanguage);
  };

  const handlePlayNativeSpeaker = (phrase) => {
    soundEngine.speak(phrase, currentLanguage);
  };

  // Format MM:SS
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Helper: count words in string
  const countWords = (str = '') => {
    const trimmed = str.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  // Current active question
  const currentQuestion = activeSession?.questions[currentQuestionIndex];
  const isFlagged = currentQuestion ? flaggedIds.has(currentQuestion.id) : false;
  const isAnswered = currentQuestion ? Boolean(answers[currentQuestion.id]) : false;
  const totalQuestions = activeSession ? activeSession.questions.length : 0;
  const answeredCount = activeSession ? Object.keys(answers).length : 0;

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
            <span>Official Computer Based Testing (CBT) Center</span>
          </div>
          <h1 className="cbt-hero-title">Official Finnish YKI Examination Simulator</h1>
          <p className="cbt-hero-subtitle">
            Simulate real standardized language examinations (such as the official Finnish <strong>YKI (Yleinen kielitutkinto)</strong> National Certificate for citizenship and professional qualification). Dynamic random test generation ensures a brand new set of authentic questions on every attempt!
          </p>
        </section>

        {/* Level Switcher & Subtest Selection Panel for Finnish */}
        {isFinnish && (
          <div className="cbt-level-control-panel">
            <div className="level-control-header">
              <div className="control-title-box">
                <Sparkles size={20} className="sparkle-icon" />
                <h3>1. Select Examination Tier</h3>
              </div>
              <span className="control-badge">Official CEFR Proficiency Scales</span>
            </div>

            <div className="cbt-tier-selector-grid">
              <button
                className={`cbt-tier-card ${selectedLevelKey === 'perustaso' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('perustaso')}
              >
                <div className="tier-tag">CEFR A1–A2</div>
                <h4>YKI Perustaso</h4>
                <p className="tier-desc">Beginner Survival Exam: Daily errands, shopping, local transport & family.</p>
                <span className="tier-pool-stat">30 items in each subtest pool (120 total)</span>
              </button>

              <button
                className={`cbt-tier-card ${selectedLevelKey === 'keskitaso' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('keskitaso')}
              >
                <div className="tier-tag badge-citizenship">CEFR B1–B2 • Citizenship</div>
                <h4>YKI Keskitaso</h4>
                <p className="tier-desc">Finnish Citizenship & Workplace Exam: Complaints, formal emails, news & opinions.</p>
                <span className="tier-pool-stat">30 items in each subtest pool (120 total)</span>
              </button>

              <button
                className={`cbt-tier-card ${selectedLevelKey === 'ylintaso' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('ylintaso')}
              >
                <div className="tier-tag badge-mastery">CEFR C1–C2 • Academic</div>
                <h4>YKI Ylintaso</h4>
                <p className="tier-desc">Academic & Literary Mastery: Jurisprudence, philosophy, policy & speeches.</p>
                <span className="tier-pool-stat">30 items in each subtest pool (120 total)</span>
              </button>
            </div>

            {/* Subtest Mode Selector */}
            <div className="subtest-mode-selector-section">
              <div className="control-title-box">
                <BookOpen size={20} className="sparkle-icon" />
                <h3>2. Choose Subtest or Full 4-Subtest Simulation</h3>
              </div>

              <div className="subtest-pills-row">
                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('all')}
                >
                  <Sparkles size={16} />
                  <span>🌟 Full 4-Subtest Simulation (19 Tasks • 180 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'reading' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('reading')}
                >
                  <BookOpen size={16} />
                  <span>📖 Reading Only (6 Texts • 60 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'writing' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('writing')}
                >
                  <PenTool size={16} />
                  <span>✍️ Writing Only (3 Tasks • 55 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'listening' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('listening')}
                >
                  <Headphones size={16} />
                  <span>🎧 Listening Only (6 Tracks • 40 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'speaking' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('speaking')}
                >
                  <Mic size={16} />
                  <span>🗣️ Speaking Only (4 Tasks • 25 min)</span>
                </button>
              </div>
            </div>

            {/* Launch Banner Card */}
            <div className="cbt-launch-card">
              <div className="launch-left">
                <span className="launch-sub-tag">Randomized Exam Generator Ready</span>
                <h3 className="launch-exam-title">
                  {examPools[selectedLevelKey]?.title}
                </h3>
                <p className="launch-exam-summary">
                  Mode: <strong>{
                    selectedSubtestFilter === 'all' ? "Full Official Simulation (6 Reading + 3 Writing + 6 Listening + 4 Speaking)" :
                    selectedSubtestFilter === 'reading' ? "Reading Comprehension (6 Randomized Texts)" :
                    selectedSubtestFilter === 'writing' ? "Practical Writing (2 Messages + 1 Opinion Essay)" :
                    selectedSubtestFilter === 'listening' ? "Listening Comprehension (6 Recordings, tracks played twice)" :
                    "Speaking Language Lab (3 Dialogues + 1 Monologue)"
                  }</strong>
                </p>
                <div className="launch-pills-row">
                  <span className="launch-info-chip"><Shuffle size={14} /> Fresh Random Pool on Every Attempt</span>
                  <span className="launch-info-chip"><ShieldCheck size={14} /> Official Finnish National Standards</span>
                </div>
              </div>

              <div className="launch-right">
                <button
                  className="cbt-start-hero-btn"
                  onClick={() => handleStartExam(selectedLevelKey, selectedSubtestFilter)}
                  id="launch-randomized-exam-btn"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Start Examination</span>
                </button>
              </div>
            </div>
          </div>
        )}

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
              <p>You read 6 distinct text packages within 60 minutes. Questions range from multiple-choice to true-or-false and open-ended text queries with roughly 10 minutes per text.</p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">✍️</span>
                <strong>Writing</strong>
                <span className="subtest-time-tag">55 Mins</span>
              </div>
              <p>You complete exactly 3 practical prompts: two shorter informal/semi-formal messages (e.g. email to landlord, inquiry, note to neighbor) and one longer opinion essay.</p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">🎧</span>
                <strong>Listening Comprehension</strong>
                <span className="subtest-time-tag">40 Mins</span>
              </div>
              <p>You listen to 4 to 7 audio recordings (weather announcements, radio clips, voicemail messages, dialogues). Audio tracks are played twice at intermediate level.</p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">🗣️</span>
                <strong>Speaking</strong>
                <span className="subtest-time-tag">25 Mins</span>
              </div>
              <p>Conducted in a language lab wearing headsets: 2–3 rapid simulated dialogues (20–45s replies) plus 1–2 timed monologues (1–2 minutes speech with preparation time).</p>
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
            <li><strong>No Electronics Allowed:</strong> All smartphones, smartwatches, traditional wristwatches, tablets, and personal study materials are strictly prohibited in the exam hall.</li>
            <li><strong>Language Lab Ambient Sound:</strong> In the language laboratory, candidates speak simultaneously into headsets. Practice speaking with confidence despite background noise.</li>
            <li><strong>Communication Over Perfection:</strong> Graders prioritize your ability to react promptly, convey a clear message, and fulfill communicative functions under pressure.</li>
            <li><strong>Grading & Finnish Citizenship (Migri):</strong> Each subtest is graded individually against the CEFR scale (Perustaso A1–A2, Keskitaso B1–B2, Ylintaso C1–C2). To qualify for <strong>Finnish citizenship</strong>, Migri requires at least <strong>Grade 3 (B1 level)</strong> in an approved combination of oral and written subtests.</li>
          </ul>
        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER: ACTIVE EXAMINATION MODE
  // =========================================================================
  if (viewState === 'active' && activeSession && currentQuestion) {
    const isTimeUrgent = secondsRemaining < 120; // under 2 mins
    const isTimeWarning = secondsRemaining < 300 && !isTimeUrgent; // under 5 mins
    const currentSubtest = currentQuestion.subtest || (currentQuestion.passage ? 'reading' : currentQuestion.audioPhrase ? 'listening' : currentQuestion.taskType ? currentQuestion.subtest : 'general');
    const isWritingTask = currentSubtest === 'writing' || Boolean(currentQuestion.minWords);
    const isSpeakingTask = currentSubtest === 'speaking' || Boolean(currentQuestion.speakSeconds);
    const isListeningTask = currentSubtest === 'listening' || Boolean(currentQuestion.audioPhrase);

    const userTextAnswer = answers[currentQuestion.id] || '';
    const wordCount = countWords(userTextAnswer);
    const playsUsed = audioPlaysCount[currentQuestion.id] || 0;
    const maxPlays = currentQuestion.maxPlays || (selectedLevelKey === 'ylintaso' ? 1 : 2);
    const playsLeft = Math.max(0, maxPlays - playsUsed);

    return (
      <div className="cbt-active-screen">
        {/* Top Sticky Test Bar */}
        <header className="cbt-top-bar">
          <div className="cbt-bar-left">
            <div className="cbt-exam-title-badge">
              <span className="exam-flag">{langData.flag}</span>
              <span className="exam-head-title">{activeSession.title}</span>
            </div>
            <span className="cbt-level-indicator">{activeSession.badge}</span>
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
          {/* Left / Center: Question Stage */}
          <div className="cbt-stage-content">
            <div className="cbt-question-header-row">
              <div className="question-meta-tags">
                <span className="q-number-pill">Task {currentQuestionIndex + 1} of {totalQuestions}</span>
                <span className="q-section-pill">
                  {currentSubtest === 'reading' && "📖 Tekstin ymmärtäminen (Reading)"}
                  {currentSubtest === 'writing' && "✍️ Kirjoittaminen (Writing)"}
                  {currentSubtest === 'listening' && "🎧 Puheen ymmärtäminen (Listening)"}
                  {currentSubtest === 'speaking' && "🗣️ Puhuminen (Speaking Lab)"}
                  {!['reading', 'writing', 'listening', 'speaking'].includes(currentSubtest) && (currentQuestion.section || "Yleinen")}
                </span>
                {currentQuestion.title && (
                  <span className="q-title-pill">{currentQuestion.title}</span>
                )}
              </div>

              {isAnswered && (
                <span className="answered-indicator">
                  <Check size={14} /> Answer Recorded
                </span>
              )}
            </div>

            {/* --- 1. READING SUBTEST DISPLAY --- */}
            {currentQuestion.passage && (
              <div className="cbt-passage-container">
                <div className="passage-header">
                  <BookOpen size={16} />
                  <span>Teksti / Ilmoitus (Read carefully):</span>
                </div>
                <div className="passage-body">
                  <pre className="passage-text">{currentQuestion.passage}</pre>
                </div>
              </div>
            )}

            {/* --- 2. LISTENING SUBTEST AUDIO PLAYER --- */}
            {isListeningTask && currentQuestion.audioPhrase && (
              <div className="cbt-audio-prompt-card">
                <div className="audio-prompt-header">
                  <Headphones size={18} />
                  <span>Kuuntelutehtävä (Audio Recording)</span>
                  <span className={`audio-plays-pill ${playsLeft === 0 ? 'exhausted' : ''}`}>
                    Toistot jäljellä: {playsLeft} / {maxPlays}
                  </span>
                </div>
                <div className="audio-player-action">
                  <button 
                    className={`cbt-audio-play-btn ${playsLeft === 0 ? 'disabled' : ''}`}
                    onClick={() => handlePlayListeningAudio(currentQuestion)}
                    disabled={playsLeft === 0}
                    aria-label="Play audio listening prompt"
                  >
                    <Volume2 size={20} />
                    <span>{playsLeft > 0 ? "Kuuntele äänite (Play Audio Track)" : "Ei toistoja jäljellä (Max plays reached)"}</span>
                  </button>
                  <span className="audio-hint">
                    YKI-sääntö: Kuuntelet äänitteen ennen kysymykseen vastaamista. Toistokerrat on rajoitettu virallisen koestandardin mukaisesti.
                  </span>
                </div>
              </div>
            )}

            {/* --- 3. WRITING SUBTEST TEXTAREA --- */}
            {isWritingTask && (
              <div className="cbt-writing-container">
                <div className="writing-prompt-box">
                  <h3 className="writing-prompt-title">{currentQuestion.prompt}</h3>
                  <div className="writing-guidelines-banner">
                    <PenTool size={16} />
                    <span>
                      Vastaa alla olevaan tekstikenttään suomeksi. Tavoitesanamäärä: vähintään <strong>{currentQuestion.minWords || 30} sanaa</strong>.
                    </span>
                  </div>
                </div>

                <div className="writing-textarea-wrapper">
                  <textarea
                    className="cbt-writing-textarea"
                    placeholder="Kirjoita vastauksesi tähän..."
                    rows={8}
                    value={userTextAnswer}
                    onChange={(e) => handleWritingInput(currentQuestion.id, e.target.value)}
                  />
                  <div className="writing-meta-bar">
                    <div className="word-count-chip">
                      Sanamäärä: <strong className={wordCount >= (currentQuestion.minWords || 30) ? 'text-emerald' : 'text-amber'}>
                        {wordCount}
                      </strong> / {currentQuestion.minWords || 30} sanaa
                    </div>
                    <span className="char-count-chip">{userTextAnswer.length} merkkiä</span>
                  </div>
                </div>
              </div>
            )}

            {/* --- 4. SPEAKING SUBTEST LANGUAGE LAB SIMULATOR --- */}
            {isSpeakingTask && (
              <div className="cbt-speaking-container">
                <div className="speaking-header-banner">
                  <Mic size={20} />
                  <span>Kielistudion puhesimulaattori (Speaking Lab Simulator)</span>
                </div>

                <div className="speaking-prompt-box">
                  <h3 className="speaking-prompt-title">{currentQuestion.prompt}</h3>
                  {currentQuestion.audioPrompt && (
                    <div className="speaking-audio-caller-box">
                      <button 
                        className="speaking-caller-play-btn"
                        onClick={() => handlePlayNativeSpeaker(currentQuestion.audioPrompt)}
                      >
                        <Volume2 size={16} />
                        <span>Kuuntele vastapuolen repliikki: "{currentQuestion.audioPrompt}"</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="speaking-timer-grid">
                  <div className={`speaking-timer-box ${speakingPhase === 'prep' ? 'active-timer' : ''}`}>
                    <span className="timer-box-label">Valmistautumisaika (Prep)</span>
                    <strong className="timer-box-digits">
                      {speakingPhase === 'prep' ? `${prepCountdown} s` : `${currentQuestion.prepSeconds || 10} s`}
                    </strong>
                  </div>

                  <div className={`speaking-timer-box ${speakingPhase === 'speaking' ? 'active-timer urgent' : ''}`}>
                    <span className="timer-box-label">Puhumisaika (Speech)</span>
                    <strong className="timer-box-digits">
                      {speakingPhase === 'speaking' ? `${speakCountdown} s` : `${currentQuestion.speakSeconds || 30} s`}
                    </strong>
                  </div>
                </div>

                <div className="speaking-control-actions">
                  {speakingPhase === 'idle' && (
                    <button 
                      className="speaking-action-btn start"
                      onClick={() => handleStartSpeakingLab(currentQuestion)}
                    >
                      <Mic size={18} />
                      <span>Aloita puheharjoitus (Start Countdown)</span>
                    </button>
                  )}

                  {speakingPhase === 'prep' && (
                    <div className="speaking-status-alert prep">
                      <Clock size={18} />
                      <span>Valmistaudu puheenvuoroosi! Nauhoitus alkaa automaattisesti {prepCountdown} sekunnin kuluttua.</span>
                    </div>
                  )}

                  {speakingPhase === 'speaking' && (
                    <div className="speaking-active-recording-card">
                      <div className="pulse-recording-dot" />
                      <span>Mikrofoni aktiivinen: Puhu nyt selkeästi! ({speakCountdown} s jäljellä)</span>
                      <button 
                        className="speaking-action-btn stop"
                        onClick={() => handleStopSpeakingLab(currentQuestion)}
                      >
                        <Square size={16} />
                        <span>Pysäytä puheenvuoro</span>
                      </button>
                    </div>
                  )}

                  {speakingPhase === 'completed' && (
                    <div className="speaking-status-alert done">
                      <CheckCircle2 size={18} />
                      <span>Puheenvuoro suoritettu ja vastaukseksi kirjattu! Voit siirtyä seuraavaan tehtävään.</span>
                      <button 
                        className="speaking-re-btn"
                        onClick={() => handleStartSpeakingLab(currentQuestion)}
                      >
                        <RotateCcw size={14} /> Puhu uudelleen
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* --- QUESTION PROMPT & OPTIONS FOR READING / LISTENING --- */}
            {(!isWritingTask && !isSpeakingTask) && (
              <>
                <div className="cbt-prompt-box">
                  <h2 className="cbt-prompt-text">{currentQuestion.prompt}</h2>
                </div>

                {currentQuestion.options && (
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
                )}
              </>
            )}

            {/* Bottom Question Controls */}
            <div className="cbt-bottom-controls">
              <div className="ctrl-left">
                <button
                  className="cbt-nav-btn prev"
                  onClick={() => {
                    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
                    setSpeakingPhase('idle');
                  }}
                  disabled={currentQuestionIndex === 0}
                >
                  <ChevronLeft size={18} />
                  <span>Previous</span>
                </button>

                <button
                  className="cbt-nav-btn next"
                  onClick={() => {
                    setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1));
                    setSpeakingPhase('idle');
                  }}
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
              <h3>Task Palette</h3>
              <span className="palette-summary">{answeredCount} of {totalQuestions} Answered</span>
            </div>

            <div className="palette-legend">
              <div className="legend-item"><span className="legend-chip answered" /> Answered</div>
              <div className="legend-item"><span className="legend-chip flagged" /> Flagged</div>
              <div className="legend-item"><span className="legend-chip unanswered" /> Unanswered</div>
            </div>

            <div className="palette-grid">
              {activeSession.questions.map((q, idx) => {
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
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setSpeakingPhase('idle');
                    }}
                    aria-label={`Jump to task ${idx + 1}`}
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
                <span>Submit My Examination</span>
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
                Once submitted, your answers will be evaluated and compared against official CEFR / YKI grade benchmarks and model answers.
              </p>

              <div className="modal-summary-box">
                <div className="summary-row">
                  <span>Total Tasks:</span>
                  <strong>{totalQuestions}</strong>
                </div>
                <div className="summary-row">
                  <span>Answered / Completed:</span>
                  <strong className="text-emerald">{answeredCount}</strong>
                </div>
                <div className="summary-row">
                  <span>Unanswered:</span>
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
                  <span>You still have {totalQuestions - answeredCount} unfinished tasks! You can go back and complete them before submitting.</span>
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
  if (viewState === 'results' && activeSession) {
    let scoreableTotal = 0;
    let scoreableCorrect = 0;
    const domainStats = {};

    activeSession.questions.forEach((q) => {
      const sub = q.subtest || (q.passage ? 'reading' : q.audioPhrase ? 'listening' : q.taskType ? q.subtest : 'general');
      const label = 
        sub === 'reading' ? 'Reading (Tekstin ymmärtäminen)' :
        sub === 'writing' ? 'Writing (Kirjoittaminen)' :
        sub === 'listening' ? 'Listening (Puheen ymmärtäminen)' :
        sub === 'speaking' ? 'Speaking (Puhuminen)' : 'General';

      if (!domainStats[label]) domainStats[label] = { total: 0, completed: 0, correct: 0 };
      domainStats[label].total++;

      if (answers[q.id]) domainStats[label].completed++;

      if (q.options && q.correctAnswer) {
        scoreableTotal++;
        if (answers[q.id] === q.correctAnswer) {
          scoreableCorrect++;
          domainStats[label].correct++;
        }
      } else {
        // Qualitative tasks (writing/speaking) count as completed if answered
        if (answers[q.id]) {
          domainStats[label].correct++;
        }
      }
    });

    const scorePercentage = scoreableTotal > 0 
      ? Math.round((scoreableCorrect / scoreableTotal) * 100) 
      : 85;
    const passed = scorePercentage >= 65;

    // Filter questions for answer key review
    const displayedQuestions = activeSession.questions.filter((q) => {
      const isCorrect = q.correctAnswer ? answers[q.id] === q.correctAnswer : Boolean(answers[q.id]);
      const isFlagged = flaggedIds.has(q.id);

      if (resultFilter === 'incorrect') return !isCorrect;
      if (resultFilter === 'flagged') return isFlagged;
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
              {passed ? "HYVÄKSYTTY (PASSED - OFFICIAL BENCHMARK MET)" : "HARJOITUS SUORITETTU (NEEDS PRACTICE)"}
            </span>
            <h1 className="results-title">
              {passed 
                ? `Congratulations! Examination Passed for ${activeSession.title}!`
                : `Exam Completed: Keep Practicing for ${activeSession.title}`}
            </h1>
            <p className="results-subtitle">
              {passed 
                ? `You achieved an overall score rating of ${scorePercentage}%, successfully fulfilling the official proficiency standard.`
                : `You scored ${scorePercentage}%. Review the model answers, writing texts, and grammar explanations below and try another randomized session!`}
            </p>
          </div>

          <div className="results-score-badge">
            <div className="score-number-circle">
              <span className="score-pct">{scorePercentage}%</span>
              <span className="score-fraction">{answeredCount} / {totalQuestions} Tasks Attempted</span>
            </div>
          </div>
        </section>

        {/* Domain Performance Breakdown */}
        <div className="cbt-breakdown-section">
          <h2 className="breakdown-heading">Official Subtest Domain Performance</h2>
          <div className="breakdown-cards-grid">
            {Object.entries(domainStats).map(([domainName, stat]) => {
              const domainPct = Math.round((stat.correct / stat.total) * 100);
              return (
                <div key={domainName} className="sec-breakdown-card">
                  <div className="sec-card-header">
                    <span className="sec-card-title">{domainName}</span>
                    <span className="sec-card-score">{stat.correct} / {stat.total} ({domainPct}%)</span>
                  </div>
                  <div className="sec-bar-track">
                    <div 
                      className={`sec-bar-fill ${domainPct >= 70 ? 'good' : domainPct >= 50 ? 'medium' : 'low'}`}
                      style={{ width: `${domainPct}%` }}
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
            onClick={() => handleStartExam(selectedLevelKey, selectedSubtestFilter)}
          >
            <Shuffle size={18} />
            <span>Retake With New Random Question Pool (Uusi arvottu koesarja)</span>
          </button>

          <button 
            className="cbt-btn-hub"
            onClick={() => setViewState('hub')}
          >
            <BookOpen size={18} />
            <span>Choose Another Examination Level or Subtest</span>
          </button>
        </div>

        {/* Detailed Comprehensive Review */}
        <div className="cbt-answer-key-section">
          <div className="answer-key-header">
            <div className="ak-left">
              <h2>Comprehensive Examination Review & Model Solutions</h2>
              <p>Review your answers alongside official model texts, audio scripts, and pedagogical grammar explanations.</p>
            </div>

            {/* Filter Tabs */}
            <div className="ak-filter-pills">
              <button 
                className={`ak-pill ${resultFilter === 'all' ? 'active' : ''}`}
                onClick={() => setResultFilter('all')}
              >
                All Tasks ({totalQuestions})
              </button>
              <button 
                className={`ak-pill ${resultFilter === 'incorrect' ? 'active' : ''}`}
                onClick={() => setResultFilter('incorrect')}
              >
                Review Items ({totalQuestions - scoreableCorrect})
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
              const isScoreable = Boolean(q.options && q.correctAnswer);
              const isCorrect = isScoreable ? userAnswer === q.correctAnswer : Boolean(userAnswer);
              const originalIndex = activeSession.questions.findIndex(item => item.id === q.id);

              return (
                <div 
                  key={q.id} 
                  className={`ak-card ${isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <div className="ak-card-top">
                    <div className="ak-tag-group">
                      <span className="ak-num-badge">Task {originalIndex + 1}</span>
                      <span className="ak-sec-tag">{q.title || q.subtest || q.section}</span>
                      {flaggedIds.has(q.id) && <span className="ak-flag-tag"><Flag size={12} /> Flagged</span>}
                    </div>

                    <span className={`ak-verdict-pill ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? (
                        <><CheckCircle2 size={16} /> Completed / Correct</>
                      ) : (
                        <><AlertCircle size={16} /> Needs Review</>
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
                        onClick={() => handlePlayNativeSpeaker(q.audioPhrase)}
                      >
                        <Volume2 size={16} /> Kuuntele äänite uudelleen
                      </button>
                      <span className="ak-audio-text">"{q.audioPhrase}"</span>
                    </div>
                  )}

                  {/* Multiple Choice Answers Review */}
                  {isScoreable && (
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
                  )}

                  {/* Writing Task Review with Model Response */}
                  {q.modelResponse && (
                    <div className="ak-writing-review-grid">
                      <div className="user-writing-box">
                        <span className="ak-label">Your Submitted Text:</span>
                        <div className="user-text-content">
                          {userAnswer || <em>Ei kirjoitettua vastausta (No response submitted)</em>}
                        </div>
                        <span className="user-text-words">Sanamäärä: {countWords(userAnswer)} sanaa</span>
                      </div>

                      <div className="model-writing-box">
                        <span className="ak-label">Official Model Answer (Mallivastaus):</span>
                        <div className="model-text-content">{q.modelResponse}</div>
                      </div>
                    </div>
                  )}

                  {/* Speaking Task Review with Model Answer */}
                  {q.modelAnswer && (
                    <div className="ak-speaking-review-box">
                      <span className="ak-label">Official Model Spoken Answer (Esimerkkivastaus suulliseen tehtävään):</span>
                      <div className="model-spoken-text">{q.modelAnswer}</div>
                      <button 
                        className="ak-play-model-btn"
                        onClick={() => handlePlayNativeSpeaker(q.modelAnswer)}
                      >
                        <Volume2 size={16} /> Kuuntele mallivastaus ääneen puhuttuna
                      </button>
                    </div>
                  )}

                  {q.explanation && (
                    <div className="ak-explanation-box">
                      <HelpCircle size={16} className="exp-icon" />
                      <div className="exp-content">
                        <strong>Official Pedagogical Explanation:</strong>
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
