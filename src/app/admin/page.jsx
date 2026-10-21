'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useAdminContent } from '../../context/AdminContentContext';
import { ADMIN_EMAILS } from '../../lib/admin';
import { 
  ShieldCheck, 
  ShieldAlert, 
  BookOpen, 
  Layers, 
  Sparkles, 
  GraduationCap, 
  Search, 
  Edit3, 
  RotateCcw, 
  Download, 
  ExternalLink, 
  Users, 
  CheckCircle, 
  Clock, 
  ArrowLeft,
  Mail,
  Sliders
} from 'lucide-react';
import AdminQuickEditModal from '../../components/AdminQuickEditModal';
import './admin.css';

export default function AdminPage() {
  const router = useRouter();
  const { user, profile, loading: authLoading } = useAuth();
  const { 
    isAdmin, 
    overrides, 
    getLanguageData, 
    openQuickEdit, 
    resetItem, 
    resetAllOverrides, 
    syncStatus 
  } = useAdminContent();

  const [selectedLang, setSelectedLang] = useState('pidgin');
  const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum' | 'flashcards' | 'culture' | 'subscribers'
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [subscribersLoading, setSubscribersLoading] = useState(false);

  // Fetch subscribers when subscribers tab is active
  useEffect(() => {
    if (activeTab === 'subscribers') {
      setSubscribersLoading(true);
      fetch('/api/subscribe')
        .then(res => res.json())
        .then(data => {
          if (data.subscribers) setSubscribers(data.subscribers);
        })
        .catch(err => console.warn('Subscribers load error:', err))
        .finally(() => setSubscribersLoading(false));
    }
  }, [activeTab]);

  const langData = useMemo(() => {
    return getLanguageData(selectedLang) || {};
  }, [getLanguageData, selectedLang, overrides]);

  // Flatten culture items for easy searching and editing
  const cultureVaultItems = useMemo(() => {
    const cv = langData.cultureVault;
    if (!cv) return [];
    if (Array.isArray(cv)) return cv;

    const items = [];
    if (cv.proverbOfDay) {
      items.push({
        id: 'proverbOfDay',
        type: 'Proverb of the Day',
        title: cv.proverbOfDay.proverb,
        meaning: cv.proverbOfDay.translation,
        context: cv.proverbOfDay.context,
        raw: cv.proverbOfDay
      });
    }
    (cv.cultureTips || []).forEach((tip, idx) => {
      items.push({
        id: tip.title || `tip-${idx}`,
        type: `Etiquette: ${tip.category || 'General'}`,
        title: tip.title,
        meaning: tip.description,
        context: tip.category,
        raw: tip
      });
    });
    (cv.slangs || []).forEach((slang, idx) => {
      items.push({
        id: slang.term || `slang-${idx}`,
        type: `Slang: ${slang.category || 'Colloquial'}`,
        title: slang.term,
        meaning: slang.meaning,
        context: slang.example ? `Example: "${slang.example}"` : '',
        raw: slang
      });
    });
    return items;
  }, [langData.cultureVault]);

  // Total override counts
  const overrideCount = useMemo(() => {
    return Object.keys(overrides.questions || {}).length +
      Object.keys(overrides.lessons || {}).length +
      Object.keys(overrides.units || {}).length +
      Object.keys(overrides.flashcards || {}).length +
      Object.keys(overrides.culture || {}).length +
      Object.keys(overrides.cbt || {}).length;
  }, [overrides]);

  // Export JSON backup
  const handleExportBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(overrides, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `flikslingo_content_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Loading state
  if (authLoading) {
    return (
      <div className="admin-portal-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#94a3b8' }}>Verifying administrator credentials…</p>
      </div>
    );
  }

  // Unauthorized view
  if (!isAdmin) {
    return (
      <div className="admin-portal-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: 540, background: '#0f172a', border: '1px solid #ef4444', borderRadius: 20, padding: '2.5rem', textAlign: 'center' }}>
          <ShieldAlert size={56} style={{ color: '#ef4444', margin: '0 auto 1rem' }} />
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Administrator Access Required
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            This portal is restricted to authorized site administrators. To manage site content from the frontend, please sign in with an administrator account:
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 12, marginBottom: '1.5rem', textAlign: 'left', fontSize: '0.85rem' }}>
            <p style={{ color: '#fbbf24', fontWeight: 700, marginBottom: '0.5rem' }}>Authorized Admin Accounts:</p>
            {ADMIN_EMAILS.map(email => (
              <p key={email} style={{ color: '#e2e8f0', fontFamily: 'monospace', margin: '0.2rem 0' }}>• {email}</p>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <Link href="/" className="admin-action-btn">
              <ArrowLeft size={16} /> Return to Home
            </Link>
            <Link href="/login" className="admin-action-btn primary">
              Sign In as Admin
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-portal-root">
      {/* Header */}
      <header className="admin-portal-header">
        <div className="admin-portal-header-content">
          <div className="admin-brand-lockup">
            <img src="/images/mascot.jpg" alt="FliksLingo" className="admin-logo-img" />
            <div>
              <div className="admin-portal-title">
                <span>FliksLingo Content Manager</span>
                <span className="admin-badge-pill">ADMIN CMS</span>
              </div>
              <p className="admin-portal-sub">
                Logged in as <strong>{user?.email}</strong> · Real-time frontend editing active
              </p>
            </div>
          </div>

          <div className="admin-header-actions">
            <button onClick={handleExportBackup} className="admin-action-btn" title="Download backup of all custom edits">
              <Download size={15} />
              <span>Export JSON</span>
            </button>
            <button onClick={resetAllOverrides} className="admin-action-btn" title="Revert all overrides to default">
              <RotateCcw size={15} />
              <span>Reset All</span>
            </button>
            <Link href="/learn" className="admin-action-btn primary">
              <ExternalLink size={15} />
              <span>View Learner App</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="admin-main-container">
        {/* Statistics Cards */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ color: '#10b981' }}>
              <BookOpen size={24} />
            </div>
            <div className="admin-stat-info">
              <h3>12</h3>
              <p>World Languages</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ color: '#f59e0b' }}>
              <Edit3 size={24} />
            </div>
            <div className="admin-stat-info">
              <h3>{overrideCount}</h3>
              <p>Active Live Overrides</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ color: '#60a5fa' }}>
              <Users size={24} />
            </div>
            <div className="admin-stat-info">
              <h3>{ADMIN_EMAILS.length}</h3>
              <p>Authorized Administrators</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ color: '#a855f7' }}>
              <Clock size={24} />
            </div>
            <div className="admin-stat-info">
              <h3>{syncStatus === 'saving' ? 'Saving…' : syncStatus === 'synced' ? 'Synced' : 'Ready'}</h3>
              <p>Frontend Persistence State</p>
            </div>
          </div>
        </div>

        {/* Language Switcher Bar */}
        <div className="admin-lang-bar">
          {[
            { id: 'pidgin', name: 'Nigerian Pidgin', flag: '🇳🇬' },
            { id: 'spanish', name: 'Spanish', flag: '🇪🇸' },
            { id: 'french', name: 'French', flag: '🇫🇷' },
            { id: 'german', name: 'German', flag: '🇩🇪' },
            { id: 'finnish', name: 'Finnish', flag: '🇫🇮' },
            { id: 'swedish', name: 'Swedish', flag: '🇸🇪' },
            { id: 'portuguese', name: 'Portuguese', flag: '🇧🇷' },
            { id: 'japanese', name: 'Japanese', flag: '🇯🇵' },
            { id: 'mandarin', name: 'Mandarin Chinese', flag: '🇨🇳' },
            { id: 'hausa', name: 'Hausa', flag: '🇳🇬' },
            { id: 'yoruba', name: 'Yoruba', flag: '🇳🇬' },
            { id: 'igbo', name: 'Igbo', flag: '🇳🇬' }
          ].map(lang => (
            <button
              key={lang.id}
              className={`admin-lang-pill ${selectedLang === lang.id ? 'active' : ''}`}
              onClick={() => setSelectedLang(lang.id)}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        {/* Section Navigation Tabs */}
        <div className="admin-section-tabs">
          <button
            className={`admin-tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
            onClick={() => setActiveTab('curriculum')}
          >
            <BookOpen size={16} />
            <span>Curriculum & Lessons</span>
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => setActiveTab('flashcards')}
          >
            <Layers size={16} />
            <span>Flashcards Deck</span>
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'culture' ? 'active' : ''}`}
            onClick={() => setActiveTab('culture')}
          >
            <Sparkles size={16} />
            <span>Cultural Vault</span>
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'subscribers' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscribers')}
          >
            <Mail size={16} />
            <span>Newsletter Subscribers</span>
          </button>
        </div>

        {/* Filter / Search Row */}
        {activeTab !== 'subscribers' && (
          <div className="admin-filter-row">
            <div className="admin-search-box">
              <Search size={16} style={{ color: '#94a3b8' }} />
              <input
                type="text"
                placeholder={`Search ${selectedLang} content by keyword, prompt, or English translation...`}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
              Showing {selectedLang.toUpperCase()} · Click <strong>[Edit]</strong> on any item to update it live.
            </p>
          </div>
        )}

        {/* TAB 1: CURRICULUM & LESSONS */}
        {activeTab === 'curriculum' && (
          <div className="admin-card-container">
            {(langData.units || []).map((unit, uIdx) => {
              const unitKey = unit.id || unit.unitId || `unit-${uIdx}`;
              const isUnitOverridden = Boolean(overrides.units?.[unitKey]);

              // Filter questions by search query
              const filteredLessons = (unit.lessons || []).map(lesson => {
                const filteredQuestions = (lesson.questions || []).filter(q => {
                  if (!searchQuery.trim()) return true;
                  const query = searchQuery.toLowerCase();
                  return (
                    q.prompt?.toLowerCase().includes(query) ||
                    q.correctAnswer?.toLowerCase().includes(query) ||
                    q.explanation?.toLowerCase().includes(query) ||
                    (q.options || []).some(opt => opt?.toLowerCase().includes(query))
                  );
                });
                return { ...lesson, questions: filteredQuestions };
              }).filter(lesson => {
                if (!searchQuery.trim()) return true;
                return lesson.questions.length > 0 || lesson.title?.toLowerCase().includes(searchQuery.toLowerCase());
              });

              if (searchQuery.trim() && filteredLessons.length === 0) return null;

              return (
                <div key={unitKey} className="admin-unit-box">
                  <div className="admin-unit-header">
                    <div>
                      <h4>
                        <span>{unit.title}</span>
                        {isUnitOverridden && (
                          <span style={{ fontSize: '0.72rem', background: '#10b981', color: '#0f172a', padding: '0.15rem 0.45rem', borderRadius: 6, fontWeight: 800 }}>
                            OVERRIDDEN
                          </span>
                        )}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                        {unit.subtitle} — {unit.description}
                      </p>
                    </div>
                    <button
                      className="admin-edit-badge-btn"
                      onClick={() => openQuickEdit(unit, 'unit', { id: unitKey, langId: selectedLang })}
                    >
                      <Edit3 size={13} />
                      <span>Edit Unit</span>
                    </button>
                  </div>

                  {filteredLessons.map((lesson) => {
                    const isLessonOverridden = Boolean(overrides.lessons?.[lesson.id]);
                    return (
                      <div key={lesson.id} className="admin-lesson-box">
                        <div className="admin-lesson-header">
                          <div>
                            <h5>
                              <span>{lesson.title}</span>
                              {isLessonOverridden && (
                                <span style={{ marginLeft: 8, fontSize: '0.7rem', color: '#34d399', fontWeight: 700 }}>
                                  (Modified)
                                </span>
                              )}
                            </h5>
                            <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{lesson.description}</p>
                          </div>
                          <button
                            className="admin-edit-badge-btn"
                            onClick={() => openQuickEdit(lesson, 'lesson', { id: lesson.id, langId: selectedLang })}
                          >
                            <Edit3 size={13} />
                            <span>Edit Lesson</span>
                          </button>
                        </div>

                        <div className="admin-questions-grid">
                          {lesson.questions.map((q, qIdx) => {
                            const isQOverridden = Boolean(overrides.questions?.[q.id]);
                            return (
                              <div key={q.id || qIdx} className={`admin-q-card ${isQOverridden ? 'is-overridden' : ''}`}>
                                <div className="admin-q-info">
                                  <div className="admin-q-type">
                                    <span>#{qIdx + 1} · {q.type}</span>
                                    {isQOverridden && (
                                      <span style={{ color: '#10b981' }}>● Live Custom Override</span>
                                    )}
                                  </div>
                                  <p className="admin-q-prompt">{q.prompt}</p>
                                  <p className="admin-q-ans">
                                    <strong>Answer:</strong> {q.correctAnswer}
                                  </p>
                                  {q.explanation && (
                                    <p className="admin-q-expl">
                                      <em>Note:</em> {q.explanation}
                                    </p>
                                  )}
                                </div>
                                <button
                                  className="admin-edit-badge-btn"
                                  onClick={() => openQuickEdit(q, 'question', { id: q.id, langId: selectedLang })}
                                >
                                  <Edit3 size={13} />
                                  <span>Edit</span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: FLASHCARDS */}
        {activeTab === 'flashcards' && (
          <div className="admin-card-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
              {(langData.flashcards || [])
                .filter(c => {
                  if (!searchQuery.trim()) return true;
                  const q = searchQuery.toLowerCase();
                  return (
                    c.front?.toLowerCase().includes(q) ||
                    c.back?.toLowerCase().includes(q) ||
                    c.example?.toLowerCase().includes(q)
                  );
                })
                .map((card, idx) => {
                  const isCardOverridden = Boolean(overrides.flashcards?.[card.id]);
                  return (
                    <div key={card.id || idx} className={`admin-q-card ${isCardOverridden ? 'is-overridden' : ''}`}>
                      <div className="admin-q-info">
                        <div className="admin-q-type">
                          <span>Card #{idx + 1} {card.category ? `· ${card.category}` : ''}</span>
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', margin: '0.2rem 0' }}>
                          {card.front}
                        </h4>
                        <p style={{ color: '#34d399', fontSize: '0.88rem', fontWeight: 600 }}>
                          {card.back}
                        </p>
                        {card.phonetic && (
                          <p style={{ fontSize: '0.78rem', color: '#94a3b8', fontStyle: 'italic' }}>
                            🗣 {card.phonetic}
                          </p>
                        )}
                        {card.example && (
                          <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.35rem' }}>
                            "{card.example}"
                          </p>
                        )}
                      </div>
                      <button
                        className="admin-edit-badge-btn"
                        onClick={() => openQuickEdit(card, 'flashcard', { id: card.id, langId: selectedLang })}
                      >
                        <Edit3 size={13} />
                        <span>Edit</span>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* TAB 3: CULTURE VAULT */}
        {activeTab === 'culture' && (
          <div className="admin-card-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
              {cultureVaultItems
                .filter(item => {
                  if (!searchQuery.trim()) return true;
                  const q = searchQuery.toLowerCase();
                  return (
                    item.title?.toLowerCase().includes(q) ||
                    item.meaning?.toLowerCase().includes(q) ||
                    item.context?.toLowerCase().includes(q) ||
                    item.type?.toLowerCase().includes(q)
                  );
                })
                .map((item, idx) => {
                  const itemKey = item.id || `culture-${idx}`;
                  const isItemOverridden = Boolean(overrides.culture?.[itemKey]);
                  return (
                    <div key={itemKey} className={`admin-q-card ${isItemOverridden ? 'is-overridden' : ''}`}>
                      <div className="admin-q-info">
                        <span className="admin-q-type">{item.type || `Cultural Wisdom #${idx + 1}`}</span>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fbbf24', margin: '0.2rem 0' }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: '#e2e8f0', marginTop: '0.25rem' }}>
                          <strong>Meaning / Description:</strong> {item.meaning}
                        </p>
                        {item.context && (
                          <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.35rem', lineHeight: 1.5 }}>
                            {item.context}
                          </p>
                        )}
                      </div>
                      <button
                        className="admin-edit-badge-btn"
                        onClick={() => openQuickEdit(item.raw || item, 'culture', { id: itemKey, langId: selectedLang })}
                      >
                        <Edit3 size={13} />
                        <span>Edit</span>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* TAB 4: SUBSCRIBERS */}
        {activeTab === 'subscribers' && (
          <div className="admin-card-container">
            <div className="admin-unit-box">
              <div className="admin-unit-header">
                <div>
                  <h4>Newsletter Subscribers & Leads</h4>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                    Real-time audience list collected from subscribe forms across the site.
                  </p>
                </div>
                <span className="admin-badge-pill">{subscribers.length} Subscribers</span>
              </div>

              {subscribersLoading ? (
                <p style={{ color: '#94a3b8', padding: '1rem' }}>Loading subscriber database…</p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: '#94a3b8' }}>
                        <th style={{ padding: '0.75rem 1rem' }}>Name</th>
                        <th style={{ padding: '0.75rem 1rem' }}>Email</th>
                        <th style={{ padding: '0.75rem 1rem' }}>Source</th>
                        <th style={{ padding: '0.75rem 1rem' }}>Subscribed Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((sub, sIdx) => (
                        <tr key={sIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#f8fafc' }}>
                            {sub.name || 'Anonymous Learner'}
                          </td>
                          <td style={{ padding: '0.75rem 1rem', color: '#34d399', fontFamily: 'monospace' }}>
                            {sub.email}
                          </td>
                          <td style={{ padding: '0.75rem 1rem', color: '#94a3b8' }}>
                            {sub.source || 'Website'}
                          </td>
                          <td style={{ padding: '0.75rem 1rem', color: '#64748b', fontSize: '0.8rem' }}>
                            {sub.subscribedAt ? new Date(sub.subscribedAt).toLocaleDateString() : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Quick Edit Modal */}
      <AdminQuickEditModal />
    </div>
  );
}
