// =========================================================================
// Official Swedish National Curriculum Master
// - Track A: Adult Municipal Education & Integration (SFI & Tisus Standard) — Units 1 to 3
// - Track B: Primary & Secondary Compulsory School (Skolverket Lgr22) — Units 4 to 6
// Exactly 6 Units • 24 Comprehensive Pedagogical Lessons • 192 Interactive Exercises
// =========================================================================

import { swedishTrackAUnits } from './swedishLessonsTrackA.js';
import { swedishTrackBUnits } from './swedishLessonsTrackB.js';

export const swedishAllUnits = [
  ...swedishTrackAUnits,
  ...swedishTrackBUnits
];

export { swedishTrackAUnits, swedishTrackBUnits };
export default swedishAllUnits;
