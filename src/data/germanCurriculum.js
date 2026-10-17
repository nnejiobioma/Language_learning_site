// =========================================================================
// Official BAMF (Bundesamt für Migration und Flüchtlinge) & Goethe-Institut
// Rahmencurriculum für Integrationskurse & DeuFöV Berufssprachkurse Master
// German Curriculum (Units 1 to 10)
// - Phase 1: Elementare Sprachverwendung (A1–A2) — Units 1 to 4
// - Phase 2: Selbstständige Sprachverwendung (B1–B2) — Units 5 to 8
// - Phase 3: Kompetente Sprachverwendung (C1–C2) — Units 9 and 10
// Exactly 10 Units • 40 Complete Lessons
// =========================================================================

import { germanA1A2Units } from './germanLessonsA1A2.js';
import { germanB1B2Units } from './germanLessonsB1B2.js';
import { germanC1C2Units } from './germanLessonsC1C2.js';

export const germanAllUnits = [
  ...germanA1A2Units,
  ...germanB1B2Units,
  ...germanC1C2Units
];
