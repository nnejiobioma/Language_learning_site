'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import SubscribeButton from '../../components/SubscribeButton';
import { LANGUAGES } from '../../data/languages';
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  Copy, 
  Check, 
  Globe2, 
  Tag, 
  Phone,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import './contact.css';

const RECIPIENT_EMAILS = [
  { email: 'nnejieb@gmail.com', label: 'Primary Contact' },
  { email: 'nneji.obioma@gmail.com', label: 'Founder & Academic Lead' }
];

const CATEGORIES = [
  { id: 'tutoring', label: 'One-on-One Tutoring / Private Coaching' },
  { id: 'general', label: 'General Inquiry' },
  { id: 'feedback', label: 'Feedback & Feature Suggestions' },
  { id: 'language_request', label: 'Request a New Language / Dialect' },
  { id: 'content_correction', label: 'Report Translation or Audio Issue' },
  { id: 'technical_bug', label: 'Technical Support / Bug Report' },
  { id: 'partnership', label: 'School / Institutional Partnership' },
  { id: 'press', label: 'Press & Media' },
  { id: 'other', label: 'Other Topic' }
];

const FAQ_ITEMS = [
  {
    question: 'Who receives my contact request?',
    answer: 'Your submission is dispatched immediately to both nnejieb@gmail.com and nneji.obioma@gmail.com. We also securely log the message so that no learner request is ever lost.'
  },
  {
    question: 'How fast can I expect a response?',
    answer: 'We review all inquiries daily and typically reply within 12 to 24 hours (Monday through Saturday). Urgent technical or account queries are prioritized.'
  },
  {
    question: 'Can I suggest a new world language or local dialect?',
    answer: 'Absolutely! FiksLingo is committed to promoting both widely spoken international languages (Spanish, French, Mandarin, German, Japanese) and culturally rich African languages (Yoruba, Igbo, Hausa, Nigerian Pidgin). If you want a specific language added, select "Request a New Language" in the form.'
  },
  {
    question: 'Can schools or universities integrate FiksLingo for students?',
    answer: 'Yes! We support classroom use, customized language modules, and group leaderboards. Contact us via the form or email us directly at nnejieb@gmail.com and nneji.obioma@gmail.com for institutional setup.'
  },
  {
    question: 'Is FiksLingo free for learners?',
    answer: 'Yes, all 12 languages, quizzes, culture vaults, audio pronunciation, and daily practice streaks are completely free to start!'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    language: 'All Languages / General',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [successInfo, setSuccessInfo] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const languagesList = Object.values(LANGUAGES);

  // Check URL query parameters for tutoring intent
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('category') === 'tutoring' || params.get('topic') === 'tutoring') {
        setFormData((prev) => ({
          ...prev,
          category: 'One-on-One Tutoring / Private Coaching',
          subject: prev.subject || 'Request for One-on-One Tutoring'
        }));
      }
    }
  }, []);

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Blur handler for accessible :user-invalid synchronization
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Copy email to clipboard helper
  const handleCopyEmail = (email) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2500);
    }
  };

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Confetti is an aesthetic enhancement; fallback safely
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit contact request.');
      }

      setStatus('success');
      setSuccessInfo(data);
      triggerConfetti();
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Something went wrong while submitting your request. Please try again or email us directly.'
      );
    }
  };

  // Reset form to send another message
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'General Inquiry',
      language: 'All Languages / General',
      subject: '',
      message: ''
    });
    setTouched({});
    setStatus('idle');
    setErrorMessage('');
    setSuccessInfo(null);
  };

  // Generate pre-filled mailto URL for desktop/phone mail client
  const mailtoHref = `mailto:nnejieb@gmail.com,nneji.obioma@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'FiksLingo Inquiry'
  )}&body=${encodeURIComponent(
    `Hello FiksLingo Team,\n\nName: ${formData.name || ''}\nCategory: ${formData.category}\nLanguage: ${formData.language}\n\nMessage:\n${formData.message || ''}`
  )}`;

  return (
    <div className="contact-page-root">
      {/* Top Navbar */}
      <header className="contact-nav">
        <div className="contact-nav-container">
          <Link href="/" className="contact-brand" aria-label="FiksLingo Home">
            <img 
              src="/images/mascot.jpg" 
              alt="FiksLingo Mascot" 
              className="contact-brand-img" 
            />
            <span className="contact-brand-text">FiksLingo</span>
          </Link>

          <div className="contact-nav-right">
            <ThemeSwitcher />
            <Link href="/learn" className="contact-nav-btn secondary">
              Curriculum
            </Link>
            <Link href="/signup" className="contact-nav-btn primary">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-hero-badge">
            <Mail size={16} />
            <span>We are here to support your learning journey</span>
          </div>
          <h1 className="contact-hero-title">Get in Touch with FiksLingo</h1>
          <p className="contact-hero-sub">
            Have questions about our 12 world languages, feedback on quizzes, suggestions for new dialects, 
            or want to partner with us? Reach our dedicated team directly below.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="contact-container">
        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info & Support */}
          <aside className="contact-info-col">
            {/* Direct Email Cards */}
            <div className="contact-info-card">
              <div className="info-card-header">
                <div className="info-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <h3>Direct Contacts</h3>
                  <span className="form-hint">Messages are routed immediately to both emails</span>
                </div>
              </div>
              <p className="info-card-text">
                Every request submitted through the form or sent directly goes straight to our core team inbox:
              </p>

              <div className="recipients-list">
                {RECIPIENT_EMAILS.map((item) => {
                  const isCopied = copiedEmail === item.email;
                  return (
                    <div key={item.email} className="recipient-row">
                      <div className="recipient-details">
                        <span className="recipient-tag">{item.label}</span>
                        <a 
                          href={`mailto:${item.email}`} 
                          className="recipient-email" 
                          title={`Email ${item.email}`}
                        >
                          {item.email}
                        </a>
                      </div>
                      <div className="recipient-actions">
                        <button
                          type="button"
                          className={`copy-pill-btn ${isCopied ? 'copied' : ''}`}
                          onClick={() => handleCopyEmail(item.email)}
                          aria-label={`Copy ${item.email} to clipboard`}
                          title="Copy email"
                        >
                          {isCopied ? <Check size={13} /> : <Copy size={13} />}
                          <span>{isCopied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What you can reach out for */}
            <div className="contact-info-card">
              <div className="info-card-header">
                <div className="info-icon-box gold">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3>How We Can Help</h3>
                  <span className="form-hint">Dedicated learner & community support</span>
                </div>
              </div>
              <ul className="topics-list">
                <li className="topic-item">
                  <span className="topic-icon">✦</span>
                  <span><strong>Language & Curriculum:</strong> Clarifications on grammar, idioms, or cultural proverbs.</span>
                </li>
                <li className="topic-item">
                  <span className="topic-icon">✦</span>
                  <span><strong>New Dialects:</strong> Request new regional dialects or language tracks to be added.</span>
                </li>
                <li className="topic-item">
                  <span className="topic-icon">✦</span>
                  <span><strong>Translation Feedback:</strong> Help us refine native audio phonetics or vocabulary nuances.</span>
                </li>
                <li className="topic-item">
                  <span className="topic-icon">✦</span>
                  <span><strong>Schools & Organizations:</strong> Bring FiksLingo gamified learning to your classroom.</span>
                </li>
              </ul>
            </div>

            {/* Quick Response Time */}
            <div className="response-time-chip">
              <Clock size={18} />
              <span>Fast Response: We typically reply within 12 - 24 hours.</span>
            </div>
          </aside>

          {/* Right Column: Contact Form */}
          <section className="contact-form-wrapper" aria-labelledby="form-heading">
            {status === 'success' ? (
              <div className="form-success-card">
                <div className="success-icon-large">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="success-title">Message Sent Successfully!</h2>
                <p className="success-message">
                  Thank you, <strong>{formData.name}</strong>. Your request has been delivered to{' '}
                  <strong>nnejieb@gmail.com</strong> and <strong>nneji.obioma@gmail.com</strong>.
                  We will review your message and reply back to <strong>{formData.email}</strong> shortly.
                </p>

                <div className="success-recipients-box">
                  <Mail size={16} />
                  <span>Dispatched to nnejieb@gmail.com & nneji.obioma@gmail.com</span>
                </div>

                <button 
                  type="button" 
                  className="send-another-btn" 
                  onClick={handleReset}
                  id="send-another-message-btn"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h2 id="form-heading" className="form-title">Send a Request</h2>
                  <p className="form-subtitle">
                    Fill out the form below. Your message will be routed directly to 
                    <strong style={{ color: 'var(--text-primary)' }}> nnejieb@gmail.com</strong> and 
                    <strong style={{ color: 'var(--text-primary)' }}> nneji.obioma@gmail.com</strong>.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="form-alert-error" role="alert">
                    <AlertCircle size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <strong>Unable to deliver form:</strong> {errorMessage}
                      <div style={{ marginTop: 6 }}>
                        You can also write to us directly at{' '}
                        <a 
                          href={mailtoHref} 
                          style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}
                        >
                          nnejieb@gmail.com & nneji.obioma@gmail.com
                        </a>.
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {/* Row 1: Name and Email */}
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Your Full Name <span className="required-star">*</span>
                      </label>
                      <div className="input-with-icon">
                        <User size={18} className="input-icon" />
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. Maria Gonzalez"
                          required
                          minLength={2}
                          autoComplete="name"
                          className="form-input"
                          aria-required="true"
                        />
                      </div>
                      {touched.name && formData.name.trim().length < 2 && (
                        <div className="field-error-msg visible">
                          <AlertCircle size={13} /> Please provide your name (at least 2 characters).
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Your Email Address <span className="required-star">*</span>
                      </label>
                      <div className="input-with-icon">
                        <Mail size={18} className="input-icon" />
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com"
                          required
                          autoComplete="email"
                          className="form-input"
                          aria-required="true"
                        />
                      </div>
                      {touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) && (
                        <div className="field-error-msg visible">
                          <AlertCircle size={13} /> Please enter a valid email address.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Category and Language */}
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="contact-category" className="form-label">
                        Inquiry Category
                      </label>
                      <div className="input-with-icon">
                        <Tag size={18} className="input-icon" />
                        <select
                          id="contact-category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="form-select"
                        >
                          {CATEGORIES.map((cat) => (
                            <option key={cat.id} value={cat.label}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-language" className="form-label">
                        Language of Interest
                      </label>
                      <div className="input-with-icon">
                        <Globe2 size={18} className="input-icon" />
                        <select
                          id="contact-language"
                          name="language"
                          value={formData.language}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="All Languages / General">🌍 All Languages / General</option>
                          {languagesList.map((lang) => (
                            <option key={lang.id} value={`${lang.name} (${lang.flag})`}>
                              {lang.flag} {lang.name} — {lang.nativeName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Subject and Optional Phone */}
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="contact-subject" className="form-label">
                        Subject Line <span className="required-star">*</span>
                      </label>
                      <div className="input-with-icon">
                        <MessageSquare size={18} className="input-icon" />
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. Question about Yoruba tonal marks"
                          required
                          minLength={3}
                          className="form-input"
                          aria-required="true"
                        />
                      </div>
                      {touched.subject && formData.subject.trim().length < 3 && (
                        <div className="field-error-msg visible">
                          <AlertCircle size={13} /> Please provide a subject line (at least 3 characters).
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone Number <span className="form-hint">(Optional)</span>
                      </label>
                      <div className="input-with-icon">
                        <Phone size={18} className="input-icon" />
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          autoComplete="tel"
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Your Message <span className="required-star">*</span>
                    </label>
                    <div className="input-with-icon textarea-icon-wrap">
                      <MessageSquare size={18} className="input-icon" />
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us about your question, feedback, or request in detail..."
                        required
                        minLength={10}
                        rows={5}
                        className="form-textarea"
                        aria-required="true"
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {touched.message && formData.message.trim().length < 10 ? (
                        <div className="field-error-msg visible">
                          <AlertCircle size={13} /> Please enter at least 10 characters.
                        </div>
                      ) : <span />}
                      <span className="char-counter">{formData.message.length} characters</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="form-actions">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="submit-btn"
                      id="contact-submit-button"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Clock size={18} className="spinner-icon" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Request to nnejieb@gmail.com & nneji.obioma@gmail.com</span>
                        </>
                      )}
                    </button>

                    <a 
                      href={mailtoHref} 
                      className="mailto-fallback-btn"
                      title="Open in your default email client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      <span>Prefer your desktop or mobile email app? Click to compose email directly</span>
                    </a>
                  </div>
                </form>
              </>
            )}
          </section>
        </div>

        {/* FAQ Section */}
        <section className="contact-faq-section" aria-labelledby="faq-heading">
          <div className="faq-header">
            <h2 id="faq-heading" className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-sub">Quick answers about reaching out, language suggestions, and responses.</p>
          </div>

          <div className="faq-grid">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="faq-item">
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${idx}`}
                  >
                    <span>{item.question}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'open' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-container contact-footer-inner">
          <p>© {new Date().getFullYear()} FiksLingo. Master 12 World Languages. All rights reserved.</p>
          <div className="contact-footer-links">
            <SubscribeButton
              source="contact_footer"
              label="Subscribe to Newsletter"
              icon="bell"
              buttonId="contact-footer-subscribe-btn"
            />
            <Link href="/" id="contact-footer-home-link">Home</Link>
            <Link href="/learn" id="contact-footer-curriculum-link">Curriculum</Link>
            <Link href="/about" id="contact-footer-about-link">About Us</Link>
            <Link href="/contact" id="contact-footer-contact-link">Contact Us</Link>
            <Link href="/terms" id="contact-footer-terms-link">Terms of Use</Link>
            <Link href="/privacy" id="contact-footer-privacy-link">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
