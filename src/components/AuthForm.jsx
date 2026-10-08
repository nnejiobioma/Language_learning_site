'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, AlertCircle, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';

const FRIENDLY_ERRORS = {
  'auth/email-already-in-use': 'An account with this email already exists. Try signing in instead.',
  'auth/invalid-email': 'That email address does not look right.',
  'auth/weak-password': 'Choose a stronger password (at least 6 characters).',
  'auth/invalid-credential': 'Incorrect email or password.',
  'auth/wrong-password': 'Incorrect email or password.',
  'auth/user-not-found': 'No account found for that email. Create one instead.',
  'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
  'auth/popup-closed-by-user': 'The Google sign-in window was closed before finishing.',
  'auth/network-request-failed': 'Network error. Check your connection and try again.',
  'auth/operation-not-allowed': 'This sign-in method is not enabled in Firebase yet.',
};

function friendlyError(err) {
  return FRIENDLY_ERRORS[err?.code] || err?.message || 'Something went wrong. Please try again.';
}

/**
 * Full-page account form. Every learner must sign up or log in before using the app.
 * `initialMode` is 'login' or 'signup'.
 */
export default function AuthForm({ initialMode = 'signup' }) {
  const router = useRouter();
  const { user, loading: authLoading, loginWithEmail, signupWithEmail, loginWithGoogle, isFirebaseConfigured } = useAuth();

  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Already signed in: go straight to the app.
  useEffect(() => {
    if (!authLoading && user) {
      router.replace('/learn');
    }
  }, [authLoading, user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      if (mode === 'login') {
        await loginWithEmail(email, password);
      } else {
        if (!displayName.trim()) {
          setError('Please tell us your name.');
          return;
        }
        await signupWithEmail(email, password, displayName);
      }
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setSubmitting(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setSubmitting(false);
    }
  };

  const isSignup = mode === 'signup';

  return (
    <div className="auth-modal-overlay" role="main">
      <div className="auth-modal-card">
        <Link href="/" className="auth-back-link">
          <ArrowLeft size={16} /> Back to home
        </Link>

        <div className="auth-header">
          <div className="auth-mascot-icon">
            <img src="/images/mascot.jpg" alt="FiksLingo Mascot" className="auth-mascot-img" />
          </div>
          <h1 className="auth-title">
            {isSignup ? 'Create your FiksLingo account' : 'Welcome back, learner!'}
          </h1>
          <p className="auth-sub">
            {isSignup
              ? 'An account is required to start learning. It saves your progress, streaks and XP across devices.'
              : 'Sign in to continue your lessons and keep your streak alive.'}
          </p>
        </div>

        <div className={`firebase-status-banner ${isFirebaseConfigured ? 'live' : 'mock'}`}>
          <div className="status-banner-content">
            {isFirebaseConfigured ? (
              <>
                <CheckCircle2 size={18} className="status-icon live" />
                <span>Your account is stored securely in the cloud</span>
              </>
            ) : (
              <>
                <ShieldCheck size={18} className="status-icon mock" />
                <span>Demo mode: accounts are stored in this browser only</span>
              </>
            )}
          </div>
        </div>

        {error && (
          <div className="auth-error-banner" role="alert">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <button
          type="button"
          className="google-signin-btn"
          onClick={handleGoogle}
          disabled={submitting}
          id="auth-google-button"
        >
          <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.645-5.2 3.645-9.15z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.92H1.21v3.13C3.26 21.43 7.34 24 12 24z" />
            <path fill="#FBBC05" d="M5.32 14.28c-.24-.72-.38-1.5-.38-2.28s.14-1.56.38-2.28V6.59H1.21C.44 8.12 0 9.99 0 12s.44 3.88 1.21 5.41l4.11-3.13z" />
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.57 1.21 6.59l4.11 3.13c.94-2.82 3.58-4.97 6.68-4.97z" />
          </svg>
          <span>{isSignup ? 'Sign up with Google' : 'Continue with Google'}</span>
        </button>

        <div className="auth-divider-line">
          <span>or use email</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form-fields">
          {isSignup && (
            <div className="form-input-group">
              <label htmlFor="auth-name">Your name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input
                  id="auth-name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Obioma, Folashade, David"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="form-input-group">
            <label htmlFor="auth-email">Email address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                placeholder="learner@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-input-group">
            <label htmlFor="auth-password">Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input
                id="auth-password"
                type="password"
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={submitting} id="auth-submit-button">
            {submitting ? 'Please wait...' : isSignup ? 'Create free account' : 'Sign in'}
          </button>
        </form>

        <div className="auth-toggle-mode">
          {isSignup ? (
            <p>
              Already have an account?{' '}
              <Link href="/login" className="link-switch-btn">Sign in</Link>
            </p>
          ) : (
            <p>
              New to FiksLingo?{' '}
              <Link href="/signup" className="link-switch-btn">Create an account</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
