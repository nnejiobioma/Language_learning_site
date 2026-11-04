'use client';

import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import SubscribeButton from '../../components/SubscribeButton';
import { LANGUAGES } from '../../data/languages';
import aboutData from '../../data/cms/about.json';
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

const PILLAR_ICONS = {
  Sparkles: <Sparkles size={26} />,
  Globe2: <Globe2 size={26} />,
  Compass: <Compass size={26} />,
  GraduationCap: <GraduationCap size={26} />,
  Heart: <Heart size={26} />,
  Award: <Award size={26} />,
  BookOpen: <BookOpen size={26} />
};

export default function AboutUsPage() {
  const languagesList = Object.values(LANGUAGES);
  const PILLARS = (aboutData.pillars || []).map((p) => ({
    ...p,
    icon: typeof p.icon === 'string' ? (PILLAR_ICONS[p.icon] || <Sparkles size={26} />) : p.icon
  }));

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
            <span>{aboutData.heroBadge || 'Our Mission & Story'}</span>
          </div>
          <h1 className="about-hero-title">
            {aboutData.heroTitle || 'Bridging Cultures,'} <br />
            <span className="about-hero-highlight">{aboutData.heroHighlight || 'One Language at a Time.'}</span>
          </h1>
          <p className="about-hero-sub">
            {aboutData.heroSubtitle ||
              'FliksLingo is a modern, gamified language learning platform built to celebrate linguistic diversity. We empower learners across the globe to speak authentically, appreciate rich traditions, and build lifelong fluency.'}
          </p>

          {/* Key Metrics */}
          <div className="about-stats-grid">
            {(aboutData.metrics || [
              { value: '12', label: 'World Languages' },
              { value: '2,400+', label: 'Vocabulary & Questions' },
              { value: '5', label: 'Quiz Styles & Audio' },
              { value: '100%', label: 'Free to Learn' }
            ]).map((m, idx) => (
              <div key={idx} className="about-stat-box">
                <span className="about-stat-number">{m.value}</span>
                <span className="about-stat-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative: Our Story */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="story-copy">
              <h2>{aboutData.story?.heading || 'Why We Built FliksLingo'}</h2>
              <p className="story-lead">
                {aboutData.story?.lead || 'We believe that learning a new language is the most powerful way to build empathy, expand horizons, and discover new cultures.'}
              </p>
              <p className="story-p">
                {aboutData.story?.paragraph1 || 'Most traditional language apps have two major flaws: they force you through tedious mechanical grammar drills that don’t reflect real everyday speech, and they routinely ignore African and regional heritage languages that millions of people want and need to learn.'}
              </p>
              <p className="story-p">
                {aboutData.story?.paragraph2 || 'FliksLingo was created to break those boundaries. We paired modern gamification—streaks, XP, and multi-format quizzes—with native pronunciation audio, cultural proverbs, street slang, and Computer-Based Testing. Whether you are learning Spanish for travel, Mandarin for business, Japanese for anime, or Yoruba to connect with ancestral heritage, FliksLingo gives you the tools to succeed.'}
              </p>
            </div>

            <div className="story-card-visual">
              <div className="mascot-feature-box">
                <img 
                  src={aboutData.story?.image || '/images/mascot.jpg'} 
                  alt="FliksLingo mascot" 
                  className="mascot-feature-img" 
                />
                <blockquote className="mascot-feature-quote">
                  &ldquo;{aboutData.story?.quoteText || 'A different language is a different vision of life.'}&rdquo;
                </blockquote>
                <span className="mascot-feature-author">— {aboutData.story?.quoteAuthor || 'Federico Fellini'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="about-section tint">
        <div className="about-container">
          <div className="section-header-centered">
            <h2>{aboutData.pillarsHeading || 'The FliksLingo Difference'}</h2>
            <p>{aboutData.pillarsSubheading || 'Built from the ground up for modern polyglots, students, and culture enthusiasts.'}</p>
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
            <h2>{aboutData.teamHeading || 'Leadership & Academic Team'}</h2>
            <p>{aboutData.teamSubheading || 'Driven by passionate polyglots, educators, and software engineers.'}</p>
          </div>

          <div className="team-cards-grid">
            {(aboutData.teamMembers || []).map((member, mIdx) => (
              <div key={mIdx} className="team-showcase-card">
                <div className="team-lead-grid">
                  <div className={`team-avatar-lead ${member.avatarClass || 'obioma'}`}>
                    <span>{member.initials}</span>
                  </div>
                  <div className="team-lead-copy">
                    <h3>{member.name}</h3>
                    <span className={`team-lead-role ${member.roleClass || ''}`}>{member.role}</span>
                    <p className="team-lead-bio">{member.bio}</p>
                    <div className="team-contact-actions">
                      <a href={`mailto:${member.email}`} className="team-email-pill" title={`Email ${member.name}`}>
                        <Mail size={14} /> {member.email}
                      </a>
                      <Link href="/contact" className="team-email-pill" style={{ color: member.roleClass === 'gold' ? '#f59e0b' : '#10b981' }}>
                        <ArrowRight size={14} /> Contact Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-box">
            <h2>{aboutData.cta?.heading || 'Ready to Speak a New Language?'}</h2>
            <p>
              {aboutData.cta?.subheading || 'Join thousands of learners discovering the beauty of world languages. Start today with bite-sized lessons, native audio, and interactive quizzes.'}
            </p>
            <div className="about-cta-btns">
              <Link href={aboutData.cta?.primaryBtnUrl || '/signup'} className="cta-white-btn" id="about-cta-signup">
                {aboutData.cta?.primaryBtnText || 'Start Learning Free'}
              </Link>
              <Link href={aboutData.cta?.secondaryBtnUrl || '/learn'} className="cta-outline-btn" id="about-cta-explore">
                {aboutData.cta?.secondaryBtnText || 'Explore Curriculum'}
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
