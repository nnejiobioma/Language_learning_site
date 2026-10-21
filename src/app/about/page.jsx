'use client';

import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import SubscribeButton from '../../components/SubscribeButton';
import { LANGUAGES } from '../../data/languages';
import { 
  Globe2, 
  Sparkles, 
  Award, 
  Heart, 
  BookOpen, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  Compass, 
  Mail, 
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import './about.css';

const PILLARS = [
  {
    icon: <Sparkles size={26} />,
    colorClass: '',
    title: 'Gamified Habit Building',
    desc: 'Learning should never feel like a chore. With daily streaks, XP gains, dynamic quizzes, and interactive feedback, FliksLingo turns 10 minutes a day into lasting fluency.'
  },
  {
    icon: <Globe2 size={26} />,
    colorClass: 'blue',
    title: 'Authentic Culture Vaults',
    desc: 'Languages are more than grammar. Every language on FliksLingo includes street slang, cultural proverbs, social etiquette, and regional idioms that bring each culture to life.'
  },
  {
    icon: <Compass size={26} />,
    colorClass: 'gold',
    title: 'Global & African Inclusivity',
    desc: 'While most apps stop at European languages, FliksLingo gives African heritage languages—Yoruba, Igbo, Hausa, and Nigerian Pidgin—the same first-class gamified treatment as Spanish or Japanese.'
  },
  {
    icon: <GraduationCap size={26} />,
    colorClass: 'purple',
    title: 'Rigorous Exam Simulation',
    desc: 'From official MCER (Spanish & French) and JLPT (Japanese) to HSK/CLEC (Mandarin), our Computer-Based Testing (CBT) engine tests your true retention with timed exam simulations.'
  }
];

export default function AboutUsPage() {
  const languagesList = Object.values(LANGUAGES);

  return (
    <div className="about-page-root">
      {/* Top Navbar */}
      <header className="about-nav">
        <div className="about-nav-container">
          <Link href="/" className="about-brand" aria-label="FliksLingo Home">
            <img 
              src="/images/mascot.jpg" 
              alt="FliksLingo Mascot" 
              className="about-brand-img" 
            />
            <span className="about-brand-text">FliksLingo</span>
          </Link>

          <div className="about-nav-right">
            <ThemeSwitcher />
            <Link href="/learn" className="about-nav-btn secondary">
              Curriculum
            </Link>
            <Link href="/contact" className="about-nav-btn secondary">
              Contact
            </Link>
            <Link href="/signup" className="about-nav-btn primary">
              Sign Up Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-badge">
            <Sparkles size={16} />
            <span>Our Mission &amp; Story</span>
          </div>
          <h1 className="about-hero-title">
            Bridging Cultures, <br />
            <span className="about-hero-highlight">One Language at a Time.</span>
          </h1>
          <p className="about-hero-sub">
            FliksLingo is a modern, gamified language learning platform built to celebrate linguistic diversity. 
            We empower learners across the globe to speak authentically, appreciate rich traditions, and build lifelong fluency.
          </p>

          {/* Key Metrics */}
          <div className="about-stats-grid">
            <div className="about-stat-box">
              <span className="about-stat-number">12</span>
              <span className="about-stat-label">World Languages</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-number">2,400+</span>
              <span className="about-stat-label">Vocabulary &amp; Questions</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-number">5</span>
              <span className="about-stat-label">Quiz Styles &amp; Audio</span>
            </div>
            <div className="about-stat-box">
              <span className="about-stat-number">100%</span>
              <span className="about-stat-label">Free to Learn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative: Our Story */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="story-copy">
              <h2>Why We Built FliksLingo</h2>
              <p className="story-lead">
                We believe that learning a new language is the most powerful way to build empathy, expand horizons, and discover new cultures.
              </p>
              <p className="story-p">
                Most traditional language apps have two major flaws: they force you through tedious mechanical grammar drills that don’t reflect real everyday speech, and they routinely ignore African and regional heritage languages that millions of people want and need to learn.
              </p>
              <p className="story-p">
                FliksLingo was created to break those boundaries. We paired modern gamification—streaks, XP, and multi-format quizzes—with native pronunciation audio, cultural proverbs, street slang, and Computer-Based Testing. Whether you are learning Spanish for travel, Mandarin for business, Japanese for anime, or Yoruba to connect with ancestral heritage, FliksLingo gives you the tools to succeed.
              </p>
            </div>

            <div className="story-card-visual">
              <div className="mascot-feature-box">
                <img 
                  src="/images/mascot.jpg" 
                  alt="FliksLingo mascot" 
                  className="mascot-feature-img" 
                />
                <blockquote className="mascot-feature-quote">
                  &ldquo;A different language is a different vision of life.&rdquo;
                </blockquote>
                <span className="mascot-feature-author">— Federico Fellini</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="about-section tint">
        <div className="about-container">
          <div className="section-header-centered">
            <h2>The FliksLingo Difference</h2>
            <p>Built from the ground up for modern polyglots, students, and culture enthusiasts.</p>
          </div>

          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <div key={i} className="pillar-card">
                <div className={`pillar-icon-box ${p.colorClass}`}>
                  {p.icon}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 12 Languages Showcase */}
      <section className="about-section">
        <div className="about-container">
          <div className="section-header-centered">
            <h2>12 Languages Across 3 Continents</h2>
            <p>From European favorites and Asian powerhouses to rich African heritage languages.</p>
          </div>

          <div className="language-matrix-grid">
            {languagesList.map((lang) => (
              <Link 
                key={lang.id} 
                href={`/learn?lang=${lang.id}`} 
                className="lang-cluster-card"
                title={`Explore ${lang.name} curriculum`}
              >
                <div className="lang-cluster-flag">{lang.flag}</div>
                <div className="lang-cluster-info">
                  <span className="lang-cluster-title">{lang.name}</span>
                  <span className="lang-cluster-native">{lang.nativeName}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="about-section tint">
        <div className="about-container">
          <div className="section-header-centered">
            <h2>Leadership &amp; Academic Team</h2>
            <p>Driven by passionate polyglots, educators, and software engineers.</p>
          </div>

          <div className="team-cards-grid">
            {/* Obioma Nneji */}
            <div className="team-showcase-card">
              <div className="team-lead-grid">
                <div className="team-avatar-lead obioma">
                  <span>ON</span>
                </div>
                <div className="team-lead-copy">
                  <h3>Obioma Nneji</h3>
                  <span className="team-lead-role">Founder &amp; Lead Architect</span>
                  <p className="team-lead-bio">
                    Obioma founded FliksLingo with the vision of making polyglot education universally accessible, culturally authentic, and engaging. Leading platform architecture and curriculum systems, Obioma oversees the interactive CBT assessment engines and multi-language learning tracks.
                  </p>
                  <div className="team-contact-actions">
                    <a href="mailto:nneji.obioma@gmail.com" className="team-email-pill" title="Email Obioma Nneji">
                      <Mail size={14} /> nneji.obioma@gmail.com
                    </a>
                    <Link href="/contact" className="team-email-pill" style={{ color: '#10b981' }}>
                      <ArrowRight size={14} /> Contact Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Ebere Nneji */}
            <div className="team-showcase-card">
              <div className="team-lead-grid">
                <div className="team-avatar-lead ebere">
                  <span>EN</span>
                </div>
                <div className="team-lead-copy">
                  <h3>Ebere Nneji</h3>
                  <span className="team-lead-role gold">Co-Founder &amp; Lead Instructor</span>
                  <p className="team-lead-bio">
                    Ebere serves as Co-Founder and Lead Instructor, driving pedagogy, instructional design, and speech pronunciation frameworks across FliksLingo's courses. With a passion for communicative teaching and cultural immersion, Ebere shapes the interactive lesson journeys and Culture Vault insights.
                  </p>
                  <div className="team-contact-actions">
                    <a href="mailto:nnejieb@gmail.com" className="team-email-pill" title="Email Ebere Nneji">
                      <Mail size={14} /> nnejieb@gmail.com
                    </a>
                    <Link href="/contact" className="team-email-pill" style={{ color: '#f59e0b' }}>
                      <ArrowRight size={14} /> Contact Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-box">
            <h2>Ready to Speak a New Language?</h2>
            <p>
              Join thousands of learners discovering the beauty of world languages. 
              Start today with bite-sized lessons, native audio, and interactive quizzes.
            </p>
            <div className="about-cta-btns">
              <Link href="/signup" className="cta-white-btn" id="about-cta-signup">
                Start Learning Free
              </Link>
              <Link href="/learn" className="cta-outline-btn" id="about-cta-explore">
                Explore Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="about-container about-footer-inner">
          <p>© {new Date().getFullYear()} FliksLingo. Master 12 World Languages. All rights reserved.</p>
          <div className="about-footer-links">
            <SubscribeButton
              source="about_footer"
              label="Subscribe to Newsletter"
              icon="bell"
              buttonId="about-footer-subscribe-btn"
            />
            <Link href="/" id="about-footer-home-link">Home</Link>
            <Link href="/learn" id="about-footer-curriculum-link">Curriculum</Link>
            <Link href="/about" id="about-footer-about-link">About Us</Link>
            <Link href="/contact" id="about-footer-contact-link">Contact Us</Link>
            <Link href="/terms" id="about-footer-terms-link">Terms of Use</Link>
            <Link href="/privacy" id="about-footer-privacy-link">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
