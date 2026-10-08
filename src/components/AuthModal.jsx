'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  Sparkles, 
  AlertCircle, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal } = useGame();
  const { 
    loginWithEmail, 
    signupWithEmail, 
    loginWithGoogle, 
    loginAsGuest, 
    isFirebaseConfigured 
  } = useAuth();

  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfigHelp, setShowConfigHelp] = useState(false);

  if (!showAuthModal) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await loginWithEmail(email, password);
      } else {
        if (!displayName.trim()) {
          setError('Please provide a learner name.');
          setLoading(false);
          return;
        }
        await signupWithEmail(email, password, displayName);
      }
      setShowAuthModal(false);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Authentication error. Please check your details.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      setShowAuthModal(false);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Google Sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    await loginAsGuest();
    setShowAuthModal(false);
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-card">
        {/* Close Button */}
        <button 
          className="auth-close-btn"
          onClick={() => setShowAuthModal(false)}
          aria-label="Close authentication modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="auth-header">
          <div className="auth-mascot-icon">
            <img 
              src="/images/mascot.jpg" 
              alt="FiksLingo Mascot" 
              className="auth-mascot-img" 
            />
          </div>
          <h2 className="auth-title">
            {mode === 'login' ? 'Welcome Back, Learner!' : 'Join the FiksLingo Family'}
          </h2>
          <p className="auth-sub">
            Save your progress, maintain streaks across devices, and compete on leaderboards!
          </p>
        </div>

        {/* Firebase Environment Status Indicator */}
        <div className={`firebase-status-banner ${isFirebaseConfigured ? 'live' : 'mock'}`}>
          <div className="status-banner-content">
            {isFirebaseConfigured ? (
              <>
                <CheckCircle2 size={18} className="status-icon live" />
                <span>Connected to Cloud Firebase backend</span>
              </>
            ) : (
              <>
                <ShieldCheck size={18} className="status-icon mock" />
                <span>Local Demo Mode active (Instant guest access)</span>
              </>
            )}
          </div>
          <button 
            type="button" 
            className="config-help-toggle"
            onClick={() => setShowConfigHelp(!showConfigHelp)}
          >
            {showConfigHelp ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            <span>Firebase Setup</span>
          </button>
        </div>

        {/* Expandable Firebase Configuration Help */}
        {showConfigHelp && (
          <div className="firebase-config-guide-box">
            <h4>Connecting your own Firebase project:</h4>
            <p>1. Open the project's <code>.env.local.example</code> file.</p>
            <p>2. Copy it to <code>.env.local</code> and paste your Firebase console keys:</p>
            <pre className="env-code-sample">
              NEXT_PUBLIC_FIREBASE_API_KEY=your_key{'\n'}
              NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com{'\n'}
              NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
            </pre>
            <p>3. Restart <code>npm run dev</code>. The app will immediately link your live cloud Firestore & Auth!</p>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="auth-error-banner">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Google Sign-in */}
        <button 
          type="button" 
          className="google-signin-btn"
          onClick={handleGoogle}
          disabled={loading}
        >
          <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.645-5.2 3.645-9.15z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.92H1.21v3.13C3.26 21.43 7.34 24 12 24z" />
            <path fill="#FBBC05" d="M5.32 14.28c-.24-.72-.38-1.5-.38-2.28s.14-1.56.38-2.28V6.59H1.21C.44 8.12 0 9.99 0 12s.44 3.88 1.21 5.41l4.11-3.13z" />
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.57 1.21 6.59l4.11 3.13c.94-2.82 3.58-4.97 6.68-4.97z" />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="auth-divider-line">
          <span>or use email</span>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="auth-form-fields">
          {mode === 'signup' && (
            <div className="form-input-group">
              <label>Learner Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="e.g. Obioma, Folashade, David"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="form-input-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input 
                type="email" 
                placeholder="learner@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-input-group">
            <label>Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? 'Please wait...' : (mode === 'login' ? 'Sign In to Account' : 'Create Free Account')}
          </button>
        </form>

        {/* Guest Instant Play Button */}
        <div className="guest-row-box">
          <button 
            type="button" 
            className="guest-play-btn"
            onClick={handleGuest}
          >
            ⚡ Play Instantly as Guest (No password needed)
          </button>
        </div>

        {/* Toggle Mode */}
        <div className="auth-toggle-mode">
          {mode === 'login' ? (
            <p>
              Don't have an account yet?{' '}
              <button 
                type="button" 
                className="link-switch-btn"
                onClick={() => setMode('signup')}
              >
                Sign up free
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button 
                type="button" 
                className="link-switch-btn"
                onClick={() => setMode('login')}
              >
                Sign in here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
