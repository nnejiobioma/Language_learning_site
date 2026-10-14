// =========================================================================
// Complete CEFR French Curriculum Master (Units 1 to 27)
// Level A1: Units 1 to 5
// Level A2: Units 6 to 10
// Level B1: Units 11 to 15
// Level B2: Units 16 to 20
// Level C1: Units 21 to 24
// Level C2: Units 25 to 27
// =========================================================================

import { frenchA1Units } from './frenchLessonsA1.js';
import { frenchA2Units } from './frenchLessonsA2.js';
import { frenchB1B2Units } from './frenchLessonsB1B2.js';
import { frenchC1C2Units } from './frenchLessonsC1C2.js';

export const frenchAllUnits = [
  ...frenchA1Units,
  ...frenchA2Units,
  ...frenchB1B2Units,
  ...frenchC1C2Units
];
