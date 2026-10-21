'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LANGUAGES as BASE_LANGUAGES } from '../data/languages';
import { useAuth } from './AuthContext';
import { db, isFirebaseConfigured, doc, getDoc, setDoc, onSnapshot } from '../lib/firebase';

const AdminContentContext = createContext(null);

const STORAGE_KEY = 'flikslingo_content_overrides';

export function AdminContentProvider({ children }) {
  const { user, profile } = useAuth();
  const isAdmin = Boolean(profile?.role === 'admin');

  const [overrides, setOverrides] = useState({
    questions: {},   // { [questionId]: { prompt, options, correctAnswer, explanation, ... } }
    lessons: {},     // { [lessonId]: { title, description, ... } }
    units: {},       // { [unitId]: { title, description, subtitle, ... } }
    flashcards: {},  // { [cardId]: { front, back, phonetic, example, ... } }
    culture: {},     // { [itemId]: { title, proverb, meaning, context, ... } }
    cbt: {},         // { [qId]: { prompt, options, correctAnswer, explanation, ... } }
    site: {}         // { heroTitle, heroSubtitle, announcements, ... }
  });

  const [adminEditMode, setAdminEditMode] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('flikslingo_admin_edit_mode') === 'true';
      } catch {}
    }
    return false;
  });
  const [activeEditItem, setActiveEditItem] = useState(null); // { type, id, data, langId, parentId }
  const [syncStatus, setSyncStatus] = useState('idle'); // 'idle' | 'saving' | 'synced' | 'error'

  // Load saved overrides from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setOverrides(prev => ({
          questions: { ...prev.questions, ...(parsed.questions || {}) },
          lessons: { ...prev.lessons, ...(parsed.lessons || {}) },
          units: { ...prev.units, ...(parsed.units || {}) },
          flashcards: { ...prev.flashcards, ...(parsed.flashcards || {}) },
          culture: { ...prev.culture, ...(parsed.culture || {}) },
          cbt: { ...prev.cbt, ...(parsed.cbt || {}) },
          site: { ...prev.site, ...(parsed.site || {}) }
        }));
      }
    } catch (e) {
      console.warn('Could not load local content overrides:', e);
    }

    // Also listen to cloud overrides from Firestore in real-time so all users get live updates
    let unsubscribeFirestore = null;
    if (isFirebaseConfigured && db) {
      try {
        unsubscribeFirestore = onSnapshot(
          doc(db, 'system', 'content_overrides'),
          (snap) => {
            if (snap.exists()) {
              const cloudData = snap.data();
              setOverrides(prev => {
                const merged = {
                  questions: { ...prev.questions, ...(cloudData.questions || {}) },
                  lessons: { ...prev.lessons, ...(cloudData.lessons || {}) },
                  units: { ...prev.units, ...(cloudData.units || {}) },
                  flashcards: { ...prev.flashcards, ...(cloudData.flashcards || {}) },
                  culture: { ...prev.culture, ...(cloudData.culture || {}) },
                  cbt: { ...prev.cbt, ...(cloudData.cbt || {}) },
                  site: { ...prev.site, ...(cloudData.site || {}) }
                };
                try {
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
                } catch {}
                return merged;
              });
            }
          },
          (err) => {
            console.warn('Cloud content overrides listener error:', err.message);
          }
        );
      } catch (err) {
        console.warn('Firestore snapshot setup skipped:', err.message);
      }
    }

    return () => {
      if (unsubscribeFirestore) unsubscribeFirestore();
    };
  }, []);

  // Save changes to localStorage and optionally to Firestore / API
  const persistOverrides = useCallback(async (newOverrides) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newOverrides));
    } catch (e) {
      console.warn('Failed to save content overrides to localStorage:', e);
    }

    setSyncStatus('saving');

    // 1. Save to cloud Firestore if available
    if (isFirebaseConfigured && db && isAdmin) {
      try {
        await setDoc(doc(db, 'system', 'content_overrides'), newOverrides, { merge: true });
        setSyncStatus('synced');
      } catch (err) {
        console.warn('Firestore content overrides write error:', err);
      }
    }

    // 2. Also send to local Next.js API route
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          overrides: newOverrides,
          userEmail: user?.email
        })
      });
      if (res.ok) {
        setSyncStatus('synced');
      }
    } catch {
      // Local development or offline fallback
    }

    setTimeout(() => setSyncStatus('idle'), 2500);
  }, [isAdmin, user?.email]);

  // Update a specific Question
  const updateQuestion = useCallback((questionId, updatedFields) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        questions: {
          ...prev.questions,
          [questionId]: {
            ...(prev.questions[questionId] || {}),
            ...updatedFields,
            _updatedAt: new Date().toISOString()
          }
        }
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  // Update a Lesson (title, description, etc.)
  const updateLesson = useCallback((lessonId, updatedFields) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            ...(prev.lessons[lessonId] || {}),
            ...updatedFields,
            _updatedAt: new Date().toISOString()
          }
        }
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  // Update a Unit
  const updateUnit = useCallback((unitId, updatedFields) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        units: {
          ...prev.units,
          [unitId]: {
            ...(prev.units[unitId] || {}),
            ...updatedFields,
            _updatedAt: new Date().toISOString()
          }
        }
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  // Update a Flashcard
  const updateFlashcard = useCallback((cardId, updatedFields) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        flashcards: {
          ...prev.flashcards,
          [cardId]: {
            ...(prev.flashcards[cardId] || {}),
            ...updatedFields,
            _updatedAt: new Date().toISOString()
          }
        }
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  // Update a Culture item
  const updateCulture = useCallback((itemId, updatedFields) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        culture: {
          ...prev.culture,
          [itemId]: {
            ...(prev.culture[itemId] || {}),
            ...updatedFields,
            _updatedAt: new Date().toISOString()
          }
        }
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  // Update CBT Question
  const updateCbt = useCallback((qId, updatedFields) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        cbt: {
          ...prev.cbt,
          [qId]: {
            ...(prev.cbt[qId] || {}),
            ...updatedFields,
            _updatedAt: new Date().toISOString()
          }
        }
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  // Reset an override back to baseline
  const resetItem = useCallback((section, id) => {
    setOverrides(prev => {
      const sectionObj = { ...(prev[section] || {}) };
      delete sectionObj[id];
      const next = {
        ...prev,
        [section]: sectionObj
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  // Reset all overrides
  const resetAllOverrides = useCallback(() => {
    if (typeof window !== 'undefined' && !window.confirm('Are you sure you want to revert all custom content edits back to site defaults?')) {
      return;
    }
    const empty = {
      questions: {},
      lessons: {},
      units: {},
      flashcards: {},
      culture: {},
      cbt: {},
      site: {}
    };
    setOverrides(empty);
    persistOverrides(empty);
  }, [persistOverrides]);

  // Merge language data with active overrides
  const getLanguageData = useCallback((langId) => {
    const base = BASE_LANGUAGES[langId] || BASE_LANGUAGES.spanish;
    if (!base) return null;

    // Apply Unit, Lesson, and Question overrides
    const units = (base.units || []).map(unit => {
      const unitKey = unit.id || unit.unitId;
      const unitOverride = overrides.units[unitKey] || {};

      const lessons = (unit.lessons || []).map(lesson => {
        const lessonOverride = overrides.lessons[lesson.id] || {};
        const questions = (lesson.questions || []).map(q => {
          const qOverride = overrides.questions[q.id] || {};
          return { ...q, ...qOverride };
        });

        return {
          ...lesson,
          ...lessonOverride,
          questions
        };
      });

      return {
        ...unit,
        ...unitOverride,
        lessons
      };
    });

    // Apply Flashcard overrides
    const flashcards = (base.flashcards || []).map(card => {
      const cardOverride = overrides.flashcards[card.id] || {};
      return { ...card, ...cardOverride };
    });

    // Apply Culture Vault overrides
    const rawVault = base.cultureVault || {};
    let cultureVault;
    if (Array.isArray(rawVault)) {
      cultureVault = rawVault.map(item => {
        const itemKey = item.id || item.proverb || item.title;
        const cultureOverride = overrides.culture[itemKey] || {};
        return { ...item, ...cultureOverride };
      });
    } else {
      const proverbOverride = overrides.culture['proverbOfDay'] || {};
      const cultureTips = (rawVault.cultureTips || []).map((tip, idx) => {
        const tipKey = tip.id || tip.title || `tip-${idx}`;
        const tipOverride = overrides.culture[tipKey] || {};
        return { ...tip, ...tipOverride };
      });
      const slangs = (rawVault.slangs || []).map((slang, idx) => {
        const slangKey = slang.id || slang.term || `slang-${idx}`;
        const slangOverride = overrides.culture[slangKey] || {};
        return { ...slang, ...slangOverride };
      });

      cultureVault = {
        ...rawVault,
        proverbOfDay: rawVault.proverbOfDay ? { ...rawVault.proverbOfDay, ...proverbOverride } : rawVault.proverbOfDay,
        cultureTips,
        slangs
      };
    }

    return {
      ...base,
      units,
      flashcards,
      cultureVault
    };
  }, [overrides]);

  // Open modal for quick in-place editing
  const openQuickEdit = (itemData, sectionType, meta = {}) => {
    if (!isAdmin) return;
    setActiveEditItem({
      data: itemData,
      type: sectionType, // 'question' | 'lesson' | 'unit' | 'flashcard' | 'culture' | 'cbt'
      ...meta
    });
  };

  const closeQuickEdit = () => {
    setActiveEditItem(null);
  };

  const updateSite = useCallback((fieldKey, value) => {
    setOverrides(prev => {
      const next = {
        ...prev,
        site: {
          ...prev.site,
          [fieldKey]: value,
          _updatedAt: new Date().toISOString()
        }
      };
      persistOverrides(next);
      return next;
    });
  }, [persistOverrides]);

  const toggleAdminEditMode = () => {
    setAdminEditMode(prev => {
      const next = !prev;
      try {
        localStorage.setItem('flikslingo_admin_edit_mode', String(next));
      } catch {}
      return next;
    });
  };

  return (
    <AdminContentContext.Provider value={{
      isAdmin,
      overrides,
      adminEditMode,
      activeEditItem,
      syncStatus,
      toggleAdminEditMode,
      setAdminEditMode,
      openQuickEdit,
      closeQuickEdit,
      updateQuestion,
      updateLesson,
      updateUnit,
      updateFlashcard,
      updateCulture,
      updateCbt,
      updateSite,
      resetItem,
      resetAllOverrides,
      getLanguageData
    }}>
      {children}
    </AdminContentContext.Provider>
  );
}

export const useAdminContent = () => useContext(AdminContentContext);
