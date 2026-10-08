import Link from 'next/link';
import './landing.css';
import { LANGUAGES } from '../data/languages';

export const metadata = {
  title: 'FiksLingo — Learn 12 World Languages the Fun Way',
  description:
    'Learn Spanish, French, German, Japanese, Mandarin, Portuguese, Swedish, Finnish, Igbo, Hausa, Nigerian Pidgin and Yoruba with gamified lessons, audio pronunciation and culture insights.',
};

const FEATURES = [
  { icon: '🎮', title: 'Gamified lessons', text: 'Earn XP, keep streaks alive and protect your hearts as you move through bite-sized units.' },
  { icon: '🔊', title: 'Hear it spoken', text: 'Native-style pronunciation for every phrase, so you learn to speak, not just read.' },
  { icon: '🎴', title: 'Smart flashcards', text: 'Flip through 3D cards with phonetics and example sentences, and track what you have mastered.' },
  { icon: '🏛️', title: 'Culture vault', text: 'Daily proverbs, etiquette tips and street slang that bring each language to life.' },
  { icon: '🧩', title: 'Five quiz styles', text: 'Multiple choice, sentence builder, matching, listening and fill-in-the-blank.' },
  { icon: '🏆', title: 'Friendly competition', text: 'Climb the weekly leaderboard and see how you rank against other learners.' },
];

const STEPS = [
  { n: '1', title: 'Pick a language', text: 'Choose from 12 languages across Europe, Asia and Africa.' },
  { n: '2', title: 'Learn in minutes', text: 'Short lessons with audio, quizzes and instant feedback.' },
  { n: '3', title: 'Build the habit', text: 'Keep your daily streak, review flashcards and level up.' },
];

export default function LandingPage() {
  const languages = Object.values(LANGUAGES);

  return (
    <div className="lp-root">
      <header className="lp-nav">
        <div className="lp-container lp-nav-inner">
          <Link href="/" className="lp-brand" aria-label="FiksLingo home">
            <img src="/images/mascot.jpg" alt="" className="lp-brand-img" />
            <span>FiksLingo</span>
          </Link>
          <nav className="lp-nav-links" aria-label="Page sections">
            <a href="#languages">Languages</a>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
          </nav>
          <div className="lp-nav-actions">
            <Link href="/login" className="lp-nav-login" id="landing-nav-login">Log in</Link>
            <Link href="/signup" className="lp-btn lp-btn-primary lp-btn-sm" id="landing-nav-start">
              Sign up free
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="lp-hero">
          <div className="lp-container lp-hero-grid">
            <div className="lp-hero-copy">
              <span className="lp-pill">🌍 12 languages · free to start</span>
              <h1 className="lp-h1">
                Learn a new language, <span className="lp-highlight">the fun way.</span>
              </h1>
              <p className="lp-lead">
                FiksLingo turns language learning into a daily habit with short gamified lessons,
                spoken audio and real cultural context.
              </p>
              <div className="lp-cta-row">
                <Link href="/signup" className="lp-btn lp-btn-primary" id="landing-hero-start">
                  Create your free account
                </Link>
                <Link href="/login" className="lp-btn lp-btn-ghost">
                  I already have an account
                </Link>
              </div>
              <ul className="lp-stats" aria-label="FiksLingo at a glance">
                <li><strong>12</strong><span>languages</span></li>
                <li><strong>5</strong><span>quiz types</span></li>
                <li><strong>Free</strong><span>to sign up</span></li>
              </ul>
            </div>

            <div className="lp-hero-visual" aria-hidden="true">
              <div className="lp-blob" />
              <img src="/images/mascot.jpg" alt="" className="lp-hero-img" />
              <div className="lp-float lp-float-a">🔥 7 day streak</div>
              <div className="lp-float lp-float-b">⭐ +20 XP</div>
              <div className="lp-float lp-float-c">¡Hola! · Bonjour · Sannu</div>
            </div>
          </div>
        </section>

        <section id="languages" className="lp-section lp-section-tint">
          <div className="lp-container">
            <h2 className="lp-h2">Choose your language</h2>
            <p className="lp-sub">From global favourites to African languages you will not find everywhere.</p>
            <div className="lp-lang-grid">
              {languages.map((lang) => (
                <Link
                  key={lang.id}
                  href="/signup"
                  className="lp-lang-card"
                  id={`landing-lang-${lang.id}`}
                >
                  <img src={lang.badge} alt={`${lang.name} badge`} className="lp-lang-img" loading="lazy" />
                  <div className="lp-lang-meta">
                    <span className="lp-lang-name">{lang.flag} {lang.name}</span>
                    <span className="lp-lang-native">{lang.nativeName}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="lp-section">
          <div className="lp-container">
            <h2 className="lp-h2">Everything you need to stay motivated</h2>
            <p className="lp-sub">Built to make practice feel like play.</p>
            <div className="lp-feature-grid">
              {FEATURES.map((f) => (
                <article key={f.title} className="lp-feature">
                  <span className="lp-feature-icon" aria-hidden="true">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="lp-section lp-section-tint">
          <div className="lp-container">
            <h2 className="lp-h2">How it works</h2>
            <div className="lp-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="lp-step">
                  <span className="lp-step-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-section">
          <div className="lp-container">
            <div className="lp-final-cta">
              <h2>Ready to speak a new language?</h2>
              <p>Create your free account in seconds and start your first lesson today.</p>
              <Link href="/signup" className="lp-btn lp-btn-light" id="landing-final-start">
                Create your free account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-container lp-footer-inner">
          <span>© {new Date().getFullYear()} FiksLingo. Master world languages.</span>
          <Link href="/login">Log in</Link>
        </div>
      </footer>
    </div>
  );
}
