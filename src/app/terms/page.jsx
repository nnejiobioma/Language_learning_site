'use client';

import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import SubscribeButton from '../../components/SubscribeButton';
import { 
  Shield, 
  BookOpen, 
  Award, 
  Sparkles, 
  Scale, 
  HelpCircle, 
  FileText, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle2,
  Lock,
  Globe2,
  AlertTriangle
} from 'lucide-react';
import './terms.css';

export default function TermsPage() {
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
            <Scale size={16} />
            <span>Official Policy · Effective Date: October 2026</span>
          </div>
          <h1 className="terms-hero-title">Terms of Use</h1>
          <p className="terms-hero-sub">
            Please read these Terms of Use carefully before using FiksLingo. By registering for an account or using our platform, you agree to be legally bound by these terms.
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
                <a href="#acceptance" className="terms-toc-link">1. Acceptance & Eligibility</a>
                <a href="#services" className="terms-toc-link">2. Educational Services</a>
                <a href="#accounts" className="terms-toc-link">3. Accounts & Security</a>
                <a href="#gamification" className="terms-toc-link">4. Gamification & XP</a>
                <a href="#cbt-exams" className="terms-toc-link">5. CBT Tests & Disclaimers</a>
                <a href="#audio-culture" className="terms-toc-link">6. Audio & Cultural Vault</a>
                <a href="#conduct" className="terms-toc-link">7. Acceptable Community Use</a>
                <a href="#intellectual-property" className="terms-toc-link">8. Intellectual Property</a>
                <a href="#liability" className="terms-toc-link">9. Disclaimers & Liability</a>
                <a href="#termination" className="terms-toc-link">10. Modifications & Termination</a>
                <a href="#contact" className="terms-toc-link">11. Contact & Legal Notices</a>
              </nav>
            </div>
          </aside>

          {/* Legal Document Sections */}
          <article className="terms-content-body">
            {/* Section 1 */}
            <section id="acceptance" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 1</span>
                <h2>Acceptance of Terms & Eligibility</h2>
              </div>
              <p>
                Welcome to <strong>FiksLingo</strong> ("we," "our," or "the Platform"). By accessing, browsing, registering for, or using the FiksLingo website, mobile applications, interactive curriculum, flashcards, Computer-Based Testing (CBT) modules, or related language learning services, you agree to comply with and be bound by these Terms of Use ("Terms").
              </p>
              <div className="terms-callout info">
                <CheckCircle2 size={20} className="callout-icon" />
                <p>
                  <strong>Mandatory Agreement:</strong> You must check and accept these Terms during the account creation process. If you do not agree to these Terms, you may not register, access, or use FiksLingo.
                </p>
              </div>
              <p>
                You must be at least 13 years of age (or the applicable minimum legal age in your jurisdiction) to create an account. If you are under the legal age of majority in your country of residence, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 2</span>
                <h2>Educational Services & Methodology</h2>
              </div>
              <p>
                FiksLingo provides gamified language learning software designed to help users learn world languages (including Spanish, French, German, Japanese, Mandarin, Portuguese, Swedish, Finnish, Igbo, Hausa, Nigerian Pidgin, and Yoruba) through bite-sized interactive units, spaced-repetition flashcards, listening assessments, and cultural insights.
              </p>
              <p>
                While our curriculum is designed in alignment with standard frameworks such as the Common European Framework of Reference for Languages (CEFR A1–C2), FiksLingo is an educational aid. Completion of lessons, quizzes, or CBT exams does not constitute an accredited academic degree or official government certification unless explicitly certified in writing by an authorized exam administrator.
              </p>
            </section>

            {/* Section 3 */}
            <section id="accounts" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 3</span>
                <h2>Account Registration & Security</h2>
              </div>
              <p>
                To track learning progress, maintain daily streaks, preserve earned experience points (XP), and unlock exam modules, every learner must create an account via email or authorized third-party authentication (such as Google Sign-In).
              </p>
              <ul>
                <li><strong>Accurate Information:</strong> You agree to provide true, current, and complete registration information and to maintain its accuracy.</li>
                <li><strong>Credential Confidentiality:</strong> You are responsible for safeguarding your login credentials and for any activity that occurs under your account.</li>
                <li><strong>Notification:</strong> You must immediately notify FiksLingo of any unauthorized access or breach of security concerning your account.</li>
                <li><strong>One Account Per User:</strong> You may not create multiple accounts for the purpose of manipulating leaderboards, streaks, or gamified challenges.</li>
                <li><strong>Persistent Cookies:</strong> Files that feature an expiration date and stay saved on your hard drive even after you close the browser. They are used for long-term settings like saved language preferences, "remember me" login options, and theme settings.</li>
              </ul>
              <div className="terms-callout info">
                <CheckCircle2 size={20} className="callout-icon" />
                <p>
                  <strong>Persistent Cookies Notice:</strong> When you select "Remember me on this device", FiksLingo writes a persistent cookie (with a 30-day expiration date) to your hard drive so you do not have to re-enter your credentials on every visit. Your chosen language (365 days) and theme preferences (365 days) are likewise saved via persistent cookies. You can remove these at any time in your browser settings.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="gamification" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 4</span>
                <h2>Gamification, Hearts, Streaks & Virtual XP</h2>
              </div>
              <p>
                FiksLingo incorporates gamification elements, including Hearts, Experience Points (XP), Daily Streaks, Achievement Badges, and Weekly Leaderboards:
              </p>
              <ul>
                <li><strong>No Real-World Monetary Value:</strong> Hearts, XP, streaks, and virtual badges are virtual units of educational measurement. They have no cash value, cannot be redeemed for real currency, and cannot be transferred, sold, or assigned.</li>
                <li><strong>Heart Deductions & Refills:</strong> Incorrect answers during lessons deduct hearts to encourage careful study. Learners can wait for automatic timed refills, complete practice sessions, or refill via educational checkpoints.</li>
                <li><strong>Leaderboard Integrity:</strong> Automated botting, script-based answer submission, or artificial XP farming is strictly prohibited and subject to immediate account reset or permanent termination.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="cbt-exams" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 5</span>
                <h2>Computer-Based Testing (CBT) & Proficiency Disclaimers</h2>
              </div>
              <p>
                Our platform provides Computer-Based Testing (CBT) simulations modeled after renowned international language evaluation standards (e.g., DELF/DALF, TCF, TEF, DELE, Goethe-Zertifikat, JLPT, HSK).
              </p>
              <div className="terms-callout warning">
                <AlertTriangle size={20} className="callout-icon" />
                <p>
                  <strong>Practice & Simulation Disclaimer:</strong> FiksLingo CBT test simulations are practice assessment tools. We do not guarantee identical results on official government, consular, university, or immigration language examinations.
                </p>
              </div>
              <p>
                You may use our test timers, question rubrics, and automated score calculations solely for your personal preparation and self-assessment.
              </p>
            </section>

            {/* Section 6 */}
            <section id="audio-culture" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 6</span>
                <h2>Audio Synthesizers, Native Audio & Cultural Vault</h2>
              </div>
              <p>
                FiksLingo features audio pronunciations, International Phonetic Alphabet (IPA) transcriptions, cultural proverbs, etiquette guides, and street slang in our Cultural Vault.
              </p>
              <p>
                Speech audio is generated through native voice recordings and advanced browser/cloud speech synthesis engines. Audio is provided strictly for educational comprehension. You may not record, scrape, repurpose, or redistribute our audio libraries or cultural collections for commercial purposes without explicit prior written authorization.
              </p>
            </section>

            {/* Section 7 */}
            <section id="conduct" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 7</span>
                <h2>User Conduct & Acceptable Community Rules</h2>
              </div>
              <p>When using FiksLingo, you agree that you will NOT:</p>
              <ul>
                <li>Use vulgar, harassing, defamatory, or hateful language in your profile display name, bio, or public community responses.</li>
                <li>Impersonate any person, entity, or fellow learner.</li>
                <li>Deploy automated spiders, scrapers, crawlers, or bots to harvest questions, audio samples, or vocabulary databases.</li>
                <li>Attempt to probe, scan, or breach the security or authentication measures of the platform.</li>
                <li>Reverse engineer, decompile, or disassemble any portion of the FiksLingo code or database schemas.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="intellectual-property" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 8</span>
                <h2>Intellectual Property & Limited License</h2>
              </div>
              <p>
                All content on FiksLingo—including but not limited to lesson structures, flashcard text, custom artwork, mascot designs, CSS styling, software code, audio assets, and the FiksLingo name and trademarks—is the exclusive intellectual property of FiksLingo and its licensors.
              </p>
              <p>
                Subject to your compliance with these Terms, FiksLingo grants you a personal, non-exclusive, non-transferable, revocable limited license to access and use the Platform solely for your personal, non-commercial language learning activities.
              </p>
            </section>

            {/* Section 9 */}
            <section id="liability" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 9</span>
                <h2>Disclaimers of Warranties & Limitation of Liability</h2>
              </div>
              <p>
                THE PLATFORM AND ALL LESSONS, TESTS, AUDIO, AND CONTENT ARE PROVIDED ON AN <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FIKSLINGO, ITS FOUNDERS, EMPLOYEES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE PLATFORM.
              </p>
            </section>

            {/* Section 10 */}
            <section id="termination" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 10</span>
                <h2>Modifications & Account Termination</h2>
              </div>
              <p>
                We reserve the right to modify, suspend, or discontinue any feature, language course, or service at any time with or without notice. We may update these Terms periodically; substantial updates will be highlighted on the Platform.
              </p>
              <p>
                We reserve the right to suspend or terminate your account immediately if you breach these Terms or engage in conduct detrimental to the learning environment of other users.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact" className="terms-section-block">
              <div className="terms-section-header">
                <span className="section-num-pill">Section 11</span>
                <h2>Contact & Legal Inquiries</h2>
              </div>
              <p>
                If you have questions, feedback, or legal inquiries concerning these Terms of Use, please reach out to our team:
              </p>
              <div className="terms-contact-card">
                <p><strong>FiksLingo Legal & Support</strong></p>
                <p>Email: <a href="mailto:support@fikslingo.com">support@fikslingo.com</a></p>
                <p>Website: <a href="https://fikslingo.com">fikslingo.com</a></p>
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
              source="terms_footer"
              label="Subscribe"
              icon="bell"
              className="terms-footer-sub-btn"
              buttonId="terms-footer-subscribe-btn"
            />
            <Link href="/">Home</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">Log In</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
