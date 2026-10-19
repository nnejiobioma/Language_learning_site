// =========================================================================
// Official Japanese National Curriculum Master
// - Track A: Foundational Literacy & Everyday Autonomy (JLPT N5 to N3) — Units 1 to 3
// - Track B: Workplace Rigor, Academic Dokkai & Cultural Mastery (JLPT N2 to Cultural Codes) — Units 4 to 6
// Exactly 6 Leveled Units • 24 Comprehensive Pedagogical Lessons • 192 Interactive Exercises
// Strictly mapped to the JF Standard for Japanese-Language Education & MEXT Benchmarks
// =========================================================================

import { japaneseTrackAUnits } from './japaneseLessonsTrackA.js';
import { japaneseTrackBUnits } from './japaneseLessonsTrackB.js';

export const japaneseAllUnits = [
  ...japaneseTrackAUnits,
  ...japaneseTrackBUnits
];

export { japaneseTrackAUnits, japaneseTrackBUnits };
export default japaneseAllUnits;
