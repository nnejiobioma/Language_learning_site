'use client';

import React, { useState, useEffect } from 'react';
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
  Award
} from 'lucide-react';

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [scrambleAnswer, setScrambleAnswer] = useState([]);
  const [availableTokens, setAvailableTokens] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedNative, setSelectedNative] = useState(null);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [feedbackStatus, setFeedbackStatus] = useState(null); // 'correct' | 'wrong' | null
  const [isFinished, setIsFinished] = useState(false);
  const [earnedLessonXp, setEarnedLessonXp] = useState(0);

  const questions = activeLesson?.questions || [];
  const currentQ = questions[currentIndex];

  // Initialize question state whenever current index changes
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
  }, [currentIndex, activeLesson, currentLanguage]);

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

  const checkPair = (native, eng) => {
    const pairFound = currentQ.pairs.find(p => p.native === native && p.english === eng);
    if (pairFound) {
      soundEngine.playSuccess();
      const newMatches = [...matchedPairs, native];
      setMatchedPairs(newMatches);
      setSelectedNative(null);
      setSelectedEnglish(null);
      if (newMatches.length === currentQ.pairs.length) {
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
    } else {
      onAnswerWrong();
      setFeedbackStatus('wrong');
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Completed lesson!
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
        </div>

        {/* Finished Screen */}
        {isFinished ? (
          <div className="lesson-finished-screen">
            <div className="celebration-mascot-wrap">
              <img 
                src="/images/mascot.jpg" 
                alt="FiksLingo celebration" 
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
                    {currentQ.pairs.map((p, i) => {
                      const isMatched = matchedPairs.includes(p.native);
                      const isSelected = selectedNative === p.native;
                      return (
                        <button
                          key={i}
                          className={`match-tile-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                          onClick={() => !isMatched && handleMatchSelect('native', p.native)}
                          disabled={isMatched}
                        >
                          {p.native}
                        </button>
                      );
                    })}
                  </div>

                  <div className="matching-col">
                    <span className="col-label">English Translation</span>
                    {/* Shuffle right column for challenge */}
                    {currentQ.pairs.map((p, i) => {
                      const isMatched = matchedPairs.includes(p.native);
                      const isSelected = selectedEnglish === p.english;
                      return (
                        <button
                          key={i}
                          className={`match-tile-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                          onClick={() => !isMatched && handleMatchSelect('english', p.english)}
                          disabled={isMatched}
                        >
                          {p.english}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Fill in the Blank */}
              {currentQ.type === 'fill_blank' && (
                <div className="fill-blank-area">
                  <div className="sentence-with-blank">
                    {currentQ.sentence.split('___').map((part, i, arr) => (
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
                    {currentQ.options.map((opt, i) => (
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
              )}
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
                    <strong>Excellent! Correct answer!</strong>
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
