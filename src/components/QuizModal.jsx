'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { soundEngine } from '../lib/audio';
import { LANGUAGES } from '../data/languages';
import { 
  X, 
  Heart, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  Award,
  Edit3
} from 'lucide-react';
import { useAdminContent } from '../context/AdminContentContext';

// Helper to safely get native/foreign term from a pair
function getPairNative(p) {
  if (!p) return '';
  if (typeof p === 'string') return p;
  if (Array.isArray(p)) return p[0] || '';
  return p.native ?? p.pidgin ?? p.term ?? p.word ?? p.right ?? p.left ?? '';
}

// Helper to safely get english/translation term from a pair
function getPairEnglish(p) {
  if (!p) return '';
  if (typeof p === 'string') return p;
  if (Array.isArray(p)) return p[1] || p[0] || '';
  return p.english ?? p.meaning ?? p.translation ?? p.definition ?? p.left ?? p.right ?? '';
}

// Creates a guaranteed derangement (a shuffle where no item is at the same row/index as the native word)
function derangePairs(pairs) {
  if (!pairs || pairs.length <= 1) return pairs ? [...pairs] : [];

  let shuffled = [...pairs];
  for (let attempt = 0; attempt < 100; attempt++) {
    shuffled = [...pairs].sort(() => Math.random() - 0.5);
    const hasOverlap = shuffled.some((item, idx) => getPairNative(item) === getPairNative(pairs[idx]));
    if (!hasOverlap) {
      return shuffled;
    }
  }

  // Deterministic fallback: cyclic shift by 1 position (guaranteed zero matching row overlaps)
  return pairs.slice(1).concat(pairs.slice(0, 1));
}

