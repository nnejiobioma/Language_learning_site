'use client';

import React, { useState } from 'react';
import { Mail, BellRing } from 'lucide-react';
import SubscribeModal from './SubscribeModal';
import './subscribe.css';

/**
 * Reusable Subscribe button that opens the SubscribeModal.
 * Perfect for placement in footers, headers, or callout cards.
 */
export default function SubscribeButton({
  source = 'footer',
  label = 'Subscribe',
  icon = 'bell', // 'bell' | 'mail' | 'none'
  className = '',
  buttonId = undefined,
  title = 'Join the FiksLingo Weekly Digest',
  subtitle = 'Get handpicked vocabulary lists, cultural trivia, and study tips delivered to your inbox every Sunday.'
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        id={buttonId}
        className={`subscribe-trigger-btn ${className}`}
        onClick={() => setModalOpen(true)}
      >
        {icon === 'bell' && <BellRing size={15} className="sub-trigger-icon" />}
        {icon === 'mail' && <Mail size={15} className="sub-trigger-icon" />}
        <span>{label}</span>
      </button>

      <SubscribeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={source}
        title={title}
        subtitle={subtitle}
      />
    </>
  );
}
