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
  ChevronRight, 
  ArrowLeft,
  Mail,
  Trash2
} from 'lucide-react';
import '../terms/terms.css';

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 15, 2026";
  const effectiveDate = "October 15, 2026";

  const sections = [
    { id: "overview", num: "1", title: "Overview & Commitment", icon: <Shield size={18} /> },
    { id: "collection", num: "2", title: "Information We Collect", icon: <Database size={18} /> },
    { id: "usage", num: "3", title: "How We Use Your Data", icon: <Eye size={18} /> },
    { id: "cookies", num: "4", title: "Persistent Cookies & Storage", icon: <Cookie size={18} /> },
    { id: "audio", num: "5", title: "Speech & Audio Data", icon: <FileText size={18} /> },
    { id: "third-party", num: "6", title: "Third-Party Services", icon: <Server size={18} /> },
    { id: "security", num: "7", title: "Security & Retention", icon: <Lock size={18} /> },
    { id: "rights", num: "8", title: "Your Rights & Data Control", icon: <UserCheck size={18} /> },
    { id: "children", num: "9", title: "Children's Privacy (COPPA)", icon: <Globe2 size={18} /> },
    { id: "contact", num: "10", title: "Updates & Contact", icon: <HelpCircle size={18} /> }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="terms-page-root">
      {/* Top Sticky Navigation */}
      <header className="terms-nav">
        <div className="terms-nav-container">
          <Link href="/" className="terms-brand">
            <img src="/images/mascot.jpg" alt="FiksLingo Mascot" className="terms-brand-img" />
            <span className="terms-brand-text">FiksLingo</span>
          </Link>

          <div className="terms-nav-actions">
            <ThemeSwitcher />
            <Link href="/" className="terms-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="terms-hero">
        <div className="terms-container terms-hero-inner">
          <div className="terms-badge-pill">
            <Shield size={14} />
            <span>Privacy & Data Protection</span>
          </div>
          <h1 className="terms-title">Privacy Policy</h1>
          <p className="terms-subtitle">
            At FiksLingo, we believe learning a world language should be fun, safe, and private. This policy explains what information we collect, how we use it, and how you maintain control over your personal data.
          </p>

          <div className="terms-meta-row">
            <span className="terms-meta-item">
              <strong>Last Updated:</strong> {lastUpdated}
            </span>
            <span className="terms-meta-dot">·</span>
            <span className="terms-meta-item">
              <strong>Effective Date:</strong> {effectiveDate}
            </span>
            <span className="terms-meta-dot">·</span>
            <span className="terms-meta-item">
              <strong>Applies to:</strong> All FiksLingo Web & Mobile Users
            </span>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <main className="terms-container terms-layout">
        {/* Sticky Table of Contents Sidebar */}
        <aside className="terms-sidebar">
          <div className="terms-toc-card">
            <h3 className="terms-toc-title">Policy Sections</h3>
            <nav className="terms-toc-nav" aria-label="Table of Contents">
              {sections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className="terms-toc-link"
                >
                  <span className="terms-toc-icon">{s.icon}</span>
                  <span className="terms-toc-text">{s.title}</span>
                  <ChevronRight size={14} className="terms-toc-arrow" />
                </button>
              ))}
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
              Welcome to <strong>FiksLingo</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Platform&rdquo;). We are committed to protecting the privacy of our learners worldwide. We practice <strong>data minimization</strong>: we only request and process information that is strictly necessary to save your language learning progress, maintain your daily streaks, provide accurate audio pronunciation, and keep your account secure.
            </p>
            <div className="terms-callout info">
              <CheckCircle2 size={20} className="callout-icon" />
              <p>
                <strong>We Never Sell Your Data:</strong> FiksLingo does not sell, rent, or trade your personal information, email address, or study records to third-party advertisers or data brokers.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="collection" className="terms-section-block">
            <div className="terms-section-header">
              <span className="section-num-pill">Section 2</span>
              <h2>Information We Collect</h2>
            </div>
            <p>We collect information in three ways: information you provide directly, data generated through study, and device storage technologies.</p>
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
            <p>We use your information exclusively to power your language journey:</p>
            <ul>
              <li><strong>Curriculum Progression:</strong> Syncing your XP, level, and lesson checkpoints so you never lose progress when switching devices.</li>
              <li><strong>Daily Streak & Heart Management:</strong> Calculating daily streaks and timing heart refills.</li>
              <li><strong>Community Leaderboards:</strong> Displaying your chosen display name and weekly XP on our non-identifying weekly leaderboards.</li>
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
              <p><strong>FiksLingo Data Protection & Privacy Team</strong></p>
              <p>Email: <a href="mailto:privacy@fikslingo.com">privacy@fikslingo.com</a></p>
              <p>Support: <a href="mailto:support@fikslingo.com">support@fikslingo.com</a></p>
              <p>Website: <a href="https://fikslingo.com">fikslingo.com</a></p>
            </div>
          </section>

          {/* Bottom Banner */}
          <div className="terms-bottom-banner">
            <div className="terms-bottom-text">
              <h3>Have questions about your privacy?</h3>
              <p>Our team is here to help you learn with complete confidence.</p>
            </div>
            <div className="terms-bottom-actions">
              <Link href="/signup" className="terms-nav-btn primary">
                Create Account
              </Link>
              <Link href="/terms" className="terms-nav-btn secondary">
                Read Terms of Use
              </Link>
            </div>
          </div>
        </article>
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
