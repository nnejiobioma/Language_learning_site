import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';
import SubscribeButton from '../components/SubscribeButton';
import { LANGUAGES } from '../data/languages';
import siteSettings from '../data/cms/site_settings.json';

export const metadata = {
  title: `${siteSettings.brandName || 'FliksLingo'} — Learn 12 World Languages the Fun Way`,
  description:
    'Learn Spanish, French, German, Japanese, Mandarin, Portuguese, Swedish, Finnish, Igbo, Hausa, Nigerian Pidgin and Yoruba with gamified lessons, audio pronunciation and culture insights.',
};

const FEATURES = siteSettings.featuresSection?.features || [
  { icon: '🎮', title: 'Gamified lessons', text: 'Earn XP, keep streaks alive and protect your hearts as you move through bite-sized units.' },
  { icon: '🔊', title: 'Hear it spoken', text: 'Native-style pronunciation for every phrase, so you learn to speak, not just read.' },
  { icon: '🎴', title: 'Smart flashcards', text: 'Flip through 3D cards with phonetics and example sentences, and track what you have mastered.' },
  { icon: '🏛️', title: 'Culture vault', text: 'Daily proverbs, etiquette tips and street slang that bring each language to life.' },
  { icon: '🧩', title: 'Five quiz styles', text: 'Multiple choice, sentence builder, matching, listening and fill-in-the-blank.' },
  { icon: '🏆', title: 'Friendly competition', text: 'Climb the weekly leaderboard and see how you rank against other learners.' },
];

const STEPS = siteSettings.howItWorksSection?.steps || [
  { n: '1', title: 'Pick a language', text: 'Choose from 12 languages across Europe, Asia and Africa.' },
  { n: '2', title: 'Learn in minutes', text: 'Short lessons with audio, quizzes and instant feedback.' },
  { n: '3', title: 'Build the habit', text: 'Keep your daily streak, review flashcards and level up.' },
];

