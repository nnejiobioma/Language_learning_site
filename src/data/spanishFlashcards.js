// =========================================================================
// MCER / ELE Spanish Flashcards — Instituto Cervantes Aligned
// 800 High-Yield Pedagogical Flashcards across 20 Leveled Units (40 per Unit)
// 🟢 A1 (Units 1-4) | 🟡 A2 (Units 5-8) | 🟠 B1 (Units 9-12) | 🔵 B2 (Units 13-16) | 🔴 C1/C2 (Units 17-20)
// =========================================================================

import { spanishFlashcardsA1 } from './spanishFlashcardsA1.js';
import { spanishFlashcardsA2 } from './spanishFlashcardsA2.js';
import { spanishFlashcardsB1 } from './spanishFlashcardsB1.js';
import { spanishFlashcardsB2 } from './spanishFlashcardsB2.js';
import { spanishFlashcardsC1C2 } from './spanishFlashcardsC1C2.js';

export {
  spanishFlashcardsA1,
  spanishFlashcardsA2,
  spanishFlashcardsB1,
  spanishFlashcardsB2,
  spanishFlashcardsC1C2
};

export const spanishFlashcards = [
  ...spanishFlashcardsA1,
  ...spanishFlashcardsA2,
  ...spanishFlashcardsB1,
  ...spanishFlashcardsB2,
  ...spanishFlashcardsC1C2
];
