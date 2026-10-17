// =========================================================================
// CBT Question Attempt Manager & Pool Rotation
// Tracks questions attempted by logged-in users to guarantee a BRAND NEW set
// on every subsequent attempt across each subtest.
// =========================================================================

/**
 * Non-mutating Fisher-Yates shuffle
 */
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns a Set of question IDs the user has already seen or attempted.
 * Checks both local storage and profile data.
 * @param {string|null} userId 
 * @param {object|null} profile 
 * @returns {Set<string>}
 */
export function getUserSeenQuestionIds(userId = null, profile = null) {
  const seenSet = new Set();

  if (profile?.seenCbtQuestionIds && Array.isArray(profile.seenCbtQuestionIds)) {
    profile.seenCbtQuestionIds.forEach(id => seenSet.add(id));
  }

  if (typeof window !== 'undefined' && userId) {
    try {
      const localStr = localStorage.getItem(`lingo_cbt_seen_${userId}`);
      if (localStr) {
        const parsed = JSON.parse(localStr);
        if (Array.isArray(parsed)) {
          parsed.forEach(id => seenSet.add(id));
        }
      }
    } catch (e) {
      console.warn("Could not read local CBT history:", e);
    }
  }

  return seenSet;
}

/**
 * Records newly assigned question IDs to the user's history in both localStorage and user profile.
 * @param {string|null} userId 
 * @param {string[]} questionIds 
 * @param {Function|null} saveProfileData 
 * @param {object|null} profile 
 */
export function recordUserSeenQuestions(userId = null, questionIds = [], saveProfileData = null, profile = null) {
  if (!questionIds || questionIds.length === 0) return;

  const currentSeen = getUserSeenQuestionIds(userId, profile);
  questionIds.forEach(id => currentSeen.add(id));
  const updatedArray = Array.from(currentSeen);

  if (typeof window !== 'undefined' && userId) {
    try {
      localStorage.setItem(`lingo_cbt_seen_${userId}`, JSON.stringify(updatedArray));
    } catch (e) {
      console.warn("Could not save CBT seen questions locally:", e);
    }
  }

  if (saveProfileData && typeof saveProfileData === 'function') {
    try {
      saveProfileData({
        seenCbtQuestionIds: updatedArray,
        lastCbtAttemptAt: new Date().toISOString()
      });
    } catch (e) {
      console.warn("Could not sync CBT history to profile:", e);
    }
  }
}

/**
 * Selects a brand new set of questions from a pool for a given user.
 * Prioritizes unseen questions. If unseen questions are exhausted, cleanly
 * recycles the pool so the user is never blocked, while maximizing novel items.
 * 
 * @param {Array} pool - The full question bank for this subtest/task
 * @param {number} count - Desired number of questions for the test
 * @param {Set<string>} seenIds - Set of IDs already taken by this user
 * @param {Function|null} filterFn - Optional filter (e.g. taskType === 'message')
 * @returns {object} { selected: Array, isBrandNew: boolean, unseenRemaining: number }
 */
export function selectBrandNewSet(pool = [], count = 1, seenIds = new Set(), filterFn = null) {
  if (!pool || pool.length === 0) return { selected: [], isBrandNew: false, unseenRemaining: 0 };

  const eligiblePool = filterFn ? pool.filter(filterFn) : pool;
  if (eligiblePool.length === 0) return { selected: [], isBrandNew: false, unseenRemaining: 0 };

  // Partition into unseen vs seen
  const unseen = eligiblePool.filter(item => !seenIds.has(item.id));
  const seen = eligiblePool.filter(item => seenIds.has(item.id));

  let selected = [];
  let isBrandNew = true;

  if (unseen.length >= count) {
    // 100% Brand new, fresh questions
    selected = shuffleArray(unseen).slice(0, count);
  } else if (unseen.length > 0) {
    // Take all remaining unseen questions first
    const shuffledUnseen = shuffleArray(unseen);
    selected = [...shuffledUnseen];
    const needed = count - unseen.length;
    // Fill remaining slots with shuffled previously seen questions
    const shuffledSeen = shuffleArray(seen);
    selected = [...selected, ...shuffledSeen.slice(0, needed)];
    isBrandNew = false;
  } else {
    // All questions in this pool have been seen previously across multiple attempts!
    // Recycle pool with fresh random shuffle
    selected = shuffleArray(eligiblePool).slice(0, Math.min(count, eligiblePool.length));
    isBrandNew = false;
  }

  return {
    selected,
    isBrandNew,
    unseenRemaining: Math.max(0, unseen.length - selected.length)
  };
}

/**
 * Calculates user test attempt number for display
 */
export function getUserAttemptCount(userId = null) {
  if (typeof window === 'undefined' || !userId) return 1;
  try {
    const raw = localStorage.getItem(`lingo_cbt_attempt_count_${userId}`);
    return raw ? parseInt(raw, 10) : 1;
  } catch {
    return 1;
  }
}

/**
 * Increments and returns the user's attempt count
 */
export function incrementUserAttemptCount(userId = null) {
  if (typeof window === 'undefined' || !userId) return 1;
  try {
    const current = getUserAttemptCount(userId);
    const next = current + 1;
    localStorage.setItem(`lingo_cbt_attempt_count_${userId}`, String(next));
    return next;
  } catch {
    return 1;
  }
}
