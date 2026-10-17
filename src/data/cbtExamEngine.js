// CBT Dynamic Exam Engine
// Assembles authentic, randomized YKI exam sessions following official Finnish National Certificate standards:
// - Reading: 6 exercises (60 min)
// - Writing: 3 tasks (2 practical messages + 1 opinion essay, 55 min)
// - Listening: 6 audio recordings (40 min, tracks played twice at A1-A2 & B1-B2)
// - Speaking: 4 tasks (2-3 simulated dialogues + 1-2 monologues, 25 min)
// Supports user tracking to guarantee a BRAND NEW set on each subtest attempt!

import { perustasoReading, perustasoWriting, perustasoListening, perustasoSpeaking } from "./cbtPoolPerustaso.js";
import { keskitasoReading, keskitasoWriting, keskitasoListening, keskitasoSpeaking } from "./cbtPoolKeskitaso.js";
import { ylintasoReading, ylintasoWriting, ylintasoListening, ylintasoSpeaking } from "./cbtPoolYlintaso.js";
import { selectBrandNewSet } from "../lib/cbtQuestionManager.js";

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
 * Generates an authentic, fresh exam session prioritizing unseen questions for the logged-in user.
 * @param {string} levelKey - 'perustaso' | 'keskitaso' | 'ylintaso'
 * @param {string} subtestFilter - 'all' | 'reading' | 'writing' | 'listening' | 'speaking'
 * @param {Set<string>} seenQuestionIds - IDs of questions previously attempted by the user
 * @returns {object} Randomized exam session object
 */
export function generateDynamicExam(levelKey = "keskitaso", subtestFilter = "all", seenQuestionIds = new Set()) {
  const pool = examPools[levelKey] || examPools.keskitaso;

  // 1. Reading: Exactly 6 distinct exercises selected from the 30-item pool (prioritizing brand new items)
  const readingResult = selectBrandNewSet(pool.reading, 6, seenQuestionIds);
  const selectedReading = readingResult.selected;

  // 2. Writing: Exactly 3 practical prompts: 2 messages + 1 opinion essay (prioritizing brand new items)
  const messagesResult = selectBrandNewSet(pool.writing, 2, seenQuestionIds, item => item.taskType === "message");
  const essaysResult = selectBrandNewSet(pool.writing, 1, seenQuestionIds, item => item.taskType === "essay");
  const selectedWriting = [...messagesResult.selected, ...essaysResult.selected];

  // 3. Listening: Exactly 6 audio recordings (prioritizing brand new items)
  const listeningResult = selectBrandNewSet(pool.listening, 6, seenQuestionIds);
  const selectedListening = listeningResult.selected;

  // 4. Speaking: Exactly 4 tasks: 3 simulated dialogues + 1 monologue (prioritizing brand new items)
  const dialoguesResult = selectBrandNewSet(pool.speaking, 3, seenQuestionIds, item => item.taskType === "dialogue");
  const monologuesResult = selectBrandNewSet(pool.speaking, 1, seenQuestionIds, item => item.taskType === "monologue");
  const selectedSpeaking = [...dialoguesResult.selected, ...monologuesResult.selected];

  // Assemble question stream based on chosen subtest
  let questions = [];
  let durationMinutes = 0;
  let subtestLabel = "Täysi YKI-koesimulaatio (Kaikki 4 osakoetta)";

  if (subtestFilter === "reading") {
    questions = selectedReading;
    durationMinutes = 60;
    subtestLabel = "Tekstin ymmärtäminen (6 tekstiä • 60 min)";
  } else if (subtestFilter === "writing") {
    questions = selectedWriting;
    durationMinutes = 55;
    subtestLabel = "Kirjoittaminen (3 tehtävää • 55 min)";
  } else if (subtestFilter === "listening") {
    questions = selectedListening;
    durationMinutes = 40;
    subtestLabel = "Puheen ymmärtäminen (6 äänitettä • 40 min)";
  } else if (subtestFilter === "speaking") {
    questions = selectedSpeaking;
    durationMinutes = 25;
    subtestLabel = "Puhuminen (4 tehtävää: 3 vuoropuhelua + 1 puhe • 25 min)";
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

  const isBrandNewSession = 
    (subtestFilter === "reading" && readingResult.isBrandNew) ||
    (subtestFilter === "writing" && messagesResult.isBrandNew && essaysResult.isBrandNew) ||
    (subtestFilter === "listening" && listeningResult.isBrandNew) ||
    (subtestFilter === "speaking" && dialoguesResult.isBrandNew && monologuesResult.isBrandNew) ||
    (subtestFilter === "all" && readingResult.isBrandNew && messagesResult.isBrandNew && listeningResult.isBrandNew);

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
    isBrandNewSession,
    counts: {
      reading: subtestFilter === "all" || subtestFilter === "reading" ? selectedReading.length : 0,
      writing: subtestFilter === "all" || subtestFilter === "writing" ? selectedWriting.length : 0,
      listening: subtestFilter === "all" || subtestFilter === "listening" ? selectedListening.length : 0,
      speaking: subtestFilter === "all" || subtestFilter === "speaking" ? selectedSpeaking.length : 0
    },
    questions
  };
}
