// Web Audio API Synthesizer & Speech Pronunciation
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setEnabled(state) {
    this.enabled = state;
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // Audio context may require user gesture
    }
  }

  playError() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(196, now); // G3
      osc.frequency.linearRampToValueAtTime(146.83, now + 0.2); // D3

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch {
      // Ignore
    }
  }

  playStreak() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C, E, G, High C
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.2);
      });
    } catch {
      // Ignore
    }
  }

  playFanfare() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const melody = [
        { f: 440, d: 0.1 },
        { f: 554.37, d: 0.1 },
        { f: 659.25, d: 0.1 },
        { f: 880, d: 0.4 },
      ];
      let t = this.ctx.currentTime;
      melody.forEach((item) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, t);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + item.d + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + item.d + 0.1);
        t += item.d;
      });
    } catch {
      // Ignore
    }
  }

  speak(text, lang = 'spanish') {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;

      const langCodeMap = {
        spanish: ['es-ES', 'es-MX', 'es'],
        french: ['fr-FR', 'fr-CA', 'fr'],
        german: ['de-DE', 'de-AT', 'de'],
        japanese: ['ja-JP', 'ja'],
        mandarin: ['zh-CN', 'zh-TW', 'zh'],
        portuguese: ['pt-BR', 'pt-PT', 'pt'],
        swedish: ['sv-SE', 'sv'],
        finnish: ['fi-FI', 'fi'],
        igbo: ['ig-NG', 'en-NG', 'en'],
        hausa: ['ha-NG', 'ha', 'en-NG', 'en'],
        pidgin: ['en-NG', 'en-ZA', 'en-GB', 'en'],
        yoruba: ['yo-NG', 'en-NG', 'en']
      };

      const preferredCodes = langCodeMap[lang] || ['en-US'];
      utterance.lang = preferredCodes[0];

      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const matchingVoice = voices.find(v => 
          preferredCodes.some(code => v.lang.toLowerCase().startsWith(code.toLowerCase()))
        );
        if (matchingVoice) {
          utterance.voice = matchingVoice;
        }
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }
}

export const soundEngine = new SoundEngine();
