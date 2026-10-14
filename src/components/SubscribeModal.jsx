'use client';

import React, { useState, useEffect } from 'react';
import { Mail, User, X, Sparkles, CheckCircle2, AlertCircle, BellRing } from 'lucide-react';
import './subscribe.css';

export default function SubscribeModal({ 
  isOpen, 
  onClose, 
  source = 'popup',
  title = "Unlock Free Weekly Language Tips",
  subtitle = "Join our community of over 25,000 learners. Receive curated vocabulary cheat sheets, cultural secrets, and weekly streak motivation."
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus(null);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!name.trim() || name.trim().length < 2) {
      setStatus({ type: 'error', message: 'Please enter your name (at least 2 characters).' });
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          source
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Subscription failed. Please try again.');
      }

      setStatus({
        type: 'success',
        message: data.message || `Thank you, ${name}! You're subscribed.`
      });

      // Mark user as subscribed in localStorage
      try {
        localStorage.setItem('fikslingo_subscribed', 'true');
        localStorage.setItem('fikslingo_subscriber_email', email.trim());
      } catch (e) {
        console.warn('Could not save subscription flag in local storage:', e);
      }

      // Close automatically after 2.5 seconds on success
      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="sub-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="sub-modal-title">
      <div className="sub-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="sub-modal-close" 
          onClick={onClose} 
          aria-label="Close subscription dialog"
        >
          <X size={18} />
        </button>

        {/* Mascot & Badge */}
        <div className="sub-modal-header">
          <div className="sub-mascot-pill">
            <img src="/images/mascot.jpg" alt="FiksLingo" className="sub-mascot-img" />
            <span className="sub-pill-badge">
              <Sparkles size={13} className="sparkle-icon" />
              WEEKLY NEWSLETTER
            </span>
          </div>

          <h2 id="sub-modal-title" className="sub-modal-title">{title}</h2>
          <p className="sub-modal-subtitle">{subtitle}</p>
        </div>

        {/* Feedback message banner */}
        {status && (
          <div className={`sub-status-banner ${status.type}`} role="alert">
            {status.type === 'success' ? (
              <CheckCircle2 size={18} className="status-icon" />
            ) : (
              <AlertCircle size={18} className="status-icon" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        {/* Subscription Form */}
        {status?.type !== 'success' ? (
          <form onSubmit={handleSubmit} className="sub-modal-form">
            <div className="sub-input-group">
              <label htmlFor="sub-name">Your Full Name</label>
              <div className="sub-input-box">
                <User size={18} className="sub-input-icon" />
                <input
                  id="sub-name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Obioma Nneji"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={submitting}
                  required
                />
              </div>
            </div>

            <div className="sub-input-group">
              <label htmlFor="sub-email">Email Address</label>
              <div className="sub-input-box">
                <Mail size={18} className="sub-input-icon" />
                <input
                  id="sub-email"
                  type="email"
                  autoComplete="email"
                  placeholder="learner@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="sub-submit-btn" 
              disabled={submitting}
              id="submit-subscribe-button"
            >
              <BellRing size={17} />
              <span>{submitting ? 'Subscribing...' : 'Subscribe Free'}</span>
            </button>

            <p className="sub-privacy-note">
              🔒 No spam, ever. Unsubscribe with 1-click anytime. We respect your privacy.
            </p>
          </form>
        ) : (
          <div className="sub-success-view">
            <div className="sub-success-icon-wrap">
              <CheckCircle2 size={42} className="success-check-big" />
            </div>
            <h3>You are all set!</h3>
            <p>We have added you to our weekly language bulletin. Happy learning!</p>
          </div>
        )}
      </div>
    </div>
  );
}
