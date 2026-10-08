# FiksLingo — Master World Languages with Gamified Learning

**FiksLingo** is an interactive, gamified multi-language learning web platform built with **Next.js (App Router)** and **Firebase** (Authentication & Cloud Firestore).

---

## 🌍 Supported Languages (12 Global Languages)

- 🇪🇸 **Spanish** (Español)
- 🇫🇷 **French** (Français)
- 🇩🇪 **German** (Deutsch)
- 🇯🇵 **Japanese** (日本語)
- 🇨🇳 **Mandarin Chinese** (中文)
- 🇵🇹 **Portuguese** (Português)
- 🇸🇪 **Swedish** (Svenska)
- 🇫🇮 **Finnish** (Suomi)
- 🦅 **Igbo** (Asụsụ Igbo)
- 🌍 **Hausa** (Harshen Hausa)
- 🇳🇬 **Nigerian Pidgin** (Naija Pidgin)
- 👑 **Yoruba** (Èdè Yorùbá)

---

## ✨ Features

- 🎮 **Gamified Curriculum**: Structured units with milestone roadmaps, progress tracking, and unlockable lessons.
- 🧩 **Interactive Quiz Engine**: Multiple choice, word scramble sentence builders, matching pair tiles, audio listening challenges, and fill-in-the-blank tests.
- 🔊 **Synthesized Audio & Native Speech**: Web Audio API game sound effects (chimes, combos, fanfares) and Web Speech API pronunciation mapped to native language codes.
- 🎴 **3D SRS Flashcards**: Flipping cards with phonetic pronunciation guides, example sentences, and mastery status.
- 🏛️ **Culture Vault**: Daily proverbs with cultural context, social etiquette guides, and searchable street slangs.
- 🏆 **Community Leaderboard**: League tiers (Gold, Diamond, Naija Giant) with podium rankings and streak counters.
- 🔥 **Firebase Integration**: Full Cloud Firestore and Firebase Authentication with instant Guest/Demo fallback.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.local.example` to `.env.local` and add your Firebase credentials:
```bash
cp .env.local.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001`) in your browser to start learning with **FiksLingo**!
