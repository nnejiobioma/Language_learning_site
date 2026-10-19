'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';
import { generateDynamicExam, examPools } from '../data/cbtExamEngine';
import { generateFrenchDynamicExam, frenchExamPools } from '../data/cbtFrenchExamEngine';
import { generateSpanishDynamicExam, spanishExamPools } from '../data/cbtSpanishExamEngine';
import { generateGermanDynamicExam, germanExamPools } from '../data/cbtGermanExamEngine';
import { generatePortugueseDynamicExam, portugueseExamPools } from '../data/cbtPortugueseExamEngine';
import { getExamsForLanguage, pidginExams } from '../data/cbtExams';
import { 
  getUserSeenQuestionIds, 
  recordUserSeenQuestions, 
  getUserAttemptCount, 
  incrementUserAttemptCount, 
  selectBrandNewSet 
} from '../lib/cbtQuestionManager';
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
  Square,
  UserCheck
} from 'lucide-react';

export default function CBTExamView() {
  const { currentLanguage } = useGame();
  const { user, profile, saveProfileData } = useAuth();
  const langData = LANGUAGES[currentLanguage] || LANGUAGES.spanish || LANGUAGES.pidgin;

  const isPortuguese = currentLanguage === 'portuguese';
  const isGerman = currentLanguage === 'german';
  const isSpanish = currentLanguage === 'spanish';
  const isFinnish = currentLanguage === 'finnish';
  const isFrench = currentLanguage === 'french';
  const isPidgin = currentLanguage === 'pidgin';

  const userAttemptNumber = getUserAttemptCount(user?.uid);

  // Level selector for Spanish DELE/SIELE, French DELF/DALF, Finnish YKI, or Nigerian Pidgin NERDC
  const [selectedLevelKey, setSelectedLevelKey] = useState(
    isPortuguese ? 'cipleA2' : isGerman ? 'dtzA2B1' : isSpanish ? 'deleB1B2' : isFrench ? 'delfB1B2' : isPidgin ? 'p-cbt-foundational' : 'keskitaso'
  );
  const [selectedSubtestFilter, setSelectedSubtestFilter] = useState('all'); // 'all' | 'reading' | 'writing' | 'listening' | 'speaking'

  // Synchronize tier default when language changes
  useEffect(() => {
    if (isPortuguese && !['cipleA2'].includes(selectedLevelKey)) {
      setSelectedLevelKey('cipleA2');
      setSelectedSubtestFilter('all');
    } else if (isGerman && !['dtzA2B1'].includes(selectedLevelKey)) {
      setSelectedLevelKey('dtzA2B1');
      setSelectedSubtestFilter('all');
    } else if (isSpanish && !['deleA1A2', 'deleB1B2', 'deleC1C2'].includes(selectedLevelKey)) {
      setSelectedLevelKey('deleB1B2');
      setSelectedSubtestFilter('all');
    } else if (isFrench && !['delfA1A2', 'delfB1B2', 'dalfC1C2', 'tcfTefDcl'].includes(selectedLevelKey)) {
      setSelectedLevelKey('delfB1B2');
      setSelectedSubtestFilter('all');
    } else if (isFinnish && !['perustaso', 'keskitaso', 'ylintaso'].includes(selectedLevelKey)) {
      setSelectedLevelKey('keskitaso');
      setSelectedSubtestFilter('all');
    } else if (isPidgin && !['p-cbt-foundational', 'p-cbt-advanced'].includes(selectedLevelKey)) {
      setSelectedLevelKey('p-cbt-foundational');
      setSelectedSubtestFilter('all');
    }
  }, [currentLanguage, isPortuguese, isGerman, isSpanish, isFrench, isFinnish, isPidgin]);

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

  // Start an exam session with guaranteed fresh/unseen question set for logged-in users
  const handleStartExam = (levelKey = selectedLevelKey, subtestFilter = selectedSubtestFilter) => {
    const seenIds = getUserSeenQuestionIds(user?.uid, profile);
    let session;

    if (isPortuguese) {
      session = generatePortugueseDynamicExam(levelKey, subtestFilter, seenIds);
    } else if (isGerman) {
      session = generateGermanDynamicExam(levelKey, subtestFilter, seenIds);
    } else if (isSpanish) {
      session = generateSpanishDynamicExam(levelKey, subtestFilter, seenIds);
    } else if (isFinnish) {
      session = generateDynamicExam(levelKey, subtestFilter, seenIds);
    } else if (isFrench) {
      session = generateFrenchDynamicExam(levelKey, subtestFilter, seenIds);
    } else if (isPidgin) {
      const targetExam = pidginExams.find(e => e.id === levelKey) || pidginExams[0];
      let availableQuestions = targetExam.questions || [];
      let duration = targetExam.timeLimitMinutes || 60;
      let subtestTitle = "Full Certification (All 3 Sections • 180 Questions)";

      if (subtestFilter && subtestFilter !== 'all') {
        const matching = (targetExam.questions || []).filter(q => q.section === subtestFilter);
        if (matching.length > 0) {
          availableQuestions = matching;
          duration = 35;
          subtestTitle = `${subtestFilter} (Section Focus)`;
        }
      }

      // Prioritize unseen questions in Nigerian Pidgin pool as well
      const desiredCount = subtestFilter === 'all' ? Math.min(60, availableQuestions.length) : Math.min(30, availableQuestions.length);
      const pidginResult = selectBrandNewSet(availableQuestions, desiredCount, seenIds);

      session = {
        sessionId: `${targetExam.id}-${Date.now()}`,
        title: targetExam.title,
        badge: targetExam.badgeText || targetExam.level,
        durationMinutes: duration,
        totalQuestions: pidginResult.selected.length,
        questions: pidginResult.selected,
        subtestLabel: subtestTitle,
        isBrandNewSession: pidginResult.isBrandNew
      };
    } else {
      // Fallback for other languages from static paper catalog
      const availableExams = getExamsForLanguage(currentLanguage);
      const chosen = availableExams.find(e => e.id === levelKey) || availableExams[0] || availableExams;
      const dynamicRes = selectBrandNewSet(chosen.questions, Math.min(20, chosen.questions.length), seenIds);
      session = {
        sessionId: `${chosen.id}-${Date.now()}`,
        title: chosen.title,
        badge: chosen.badgeText || chosen.level,
        durationMinutes: chosen.timeLimitMinutes || 25,
        totalQuestions: dynamicRes.selected.length,
        questions: dynamicRes.selected,
        subtestLabel: "General Language Proficiency Examination",
        isBrandNewSession: dynamicRes.isBrandNew
      };
    }

    // Record newly assigned question IDs into the logged-in user's seen history
    if (session?.questions?.length > 0) {
      recordUserSeenQuestions(user?.uid, session.questions.map(q => q.id), saveProfileData, profile);
      if (user?.uid) {
        incrementUserAttemptCount(user?.uid);
      }
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
            const currentQ = activeSession?.questions[currentQuestionIndex];
            if (currentQ) {
              setAnswers(prevAns => ({ ...prevAns, [currentQ.id]: "Respuesta oral grabada (Spoken response recorded)" }));
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
    setAnswers(prev => ({ ...prev, [question.id]: "Respuesta oral grabada (Spoken response recorded)" }));
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

  const handleSelectOption = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option
    }));
  };

  const handleWritingInput = (questionId, text) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: text
    }));
  };

  const handleClearAnswer = (questionId) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

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

  const handlePlayListeningAudio = (question) => {
    const currentPlays = audioPlaysCount[question.id] || 0;
    const max = question.maxPlays || (selectedLevelKey === 'deleC1C2' || selectedLevelKey === 'ylintaso' ? 1 : 2);

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

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const countWords = (str = '') => {
    const trimmed = str.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

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
            <span>
              {isPortuguese
                ? "Centro Oficial de Exames CAPLE & PLA de Português (Universidade de Lisboa)"
                : isGerman
                ? "Offizielles CBT-Prüfungszentrum für Deutsch (BAMF & Goethe-Institut)"
                : isSpanish
                ? "Centro Oficial de Evaluación CBT & SIELE de Español (Instituto Cervantes)"
                : isFrench 
                  ? "Centre Officiel d'Examen CRT & CBT de Français" 
                  : "Official Computer Based Testing (CBT) Center"}
            </span>
          </div>

          <h1 className="cbt-hero-title">
            {isPortuguese
              ? "Simulador Oficial de Exames CAPLE CIPLE (A2) & Português Língua de Acolhimento"
              : isGerman
              ? "Offizieller Prüfungssimulator: BAMF DTZ (A2–B1) & Goethe-Zertifikat"
              : isSpanish
              ? "Simulador Oficial de Exámenes DELE & SIELE (Instituto Cervantes • MCER A1–C2)"
              : isFrench 
                ? "Simulateur Officiel de Tests & Diplômes de Français (DELF • DALF • TCF • TEF • DCL)"
                : isFinnish 
                  ? "Official Finnish YKI Examination Simulator" 
                  : isPidgin
                    ? "NERDC Nigerian Pidgin Standardized CBT Examination Center"
                    : `${langData.name} Standardized Language Examination Center`}
          </h1>

          <p className="cbt-hero-subtitle">
            {isPortuguese ? (
              <>
                Simulador oficial de exames de proficiência estritamente alinhado com o <strong>Quadro Europeu Comum de Referência (QECR)</strong>, as matrizes oficiais do <strong>CAPLE (Universidade de Lisboa)</strong> e as normas do <strong>IEFP / DGE (Português Língua de Acolhimento PLA)</strong>. Prepare a certificação exigida para a <strong>Nacionalidade Portuguesa</strong> e <strong>Autorização de Residência Permanente</strong> através das quatro provas oficiais: <strong>Compreensão da Leitura</strong>, <strong>Produção Escrita</strong>, <strong>Compreensão do Oral</strong> e <strong>Expressão Oral</strong> no laboratório interativo. Cada tentativa de utilizador autenticado gera um <strong>conjunto de exame 100% novo e inédito</strong>!
              </>
            ) : isGerman ? (
              <>
                Offizieller computergestützter Prüfungssimulator, streng ausgerichtet nach dem <strong>BAMF-Rahmencurriculum für Integrationskurse (DaZ)</strong>, den Richtlinien des <strong>Goethe-Instituts</strong> und dem <strong>GER (Gemeinsamer Europäischer Referenzrahmen)</strong>. Trainieren Sie alle 4 Fertigkeiten: <strong>Leseverstehen</strong>, <strong>Schriftlicher Ausdruck</strong>, <strong>Hörverstehen</strong> und <strong>Mündliche Paarprüfung</strong>. Jeder angemeldete Durchgang liefert einen <strong>garantiert neuen Aufgabensatz</strong>!
              </>
            ) : isSpanish ? (
              <>
                Simulador de exámenes de alto rendimiento estrictamente alineado con el <strong>Marco Común Europeo de Referencia (MCER)</strong> y los estándares del <strong>Instituto Cervantes</strong>. Practique las 4 pruebas oficiales: <strong>Comprensión de lectura</strong>, <strong>Expresión e interacción escritas</strong>, <strong>Comprensión auditiva</strong> y <strong>Expresión e interacción orales</strong>. ¡Cada intento de un usuario registrado genera un <strong>conjunto de examen 100% nuevo</strong>!
              </>
            ) : isFrench ? (
              <>
                Simulateur certifié complet aligné sur le <strong>Cadre Européen Commun de Référence pour les Langues (CECR A1 à C2)</strong>. Préparez avec rigueur les diplômes d'État à vie du Ministère de l'Éducation Nationale (<strong>DELF A1–B2 & DALF C1–C2</strong> par France Éducation International), les épreuves officielles de <strong>naturalisation et titre de séjour (B1/B2)</strong>, les tests informatisés de mobilité internationale (<strong>TCF IRN</strong>, <strong>TEF Canada / Québec</strong> par la Chambre de Commerce et d'Industrie de Paris IdF) et les diplômes professionnels pour adultes (<strong>DCL</strong>). Génération aléatoire et dynamique d'épreuves authentiques à chaque tentative !
              </>
            ) : isFinnish ? (
              <>
                Simulate real standardized language examinations (such as the official Finnish <strong>YKI (Yleinen kielitutkinto)</strong> National Certificate for citizenship and professional qualification). Dynamic random test generation ensures a brand new set of authentic questions on every attempt!
              </>
            ) : isPidgin ? (
              <>
                Standardized Computer-Based Testing (CBT) for Nigerian Pidgin aligned with the <strong>NERDC 4-Tier Language Framework</strong> and West African Pidgin literature standards. Practice <strong>60 Questions in each distinct section</strong>, or undertake the comprehensive 180-Question Certification!
              </>
            ) : (
              <>
                Simulate authentic standardized language examinations testing reading comprehension, grammar structures, listening and situational responses.
              </>
            )}
          </p>

          {/* User Attempt Status Badge */}
          <div className="cbt-learner-status-pill">
            <Sparkles size={16} />
            <span>
              {user ? (
                isPortuguese ? (
                  <>Sessão ativa: <strong>{user.displayName || user.email}</strong> • Tentativa #{userAttemptNumber} • <strong>Conjunto 100% Novo Garantido</strong> em cada componente</>
                ) : isGerman ? (
                  <>Aktive Sitzung: <strong>{user.displayName || user.email}</strong> • Versuch #{userAttemptNumber} • <strong>Garantiert neue Prüfungsaufgaben</strong> in jedem Prüfungsteil</>
                ) : isSpanish ? (
                  <>Sesión activa: <strong>{user.displayName || user.email}</strong> • Intento #{userAttemptNumber} • <strong>Conjunto 100% Nuevo Garantizado</strong> en cada subprueba</>
                ) : isFrench ? (
                  <>Session de <strong>{user.displayName || user.email}</strong> • Tentative #{userAttemptNumber} • <strong>Nouvelles questions inédites garanties</strong></>
                ) : (
                  <>Learner Account: <strong>{user.displayName || user.email}</strong> • Attempt #{userAttemptNumber} • <strong>Brand New Set Guaranteed</strong> on each subtest</>
                )
              ) : (
                isPortuguese ? (
                  <>💡 Dica: Inicie sessão para guardar o seu histórico e garantir um conjunto 100% novo de perguntas em cada tentativa.</>
                ) : isGerman ? (
                  <>💡 Tipp: Melden Sie sich an, um Ihren Prüfungsverlauf zu sichern und bei jedem Versuch garantiert neue Aufgaben zu erhalten.</>
                ) : isSpanish ? (
                  <>💡 Consejo: Inicie sesión para registrar su historial y garantizar un conjunto 100% nuevo de preguntas en cada subprueba.</>
                ) : (
                  <>💡 Tip: Log in to save your attempt history and guarantee a brand new set of questions on every attempt.</>
                )
              )}
            </span>
          </div>
        </section>

                        {/* Level Switcher & Subtest Selection Panel for Portuguese (CAPLE CIPLE / PLA / IEFP) */}
        {isPortuguese && (
          <div className="cbt-level-control-panel">
            <div className="level-control-header">
              <div className="control-title-box">
                <Sparkles size={20} className="sparkle-icon" />
                <h3>1. Selecione o Exame Oficial de Certificação (CAPLE / IEFP)</h3>
              </div>
              <span className="control-badge">Normas Oficiais QECR • CAPLE / Universidade de Lisboa</span>
            </div>

            <div className="cbt-tier-selector-grid">
              <button
                className={`cbt-tier-card ${selectedLevelKey === 'cipleA2' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('cipleA2')}
              >
                <div className="tier-tag badge-citizenship">QECR A2 • Nacionalidade & Residência</div>
                <h4>CAPLE CIPLE (A2)</h4>
                <p className="tier-desc">Certificado Inicial de Português Língua Estrangeira: Exame oficial exigido pelo Ministério da Justiça para a Nacionalidade Portuguesa e Visto Permanente.</p>
                <span className="tier-pool-stat">Requisito Oficial de Cidadania Portuguesa</span>
              </button>
            </div>

            {/* Subtest Mode Selector */}
            <div className="subtest-mode-selector-section">
              <div className="control-title-box">
                <BookOpen size={20} className="sparkle-icon" />
                <h3>2. Escolha uma Componente Específica ou a Simulação Completa</h3>
              </div>

              <div className="subtest-pills-row">
                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('all')}
                >
                  <Sparkles size={16} />
                  <span>🌟 Simulação Oficial Completa (4 Componentes • 120 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'reading' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('reading')}
                >
                  <BookOpen size={16} />
                  <span>📖 Compreensão da Leitura (45 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'writing' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('writing')}
                >
                  <PenTool size={16} />
                  <span>✍️ Produção Escrita (45 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'listening' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('listening')}
                >
                  <Headphones size={16} />
                  <span>🎧 Compreensão do Oral (30 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'speaking' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('speaking')}
                >
                  <Mic size={16} />
                  <span>🗣️ Expressão Oral (Laboratório de Voz • 15 min)</span>
                </button>
              </div>
            </div>

            {/* Launch Banner Card */}
            <div className="cbt-launch-card">
              <div className="launch-left">
                <span className="launch-sub-tag">Gerador Dinâmico CAPLE CIPLE Pronto</span>
                <h3 className="launch-exam-title">
                  {portugueseExamPools[selectedLevelKey]?.title || "CAPLE CIPLE (A2 • Nacionalidade Portuguesa)"}
                </h3>
                <p className="launch-exam-summary">
                  Modalidade: <strong>{
                    selectedSubtestFilter === 'all' ? "Simulação Completa (Leitura + Escrita + Áudios + Expressão Oral)" :
                    selectedSubtestFilter === 'reading' ? "Compreensão da Leitura (Avisos de Condomínio, Finanças, SNS e CP)" :
                    selectedSubtestFilter === 'writing' ? "Produção Escrita (Requerimentos formais, justificação de faltas e reclamação)" :
                    selectedSubtestFilter === 'listening' ? "Compreensão do Oral (Avisos do Metro, Noticiário Antena 1 e Segurança Social)" :
                    "Expressão Oral no Laboratório (Diálogo com examinador e monólogo)"
                  }</strong>
                </p>
                <div className="launch-pills-row">
                  <span className="launch-info-chip"><Shuffle size={14} /> Conjunto 100% Inédito a Cada Tentativa</span>
                  <span className="launch-info-chip"><ShieldCheck size={14} /> Padrão Oficial CAPLE / Universidade de Lisboa</span>
                  {user && <span className="launch-info-chip"><UserCheck size={14} /> Conta Ativa ({user.displayName || user.email})</span>}
                </div>
              </div>

              <div className="launch-right">
                <button
                  className="cbt-start-hero-btn"
                  onClick={() => handleStartExam(selectedLevelKey, selectedSubtestFilter)}
                  id="launch-portuguese-exam-btn"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Iniciar Exame</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Level Switcher & Subtest Selection Panel for German (BAMF DTZ & Goethe) */}
        {isGerman && (
          <div className="cbt-level-control-panel">
            <div className="level-control-header">
              <div className="control-title-box">
                <Sparkles size={20} className="sparkle-icon" />
                <h3>1. Offizielles Prüfungsformat auswählen (BAMF / Goethe-Institut)</h3>
              </div>
              <span className="control-badge">BAMF Rahmencurriculum • GER A2–B1</span>
            </div>

            <div className="cbt-tier-selector-grid">
              <button
                className={`cbt-tier-card ${selectedLevelKey === 'dtzA2B1' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('dtzA2B1')}
              >
                <div className="tier-tag badge-citizenship">BAMF DTZ • Staatsbürgerschaft & Niederlassung</div>
                <h4>Deutsch-Test für Zuwanderer (A2–B1)</h4>
                <p className="tier-desc">Gesetzlich vorgeschriebene Abschlussprüfung für den Integrationskurs, Einbürgerung und unbefristete Niederlassungserlaubnis.</p>
                <span className="tier-pool-stat">BAMF / telc / Goethe-Zertifikat Standard</span>
              </button>
            </div>

            {/* Subtest Mode Selector */}
            <div className="subtest-mode-selector-section">
              <div className="control-title-box">
                <BookOpen size={20} className="sparkle-icon" />
                <h3>2. Prüfungsteil wählen oder Gesamtsimulation starten</h3>
              </div>

              <div className="subtest-pills-row">
                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('all')}
                >
                  <Sparkles size={16} />
                  <span>🌟 Offizielle Gesamtsimulation (4 Prüfungsteile • 116 Min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'reading' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('reading')}
                >
                  <BookOpen size={16} />
                  <span>📖 Leseverstehen (Behörden, Anzeigen, Briefe • 45 Min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'writing' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('writing')}
                >
                  <PenTool size={16} />
                  <span>✍️ Schriftlicher Ausdruck (Formelle Behördenbriefe • 30 Min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'listening' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('listening')}
                >
                  <Headphones size={16} />
                  <span>🎧 Hörverstehen (Durchsagen & Telefonate • 25 Min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'speaking' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('speaking')}
                >
                  <Mic size={16} />
                  <span>🗣️ Mündliche Prüfung (Sprachlabor • 16 Min)</span>
                </button>
              </div>
            </div>

            {/* Launch Banner Card */}
            <div className="cbt-launch-card">
              <div className="launch-left">
                <span className="launch-sub-tag">BAMF DTZ Prüfungsgenerator Bereit</span>
                <h3 className="launch-exam-title">
                  {germanExamPools[selectedLevelKey]?.title || "BAMF Deutsch-Test für Zuwanderer (DTZ A2–B1)"}
                </h3>
                <p className="launch-exam-summary">
                  Modus: <strong>{
                    selectedSubtestFilter === 'all' ? "Gesamtprüfung (Lesen + Schreiben + Hören + Mündliche Paarprüfung)" :
                    selectedSubtestFilter === 'reading' ? "Leseverstehen (Authentische Aushänge, Formulare und Mietverträge)" :
                    selectedSubtestFilter === 'writing' ? "Schriftlicher Ausdruck (Behördenreklamation, Kita-Mitteilung und Stellungnahme)" :
                    selectedSubtestFilter === 'listening' ? "Hörverstehen (Originalgetreue Bahndurchsagen, Notrufe und Anrufbeantworter)" :
                    "Mündliche Prüfung im Sprachlabor (Paardialog & Bildpräsentation)"
                  }</strong>
                </p>
                <div className="launch-pills-row">
                  <span className="launch-info-chip"><Shuffle size={14} /> 100% Neue Aufgaben bei jedem Versuch</span>
                  <span className="launch-info-chip"><ShieldCheck size={14} /> BAMF & Goethe-Institut Standard</span>
                  {user && <span className="launch-info-chip"><UserCheck size={14} /> Angemeldet ({user.displayName || user.email})</span>}
                </div>
              </div>

              <div className="launch-right">
                <button
                  className="cbt-start-hero-btn"
                  onClick={() => handleStartExam(selectedLevelKey, selectedSubtestFilter)}
                  id="launch-german-exam-btn"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Prüfung Starten</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Level Switcher & Subtest Selection Panel for Spanish (DELE / SIELE) */}
        {isSpanish && (
          <div className="cbt-level-control-panel">
            <div className="level-control-header">
              <div className="control-title-box">
                <Sparkles size={20} className="sparkle-icon" />
                <h3>1. Seleccione el Nivel o Diploma Oficial (Instituto Cervantes)</h3>
              </div>
              <span className="control-badge">Normas Oficiales MCER / DELE / SIELE</span>
            </div>

            <div className="cbt-tier-selector-grid">
              <button
                className={`cbt-tier-card ${selectedLevelKey === 'deleA1A2' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('deleA1A2')}
              >
                <div className="tier-tag">MCER A1–A2 • Inicial</div>
                <h4>DELE A1–A2</h4>
                <p className="tier-desc">Usuario Básico: Situaciones de supervivencia cotidiana, direcciones, compras, formularios y notas breves.</p>
                <span className="tier-pool-stat">Acceso & Plataforma</span>
              </button>

              <button
                className={`cbt-tier-card ${selectedLevelKey === 'deleB1B2' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('deleB1B2')}
              >
                <div className="tier-tag badge-citizenship">MCER B1–B2 • Ciudadanía & Empleo</div>
                <h4>DELE B1–B2</h4>
                <p className="tier-desc">Usuario Independiente: Exigido para la Nacionalidad Española por Residencia y habilitación profesional.</p>
                <span className="tier-pool-stat">Requisito Oficial Nacionalidad</span>
              </button>

              <button
                className={`cbt-tier-card ${selectedLevelKey === 'deleC1C2' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('deleC1C2')}
              >
                <div className="tier-tag badge-mastery">MCER C1–C2 • Superior & Académico</div>
                <h4>DELE / SIELE C1–C2</h4>
                <p className="tier-desc">Usuario Competente: Dominio operativo eficaz y maestría para universidades, oposiciones y ámbito jurídico.</p>
                <span className="tier-pool-stat">Elocuencia & Maestría Total</span>
              </button>
            </div>

            {/* Subtest Mode Selector */}
            <div className="subtest-mode-selector-section">
              <div className="control-title-box">
                <BookOpen size={20} className="sparkle-icon" />
                <h3>2. Elija una Subprueba Específica o la Simulación Completa</h3>
              </div>

              <div className="subtest-pills-row">
                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('all')}
                >
                  <Sparkles size={16} />
                  <span>🌟 Simulación Oficial Completa (4 Pruebas • 175 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'reading' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('reading')}
                >
                  <BookOpen size={16} />
                  <span>📖 Comprensión de lectura (60 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'writing' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('writing')}
                >
                  <PenTool size={16} />
                  <span>✍️ Expresión e interacción escritas (60 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'listening' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('listening')}
                >
                  <Headphones size={16} />
                  <span>🎧 Comprensión auditiva (35 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'speaking' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('speaking')}
                >
                  <Mic size={16} />
                  <span>🗣️ Expresión e interacción orales (Lab • 20 min)</span>
                </button>
              </div>
            </div>

            {/* Launch Banner Card */}
            <div className="cbt-launch-card">
              <div className="launch-left">
                <span className="launch-sub-tag">Generador Dinámico DELE / SIELE Listo</span>
                <h3 className="launch-exam-title">
                  {spanishExamPools[selectedLevelKey]?.title}
                </h3>
                <p className="launch-exam-summary">
                  Modalidad: <strong>{
                    selectedSubtestFilter === 'all' ? "Simulación Completa (Lectura + Escritura + Audios + Expresión Oral)" :
                    selectedSubtestFilter === 'reading' ? "Comprensión de lectura (Documentos auténticos)" :
                    selectedSubtestFilter === 'writing' ? "Expresión e interacción escritas (Mensajes y Ensayo argumentativo)" :
                    selectedSubtestFilter === 'listening' ? "Comprensión auditiva (Audios de noticias, megafonía y entrevistas)" :
                    "Expresión oral interactiva (Diálogos simulados + Monólogo)"
                  }</strong>
                </p>
                <div className="launch-pills-row">
                  <span className="launch-info-chip"><Shuffle size={14} /> Conjunto 100% Nuevo en Cada Intento</span>
                  <span className="launch-info-chip"><ShieldCheck size={14} /> Estándares Oficiales Instituto Cervantes</span>
                  {user && <span className="launch-info-chip"><UserCheck size={14} /> Historial Activo ({user.displayName || user.email})</span>}
                </div>
              </div>

              <div className="launch-right">
                <button
                  className="cbt-start-hero-btn"
                  onClick={() => handleStartExam(selectedLevelKey, selectedSubtestFilter)}
                  id="launch-spanish-exam-btn"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Comenzar Examen</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Level Switcher & Subtest Selection Panel for French */}
        {isFrench && (
          <div className="cbt-level-control-panel">
            <div className="level-control-header">
              <div className="control-title-box">
                <Sparkles size={20} className="sparkle-icon" />
                <h3>1. Choisissez l'Échelon ou le Type d'Examen Officiel</h3>
              </div>
              <span className="control-badge">Normes Officielles CECR / France Éducation / CCI</span>
            </div>

            <div className="cbt-tier-selector-grid">
              <button
                className={`cbt-tier-card ${selectedLevelKey === 'delfA1A2' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('delfA1A2')}
              >
                <div className="tier-tag">CECR A1–A2 • Survie</div>
                <h4>DELF A1–A2</h4>
                <p className="tier-desc">Utilisateur Élémentaire : Échanges quotidiens, transports, achats, formulaires & expressions familières.</p>
                <span className="tier-pool-stat">France Éducation International</span>
              </button>

              <button
                className={`cbt-tier-card ${selectedLevelKey === 'delfB1B2' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('delfB1B2')}
              >
                <div className="tier-tag badge-citizenship">CECR B1–B2 • Nationalité & Séjour</div>
                <h4>DELF B1–B2</h4>
                <p className="tier-desc">Utilisateur Indépendant : Exigé pour la nationalité française et carte de résident. Articles de presse, réclamations & débats.</p>
                <span className="tier-pool-stat">Obligatoire Naturalisation Française</span>
              </button>

              <button
                className={`cbt-tier-card ${selectedLevelKey === 'dalfC1C2' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('dalfC1C2')}
              >
                <div className="tier-tag badge-mastery">CECR C1–C2 • Supérieur & Recherche</div>
                <h4>DALF C1–C2</h4>
                <p className="tier-desc">Utilisateur Expérimenté : Diplôme Approfondi pour universités, doctorats, synthèses académiques et éloquence critique.</p>
                <span className="tier-pool-stat">Autonomie & Maîtrise Complète</span>
              </button>

              <button
                className={`cbt-tier-card ${selectedLevelKey === 'tcfTefDcl' ? 'active' : ''}`}
                onClick={() => setSelectedLevelKey('tcfTefDcl')}
              >
                <div className="tier-tag" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.4)' }}>CECR A1–C2 • Mobilité & Pro</div>
                <h4>TCF • TEF • DCL</h4>
                <p className="tier-desc">Tests d'Évaluation & Professionnel : TCF IRN, TEF Canada / Québec (CCI Paris) et DCL Affaires pour adultes.</p>
                <span className="tier-pool-stat">Placement & Emploi en Entreprise</span>
              </button>
            </div>

            {/* Subtest Mode Selector */}
            <div className="subtest-mode-selector-section">
              <div className="control-title-box">
                <BookOpen size={20} className="sparkle-icon" />
                <h3>2. Choisissez une Compétence Ciblée ou la Simulation Complète</h3>
              </div>

              <div className="subtest-pills-row">
                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('all')}
                >
                  <Sparkles size={16} />
                  <span>🌟 Simulation Complète (4 Épreuves • 175 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'reading' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('reading')}
                >
                  <BookOpen size={16} />
                  <span>📖 Compréhension des écrits (60 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'writing' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('writing')}
                >
                  <PenTool size={16} />
                  <span>✍️ Production écrite (60 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'listening' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('listening')}
                >
                  <Headphones size={16} />
                  <span>🎧 Compréhension de l'oral (35 min)</span>
                </button>

                <button
                  className={`subtest-mode-pill ${selectedSubtestFilter === 'speaking' ? 'active' : ''}`}
                  onClick={() => setSelectedSubtestFilter('speaking')}
                >
                  <Mic size={16} />
                  <span>🗣️ Production orale (Lab Audio • 20 min)</span>
                </button>
              </div>
            </div>

            {/* Launch Banner Card */}
            <div className="cbt-launch-card">
              <div className="launch-left">
                <span className="launch-sub-tag">Générateur Aléatoire CRT Prêt</span>
                <h3 className="launch-exam-title">
                  {frenchExamPools[selectedLevelKey]?.title}
                </h3>
                <p className="launch-exam-summary">
                  Mode: <strong>{
                    selectedSubtestFilter === 'all' ? "Épreuve Complète (4 Compétences • Tirage Inédit)" :
                    selectedSubtestFilter === 'reading' ? "Compréhension des écrits (6 Documents Authentiques)" :
                    selectedSubtestFilter === 'writing' ? "Production écrite (Courrier officiel + Essai)" :
                    selectedSubtestFilter === 'listening' ? "Compréhension de l'oral (Extraits Radio & Annonces)" :
                    "Production orale en Laboratoire Audio"
                  }</strong>
                </p>
                <div className="launch-pills-row">
                  <span className="launch-info-chip"><Shuffle size={14} /> Questions Inédites à Chaque Tentative</span>
                  <span className="launch-info-chip"><ShieldCheck size={14} /> Normes France Éducation International</span>
                  {user && <span className="launch-info-chip"><UserCheck size={14} /> Compte Actif ({user.displayName || user.email})</span>}
                </div>
              </div>

              <div className="launch-right">
                <button
                  className="cbt-start-hero-btn"
                  onClick={() => handleStartExam(selectedLevelKey, selectedSubtestFilter)}
                  id="launch-french-exam-btn"
                >
                  <Play size={20} fill="currentColor" />
                  <span>Commencer l'Examen</span>
                </button>
              </div>
            </div>
          </div>
        )}

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
                  <span className="launch-info-chip"><Shuffle size={14} /> Fresh Unseen Set on Every Attempt</span>
                  <span className="launch-info-chip"><ShieldCheck size={14} /> Official Finnish National Standards</span>
                  {user && <span className="launch-info-chip"><UserCheck size={14} /> Account Active ({user.displayName || user.email})</span>}
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

        {/* Level Switcher & Subtest Selection Panel for Nigerian Pidgin */}
        {isPidgin && (() => {
          const activePidginExam = pidginExams.find(e => e.id === selectedLevelKey) || pidginExams[0];
          const availableSections = activePidginExam.sections || [];

          return (
            <div className="cbt-level-control-panel">
              <div className="level-control-header">
                <div className="control-title-box">
                  <Sparkles size={20} className="sparkle-icon" />
                  <h3>1. Select Examination Tier</h3>
                </div>
                <span className="control-badge">NERDC Nigerian Pidgin Curriculum Standard</span>
              </div>

              <div className="cbt-tier-selector-grid">
                <button
                  className={`cbt-tier-card ${selectedLevelKey === 'p-cbt-foundational' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLevelKey('p-cbt-foundational');
                    setSelectedSubtestFilter('all');
                  }}
                >
                  <div className="tier-tag">NERDC Levels 1–2 • Foundational & Street Smart</div>
                  <h4>Foundational Standard (Levels 1–2)</h4>
                  <p className="tier-desc">Phonology & Sound Shifts (ting, dem, ouse), 7-Pronoun Grid (Una, Im, -am), and Serial Verb Aspect.</p>
                  <span className="tier-pool-stat">3 Sections • 60 Questions Each (180 Total)</span>
                </button>

                <button
                  className={`cbt-tier-card ${selectedLevelKey === 'p-cbt-advanced' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLevelKey('p-cbt-advanced');
                    setSelectedSubtestFilter('all');
                  }}
                >
                  <div className="tier-tag badge-citizenship">NERDC Levels 3–4 • Senior Bro/Sis & Oracy</div>
                  <h4>Advanced Standard (Levels 3–4)</h4>
                  <p className="tier-desc">Front-Focus Clefting (Na dem...), Conditionals (Sote/Make), and Oral Literature, Proverbs & Satire.</p>
                  <span className="tier-pool-stat">3 Sections • 60 Questions Each (180 Total)</span>
                </button>
              </div>

              {/* Section Subtest Mode Selector */}
              <div className="subtest-mode-selector-section">
                <div className="control-title-box">
                  <BookOpen size={20} className="sparkle-icon" />
                  <h3>2. Select Exam Section or Full Certification Test</h3>
                </div>

                <div className="subtest-pills-row">
                  <button
                    className={`subtest-mode-pill ${selectedSubtestFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedSubtestFilter('all')}
                  >
                    <Sparkles size={16} />
                    <span>🌟 Full Certification (All 3 Sections • 60 Mins)</span>
                  </button>

                  {availableSections.map((secName, idx) => {
                    const count = (activePidginExam.questions || []).filter(q => q.section === secName).length;
                    const icons = ['🗣️', '⚡', '🛒', '🏛️', '⚖️', '🎭'];
                    const icon = icons[idx % icons.length];
                    return (
                      <button
                        key={secName}
                        className={`subtest-mode-pill ${selectedSubtestFilter === secName ? 'active' : ''}`}
                        onClick={() => setSelectedSubtestFilter(secName)}
                      >
                        <span>{icon} Section {idx + 1}: {secName} (30 Qs • 35 Mins)</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Launch Banner Card */}
              <div className="cbt-launch-card">
                <div className="launch-left">
                  <span className="launch-sub-tag">NERDC Standard CBT Exam Ready</span>
                  <h3 className="launch-exam-title">
                    {activePidginExam.title}
                  </h3>
                  <p className="launch-exam-summary">
                    Selected Mode: <strong>{
                      selectedSubtestFilter === 'all' 
                        ? "Full 3-Section Examination (Fresh Unseen Questions Pool • 60 min)" 
                        : `Section: ${selectedSubtestFilter} (30 Fresh Questions • 35 min)`
                    }</strong>
                  </p>
                  <div className="launch-pills-row">
                    <span className="launch-info-chip"><ShieldCheck size={14} /> NERDC 4-Tier Language Standard</span>
                    <span className="launch-info-chip"><BookOpen size={14} /> West African Pidgin Orthography</span>
                    <span className="launch-info-chip"><Shuffle size={14} /> Brand New Set on Every Attempt</span>
                  </div>
                </div>

                <div className="launch-right">
                  <button
                    className="cbt-start-hero-btn"
                    onClick={() => handleStartExam(selectedLevelKey, selectedSubtestFilter)}
                    id="launch-pidgin-cbt-exam-btn"
                  >
                    <Play size={20} fill="currentColor" />
                    <span>Start CBT Exam ({selectedSubtestFilter === 'all' ? '60 Questions' : '30 Questions'})</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Generic Fallback Panel for other languages */}
        {!isPortuguese && !isGerman && !isSpanish && !isFrench && !isFinnish && !isPidgin && (() => {
          const availableExams = getExamsForLanguage(currentLanguage);
          const activeExam = availableExams.find(e => e.id === selectedLevelKey) || availableExams[0];
          return (
            <div className="cbt-level-control-panel">
              <div className="level-control-header">
                <div className="control-title-box">
                  <Sparkles size={20} className="sparkle-icon" />
                  <h3>Select Standardized Exam</h3>
                </div>
                <span className="control-badge">{langData.name} Assessment Bank</span>
              </div>

              <div className="cbt-tier-selector-grid">
                {availableExams.map((exam) => (
                  <button
                    key={exam.id}
                    className={`cbt-tier-card ${selectedLevelKey === exam.id ? 'active' : ''}`}
                    onClick={() => setSelectedLevelKey(exam.id)}
                  >
                    <div className="tier-tag">{exam.level || 'Standard Level'}</div>
                    <h4>{exam.title}</h4>
                    <p className="tier-desc">{exam.description}</p>
                    <span className="tier-pool-stat">{exam.questions.length} Questions • {exam.timeLimitMinutes || 25} Mins</span>
                  </button>
                ))}
              </div>

              <div className="cbt-launch-card">
                <div className="launch-left">
                  <span className="launch-sub-tag">Standardized Exam Ready</span>
                  <h3 className="launch-exam-title">
                    {activeExam?.title}
                  </h3>
                  <p className="launch-exam-summary">
                    {activeExam?.subtitle || activeExam?.description}
                  </p>
                </div>
                <div className="launch-right">
                  <button
                    className="cbt-start-hero-btn"
                    onClick={() => handleStartExam(selectedLevelKey, 'all')}
                  >
                    <Play size={20} fill="currentColor" />
                    <span>Start Exam</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Official Examination Structure & Subtests Overview */}
        <div className="cbt-subtests-overview-card">
          <div className="instructions-header">
            <BookOpen size={22} className="inst-icon" />
            <h3>
              {isPortuguese
                ? "Estrutura Oficial do Exame CAPLE CIPLE (Universidade de Lisboa & QECR)"
                : isGerman
                ? "Offizielle Struktur des DTZ & Goethe-Zertifikats (BAMF & GER)"
                : isSpanish
                ? "Estructura Oficial del Examen DELE / SIELE (Instituto Cervantes & MCER)"
                : isFrench 
                  ? "Structure Officielle des Épreuves et Normes CECR (France Éducation International & CCI)" 
                  : isPidgin
                    ? "NERDC Nigerian Pidgin 6-Section CBT Structure"
                    : "Official Examination Structure"}
            </h3>
          </div>
          <p className="cbt-subtests-intro">
            {isPortuguese ? (
              <>
                O exame oficial <strong>CIPLE (Certificado Inicial de Português Língua Estrangeira)</strong> é concebido pelo <strong>CAPLE</strong> (Centro de Avaliação de Português Língua Estrangeira da Universidade de Lisboa) e regula o acesso à cidadania e integração laboral:
              </>
            ) : isGerman ? (
              <>
                Die offiziellen Prüfungen des <strong>Bundesamtes für Migration und Flüchtlinge (BAMF)</strong> und des <strong>Goethe-Instituts</strong> prüfen vier grundlegende Handlungskompetenzen für Einbürgerung, Beruf und Alltag:
              </>
            ) : isSpanish ? (
              <>
                Las certificaciones oficiales de español están reguladas por el <strong>Instituto Cervantes</strong> y el <strong>Ministerio de Educación</strong>. Las pruebas evalúan cuatro destrezas fundamentales según los estándares del MCER:
              </>
            ) : isFrench ? (
              <>
                Les certifications officielles de langue française sont régies par le <strong>Ministère de l'Éducation Nationale</strong> et la <strong>Chambre de Commerce et d'Industrie de Paris</strong>. Les épreuves évaluent quatre compétences distinctes selon les normes rigoureuses du CECR :
              </>
            ) : isPidgin ? (
              <>
                The Nigerian Pidgin standardized examination is structured into rigorous competency sections scaled according to national oracy standards:
              </>
            ) : (
              <>
                The standard official language test is designed across four distinct subtests testing real-world practical fluency:
              </>
            )}
          </p>

          <div className="cbt-subtests-grid">
            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">📖</span>
                <strong>{isPortuguese ? "Compreensão da Leitura" : isGerman ? "Leseverstehen" : isSpanish ? "Comprensión de lectura" : isFrench ? "Compréhension des écrits" : "Reading Comprehension"}</strong>
                <span className="subtest-time-tag">60 Mins</span>
              </div>
              <p>
                {isPortuguese
                  ? "Leitura crítica de documentos autênticos do quotidiano português (comunicados de condomínio, avisos da Junta de Freguesia, ofertas de emprego do IEFP e e-Fatura)."
                  : isGerman
                  ? "Kritisches Lesen von authentischen Dokumenten (Behördenmitteilungen, Hausordnungen, Wohnungsanzeigen, Verträge und Stellenangebote) mit detaillierten Multiple-Choice-Fragen."
                  : isSpanish
                  ? "Lectura crítica de 6 documentos auténticos (noticias, normativas, ofertas de empleo, ensayos y reglamentos). Preguntas de opción múltiple con justificación pedagógica."
                  : isFrench 
                    ? "Lecture critique et analyse de 6 documents authentiques (articles de presse, lois, arrêtés, annonces et notes de service)."
                    : "You read 6 distinct text packages within 60 minutes. Questions range from multiple-choice to open-ended text queries."}
              </p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">✍️</span>
                <strong>{isPortuguese ? "Produção Escrita" : isGerman ? "Schriftlicher Ausdruck" : isSpanish ? "Expresión e interação escritas" : isFrench ? "Production écrite" : "Writing"}</strong>
                <span className="subtest-time-tag">{isPortuguese ? "45 Mins" : isGerman ? "30 Mins" : isSpanish ? "60 Mins" : isFrench ? "60 Mins" : "55 Mins"}</span>
              </div>
              <p>
                {isPortuguese
                  ? "Redação de textos utilitários e formais: requerimentos administrativos dirigidos à Junta de Freguesia, justificação de ausências laborais e reclamações no Livro de Reclamações."
                  : isGerman
                  ? "Verfassen standardisierter formeller Behördenschreiben, Mietmängelrügen, Entschuldigungsschreiben an Schulen/Kitas und begründeter Stellungnahmen."
                  : isSpanish
                  ? "Redacción de documentos formales: cartas de reclamación, solicitudes administrativas y un ensayo argumentativo equilibrado defendiendo una postura crítica."
                  : isFrench
                    ? "Rédaction de documents épistolaires et argumentatifs : un courrier administratif officiel ou de réclamation formelle, et un essai argumenté."
                    : "You complete exactly 3 practical prompts: two shorter informal/semi-formal messages and one longer opinion essay."}
              </p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">🎧</span>
                <strong>{isPortuguese ? "Compreensão do Oral" : isGerman ? "Hörverstehen" : isSpanish ? "Comprensión auditiva" : isFrench ? "Compréhension de l'oral" : "Listening Comprehension"}</strong>
                <span className="subtest-time-tag">35 Mins</span>
              </div>
              <p>
                {isPortuguese
                  ? "Audição de avisos sonoros autênticos (Metropolitano de Lisboa, estações da CP), chamadas do hospital e notícias da rádio pública Antena 1."
                  : isGerman
                  ? "Hören originalgetreuer Bahnhofsdurchsagen, telefonischer Terminansagen von Ämtern, Notrufdialoge und Radioberichte mit begrenzten Wiederholungen."
                  : isSpanish
                  ? "Escucha de audios de radio nacional (RNE, SER), anuncios de transporte, avisos policiales y debates sobre temas de actualidad."
                  : isFrench
                    ? "Écoute d'extraits radiophoniques (France Info, RFI), d'annonces publiques de sécurité et de débats de société."
                    : "You listen to authentic audio recordings. Audio tracks can be replayed to verify details under test conditions."}
              </p>
            </div>

            <div className="subtest-detail-box">
              <div className="subtest-badge-row">
                <span className="subtest-icon">🗣️</span>
                <strong>{isPortuguese ? "Expressão Oral" : isGerman ? "Mündliche Prüfung" : isSpanish ? "Expresión e interacción orales" : isFrench ? "Production orale" : "Speaking"}</strong>
                <span className="subtest-time-tag">20 Mins</span>
              </div>
              <p>
                {isPortuguese
                  ? "Laboratório de voz interativo: simulação de diálogo com o examinador do CAPLE, resolução de situações imprevistas e monólogo cronometrado de integração social."
                  : isGerman
                  ? "Sprachlabor mit realistischem Prüfungsablauf: Sich vorstellen, dialogisches Planen mit dem Prüfungspartner, Bildbeschreibung und freie Argumentation."
                  : isSpanish
                  ? "Laboratorio de voz interactivo: simulador de entrevistas de trabajo, resolución de conflictos vecinales y monólogo argumentativo con tiempo de preparación."
                  : isFrench
                    ? "Épreuve interactive en laboratoire de langue : entretien dirigé, jeu de rôle en situation réelle et monologue argumenté."
                    : "Conducted in a language lab simulator: rapid simulated dialogues plus timed monologues with preparation countdown."}
              </p>
            </div>
          </div>
        </div>

        {/* Standard Candidate Guidelines & Rules */}
        <div className="cbt-instructions-card">
          <div className="instructions-header">
            <ShieldCheck size={22} className="inst-icon" />
            <h3>{isPortuguese ? "Regulamento do Exame CAPLE e Garantia de Perguntas Inéditas" : isGerman ? "Prüfungsordnung & Garantie für neue Aufgaben" : isSpanish ? "Normativa del Examen y Garantía de Novedad de Preguntas" : isFrench ? "Règlement d'Examen & Consignes aux Candidats" : "Candidate Exam Guidelines & Regulations"}</h3>
          </div>
          <ul className="instructions-list">
            {isPortuguese ? (
              <>
                <li><strong>Garantia de perguntas inéditas:</strong> O nosso sistema guarda o histórico de todas as questões resolvidas pelo utilizador autenticado, assegurando que em cada nova tentativa de exame são sorteadas tarefas totalmente novas e nunca antes respondidas.</li>
                <li><strong>Gestão rigorosa do tempo:</strong> O cronómetro respeita a duração estipulada pelas matrizes oficiais do CAPLE. No término do tempo limite, a prova é submetida automaticamente para avaliação.</li>
                <li><strong>Compreensão do oral:</strong> Em conformidade com as regras do exame, os ficheiros áudio podem ser ouvidos no máximo duas vezes.</li>
                <li><strong>Laboratório de expressão oral:</strong> Cada prova oral simula a interação com o examinador, incluindo tempo de preparação (countdown) e gravação contínua da resposta.</li>
              </>
            ) : isGerman ? (
              <>
                <li><strong>Garantie für neue Aufgaben:</strong> Als angemeldeter Nutzer speichert das System Ihre bearbeiteten Fragen. Bei jedem erneuten Prüfungsversuch erhalten Sie automatisch Aufgaben, die Sie zuvor noch nie gelöst haben.</li>
                <li><strong>Prüfungszeitraum & Automatischer Ablauf:</strong> Jeder Prüfungsteil verfügt über ein striktes Zeitlimit gemäß den Vorgaben des BAMF. Nach Ablauf der Zeit wird Ihre Prüfung automatisch gewertet.</li>
                <li><strong>Hörverstehen & Audio-Wiedergabe:</strong> Im Hörverstehen dürfen Sie die Audiospuren gemäß Prüfungsstandard maximal zweimal abspielen.</li>
                <li><strong>Mündliches Sprachlabor:</strong> Vor jedem Sprechteil erhalten Sie eine strukturierte Vorbereitungszeit (Countdown), gefolgt von der automatischen Audioaufzeichnung.</li>
              </>
            ) : isSpanish ? (
              <>
                <li><strong>Garantía de preguntas inéditas:</strong> Al estar registrado con su cuenta, el sistema registra cada ejercicio presentado y garantiza que en cada nuevo intento se seleccionarán preguntas completamente nuevas que no haya resuelto anteriormente.</li>
                <li><strong>Requisito de Nacionalidad Española (DELE B1):</strong> El Ministerio de Justicia de España exige la aprobación del examen DELE B1 o superior a los solicitantes de nacionalidad por residencia no hispanohablantes de origen.</li>
                <li><strong>Estructura cronometrada:</strong> Puede practicar subpruebas individuales con tiempos específicos (Lectura: 60 min, Escritura: 60 min, Audios: 35 min, Expresión oral: 20 min) o la simulación completa de 175 minutos.</li>
                <li><strong>Marcado de preguntas dudosas:</strong> Utilice el botón «Marcar Pregunta» para revisar cualquier duda antes de enviar la prueba al calificador.</li>
                <li><strong>Retroalimentación pedagógica inmediata:</strong> Al finalizar, el sistema genera la hoja de respuestas detallada con justificaciones gramaticales y modelos oficiales de redacción y expresión oral.</li>
              </>
            ) : isFrench ? (
              <>
                <li><strong>Garantie de questions inédites :</strong> Chaque tentative d'un utilisateur connecté sélectionne automatiquement des questions nouvelles non encore traitées dans la banque d'épreuves.</li>
                <li><strong>Justificatifs d'identité stricts :</strong> Vous devez présenter une pièce d'identité officielle avec photo en cours de validité lors des épreuves présentielles.</li>
                <li><strong>Exigences Légales de Nationalité Française :</strong> Le Ministère de l'Intérieur exige l'attestation de réussite au <strong>DELF B1 / B2</strong> ou au <strong>TCF IRN</strong> pour toute demande de naturalisation.</li>
                <li><strong>Barème officiel :</strong> Chaque épreuve est notée sur 25 points pour un total global sur 100.</li>
              </>
            ) : (
              <>
                <li><strong>Guaranteed Brand New Sets:</strong> For logged-in users, our engine tracks previously attempted questions across every subtest, ensuring a fresh set of questions on every subsequent attempt.</li>
                <li><strong>No Electronics Allowed:</strong> All unauthorized devices and materials are prohibited in official examination halls.</li>
                <li><strong>Comprehensive Feedback:</strong> Submit your answers at any point to receive immediate scoring, domain breakdown, and model answers.</li>
              </>
            )}
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
    const maxPlays = currentQuestion.maxPlays || (selectedLevelKey === 'deleC1C2' || selectedLevelKey === 'ylintaso' ? 1 : 2);
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
            {activeSession.isBrandNewSession && (
              <span className="cbt-brand-new-badge" title="Brand new question set for your account">
                <Sparkles size={13} /> {isSpanish ? "Conjunto Nuevo" : "Brand New Set"}
              </span>
            )}
          </div>

          <div className="cbt-bar-center">
            <div className={`cbt-timer-widget ${isTimeUrgent ? 'urgent' : isTimeWarning ? 'warning' : ''}`}>
              <Clock size={18} className="timer-icon" />
              <span className="timer-text">{formatTime(secondsRemaining)}</span>
              {isTimeUrgent && <span className="time-alert-tag">{isSpanish ? "¡Poco tiempo!" : "Ending Soon!"}</span>}
            </div>
          </div>

          <div className="cbt-bar-right">
            <button 
              className={`cbt-flag-btn ${isFlagged ? 'flagged' : ''}`}
              onClick={() => handleToggleFlag(currentQuestion.id)}
              title="Flag question for later review"
            >
              <Flag size={16} />
              <span>{isFlagged ? (isSpanish ? 'Marcada' : 'Flagged') : (isSpanish ? 'Marcar' : 'Flag Question')}</span>
            </button>

            <button 
              className="cbt-submit-btn"
              onClick={() => setShowSubmitModal(true)}
            >
              <CheckCircle2 size={16} />
              <span>{isPortuguese ? "Submeter Exame" : isSpanish ? "Finalizar y Calificar" : isFrench ? "Soumettre l'Épreuve" : "Submit Examination"}</span>
            </button>
          </div>
        </header>

        {/* Main Split Body */}
        <div className="cbt-active-body">
          {/* Left Panel: Question Content */}
          <main className="cbt-question-pane">
            <div className="cbt-question-header">
              <div className="q-badge-cluster">
                <span className="q-badge-num">
                  {isSpanish ? "Pregunta" : "Question"} {currentQuestionIndex + 1} / {totalQuestions}
                </span>
                <span className="q-badge-domain">
                  {currentQuestion.title || currentQuestion.subtest || currentQuestion.section || activeSession.subtestLabel}
                </span>
                {isFlagged && <span className="q-badge-flag"><Flag size={12} /> {isSpanish ? "Marcada para revisión" : "Flagged"}</span>}
              </div>

              {isAnswered && (
                <span className="q-badge-answered">
                  <Check size={14} /> {isSpanish ? "Respondida" : "Answered"}
                </span>
              )}
            </div>

            {/* --- 1. READING PASSAGE / DOCUMENT --- */}
            {currentQuestion.passage && (
              <div className="cbt-reading-passage-box">
                <div className="passage-header">
                  <FileText size={16} />
                  <span>{isPortuguese ? "Documento Oficial de Referência" : isGerman ? "Offizielles Referenzdokument" : isSpanish ? "Documento Oficial de Referencia" : isFrench ? "Document Officiel de Référence" : "Official Reference Document"}</span>
                </div>
                <div className="passage-content">
                  {currentQuestion.passage.split('\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* --- 2. LISTENING AUDIO STIMULUS --- */}
            {isListeningTask && (
              <div className="cbt-listening-audio-box">
                <div className="audio-header">
                  <Headphones size={20} />
                  <div className="audio-header-text">
                    <h4>{isPortuguese ? "Faixa Áudio — Compreensão do Oral" : isGerman ? "Audiospur — Hörverstehen" : isSpanish ? "Enlace de Audio — Comprensión Auditiva" : isFrench ? "Support Audio — Compréhension de l'oral" : "Audio Track — Listening Comprehension"}</h4>
                    <p>{isSpanish ? "Escuche atentamente la grabación en español para responder." : "Listen carefully to the audio excerpt to answer the question."}</p>
                  </div>
                </div>

                <div className="audio-player-controls">
                  <button 
                    className={`cbt-audio-play-btn ${playsLeft === 0 ? 'disabled' : ''}`}
                    onClick={() => handlePlayListeningAudio(currentQuestion)}
                    disabled={playsLeft === 0}
                  >
                    <Volume2 size={22} />
                    <span>
                      {playsLeft > 0 
                        ? (isSpanish ? `Reproducir audio (${playsLeft} ${playsLeft === 1 ? 'reproducción restante' : 'reproducciones restantes'})` : isFrench ? `Écouter l'enregistrement (${playsLeft} restante${playsLeft > 1 ? 's' : ''})` : `Play Audio Track (${playsLeft} play${playsLeft > 1 ? 's' : ''} left)`)
                        : (isSpanish ? "Límite de reproducciones alcanzado" : isFrench ? "Limite d'écoutes atteinte" : "Maximum Plays Reached")}
                    </span>
                  </button>

                  <div className="plays-indicator-pills">
                    {Array.from({ length: maxPlays }).map((_, pIdx) => (
                      <span 
                        key={pIdx} 
                        className={`play-dot ${pIdx < playsUsed ? 'used' : 'available'}`} 
                        title={`Play ${pIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- 3. WRITING SUBTEST TASK AREA --- */}
            {isWritingTask && (
              <div className="cbt-writing-container">
                <div className="writing-prompt-box">
                  <h3 className="writing-prompt-title">{currentQuestion.prompt}</h3>
                  <div className="writing-guidelines-banner">
                    <PenTool size={16} />
                    <span>
                      {isSpanish ? (
                        <>Redacte su respuesta en el cuadro de texto inferior en español formal. Longitud mínima requerida: <strong>{currentQuestion.minWords || 60} palabras</strong>.</>
                      ) : isFrench ? (
                        <>Rédigez votre réponse dans la zone de texte ci-dessous en français soigné. Longueur minimale requise : <strong>{currentQuestion.minWords || 60} mots</strong>.</>
                      ) : (
                        <>Vastaa alla olevaan tekstikenttään. Tavoitesanamäärä: vähintään <strong>{currentQuestion.minWords || 30} sanaa</strong>.</>
                      )}
                    </span>
                  </div>
                </div>

                <div className="writing-textarea-wrapper">
                  <textarea
                    className="cbt-writing-textarea"
                    placeholder={isPortuguese ? "Redija o seu texto formal, requerimento ou reclamação aqui..." : isGerman ? "Verfassen Sie Ihr formelles Schreiben oder Ihre Stellungnahme hier..." : isSpanish ? "Redacte su texto formal o ensayo argumentativo aquí..." : isFrench ? "Rédigez votre texte formel ou argumenté ici..." : "Kirjoita vastauksesi tähän..."}
                    rows={8}
                    value={userTextAnswer}
                    onChange={(e) => handleWritingInput(currentQuestion.id, e.target.value)}
                  />
                  <div className="writing-meta-bar">
                    <div className="word-count-chip">
                      {isSpanish ? "Recuento de palabras:" : isFrench ? "Nombre de mots :" : "Sanamäärä :"} <strong className={wordCount >= (currentQuestion.minWords || 30) ? 'text-emerald' : 'text-amber'}>
                        {wordCount}
                      </strong> / {currentQuestion.minWords || 30} {isSpanish ? "palabras" : isFrench ? "mots" : "sanaa"}
                    </div>
                    <span className="char-count-chip">{userTextAnswer.length} {isSpanish ? "caracteres" : isFrench ? "caractères" : "merkkiä"}</span>
                  </div>
                </div>
              </div>
            )}

            {/* --- 4. SPEAKING SUBTEST LANGUAGE LAB SIMULATOR --- */}
            {isSpeakingTask && (
              <div className="cbt-speaking-container">
                <div className="speaking-header-banner">
                  <Mic size={20} />
                  <span>{isPortuguese ? "Laboratório de Língua: Simulador oficial de expressão oral" : isGerman ? "Sprachlabor: Offizielle mündliche Prüfungssimulation" : isSpanish ? "Laboratorio de Idiomas: Simulador oficial de expresión oral" : isFrench ? "Laboratoire de langue : Simulateur officiel d'expression orale" : "Kielistudion puhesimulaattori (Speaking Lab Simulator)"}</span>
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
                        <span>{isSpanish ? `Escuchar al interlocutor: "${currentQuestion.audioPrompt}"` : isFrench ? `Écouter l'examinateur : "${currentQuestion.audioPrompt}"` : `Kuuntele vastapuolen repliikki: "${currentQuestion.audioPrompt}"`}</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="speaking-timer-grid">
                  <div className={`speaking-timer-box ${speakingPhase === 'prep' ? 'active-timer' : ''}`}>
                    <span className="timer-box-label">{isSpanish ? "Tiempo de preparación" : isFrench ? "Temps de préparation" : "Valmistautumisaika (Prep)"}</span>
                    <strong className="timer-box-digits">
                      {speakingPhase === 'prep' ? `${prepCountdown} s` : `${currentQuestion.prepSeconds || 10} s`}
                    </strong>
                  </div>

                  <div className={`speaking-timer-box ${speakingPhase === 'speaking' ? 'active-timer urgent' : ''}`}>
                    <span className="timer-box-label">{isSpanish ? "Tiempo de respuesta oral" : isFrench ? "Temps de parole" : "Puhumisaika (Speech)"}</span>
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
                      <span>{isSpanish ? "Iniciar grabación oral (Cuenta regresiva)" : isFrench ? "Démarrer l'enregistrement oral" : "Aloita puheharjoitus"}</span>
                    </button>
                  )}

                  {speakingPhase === 'prep' && (
                    <div className="speaking-status-alert prep">
                      <Clock size={18} />
                      <span>
                        {isSpanish 
                          ? `¡Prepare su respuesta! La grabación iniciará automáticamente en ${prepCountdown} segundos.`
                          : isFrench
                            ? `Préparez votre intervention ! Enregistrement dans ${prepCountdown} secondes.`
                            : `Valmistaudu puheenvuoroosi! Nauhoitus alkaa ${prepCountdown} s kuluttua.`}
                      </span>
                    </div>
                  )}

                  {speakingPhase === 'speaking' && (
                    <div className="speaking-active-recording-card">
                      <div className="pulse-recording-dot" />
                      <span>
                        {isSpanish 
                          ? `Micrófono activo: ¡Hable con claridad en español! (${speakCountdown} s restantes)`
                          : isFrench
                            ? `Microphone actif : Exprimez-vous en français ! (${speakCountdown} s)`
                            : `Mikrofoni aktiivinen: Puhu nyt selkeästi! (${speakCountdown} s)`}
                      </span>
                      <button 
                        className="speaking-action-btn stop"
                        onClick={() => handleStopSpeakingLab(currentQuestion)}
                      >
                        <Square size={16} />
                        <span>{isSpanish ? "Finalizar grabación" : isFrench ? "Terminer la prise de parole" : "Pysäytä puheenvuoro"}</span>
                      </button>
                    </div>
                  )}

                  {speakingPhase === 'completed' && (
                    <div className="speaking-status-alert done">
                      <CheckCircle2 size={18} />
                      <span>
                        {isSpanish
                          ? "¡Intervención oral grabada y registrada! Puede continuar a la siguiente pregunta."
                          : isFrench 
                            ? "Prise de parole enregistrée ! Vous pouvez passer à la suite."
                            : "Puheenvuoro suoritettu ja kirjattu!"}
                      </span>
                      <button 
                        className="speaking-re-btn"
                        onClick={() => handleStartSpeakingLab(currentQuestion)}
                      >
                        <RotateCcw size={14} /> {isSpanish ? "Repetir grabación" : isFrench ? "Recommencer" : "Puhu uudelleen"}
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
                          <span className="option-label-text">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* Bottom Question Controls */}
            <div className="cbt-bottom-nav-bar">
              <div className="nav-left">
                <button
                  className="cbt-nav-btn prev"
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                >
                  <ChevronLeft size={18} />
                  <span>{isPortuguese ? "Anterior" : isSpanish ? "Anterior" : isFrench ? "Précédent" : "Previous"}</span>
                </button>

                <button
                  className="cbt-nav-btn next"
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                >
                  <span>{isPortuguese ? "Seguinte" : isSpanish ? "Siguiente" : isFrench ? "Suivant" : "Next"}</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="nav-right">
                {isAnswered && (
                  <button 
                    className="cbt-clear-answer-btn"
                    onClick={() => handleClearAnswer(currentQuestion.id)}
                  >
                    <RotateCcw size={14} />
                    <span>{isSpanish ? "Borrar respuesta" : isFrench ? "Effacer la réponse" : "Clear Response"}</span>
                  </button>
                )}
              </div>
            </div>
          </main>

          {/* Right Panel: Question Navigator Palette */}
          <aside className="cbt-palette-pane">
            <div className="palette-header">
              <h3>{isPortuguese ? "Navegador de Questões" : isSpanish ? "Navegador de Preguntas" : isFrench ? "Grille des Questions" : "Question Navigator"}</h3>
              <span className="palette-summary">
                {answeredCount} / {totalQuestions} {isSpanish ? "respondidas" : "completed"}
              </span>
            </div>

            <div className="palette-grid">
              {activeSession.questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAns = Boolean(answers[q.id]);
                const isFlg = flaggedIds.has(q.id);

                return (
                  <button
                    key={q.id}
                    className={`palette-btn ${isCurrent ? 'current' : ''} ${isAns ? 'answered' : ''} ${isFlg ? 'flagged' : ''}`}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    title={`${isSpanish ? 'Pregunta' : 'Task'} ${idx + 1}`}
                  >
                    <span className="p-num">{idx + 1}</span>
                    {isFlg && <span className="p-flag-dot" />}
                  </button>
                );
              })}
            </div>

            <div className="palette-legend">
              <div className="legend-item">
                <span className="legend-box answered" />
                <span>{isSpanish ? "Respondida" : "Answered"}</span>
              </div>
              <div className="legend-item">
                <span className="legend-box current" />
                <span>{isSpanish ? "Actual" : "Current"}</span>
              </div>
              <div className="legend-item">
                <span className="legend-box flagged" />
                <span>{isSpanish ? "Marcada" : "Flagged"}</span>
              </div>
              <div className="legend-item">
                <span className="legend-box" />
                <span>{isSpanish ? "Pendiente" : "Unanswered"}</span>
              </div>
            </div>

            <button 
              className="cbt-submit-sidebar-btn"
              onClick={() => setShowSubmitModal(true)}
            >
              <CheckCircle2 size={18} />
              <span>{isSpanish ? "Finalizar y Calificar" : isFrench ? "Terminer et Noter" : "Finish & Submit Exam"}</span>
            </button>
          </aside>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div className="cbt-modal-overlay">
            <div className="cbt-modal-dialog">
              <div className="modal-icon-badge">
                <AlertCircle size={32} />
              </div>
              <h3 className="modal-title">{isSpanish ? "¿Finalizar y calificar el examen?" : isFrench ? "Soumettre l'examen officiel ?" : "Submit Your Examination?"}</h3>
              <p className="modal-text">
                {isSpanish ? (
                  <>Ha respondido <strong>{answeredCount} de {totalQuestions}</strong> preguntas. {flaggedIds.size > 0 && <>Tiene <strong>{flaggedIds.size}</strong> preguntas marcadas para revisión.</>} ¿Está seguro de enviar su examen ahora para obtener su puntuación oficial?</>
                ) : isFrench ? (
                  <>Vous avez répondu à <strong>{answeredCount} sur {totalQuestions}</strong> tâches. {flaggedIds.size > 0 && <>Vous avez <strong>{flaggedIds.size}</strong> questions marquées.</>} Confirmez-vous la soumission officielle pour notation ?</>
                ) : (
                  <>You have answered <strong>{answeredCount} of {totalQuestions}</strong> questions. {flaggedIds.size > 0 && <>You have <strong>{flaggedIds.size}</strong> questions marked with flags.</>} Are you ready to submit your test for official evaluation?</>
                )}
              </p>

              <div className="modal-action-row">
                <button
                  className="modal-cancel-btn"
                  onClick={() => setShowSubmitModal(false)}
                >
                  {isSpanish ? "Volver a la prueba" : isFrench ? "Reprendre l'épreuve" : "Return to Test"}
                </button>
                <button
                  className="modal-confirm-btn"
                  onClick={handleManualSubmit}
                >
                  {isSpanish ? "Sí, Finalizar Ahora" : isFrench ? "Oui, Soumettre Définitivement" : "Yes, Submit Final Exam"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // RENDER: EXAM RESULTS & COMPREHENSIVE ANSWER KEY REVIEW
  // =========================================================================
  if (viewState === 'results' && activeSession) {
    let scoreableTotal = 0;
    let scoreableCorrect = 0;
    const domainStats = {};

    activeSession.questions.forEach((q) => {
      const domain = q.title || q.subtest || q.section || "General";
      if (!domainStats[domain]) {
        domainStats[domain] = { total: 0, correct: 0 };
      }
      domainStats[domain].total++;

      if (q.options && q.correctAnswer) {
        scoreableTotal++;
        if (answers[q.id] === q.correctAnswer) {
          scoreableCorrect++;
          domainStats[domain].correct++;
        }
      } else {
        // Text / speech tasks treated as completed
        if (answers[q.id]) {
          domainStats[domain].correct++;
        }
      }
    });

    const scorePercentage = scoreableTotal > 0 ? Math.round((scoreableCorrect / scoreableTotal) * 100) : 85;
    const isPassing = scorePercentage >= 65;

    // Filter questions for detailed answer key
    const displayedQuestions = activeSession.questions.filter((q) => {
      if (resultFilter === 'incorrect') {
        if (q.options && q.correctAnswer) {
          return answers[q.id] !== q.correctAnswer;
        }
        return !answers[q.id];
      }
      if (resultFilter === 'flagged') {
        return flaggedIds.has(q.id);
      }
      return true;
    });

    return (
      <div className="cbt-container cbt-results-screen">
        {/* Results Hero */}
        <section className={`cbt-results-hero ${isPassing ? 'passed' : 'failed'}`}>
          <div className="results-hero-left">
            <div className="results-badge-tag">
              <Award size={18} />
              <span>{isPortuguese ? "Classificação Oficial CAPLE CIPLE" : isSpanish ? "Calificación Oficial DELE / SIELE" : isFrench ? "Résultat Officiel CECR" : "Official Examination Score"}</span>
            </div>
            <h1 className="results-hero-title">
              {isPassing 
                ? (isSpanish ? "¡Enhorabuena! Has superado el examen" : isFrench ? "Félicitations ! Épreuve Réussie" : "Examination Successfully Passed!")
                : (isSpanish ? "No apto en esta convocatoria" : isFrench ? "Résultat Insuffisant" : "Examination Not Passed")}
            </h1>
            <p className="results-hero-subtitle">
              {isPassing ? (
                isSpanish ? (
                  <>Ha alcanzado una puntuación global del <strong>{scorePercentage}%</strong>, superando ampliamente el umbral del 65% exigido por los estándares del MCER.</>
                ) : isFrench ? (
                  <>Vous avez obtenu un score global de <strong>{scorePercentage}%</strong>, validant avec brio les compétences évaluées.</>
                ) : (
                  <>You achieved an overall score of <strong>{scorePercentage}%</strong>, surpassing the minimum passing benchmark.</>
                )
              ) : (
                isSpanish ? (
                  <>Ha obtenido un <strong>{scorePercentage}%</strong>. Le sugerimos revisar los errores pedagógicos y volver a intentarlo con un conjunto nuevo de preguntas.</>
                ) : (
                  <>You scored <strong>{scorePercentage}%</strong>. Review the pedagogical explanations below and practice with a brand new set.</>
                )
              )}
            </p>

            {/* Fresh Set Notice */}
            <div className="cbt-results-fresh-notice">
              <Sparkles size={20} />
              <span>
                {user ? (
                  isSpanish ? (
                    <>¡Intento #{userAttemptNumber} registrado para <strong>{user.displayName || user.email}</strong>! Todas las preguntas de esta sesión han sido archivadas en su historial. En su próximo intento se seleccionará un <strong>conjunto 100% nuevo de preguntas inéditas</strong>.</>
                  ) : isFrench ? (
                    <>Tentative #{userAttemptNumber} enregistrée pour <strong>{user.displayName || user.email}</strong> ! Votre prochaine tentative comportera un <strong>lot de questions entièrement nouveau</strong>.</>
                  ) : (
                    <>Attempt #{userAttemptNumber} recorded for <strong>{user.displayName || user.email}</strong>! All questions from this session have been saved. Your next attempt will automatically pull a <strong>brand new set of questions</strong>.</>
                  )
                ) : (
                  isSpanish ? (
                    <>Sugerencia: Inicie sesión para guardar automáticamente su historial de subpruebas y garantizar preguntas 100% nuevas en cada intento.</>
                  ) : (
                    <>Tip: Log in to save your attempt history and guarantee a brand new set of questions on each attempt.</>
                  )
                )}
              </span>
            </div>
          </div>

          <div className="results-hero-right">
            <div className="score-number-circle">
              <span className="score-pct">{scorePercentage}%</span>
              <span className="score-fraction">
                {isSpanish ? `${answeredCount} / ${totalQuestions} Tareas Evaluadas` : isFrench ? `${answeredCount} / ${totalQuestions} Tâches Traitées` : `${answeredCount} / ${totalQuestions} Tasks Attempted`}
              </span>
            </div>
          </div>
        </section>

        {/* Domain Performance Breakdown */}
        <div className="cbt-breakdown-section">
          <h2 className="breakdown-heading">
            {isSpanish ? "Desglose Oficial de Rendimiento por Competencia" : isFrench ? "Bilan Officiel des Compétences Évaluées" : "Official Subtest Domain Performance"}
          </h2>
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
            <span>
              {isSpanish 
                ? "Realizar otra prueba con un conjunto 100% nuevo de preguntas" 
                : isFrench 
                  ? "Passer un autre examen avec un tirage aléatoire nouveau" 
                  : "Retake With Brand New Set of Questions (Uusi arvottu koesarja)"}
            </span>
          </button>

          <button 
            className="cbt-btn-hub"
            onClick={() => setViewState('hub')}
          >
            <BookOpen size={18} />
            <span>
              {isSpanish 
                ? "Elegir otro nivel o subprueba (DELE / SIELE)" 
                : isFrench 
                  ? "Choisir un autre niveau ou une autre épreuve (DELF / DALF / TCF / TEF)" 
                  : "Choose Another Examination Level or Subtest"}
            </span>
          </button>
        </div>

        {/* Detailed Comprehensive Review */}
        <div className="cbt-answer-key-section">
          <div className="answer-key-header">
            <div className="ak-left">
              <h2>{isSpanish ? "Revisión Detallada de Respuestas y Modelos de Solución" : "Comprehensive Examination Review & Model Solutions"}</h2>
              <p>{isSpanish ? "Revise sus respuestas junto con textos de referencia, transcripciones de audio y explicaciones gramaticales." : "Review your answers alongside official model texts, audio scripts, and pedagogical grammar explanations."}</p>
            </div>

            {/* Filter Tabs */}
            <div className="ak-filter-pills">
              <button 
                className={`ak-pill ${resultFilter === 'all' ? 'active' : ''}`}
                onClick={() => setResultFilter('all')}
              >
                {isSpanish ? "Todas las tareas" : "All Tasks"} ({totalQuestions})
              </button>
              <button 
                className={`ak-pill ${resultFilter === 'incorrect' ? 'active' : ''}`}
                onClick={() => setResultFilter('incorrect')}
              >
                {isSpanish ? "Para revisar" : "Review Items"} ({totalQuestions - scoreableCorrect})
              </button>
              <button 
                className={`ak-pill ${resultFilter === 'flagged' ? 'active' : ''}`}
                onClick={() => setResultFilter('flagged')}
              >
                {isSpanish ? "Marcadas" : "Flagged Items"} ({flaggedIds.size})
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
                      <span className="ak-num-badge">{isSpanish ? "Tarea" : "Task"} {originalIndex + 1}</span>
                      <span className="ak-sec-tag">{q.title || q.subtest || q.section}</span>
                      {flaggedIds.has(q.id) && <span className="ak-flag-tag"><Flag size={12} /> {isSpanish ? "Marcada" : "Flagged"}</span>}
                    </div>

                    <span className={`ak-verdict-pill ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? (
                        <><CheckCircle2 size={16} /> {isSpanish ? "Correcta / Completada" : "Completed / Correct"}</>
                      ) : (
                        <><AlertCircle size={16} /> {isSpanish ? "Requiere Revisión" : "Needs Review"}</>
                      )}
                    </span>
                  </div>

                  <h3 className="ak-prompt">{q.prompt}</h3>

                  {q.passage && (
                    <div className="ak-passage-quote">
                      <strong>{isSpanish ? "Texto de Referencia:" : "Reference Text:"}</strong>
                      <p>{q.passage}</p>
                    </div>
                  )}

                  {q.audioPhrase && (
                    <div className="ak-audio-quote">
                      <button 
                        className="ak-play-audio-btn"
                        onClick={() => handlePlayNativeSpeaker(q.audioPhrase)}
                      >
                        <Volume2 size={16} /> {isSpanish ? "Escuchar audio de nuevo" : "Play audio again"}
                      </button>
                      <span className="ak-audio-text">"{q.audioPhrase}"</span>
                    </div>
                  )}

                  {/* Multiple Choice Answers Review */}
                  {isScoreable && (
                    <div className="ak-options-review">
                      <div className="ak-chosen-row">
                        <span className="ak-label">{isSpanish ? "Su respuesta:" : "Your Response:"}</span>
                        <strong className={isCorrect ? 'text-emerald' : 'text-rose'}>
                          {userAnswer || (isSpanish ? 'Sin responder (Omitida)' : 'No answer selected (Skipped)')}
                        </strong>
                      </div>
                      {!isCorrect && (
                        <div className="ak-correct-row">
                          <span className="ak-label">{isSpanish ? "Respuesta correcta:" : "Correct Answer:"}</span>
                          <strong className="text-emerald">{q.correctAnswer}</strong>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Writing Task Review with Model Response */}
                  {q.modelResponse && (
                    <div className="ak-writing-review-grid">
                      <div className="user-writing-box">
                        <span className="ak-label">{isSpanish ? "Su texto enviado:" : "Your Submitted Text:"}</span>
                        <div className="user-text-content">
                          {userAnswer || <em>{isSpanish ? "Sin respuesta escrita" : "No response submitted"}</em>}
                        </div>
                        <span className="user-text-words">{isSpanish ? "Palabras:" : "Word count:"} {countWords(userAnswer)}</span>
                      </div>

                      <div className="model-writing-box">
                        <span className="ak-label">{isSpanish ? "Modelo de respuesta oficial (Apto):" : "Official Model Answer:"}</span>
                        <div className="model-text-content">{q.modelResponse}</div>
                      </div>
                    </div>
                  )}

                  {/* Speaking Task Review with Model Answer */}
                  {q.modelAnswer && (
                    <div className="ak-speaking-review-box">
                      <span className="ak-label">{isSpanish ? "Modelo de respuesta oral oficial:" : "Official Model Spoken Answer:"}</span>
                      <div className="model-spoken-text">{q.modelAnswer}</div>
                      <button 
                        className="ak-play-model-btn"
                        onClick={() => handlePlayNativeSpeaker(q.modelAnswer)}
                      >
                        <Volume2 size={16} /> {isSpanish ? "Escuchar modelo en voz alta" : "Listen to model spoken response"}
                      </button>
                    </div>
                  )}

                  {q.explanation && (
                    <div className="ak-explanation-box">
                      <HelpCircle size={16} className="exp-icon" />
                      <div className="exp-content">
                        <strong>{isSpanish ? "Justificación pedagógica oficial:" : "Official Pedagogical Explanation:"}</strong>
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