// Fisher-Yates shuffle to randomize questions order each time a lesson starts
function shuffleQuestions(questions) {
  if (!questions || questions.length <= 1) return questions ? [...questions] : [];
  const copy = [...questions];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function QuizModal() {
  const { 
    activeLesson, 
    closeLesson, 
    hearts, 
    onAnswerCorrect, 
    onAnswerWrong, 
    completeLesson,
    combo,
    currentLanguage
  } = useGame();

  const { isAdmin, openQuickEdit, overrides } = useAdminContent();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [scrambleAnswer, setScrambleAnswer] = useState([]);
  const [availableTokens, setAvailableTokens] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedNative, setSelectedNative] = useState(null);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [feedbackStatus, setFeedbackStatus] = useState(null); // 'correct' | 'wrong' | null
  const [isFinished, setIsFinished] = useState(false);
  const [earnedLessonXp, setEarnedLessonXp] = useState(0);

  // Review mode tracking: ensures learner masters every mistake before advancing
  const [missedQuestionIds, setMissedQuestionIds] = useState([]);
  const [isReviewPhase, setIsReviewPhase] = useState(false);
  const [hadReview, setHadReview] = useState(false);

  const questions = shuffledQuestions.length > 0 ? shuffledQuestions : (activeLesson?.questions || []);
  const rawQ = questions[currentIndex];
  const currentQ = useMemo(() => {
    if (!rawQ) return null;
    const qOverride = overrides?.questions?.[rawQ.id] || {};
    return { ...rawQ, ...qOverride };
  }, [rawQ, overrides?.questions]);

  // Guaranteed deranged shuffle of pairs for matching question
  const shuffledEnglishPairs = useMemo(() => {
    if (currentQ?.type === 'matching' && currentQ?.pairs) {
      return derangePairs(currentQ.pairs);
    }
    return [];
  }, [currentQ?.id, currentQ?.prompt]);

  // Randomize question order from the beginning every time a lesson is launched
  useEffect(() => {
    if (activeLesson?.questions) {
      setCurrentIndex(0);
      setIsFinished(false);
      setEarnedLessonXp(0);
      setSelectedOption(null);
      setFeedbackStatus(null);
      setMatchedPairs([]);
      setSelectedNative(null);
      setSelectedEnglish(null);
      setMissedQuestionIds([]);
      setIsReviewPhase(false);
      setHadReview(false);
      setShuffledQuestions(shuffleQuestions(activeLesson.questions));
    } else {
      setShuffledQuestions([]);
    }
  }, [activeLesson]);

  // Initialize question state whenever current index or current question changes
  useEffect(() => {
    if (!currentQ) return;
    setSelectedOption(null);
    setFeedbackStatus(null);
    setSelectedNative(null);
    setSelectedEnglish(null);

    if (currentQ.type === 'scramble') {
      setScrambleAnswer([]);
      // Shuffle tokens for sentence builder
      const shuffled = [...currentQ.tokens].sort(() => Math.random() - 0.5);
      setAvailableTokens(shuffled.map((word, i) => ({ id: `${word}-${i}`, word })));
    } else if (currentQ.type === 'matching') {
      setMatchedPairs([]);
    } else if (currentQ.type === 'audio_listen') {
      // Auto-play audio on question load
      soundEngine.speak(currentQ.phrase, currentLanguage);
    }
  }, [currentIndex, currentQ, currentLanguage]);

  if (!activeLesson || !currentQ) return null;

  const playAudioPrompt = () => {
    if (currentQ.phrase) {
      soundEngine.speak(currentQ.phrase, currentLanguage);
    } else if (currentQ.prompt) {
      soundEngine.speak(currentQ.prompt, currentLanguage);
    }
  };

  // Scramble word token clicks
  const handleSelectToken = (tokenObj) => {
    if (feedbackStatus) return;
    setScrambleAnswer([...scrambleAnswer, tokenObj]);
    setAvailableTokens(availableTokens.filter(t => t.id !== tokenObj.id));
  };

  const handleReturnToken = (tokenObj) => {
    if (feedbackStatus) return;
    setScrambleAnswer(scrambleAnswer.filter(t => t.id !== tokenObj.id));
    setAvailableTokens([...availableTokens, tokenObj]);
  };

  // Pair matching handlers
  const handleMatchSelect = (type, val) => {
    if (feedbackStatus) return;
    if (type === 'native') {
      setSelectedNative(val);
      if (selectedEnglish) {
        checkPair(val, selectedEnglish);
      }
    } else {
      setSelectedEnglish(val);
      if (selectedNative) {
        checkPair(selectedNative, val);
      }
    }
  };

  const checkPair = (nativeVal, engVal) => {
    const pairs = currentQ.pairs || [];
    const pairFound = pairs.find(p => {
      const n = getPairNative(p);
      const e = getPairEnglish(p);
      return (n === nativeVal && e === engVal) || (n === engVal && e === nativeVal);
    });
    if (pairFound) {
      soundEngine.playSuccess();
      const matchedKey = getPairNative(pairFound);
      const newMatches = [...matchedPairs, matchedKey];
      setMatchedPairs(newMatches);
      setSelectedNative(null);
      setSelectedEnglish(null);
      if (newMatches.length === pairs.length) {
        // All pairs matched!
        handleCheckAnswer(true);
      }
    } else {
      soundEngine.playError();
      setSelectedNative(null);
      setSelectedEnglish(null);
    }
  };

  // Validate answer
  const handleCheckAnswer = (isPairComplete = false) => {
    if (feedbackStatus) return;

    let isCorrect = false;

    if (currentQ.type === 'multiple_choice' || currentQ.type === 'audio_listen') {
      isCorrect = selectedOption === currentQ.correctAnswer;
    } else if (currentQ.type === 'scramble') {
      const built = scrambleAnswer.map(t => t.word);
      isCorrect = JSON.stringify(built) === JSON.stringify(currentQ.correctTokens);
    } else if (currentQ.type === 'fill_blank') {
      isCorrect = selectedOption === currentQ.correctAnswer;
    } else if (currentQ.type === 'matching') {
      isCorrect = isPairComplete;
    }

    if (isCorrect) {
      const gained = onAnswerCorrect(15);
      setEarnedLessonXp(prev => prev + gained);
      setFeedbackStatus('correct');
      // If in review mode, mark this missed question as successfully mastered
      if (isReviewPhase) {
        setMissedQuestionIds(prev => prev.filter(id => id !== currentQ.id));
      }
    } else {
      onAnswerWrong();
      setFeedbackStatus('wrong');
      // Track this question to be reviewed at the end of the lesson
      setMissedQuestionIds(prev => (prev.includes(currentQ.id) ? prev : [...prev, currentQ.id]));
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Check if there are questions the learner didn't get right
      if (missedQuestionIds.length > 0) {
        const toReview = (activeLesson.questions || []).filter(q => missedQuestionIds.includes(q.id));
        if (toReview.length > 0) {
          setIsReviewPhase(true);
          setHadReview(true);
          setShuffledQuestions(shuffleQuestions(toReview));
          setCurrentIndex(0);
          soundEngine.playStreak();
          return;
        }
      }

      // All questions (and any missed reviews) completed!
      completeLesson(activeLesson.id, activeLesson.xp || 25);
      setIsFinished(true);
    }
  };

  const progressPercent = ((currentIndex + (feedbackStatus === 'correct' ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal-container">
        {/* Top Header */}
        <div className="quiz-top-bar">
          <button 
            className="quiz-close-btn" 
            onClick={closeLesson}
            aria-label="Exit lesson"
          >
            <X size={22} />
          </button>

          {/* Progress bar */}
          <div className="quiz-progress-track">
            <div 
              className="quiz-progress-fill" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Hearts indicator */}
          <div className="quiz-hearts-pill">
            <Heart size={20} className="heart-fill-icon" />
            <span>{hearts}</span>
          </div>

          {/* Admin Edit Current Question Button */}
          {isAdmin && currentQ && !isFinished && (
            <button
              className="admin-quiz-edit-btn"
              onClick={() => openQuickEdit(currentQ, 'question', { langId: currentLanguage, lessonId: activeLesson?.id })}
              title="Admin: Edit this question on the fly"
              id="admin-quiz-edit-btn"
            >
              <Edit3 size={14} />
              <span>Edit Question</span>
            </button>
          )}
        </div>

        {/* Finished Screen */}
        {isFinished ? (
          <div className="lesson-finished-screen">
            <div className="celebration-mascot-wrap">
              <img 
                src="/images/mascot.jpg" 
                alt="FliksLingo celebration" 
                className="mascot-finish-img"
              />
            </div>
            <div className="trophy-sparkle-row">
              <Sparkles size={28} className="gold-sparkle" />
              <h2 className="finish-title">Lesson Completed!</h2>
              <Sparkles size={28} className="gold-sparkle" />
            </div>
            <p className="finish-subtitle">
              You are mastering {LANGUAGES[currentLanguage]?.name || 'a new language'} like a champion!
            </p>

            {hadReview && (
              <div className="review-mastered-note">
                <Sparkles size={16} />
                <span>All missed questions reviewed & mastered!</span>
              </div>
            )}

            <div className="finish-metrics-grid">
              <div className="finish-metric-card">
                <span className="metric-label">XP Gained</span>
                <span className="metric-val xp-val">+{earnedLessonXp + (activeLesson.xp || 20)} XP</span>
              </div>
              <div className="finish-metric-card">
                <span className="metric-label">Accuracy</span>
                <span className="metric-val">100% Mastered</span>
              </div>
              <div className="finish-metric-card">
                <span className="metric-label">Combo Multiplier</span>
                <span className="metric-val combo-val">{combo}x Streak</span>
              </div>
            </div>

            <button 
              className="continue-big-btn finish-btn"
              onClick={closeLesson}
            >
              Continue Learning <ArrowRight size={20} />
            </button>
          </div>
        ) : (
          /* Active Question Screen */
          <div className="quiz-body-content">
            {/* Combo indicator */}
            {combo > 1 && (
              <div className="combo-floating-badge">
                🔥 {combo} In a Row! Keep the flame alive!
              </div>
            )}

            {/* Review mode indicator */}
            {isReviewPhase && (
              <div className="review-phase-badge">
                <RotateCcw size={15} />
                <span>Review Mode · Practice what you missed ({currentIndex + 1} of {questions.length})</span>
              </div>
            )}

            {/* Question prompt header */}
            <div className="question-prompt-header">
              <h2 className="q-prompt-text">{currentQ.prompt}</h2>

              {currentQ.type === 'audio_listen' && (
                <div className="audio-prompt-box">
                  <button 
                    className="big-audio-play-btn"
                    onClick={playAudioPrompt}
                    aria-label="Play audio snippet"
                  >
                    <Volume2 size={36} />
                  </button>
                  <span className="audio-tap-hint">Tap to listen to pronunciation</span>
                </div>
              )}
            </div>

            {/* Question Formats */}
            <div className="question-interactive-area">
              {/* 1. Multiple Choice & Audio Listen */}
              {(currentQ.type === 'multiple_choice' || currentQ.type === 'audio_listen') && (
                <div className="options-grid">
                  {currentQ.options.map((opt, idx) => (
                    <button
                      key={idx}
                      className={`option-card-btn ${selectedOption === opt ? 'selected' : ''}`}
                      onClick={() => !feedbackStatus && setSelectedOption(opt)}
                      disabled={feedbackStatus !== null}
                    >
                      <span className="option-index">{idx + 1}</span>
                      <span className="option-text">{opt}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* 2. Scramble / Sentence Builder */}
              {currentQ.type === 'scramble' && (
                <div className="scramble-builder-area">
                  {/* Target constructed sentence line */}
                  <div className="scramble-drop-line">
                    {scrambleAnswer.length === 0 ? (
                      <span className="drop-placeholder">Tap words below to arrange your sentence</span>
                    ) : (
                      scrambleAnswer.map((tok) => (
                        <button
                          key={tok.id}
                          className="word-token-chip active"
                          onClick={() => handleReturnToken(tok)}
                        >
                          {tok.word}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Available word bank */}
                  <div className="word-bank-tray">
                    {availableTokens.map((tok) => (
                      <button
                        key={tok.id}
                        className="word-token-chip"
                        onClick={() => handleSelectToken(tok)}
                      >
                        {tok.word}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Matching Pairs */}
              {currentQ.type === 'matching' && (
                <div className="matching-columns-grid">
                  <div className="matching-col">
                    <span className="col-label">Native Phrase</span>
                    {(currentQ.pairs || []).map((p, i) => {
                      const nativeText = getPairNative(p);
                      const isMatched = matchedPairs.includes(nativeText);
                      const isSelected = selectedNative === nativeText;
                      return (
                        <button
                          key={i}
                          className={`match-tile-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                          onClick={() => !isMatched && handleMatchSelect('native', nativeText)}
                          disabled={isMatched}
                        >
                          {nativeText}
                        </button>
                      );
                    })}
                  </div>

                  <div className="matching-col">
                    <span className="col-label">English Translation</span>
                    {(shuffledEnglishPairs.length > 0 ? shuffledEnglishPairs : (currentQ.pairs || [])).map((p, i) => {
                      const nativeKey = getPairNative(p);
                      const englishText = getPairEnglish(p);
                      const isMatched = matchedPairs.includes(nativeKey);
                      const isSelected = selectedEnglish === englishText;
                      return (
                        <button
                          key={`${englishText}-${i}`}
                          className={`match-tile-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                          onClick={() => !isMatched && handleMatchSelect('english', englishText)}
                          disabled={isMatched}
                        >
                          {englishText}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Fill in the Blank */}
              {currentQ.type === 'fill_blank' && (() => {
                const raw = currentQ.sentence || currentQ.prompt || '';
                const normalized = raw.includes('___') ? raw : raw.replace(/_{3,}/g, '___');
                const parts = normalized.includes('___') ? normalized.split('___') : [normalized, ''];
                return (
                  <div className="fill-blank-area">
                    <div className="sentence-with-blank">
                      {parts.map((part, i, arr) => (
                        <React.Fragment key={i}>
                          <span>{part}</span>
                          {i < arr.length - 1 && (
                            <span className={`blank-slot ${selectedOption ? 'filled' : ''}`}>
                              {selectedOption || '_____'}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="blank-options-row">
                      {(currentQ.options || []).map((opt, i) => (
                        <button
                          key={i}
                          className={`blank-option-chip ${selectedOption === opt ? 'selected' : ''}`}
                          onClick={() => !feedbackStatus && setSelectedOption(opt)}
                          disabled={feedbackStatus !== null}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Bottom Evaluation Tray */}
        {!isFinished && (
          <div className={`quiz-footer-tray ${feedbackStatus || ''}`}>
            <div className="footer-tray-inner">
              {feedbackStatus === 'correct' && (
                <div className="feedback-message correct">
                  <CheckCircle2 size={30} className="feedback-icon" />
                  <div className="feedback-text">
                    <strong>{isReviewPhase ? 'Great comeback! You mastered it!' : 'Excellent! Correct answer!'}</strong>
                    {currentQ.explanation && <p className="explanation-text">{currentQ.explanation}</p>}
                  </div>
                </div>
              )}

              {feedbackStatus === 'wrong' && (
                <div className="feedback-message wrong">
                  <XCircle size={30} className="feedback-icon" />
                  <div className="feedback-text">
                    <strong>Not quite!</strong>
                    {currentQ.correctAnswer && (
                      <p className="correct-answer-text">
                        Correct answer: <strong>{currentQ.correctAnswer}</strong>
                      </p>
                    )}
                    {currentQ.explanation && <p className="explanation-text">{currentQ.explanation}</p>}
                  </div>
                </div>
              )}

              {!feedbackStatus ? (
                <button
                  className="check-answer-btn"
                  onClick={() => handleCheckAnswer(false)}
                  disabled={
                    (currentQ.type === 'scramble' && scrambleAnswer.length === 0) ||
                    ((currentQ.type === 'multiple_choice' || currentQ.type === 'audio_listen' || currentQ.type === 'fill_blank') && !selectedOption) ||
                    (currentQ.type === 'matching' && matchedPairs.length < currentQ.pairs.length)
                  }
                  id="quiz-check-answer-button"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  className={`continue-big-btn ${feedbackStatus}`}
                  onClick={handleNextQuestion}
                  id="quiz-continue-button"
                >
                  Continue <ArrowRight size={20} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
