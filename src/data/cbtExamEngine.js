// CBT Dynamic Exam Engine
// Assembles authentic, randomized YKI exam sessions following official Finnish National Certificate standards:
// - Reading: 6 exercises (60 min)
// - Writing: 3 tasks (2 practical messages + 1 opinion essay, 55 min)
// - Listening: 6 audio recordings (40 min, tracks played twice at A1-A2 & B1-B2)
// - Speaking: 4 tasks (2-3 simulated dialogues + 1-2 monologues, 25 min)

import { perustasoReading, perustasoWriting, perustasoListening, perustasoSpeaking } from "./cbtPoolPerustaso.js";
import { keskitasoReading, keskitasoWriting, keskitasoListening, keskitasoSpeaking } from "./cbtPoolKeskitaso.js";
import { ylintasoReading, ylintasoWriting, ylintasoListening, ylintasoSpeaking } from "./cbtPoolYlintaso.js";

// Fisher-Yates non-mutating shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const examPools = {
  perustaso: {
    levelKey: "perustaso",
    title: "YKI Perustaso (CEFR A1–A2) Beginner Survival Exam",
    badge: "A1–A2 Perustaso",
    description: "Functional everyday survival Finnish: shopping, housing, casual directions, simple messages & dialogues.",
    reading: perustasoReading,
    writing: perustasoWriting,
    listening: perustasoListening,
    speaking: perustasoSpeaking
  },
  keskitaso: {
    levelKey: "keskitaso",
    title: "YKI Keskitaso (CEFR B1–B2) Citizenship & Professional Exam",
    badge: "B1–B2 Keskitaso (Kansalaisuuskoe)",
    description: "Official Finnish citizenship requirement: workplace communications, consumer rights, formal complaints, radio news & opinions.",
    reading: keskitasoReading,
    writing: keskitasoWriting,
    listening: keskitasoListening,
    speaking: keskitasoSpeaking
  },
  ylintaso: {
    levelKey: "ylintaso",
    title: "YKI Ylintaso (CEFR C1–C2) Academic & Literary Mastery Exam",
    badge: "C1–C2 Ylintaso",
    description: "Highest tier mastery: academic essays, constitutional law, literary analysis, parliamentary debates & keynote addresses.",
    reading: ylintasoReading,
    writing: ylintasoWriting,
    listening: ylintasoListening,
    speaking: ylintasoSpeaking
  }
};

/**
 * Generates a randomized exam session from the 30-item pools.
 * @param {string} levelKey - 'perustaso' | 'keskitaso' | 'ylintaso'
 * @param {string} subtestFilter - 'all' | 'reading' | 'writing' | 'listening' | 'speaking'
 * @returns {object} Randomized exam session object
 */
export function generateDynamicExam(levelKey = "keskitaso", subtestFilter = "all") {
  const pool = examPools[levelKey] || examPools.keskitaso;

  // 1. Reading: Exactly 6 distinct exercises selected from the 30-item pool
  const selectedReading = shuffle(pool.reading).slice(0, 6);

  // 2. Writing: Exactly 3 practical prompts: 2 messages + 1 opinion essay
  const messages = pool.writing.filter(item => item.taskType === "message");
  const essays = pool.writing.filter(item => item.taskType === "essay");
  const selectedMessages = shuffle(messages).slice(0, 2);
  const selectedEssays = shuffle(essays).slice(0, 1);
  const selectedWriting = [...selectedMessages, ...selectedEssays];

  // 3. Listening: Exactly 6 audio recordings (tracks played twice at A1-A2 & B1-B2)
  const selectedListening = shuffle(pool.listening).slice(0, 6);

  // 4. Speaking: Exactly 4 tasks: 3 simulated rapid dialogues (20-45s) + 1 monologue (90-120s speech)
  const dialogues = pool.speaking.filter(item => item.taskType === "dialogue");
  const monologues = pool.speaking.filter(item => item.taskType === "monologue");
  const selectedDialogues = shuffle(dialogues).slice(0, 3);
  const selectedMonologues = shuffle(monologues).slice(0, 1);
  const selectedSpeaking = [...selectedDialogues, ...selectedMonologues];

  // Assemble question stream based on chosen subtest
  let questions = [];
  let durationMinutes = 0;
  let subtestLabel = "Täysi YKI-koesimulaatio (Kaikki 4 osakoetta)";

  if (subtestFilter === "reading") {
    questions = selectedReading;
    durationMinutes = 60;
    subtestLabel = "Tekstin ymmärtäminen (6 tekstiä)";
  } else if (subtestFilter === "writing") {
    questions = selectedWriting;
    durationMinutes = 55;
    subtestLabel = "Kirjoittaminen (3 tehtävää)";
  } else if (subtestFilter === "listening") {
    questions = selectedListening;
    durationMinutes = 40;
    subtestLabel = "Puheen ymmärtäminen (6 äänitettä)";
  } else if (subtestFilter === "speaking") {
    questions = selectedSpeaking;
    durationMinutes = 25;
    subtestLabel = "Puhuminen (4 tehtävää: 3 vuoropuhelua + 1 puhe)";
  } else {
    // "all" - Full official simulation
    questions = [
      ...selectedReading,
      ...selectedWriting,
      ...selectedListening,
      ...selectedSpeaking
    ];
    durationMinutes = 180; // 60 + 55 + 40 + 25 = 180 min
    subtestLabel = "Täysi YKI-koesimulaatio (Kaikki 4 osakoetta)";
  }

  const sessionId = `${levelKey}-${subtestFilter}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

  return {
    sessionId,
    generatedAt: new Date().toISOString(),
    levelKey,
    title: pool.title,
    badge: pool.badge,
    subtestFilter,
    subtestLabel,
    durationMinutes,
    totalQuestions: questions.length,
    counts: {
      reading: subtestFilter === "all" || subtestFilter === "reading" ? selectedReading.length : 0,
      writing: subtestFilter === "all" || subtestFilter === "writing" ? selectedWriting.length : 0,
      listening: subtestFilter === "all" || subtestFilter === "listening" ? selectedListening.length : 0,
      speaking: subtestFilter === "all" || subtestFilter === "speaking" ? selectedSpeaking.length : 0
    },
    questions
  };
}
