import './globals.css';
import './landing.css';
import { AuthProvider } from '../context/AuthContext';
import { AdminContentProvider } from '../context/AdminContentContext';
import { GameProvider } from '../context/GameContext';
import { ThemeProvider } from '../context/ThemeContext';
import TimedSubscribePopup from '../components/TimedSubscribePopup';
import CookieBanner from '../components/CookieBanner';
import TutoringSideBanner from '../components/TutoringSideBanner';
import AdminFloatingToolbar from '../components/AdminFloatingToolbar';
import AdminQuickEditModal from '../components/AdminQuickEditModal';

export const metadata = {
  title: 'FliksLingo — Master World Languages with Gamified Learning',
  description: 'Learn Spanish, French, German, Japanese, Mandarin Chinese, Nigerian Pidgin, and Yoruba with interactive gamified quizzes, speech pronunciation, streak tracking, and cultural insights.',
  keywords: 'Spanish, French, German, Japanese, Mandarin Chinese, Nigerian Pidgin, Yoruba, Multi-language learning app, Next.js, Firebase',
};

// Inline script to prevent FOUC (flash of unstyled/wrong theme)
const themeInitScript = `
  (function() {
    try {
      function getCookie(name) {
        var m = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
        return m ? decodeURIComponent(m[2]) : null;
      }
      var cookiePref = getCookie('flikslingo_theme');
      var pref = cookiePref || localStorage.getItem('theme-preference') || 'system';
      var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = pref === 'dark' || (pref === 'system' && sysDark);
      var root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        root.classList.remove('light');
        root.setAttribute('data-theme', 'dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
        root.style.colorScheme = 'light';
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/mascot.jpg" />
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <AdminContentProvider>
              <GameProvider>
                {children}
                <TimedSubscribePopup />
                <CookieBanner />
                <TutoringSideBanner />
                <AdminFloatingToolbar />
                <AdminQuickEditModal />
              </GameProvider>
            </AdminContentProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