export default function LandingPage() {
  const languages = Object.values(LANGUAGES);
  const hero = siteSettings.hero || {};
  const announcement = siteSettings.announcement || {};

  return (
    <div className="lp-root">
      {announcement.enabled && announcement.text && (
        <div
          style={{
            background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
            color: '#ffffff',
            textAlign: 'center',
            padding: '0.5rem 1rem',
            fontSize: '0.85rem',
            fontWeight: 600
          }}
        >
          <span>{announcement.text} </span>
          {announcement.linkUrl && (
            <Link
              href={announcement.linkUrl}
              style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 800, marginLeft: 8 }}
            >
              {announcement.linkText || 'Learn more →'}
            </Link>
          )}
        </div>
      )}
      <header className="lp-nav">
        <div className="lp-container lp-nav-inner">
          <Link href="/" className="lp-brand" aria-label="FliksLingo home">
            <img src={hero.heroImage || '/images/mascot.jpg'} alt="" className="lp-brand-img" />
            <div className="lp-brand-text">
              <span className="lp-brand-name">{siteSettings.brandName || 'FliksLingo'}</span>
              <span className="lp-brand-tagline">{siteSettings.tagline || 'Master World Languages'}</span>
            </div>
          </Link>
          <nav className="lp-nav-links" aria-label="Page sections">
            <a href="#languages">Languages</a>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <Link href="/about" id="landing-nav-about">About Us</Link>
            <Link href="/contact" id="landing-nav-contact">Contact</Link>
          </nav>
          <div className="lp-nav-actions">
            <ThemeSwitcher />
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
              <span className="lp-pill">{hero.pill || '🌍 12 languages · free to start'}</span>
              <h1 className="lp-h1">
                {hero.title || 'Learn a new language,'}{' '}
                <span className="lp-highlight">{hero.highlight || 'the fun way.'}</span>
              </h1>
              <p className="lp-lead">
                {hero.lead ||
                  'FliksLingo turns language learning into a daily habit with short gamified lessons, spoken audio and real cultural context.'}
              </p>
              <div className="lp-cta-row">
                <Link href={hero.primaryCtaUrl || '/signup'} className="lp-btn lp-btn-primary" id="landing-hero-start">
                  {hero.primaryCtaText || 'Create your free account'}
                </Link>
                <Link href={hero.secondaryCtaUrl || '/login'} className="lp-btn lp-btn-ghost">
                  {hero.secondaryCtaText || 'I already have an account'}
                </Link>
              </div>
              <ul className="lp-stats" aria-label="FliksLingo at a glance">
                {(hero.stats || [
                  { value: '12', label: 'languages' },
                  { value: '5', label: 'quiz types' },
                  { value: 'Free', label: 'to sign up' }
                ]).map((st, idx) => (
                  <li key={idx}>
                    <strong>{st.value}</strong>
                    <span>{st.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lp-hero-visual" aria-hidden="true">
              <div className="lp-blob" />
              <img src={hero.heroImage || '/images/mascot.jpg'} alt="" className="lp-hero-img" />
              <div className="lp-float lp-float-a">{hero.floatingBadgeA || '🔥 7 day streak'}</div>
              <div className="lp-float lp-float-b">{hero.floatingBadgeB || '⭐ +20 XP'}</div>
              <div className="lp-float lp-float-c">{hero.floatingBadgeC || '¡Hola! · Bonjour · Sannu'}</div>
            </div>
          </div>
        </section>

        <section id="languages" className="lp-section lp-section-tint">
          <div className="lp-container">
            <h2 className="lp-h2">{siteSettings.languagesSection?.heading || 'Choose your language'}</h2>
            <p className="lp-sub">{siteSettings.languagesSection?.subheading || 'From global favourites to African languages you will not find everywhere.'}</p>
            <div className="lp-lang-grid">
              {languages.map((lang) => (
                <Link
                  key={lang.id}
                  href={`/learn?lang=${lang.id}`}
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
            <h2 className="lp-h2">{siteSettings.featuresSection?.heading || 'Everything you need to stay motivated'}</h2>
            <p className="lp-sub">{siteSettings.featuresSection?.subheading || 'Built to make practice feel like play.'}</p>
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
            <h2 className="lp-h2">{siteSettings.howItWorksSection?.heading || 'How it works'}</h2>
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
              <h2>{siteSettings.ctaBanner?.heading || 'Ready to speak a new language?'}</h2>
              <p>{siteSettings.ctaBanner?.subheading || 'Create your free account in seconds and start your first lesson today.'}</p>
              <Link href={siteSettings.ctaBanner?.buttonUrl || '/signup'} className="lp-btn lp-btn-light" id="landing-final-start">
                {siteSettings.ctaBanner?.buttonText || 'Create your free account'}
              </Link>
            </div>
          </div>
        </section>
        <section className="lp-section lp-section-subscribe">
          <div className="lp-container">
            <div className="lp-subscribe-banner">
              <div className="lp-subscribe-copy">
                <span className="lp-sub-tag">{siteSettings.newsletterBanner?.tag || 'Free Weekly Newsletter'}</span>
                <h3 className="lp-sub-title">{siteSettings.newsletterBanner?.heading || 'Learn faster with our weekly vocabulary drops'}</h3>
                <p className="lp-sub-text">{siteSettings.newsletterBanner?.subheading || 'Join 25,000+ polyglots receiving handpicked phrases, cultural guides, and streak motivation.'}</p>
              </div>
              <SubscribeButton
                source="landing_banner"
                label={siteSettings.newsletterBanner?.buttonLabel || 'Subscribe with Name & Email'}
                icon="mail"
                className="lp-subscribe-cta-btn"
                buttonId="landing-newsletter-btn"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-container lp-footer-inner">
          <span>© {new Date().getFullYear()} {siteSettings.footer?.copyrightText || 'FliksLingo. Master world languages.'}</span>
          <div className="lp-footer-links">
            <SubscribeButton 
              source="landing_footer" 
              label="Subscribe to Newsletter" 
              icon="bell" 
              className="lp-footer-sub-btn" 
              buttonId="footer-subscribe-btn"
            />
            <Link href="/about" id="footer-about-link">About Us</Link>
            <Link href="/contact" id="footer-contact-link">Contact Us</Link>
            <Link href="/terms" id="footer-terms-link">Terms of Use</Link>
            <Link href="/privacy" id="footer-privacy-link">Privacy Policy</Link>
            <Link href="/admin" id="footer-cms-link">CMS Admin</Link>
            <Link href="/login">Log in</Link>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
