// =========================================================================
// Complete MCER / ELE Spanish Curriculum Master (Units 1 to 20)
// Instituto Cervantes Aligned — Leveled Training Framework
// 🟢 Level A1: Beginner Block (Units 1 to 4)
// 🟡 Level A2: Elementary Block (Units 5 to 8)
// 🟠 Level B1: Intermediate Block (Units 9 to 12)
// 🔵 Level B2: Upper-Intermediate Block (Units 13 to 16)
// 🔴 Level C1/C2: Advanced & Mastery Block (Units 17 to 20)
// Exactly 20 Questions per Unit = 400 Questions Total
// =========================================================================

import { spanishA1Units } from './spanishLessonsA1.js';
import { spanishA2Units } from './spanishLessonsA2.js';
import { spanishB1Units } from './spanishLessonsB1.js';
import { spanishB2Units } from './spanishLessonsB2.js';
import { spanishC1C2Units } from './spanishLessonsC1C2.js';

export const spanishAllUnits = [
  ...spanishA1Units,
  ...spanishA2Units,
  ...spanishB1Units,
  ...spanishB2Units,
  ...spanishC1C2Units
];
