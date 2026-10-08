'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';
import Avatar from './Avatar';
import { LANGUAGES } from '../data/languages';
import { 
  Flame, 
  Heart, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  User, 
  BookOpen, 
  Layers, 
  Crown, 
  Globe2, 
  GraduationCap,
  ChevronDown,
  CloudCheck,
  CloudOff
} from 'lucide-react';

export default function Header() {
  const { 
    currentLanguage, 
    switchLanguage, 
    hearts, 
    xp, 
    streak, 
    soundEnabled, 
    toggleSound,
    activeTab,
    setActiveTab,
    setShowHeartModal
  } = useGame();

  const router = useRouter();
  const { user, profile, isFirebaseConfigured, logout } = useAuth();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const activeLangData = LANGUAGES[currentLanguage] || LANGUAGES.pidgin;

  return (
    <header className="header-root">
      <div className="header-container">
        {/* Logo and Brand */}
        <div className="logo-group">
          <div className="logo-badge" onClick={() => setActiveTab('learn')}>
            <div className="mascot-avatar-small">
              <img 
                src="/images/mascot.jpg" 
                alt="FiksLingo Mascot" 
                className="mascot-img"
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">FiksLingo</span>
              <span className="brand-tagline">Master World Languages</span>
            </div>
          </div>

          {/* Language Switcher Dropdown */}
          <div className="lang-switcher-wrapper">
            <button 
              className="lang-pill-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label="Select Learning Language"
              id="lang-select-button"
            >
              <span className="lang-flag">{activeLangData.flag}</span>
              <span className="lang-name-display">{activeLangData.name}</span>
              <ChevronDown size={15} className={`chevron-icon ${langDropdownOpen ? 'rotated' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="lang-dropdown-menu">
                <div className="dropdown-label">SELECT LANGUAGE</div>
                {Object.values(LANGUAGES).map((lang) => (
                  <button
                    key={lang.id}
                    className={`lang-option-item ${currentLanguage === lang.id ? 'active' : ''}`}
                    onClick={() => {
                      switchLanguage(lang.id);
                      setLangDropdownOpen(false);
                    }}
                  >
                    <div className="option-flag">{lang.flag}</div>
                    <div className="option-info">
                      <span className="option-title">{lang.name}</span>
                      <span className="option-native">{lang.nativeName}</span>
                    </div>
                    {currentLanguage === lang.id && (
                      <span className="active-badge">Active</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs" aria-label="Main Navigation">
          <button 
            className={`nav-tab-btn ${activeTab === 'learn' ? 'active' : ''}`}
            onClick={() => setActiveTab('learn')}
            id="nav-tab-learn"
          >
            <BookOpen size={18} />
            <span>Curriculum</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => setActiveTab('flashcards')}
            id="nav-tab-flashcards"
          >
            <Layers size={18} />
            <span>Flashcards</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'culture' ? 'active' : ''}`}
            onClick={() => setActiveTab('culture')}
            id="nav-tab-culture"
          >
            <Globe2 size={18} />
            <span>Culture Vault</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'cbt' ? 'active' : ''}`}
            onClick={() => setActiveTab('cbt')}
            id="nav-tab-cbt"
          >
            <GraduationCap size={18} />
            <span>CBT Exams</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'leaderboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('leaderboard')}
            id="nav-tab-leaderboard"
          >
            <Crown size={18} />
            <span>Leaderboard</span>
          </button>
        </nav>

        {/* Stats and User Controls */}
        <div className="stats-controls-group">
          {/* Daily Streak */}
          <div className="stat-chip streak-chip" title="Daily Streak">
            <Flame size={18} className="flame-icon pulsing" />
            <span className="stat-value">{streak}</span>
          </div>

          {/* Hearts */}
          <div 
            className="stat-chip heart-chip" 
            onClick={() => setShowHeartModal(true)}
            role="button"
            tabIndex={0}
            title="Hearts remaining. Click to refill."
          >
            <Heart size={18} className="heart-icon" />
            <span className="stat-value">{hearts}</span>
          </div>

          {/* XP */}
          <div className="stat-chip xp-chip" title="Total XP Earned">
            <Sparkles size={18} className="xp-icon" />
            <span className="stat-value">{xp} XP</span>
          </div>

          {/* Audio Sound Toggle */}
          <button 
            className="icon-circle-btn" 
            onClick={toggleSound}
            aria-label={soundEnabled ? "Mute audio sound effects" : "Unmute audio"}
            title={soundEnabled ? "Sound enabled" : "Sound muted"}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} className="muted-icon" />}
          </button>

          {/* User Account / Profile */}
          <div className="user-profile-wrapper">
            <button 
              className="user-profile-btn"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              aria-label="User Account"
              aria-expanded={userDropdownOpen}
            >
              <Avatar profile={profile} size={30} />
              <span className="user-name-text">
                {profile?.displayName || user?.displayName || 'Learner'}
              </span>
            </button>

            {userDropdownOpen && (
              <div className="user-dropdown-card">
                <div className="user-card-header">
                  <p className="card-name">{profile?.displayName || user?.displayName || 'Learner'}</p>
                  <p className="card-email">{user?.email || 'Signed in'}</p>
                  <div className="cloud-status-badge">
                    {isFirebaseConfigured ? (
                      <span className="cloud-connected">🟢 Progress synced</span>
                    ) : (
                      <span className="cloud-demo">🟡 Demo mode (this browser only)</span>
                    )}
                  </div>
                </div>
                <button 
                  className="dropdown-signout-btn"
                  style={{ marginBottom: 8 }}
                  onClick={() => {
                    setUserDropdownOpen(false);
                    router.push('/profile');
                  }}
                >
                  <User size={14} style={{ marginRight: 6, verticalAlign: '-2px' }} />
                  My Profile
                </button>
                <button 
                  className="dropdown-signout-btn"
                  onClick={async () => {
                    setUserDropdownOpen(false);
                    await logout();
                    router.replace('/');
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
