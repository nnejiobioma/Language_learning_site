'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 3 Settings: 'light' | 'dark' | 'system'
  const [themePreference, setThemePreferenceState] = useState('system');
  const [resolvedTheme, setResolvedTheme] = useState('dark');
  const [systemTheme, setSystemTheme] = useState('dark');

  // Helper to determine resolved theme based on preference and system query
  const computeResolvedTheme = useCallback((preference) => {
    if (preference === 'light') return 'light';
    if (preference === 'dark') return 'dark';
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  }, []);

  // Apply theme to DOM
  const applyThemeToDOM = useCallback((resolved, preference) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    if (resolved === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }

    // Update meta color-scheme if present
    const metaTheme = document.querySelector('meta[name="color-scheme"]');
    if (metaTheme) {
      metaTheme.content = preference === 'system' ? 'light dark' : preference;
    }
  }, []);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme-preference');
      const pref = (stored === 'light' || stored === 'dark' || stored === 'system') ? stored : 'system';
      setThemePreferenceState(pref);

      const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setSystemTheme(sysDark ? 'dark' : 'light');

      const resolved = computeResolvedTheme(pref);
      setResolvedTheme(resolved);
      applyThemeToDOM(resolved, pref);
    } catch (e) {
      // Storage access may be restricted in private browsing
    }
  }, [computeResolvedTheme, applyThemeToDOM]);

  // Listen to system OS preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e) => {
      const currentSys = e.matches ? 'dark' : 'light';
      setSystemTheme(currentSys);

      if (themePreference === 'system') {
        setResolvedTheme(currentSys);
        applyThemeToDOM(currentSys, 'system');
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [themePreference, applyThemeToDOM]);

  // Listen to storage changes across tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'theme-preference') {
        const newPref = (e.newValue === 'light' || e.newValue === 'dark' || e.newValue === 'system') ? e.newValue : 'system';
        setThemePreferenceState(newPref);
        const resolved = computeResolvedTheme(newPref);
        setResolvedTheme(resolved);
        applyThemeToDOM(resolved, newPref);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [computeResolvedTheme, applyThemeToDOM]);

  // Change theme function
  const setThemePreference = useCallback((newPref) => {
    if (newPref !== 'light' && newPref !== 'dark' && newPref !== 'system') return;
    
    setThemePreferenceState(newPref);
    try {
      if (newPref === 'system') {
        localStorage.removeItem('theme-preference');
      } else {
        localStorage.setItem('theme-preference', newPref);
      }
    } catch (e) {}

    const resolved = computeResolvedTheme(newPref);
    setResolvedTheme(resolved);
    applyThemeToDOM(resolved, newPref);
  }, [computeResolvedTheme, applyThemeToDOM]);

  return (
    <ThemeContext.Provider value={{
      themePreference,
      resolvedTheme,
      systemTheme,
      setThemePreference
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
