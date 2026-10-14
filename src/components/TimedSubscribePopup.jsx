'use client';

import React, { useState, useEffect } from 'react';
import SubscribeModal from './SubscribeModal';

const ONE_MINUTE_MS = 60 * 1000; // 1 minute = 60,000 milliseconds
const DISMISS_PERIOD_MS = 24 * 60 * 60 * 1000; // 24 hours dismissal cooldown

export default function TimedSubscribePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if already subscribed
    try {
      const alreadySubscribed = localStorage.getItem('fikslingo_subscribed') === 'true';
      if (alreadySubscribed) return;

      // Check if user dismissed the popup recently (within 24 hours)
      const dismissedUntil = localStorage.getItem('fikslingo_popup_dismissed_until');
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return;
      }
    } catch {
      // In case localStorage is blocked in private browsing
    }

    // Set 1-minute timer
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, ONE_MINUTE_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      // Store 24-hour dismissal timestamp so it doesn't immediately prompt again
      localStorage.setItem('fikslingo_popup_dismissed_until', String(Date.now() + DISMISS_PERIOD_MS));
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <SubscribeModal 
      isOpen={isOpen} 
      onClose={handleClose} 
      source="timed_popup_1min"
      title="Level Up Your Language Habit"
      subtitle="You've been exploring FiksLingo! Join 25,000+ passionate learners receiving our curated weekly vocabulary digests, grammar hacks, and cultural proverbs."
    />
  );
}
