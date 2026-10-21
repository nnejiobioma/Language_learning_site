'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  GraduationCap, 
  X, 
  Check, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import './tutoringBanner.css';

export default function TutoringSideBanner() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = sessionStorage.getItem('fikslingo_tutoring_banner_collapsed');
      if (stored === 'true') {
        setExpanded(false);
      } else {
        // Show expanded after a gentle delay on initial visit
        const timer = setTimeout(() => {
          setExpanded(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      setExpanded(true);
    }
  }, []);

  const handleCollapse = (e) => {
    e?.stopPropagation();
    setExpanded(false);
    try {
      sessionStorage.setItem('fikslingo_tutoring_banner_collapsed', 'true');
    } catch {}
  };

  const handleExpand = () => {
    setExpanded(true);
    try {
      sessionStorage.setItem('fikslingo_tutoring_banner_collapsed', 'false');
    } catch {}
  };

  // Do not display if on the contact page itself
  if (!mounted || pathname === '/contact') {
    return null;
  }

  return (
    <aside 
      className="tutoring-banner-dock" 
      aria-label="One-on-One Language Tutoring Information"
    >
      {expanded ? (
        <div className="tutoring-banner-card" role="region" aria-labelledby="tutoring-title">
          {/* Header */}
          <div className="tutoring-card-header">
            <span className="tutoring-badge">
              <Sparkles size={12} />
              <span>1-on-1 Tutoring</span>
            </span>
            <button
              type="button"
              className="tutoring-minimize-btn"
              onClick={handleCollapse}
              aria-label="Minimize tutoring banner"
              title="Minimize banner"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="tutoring-card-body">
            <h3 id="tutoring-title" className="tutoring-title">
              Need <span className="tutoring-title-gradient">Personal Tutoring</span>?
            </h3>
            <p className="tutoring-desc">
              Accelerate your fluency with private, customized lessons taught by our native language coaches.
            </p>

            <ul className="tutoring-highlights">
              <li className="tutoring-highlight-item">
                <Check size={14} className="tutoring-check-icon" />
                <span>Tailored 1-on-1 video &amp; audio sessions</span>
              </li>
              <li className="tutoring-highlight-item">
                <Check size={14} className="tutoring-check-icon" />
                <span>All 12 European, Asian &amp; African languages</span>
              </li>
              <li className="tutoring-highlight-item">
                <Check size={14} className="tutoring-check-icon" />
                <span>Flexible hours &amp; exam preparation</span>
              </li>
            </ul>
          </div>

          {/* CTA Link to Contact Form */}
          <Link 
            href="/contact?category=tutoring" 
            className="tutoring-cta-btn"
            id="tutoring-side-banner-cta"
            onClick={handleCollapse}
          >
            <MessageSquare size={15} />
            <span>Fill Contact Form</span>
            <ArrowRight size={15} />
          </Link>

          <button 
            type="button" 
            className="tutoring-hide-link" 
            onClick={handleCollapse}
          >
            Minimize for now
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="tutoring-tab-collapsed"
          onClick={handleExpand}
          aria-label="Need 1-on-1 Tutoring? Click to expand"
          id="tutoring-side-tab-btn"
          title="Need 1-on-1 Tutoring? Click to open"
        >
          <div className="tutoring-tab-icon-wrap">
            <GraduationCap size={20} color="#10b981" />
            <span className="tutoring-tab-pulse-dot" />
          </div>
          <span className="tutoring-tab-vertical-text">1-on-1 Tutoring</span>
        </button>
      )}
    </aside>
  );
}
