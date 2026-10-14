'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, Check, ChevronDown, ChevronUp, X } from 'lucide-react';
import { hasCookieConsent, saveCookieConsent } from '../lib/cookies';
import './cookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Only show if the user hasn't already given consent via persistent cookie
    try {
      if (!hasCookieConsent()) {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 1200); // Gentle entry delay
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const handleAccept = () => {
    saveCookieConsent(true);
    setVisible(false);
  };

  const handleDismiss = () => {
    saveCookieConsent(true);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner-wrapper" aria-label="Cookie Preferences">
      <div className="cookie-banner-card">
        <div className="cookie-banner-main">
          <div className="cookie-banner-icon-col">
            <div className="cookie-icon-bubble">
              <Cookie size={30} className="cookie-icon" />
            </div>
          </div>

          <div className="cookie-banner-content">
            <div className="cookie-banner-header">
              <h3 className="cookie-banner-title">
                Persistent Cookies & Preferences
              </h3>
              <span className="cookie-banner-badge">Long-Term Storage</span>
            </div>

            <p className="cookie-banner-text">
              We use <strong>persistent cookies</strong> — files featuring an expiration date that stay saved on your hard drive even after you close your browser. They are used for long-term settings like your saved language preferences, dark/light theme, and &ldquo;Remember me&rdquo; sign-in options.
            </p>

            {showDetails && (
              <div className="cookie-details-drawer">
                <div className="cookie-table">
                  <div className="cookie-row header">
                    <span>Cookie Name</span>
                    <span>Duration</span>
                    <span>Purpose</span>
                  </div>
                  <div className="cookie-row">
                    <code>fikslingo_lang</code>
                    <span>365 days</span>
                    <span>Saves your selected learning language across browser sessions</span>
                  </div>
                  <div className="cookie-row">
                    <code>fikslingo_remember_me</code>
                    <span>30 days</span>
                    <span>Maintains persistent sign-in on this device when checked</span>
                  </div>
                  <div className="cookie-row">
                    <code>fikslingo_saved_email</code>
                    <span>30 days</span>
                    <span>Pre-fills your email on the login screen for easy access</span>
                  </div>
                  <div className="cookie-row">
                    <code>fikslingo_theme</code>
                    <span>365 days</span>
                    <span>Preserves your Light, Dark, or System theme preference</span>
                  </div>
                  <div className="cookie-row">
                    <code>fikslingo_cookie_consent</code>
                    <span>365 days</span>
                    <span>Remembers your persistent cookie agreement</span>
                  </div>
                </div>
              </div>
            )}

            <div className="cookie-banner-footer">
              <Link href="/privacy" className="cookie-policy-link">
                Privacy Policy
              </Link>
              <span className="cookie-policy-dot">·</span>
              <Link href="/terms" className="cookie-policy-link">
                Terms of Use
              </Link>

              <button 
                type="button" 
                className="cookie-details-toggle"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? (
                  <>Hide Cookie Details <ChevronUp size={16} /></>
                ) : (
                  <>View Cookie Details <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          </div>

          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-accept-btn"
              onClick={handleAccept}
              id="cookie-consent-accept-btn"
            >
              <Check size={19} />
              <span>Accept & Save Preferences</span>
            </button>
            <button
              type="button"
              className="cookie-close-btn"
              onClick={handleDismiss}
              aria-label="Dismiss cookie notice"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
