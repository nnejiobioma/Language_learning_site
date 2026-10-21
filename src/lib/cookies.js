/**
 * Persistent Cookies Utility for FliksLingo
 * 
 * Persistent cookies are files with an explicit expiration date and max-age that stay
 * saved on the user's hard drive across browser sessions, reboots, and tabs.
 * 
 * Used for long-term settings:
 *  - Saved language preference (flikslingo_lang, 365 days)
 *  - "Remember me" login option (flikslingo_remember_me & flikslingo_saved_email, 30 days)
 *  - Theme setting (flikslingo_theme, 365 days)
 *  - Cookie consent preference (flikslingo_cookie_consent, 365 days)
 */

export const COOKIE_KEYS = {
  LANGUAGE: 'flikslingo_lang',
  REMEMBER_ME: 'flikslingo_remember_me',
  SAVED_EMAIL: 'flikslingo_saved_email',
  THEME: 'flikslingo_theme',
  CONSENT: 'flikslingo_cookie_consent'
};

/**
 * Sets a persistent cookie with explicit expiration date and max-age.
 * @param {string} name - Name of the cookie
 * @param {string} value - String value to store
 * @param {number} days - Number of days until expiration (e.g. 365 for 1 year, 30 for 1 month)
 */
export function setPersistentCookie(name, value, days = 365) {
  if (typeof document === 'undefined') return;

  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = date.toUTCString();
  const maxAge = days * 24 * 60 * 60; // in seconds

  const secure = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';
  const encodedValue = encodeURIComponent(value);

  document.cookie = `${name}=${encodedValue}; expires=${expires}; max-age=${maxAge}; path=/; SameSite=Lax${secure}`;
}

/**
 * Retrieves a cookie value by name.
 * @param {string} name - Cookie name
 * @returns {string|null} - Decoded cookie value or null if not found
 */
export function getCookie(name) {
  if (typeof document === 'undefined') return null;

  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      try {
        return decodeURIComponent(c.substring(nameEQ.length));
      } catch {
        return c.substring(nameEQ.length);
      }
    }
  }
  return null;
}

/**
 * Removes a persistent cookie by expiring it immediately.
 * @param {string} name - Cookie name
 */
export function removeCookie(name) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0; path=/; SameSite=Lax`;
}

// ============================================================================
// Specialized Helpers for Long-Term Settings
// ============================================================================

/**
 * Get saved language preference from persistent cookie (fallback: localStorage or 'spanish')
 */
export function getSavedLanguage(fallback = 'spanish') {
  const fromCookie = getCookie(COOKIE_KEYS.LANGUAGE);
  if (fromCookie) return fromCookie;
  try {
    const fromStorage = localStorage.getItem('lingo_current_language');
    if (fromStorage) return fromStorage;
  } catch {}
  return fallback;
}

/**
 * Save language preference to persistent cookie (365 days expiry)
 */
export function saveLanguagePreference(langId) {
  if (!langId) return;
  setPersistentCookie(COOKIE_KEYS.LANGUAGE, langId, 365);
  try {
    localStorage.setItem('lingo_current_language', langId);
  } catch {}
}

/**
 * Retrieve remembered login details
 */
export function getRememberedLogin() {
  const remember = getCookie(COOKIE_KEYS.REMEMBER_ME) === 'true';
  const savedEmail = getCookie(COOKIE_KEYS.SAVED_EMAIL) || '';
  return {
    rememberMe: remember,
    savedEmail: remember ? savedEmail : ''
  };
}

/**
 * Save "Remember me" login option with 30-day persistence
 */
export function saveRememberedLogin(email, remember = true) {
  if (remember && email) {
    setPersistentCookie(COOKIE_KEYS.REMEMBER_ME, 'true', 30);
    setPersistentCookie(COOKIE_KEYS.SAVED_EMAIL, email.trim(), 30);
    try {
      localStorage.setItem(COOKIE_KEYS.SAVED_EMAIL, email.trim());
      localStorage.setItem(COOKIE_KEYS.REMEMBER_ME, 'true');
    } catch {}
  } else {
    removeCookie(COOKIE_KEYS.REMEMBER_ME);
    removeCookie(COOKIE_KEYS.SAVED_EMAIL);
    try {
      localStorage.removeItem(COOKIE_KEYS.SAVED_EMAIL);
      localStorage.removeItem(COOKIE_KEYS.REMEMBER_ME);
    } catch {}
  }
}

/**
 * Save theme preference to persistent cookie (365 days expiry)
 */
export function saveThemePreference(theme) {
  if (!theme) return;
  setPersistentCookie(COOKIE_KEYS.THEME, theme, 365);
  try {
    localStorage.setItem('theme-preference', theme);
  } catch {}
}

/**
 * Retrieve theme preference from persistent cookie
 */
export function getSavedTheme(fallback = 'system') {
  const fromCookie = getCookie(COOKIE_KEYS.THEME);
  if (fromCookie && ['light', 'dark', 'system'].includes(fromCookie)) {
    return fromCookie;
  }
  try {
    const fromStorage = localStorage.getItem('theme-preference');
    if (fromStorage && ['light', 'dark', 'system'].includes(fromStorage)) {
      return fromStorage;
    }
  } catch {}
  return fallback;
}

/**
 * Check if user has acknowledged cookie consent
 */
export function hasCookieConsent() {
  return getCookie(COOKIE_KEYS.CONSENT) === 'accepted';
}

/**
 * Record cookie consent with 365 days persistence
 */
export function saveCookieConsent(accepted = true) {
  setPersistentCookie(COOKIE_KEYS.CONSENT, accepted ? 'accepted' : 'declined', 365);
  try {
    localStorage.setItem(COOKIE_KEYS.CONSENT, accepted ? 'accepted' : 'declined');
  } catch {}
}
