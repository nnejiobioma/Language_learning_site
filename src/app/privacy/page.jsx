'use client';

import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import SubscribeButton from '../../components/SubscribeButton';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Cookie, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Globe2, 
  UserCheck, 
  Server, 
  HelpCircle,
  Mail
} from 'lucide-react';
import '../terms/terms.css';

export default function PrivacyPolicyPage() {
  return (
    <div className="terms-page-root">
      {/* Top Navbar */}
      <header className="terms-nav">
        <div className="terms-nav-container">
          <Link href="/" className="terms-brand" aria-label="FiksLingo Home">
            <img src="/images/mascot.jpg" alt="FiksLingo Mascot" className="terms-brand-img" />
            <span className="terms-brand-text">FiksLingo</span>
          </Link>

          <div className="terms-nav-right">
            <ThemeSwitcher />
            <Link href="/learn" className="terms-nav-btn secondary">
              Curriculum
            </Link>
            <Link href="/signup" className="terms-nav-btn primary">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="terms-hero">
        <div className="terms-container">
          <div className="terms-hero-badge">
            <Shield size={16} />
            <span>Official Policy · Effective Date: October 2026</span>
          </div>
          <h1 className="terms-hero-title">Privacy Policy</h1>
          <p className="terms-hero-sub">
            At FiksLingo, we believe learning a world language should be fun, safe, and private. This policy outlines how we collect, protect, and respect your personal information across all 12 languages.
          </p>
        </div>
      </section>

      {/* Main Document Content */}
      <main className="terms-main-wrapper">
        <div className="terms-container terms-layout-grid">
          {/* Quick Navigation Sidebar */}
          <aside className="terms-sidebar" aria-label="Table of Contents">
            <div className="terms-toc-card">
              <h3 className="terms-toc-title">Table of Contents</h3>
              <nav className="terms-toc-nav">
                <a href="#overview" className="terms-toc-link">1. Overview & Commitment</a>
                <a href="#collection" className="terms-toc-link">2. Information We Collect</a>
                <a href="#usage" className="terms-toc-link">3. How We Use Your Data</a>
                <a href="#cookies" className="terms-toc-link">4. Persistent Cookies & Storage</a>
                <a href="#audio" className="terms-toc-link">5. Speech & Audio Data</a>
                <a href="#third-party" className="terms-toc-link">6. Third-Party Services</a>
                <a href="#security" className="terms-toc-link">7. Security & Retention</a>
                <a href="#rights" className="terms-toc-link">8. Your Rights & Data Control</a>
                <a href="#children" className="terms-toc-link">9. Children&apos;s Privacy (COPPA)</a>
                <a href="#contact" className="terms-toc-link">10. Policy Updates & Contact</a>
              </nav>
            </div>
          </aside>

          {/* Legal Document Sections */}
          <article className="terms-content-body">
            {/* Section 1 */}
            <section id="overview" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 1</span>
                <h2>Overview & Privacy Commitment</h2>
              </div>
              <p>
                Welcome to <strong>FiksLingo</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Platform&rdquo;). We are committed to protecting the privacy and personal data of our learners worldwide. We practice <strong>data minimization</strong>: we only request and process information that is strictly necessary to save your language learning progress, maintain your daily streaks, provide accurate audio pronunciation, and keep your account secure.
              </p>
              <div className="terms-callout info">
                <CheckCircle2 size={20} className="callout-icon" />
                <p>
                  <strong>We Never Sell Your Data:</strong> FiksLingo does not sell, rent, or trade your personal information, email address, or study records to third-party advertisers or commercial data brokers.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="collection" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 2</span>
                <h2>Information We Collect</h2>
              </div>
              <p>We collect information in three ways: information you provide directly, data generated through lesson study, and device storage technologies:</p>
              <ul>
                <li><strong>Account Registration Information:</strong> When you register for FiksLingo, we collect your display name, email address, password hash, and acceptance timestamps for our Terms of Use and Privacy Policy. When signing in with Google, we receive your public profile name and verified email.</li>
                <li><strong>Learning & Gamification Records:</strong> Your active learning language (Spanish, French, German, Japanese, Mandarin, etc.), completed lessons, XP, current streak count, heart count, flashcard mastery status, and CBT exam scores.</li>
                <li><strong>Newsletter Subscriptions:</strong> If you subscribe to our weekly vocabulary digest, we collect your name, email, and subscription source.</li>
                <li><strong>Technical & Log Information:</strong> Basic browser metadata, IP address, device type, and operating system used solely for network troubleshooting and cloud security.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="usage" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 3</span>
                <h2>How We Use Your Information</h2>
              </div>
              <p>We use your information exclusively to power your language learning journey:</p>
              <ul>
                <li><strong>Curriculum Progression:</strong> Syncing your XP, level, and lesson checkpoints so you never lose progress when switching devices.</li>
                <li><strong>Daily Streak & Heart Management:</strong> Calculating daily streaks and timing automatic heart refills.</li>
                <li><strong>Community Leaderboards:</strong> Displaying your chosen display name and weekly XP on our weekly leaderboards.</li>
                <li><strong>Educational Email Updates:</strong> Sending weekly vocabulary drops and study reminders (which you can unsubscribe from at any time with one click).</li>
                <li><strong>Account Security:</strong> Detecting unauthorized login attempts and safeguarding learner data.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="cookies" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 4</span>
                <h2>Persistent Cookies & Local Storage</h2>
              </div>
              <p>
                FiksLingo uses <strong>persistent cookies</strong> — files featuring an expiration date that stay saved on your hard drive even after you close your browser. They are used for long-term settings like saved language preferences, dark/light theme, and &ldquo;remember me&rdquo; sign-in options.
              </p>
              <div className="terms-callout info">
                <Cookie size={20} className="callout-icon" />
                <p>
                  <strong>Our Persistent Cookies Inventory:</strong>
                </p>
              </div>
              <ul>
                <li><code>fikslingo_lang</code> (Duration: 365 days): Saves your chosen target language across visits.</li>
                <li><code>fikslingo_remember_me</code> (Duration: 30 days): Maintains persistent sign-in on your device when checked during login.</li>
                <li><code>fikslingo_saved_email</code> (Duration: 30 days): Pre-fills your email on the login screen for rapid sign-in.</li>
                <li><code>fikslingo_theme</code> (Duration: 365 days): Preserves your selected Light, Dark, or System visual theme.</li>
                <li><code>fikslingo_cookie_consent</code> (Duration: 365 days): Records your cookie preferences so you are not prompted repeatedly.</li>
              </ul>
              <p>
                You can view, block, or delete cookies at any time via your browser&apos;s privacy settings. Note that disabling persistent cookies may require you to select your language and re-authenticate each time you launch the browser.
              </p>
            </section>

            {/* Section 5 */}
            <section id="audio" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 5</span>
                <h2>Speech, Audio Pronunciation & Microphone Data</h2>
              </div>
              <p>
                FiksLingo utilizes standard Web Speech APIs and native voice audio files to provide authentic pronunciation examples across 12 world languages.
              </p>
              <ul>
                <li><strong>No Voice Recording Storage:</strong> We do not record, store, or sell voice biometrics. Microphone input used for listening quizzes is processed client-side in your browser in real time.</li>
                <li><strong>Permissions:</strong> Microphone access is optional and requested only when taking pronunciation quizzes. You can deny microphone access and continue learning through multiple-choice and fill-in-the-blank modes.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="third-party" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 6</span>
                <h2>Third-Party Service Providers</h2>
              </div>
              <p>
                To provide a reliable, globally accessible learning experience, we partner with industry-leading cloud infrastructure providers who adhere to strict data security standards:
              </p>
              <ul>
                <li><strong>Google Firebase:</strong> Provides secure authentication (email/password and Google Sign-in) and encrypted cloud database storage (Cloud Firestore).</li>
                <li><strong>Vercel Inc.:</strong> Provides high-speed cloud edge hosting, SSL/TLS certificate management, and serverless runtime execution.</li>
              </ul>
              <p>
                All service providers are bound by confidentiality obligations and are prohibited from using your data for any secondary purpose.
              </p>
            </section>

            {/* Section 7 */}
            <section id="security" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 7</span>
                <h2>Data Security & Retention</h2>
              </div>
              <p>
                We implement robust technical and organizational measures to safeguard your information against loss, theft, and unauthorized access:
              </p>
              <ul>
                <li><strong>Encryption in Transit:</strong> All web traffic is encrypted using modern Transport Layer Security (TLS/HTTPS).</li>
                <li><strong>Encryption at Rest:</strong> Cloud databases and profile documents are protected by AES-256 cloud encryption.</li>
                <li><strong>Data Retention:</strong> We retain your learning history for as long as your account remains active. If your account is deleted, your personal data is expunged from active production databases within 30 days.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="rights" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 8</span>
                <h2>Your Rights & Data Control (GDPR & CCPA)</h2>
              </div>
              <p>
                Regardless of where you reside, FiksLingo empowers you with full autonomy over your data:
              </p>
              <ul>
                <li><strong>Right to Access & Portability:</strong> You can view your complete study metrics, XP, and profile details anytime in your Profile & Settings tab.</li>
                <li><strong>Right to Rectification:</strong> You can update your display name, email, or language preference at any moment.</li>
                <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request full account and data deletion by contacting our privacy team at <a href="mailto:privacy@fikslingo.com">privacy@fikslingo.com</a>.</li>
                <li><strong>Right to Opt-Out:</strong> You can unsubscribe from newsletter emails at any time using the unsubscribe link included in every email.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="children" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 9</span>
                <h2>Children&apos;s Privacy (COPPA Compliance)</h2>
              </div>
              <p>
                FiksLingo is committed to protecting children&apos;s privacy. We do not knowingly collect personal identifiable information from children under 13 without verifiable parental consent.
              </p>
              <p>
                If we discover that a child under 13 has registered without parental authorization, we will promptly delete their account and associated data. Parents or guardians who believe their child has created an account may contact us at <a href="mailto:privacy@fikslingo.com">privacy@fikslingo.com</a>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 10</span>
                <h2>Policy Updates & Contact Information</h2>
              </div>
              <p>
                We may update this Privacy Policy from time to time to reflect improvements to our learning tools or legal requirements. Material changes will be highlighted on the Platform with an updated effective date.
              </p>
              <div className="terms-contact-card">
                <p><strong>FiksLingo Data Protection & Support Team</strong></p>
                <p>Direct Inboxes: <a href="mailto:nnejieb@gmail.com">nnejieb@gmail.com</a> &amp; <a href="mailto:nneji.obioma@gmail.com">nneji.obioma@gmail.com</a></p>
                <p>Online Contact Form: <Link href="/contact" style={{ color: '#10b981', fontWeight: 600 }}>fikslingo.com/contact</Link></p>
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="terms-bottom-banner">
              <div className="terms-bottom-text">
                <h3>Ready to master a new language?</h3>
                <p>Join thousands of learners building fluency every day.</p>
              </div>
              <div className="terms-bottom-buttons">
                <Link href="/signup" className="terms-nav-btn primary">
                  Agree & Sign Up
                </Link>
                <Link href="/" className="terms-nav-btn secondary">
                  Return to Home
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="terms-footer">
        <div className="terms-container terms-footer-inner">
          <p>© {new Date().getFullYear()} FiksLingo. All rights reserved. Master 12 World Languages.</p>
          <div className="terms-footer-links">
            <SubscribeButton
              source="privacy_footer"
              label="Subscribe"
              icon="bell"
              className="terms-footer-sub-btn"
              buttonId="privacy-footer-subscribe-btn"
            />
            <Link href="/">Home</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">Log In</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
