import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { GameProvider } from '../context/GameContext';

export const metadata = {
  title: 'GlobalLingo — Master World Languages with Gamified Learning',
  description: 'Learn Spanish, French, German, Japanese, Mandarin Chinese, Nigerian Pidgin, and Yoruba with interactive gamified quizzes, speech pronunciation, streak tracking, and cultural insights.',
  keywords: 'Spanish, French, German, Japanese, Mandarin Chinese, Nigerian Pidgin, Yoruba, Multi-language learning app, Next.js, Firebase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <AuthProvider>
          <GameProvider>
            {children}
          </GameProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
