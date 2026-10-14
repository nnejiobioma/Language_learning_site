'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Laptop, Check, ChevronDown } from 'lucide-react';

export default function ThemeSwitcher({ variant = 'dropdown', className = '' }) {
  const { themePreference, resolvedTheme, systemTheme, setThemePreference } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Active icon based on current preference
  const ActiveIcon = themePreference === 'light' 
    ? Sun 
    : themePreference === 'dark' 
      ? Moon 
      : Laptop;

  const currentLabel = themePreference === 'light'
    ? 'Light'
    : themePreference === 'dark'
      ? 'Dark'
      : 'System';

  // If segmented variant is requested (e.g. for profile or settings page)
  if (variant === 'segmented') {
    return (
      <div className={`theme-segmented-group ${className}`} role="radiogroup" aria-label="Theme selection">
        <button
          type="button"
          role="radio"
          aria-checked={themePreference === 'light'}
          className={`theme-segment-btn ${themePreference === 'light' ? 'active' : ''}`}
          onClick={() => setThemePreference('light')}
          title="Force light mode"
        >
          <Sun size={17} />
          <span>Light</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={themePreference === 'dark'}
          className={`theme-segment-btn ${themePreference === 'dark' ? 'active' : ''}`}
          onClick={() => setThemePreference('dark')}
          title="Force dark mode"
        >
          <Moon size={17} />
          <span>Dark</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={themePreference === 'system'}
          className={`theme-segment-btn ${themePreference === 'system' ? 'active' : ''}`}
          onClick={() => setThemePreference('system')}
          title={`Inherit device settings (currently ${systemTheme})`}
        >
          <Laptop size={17} />
          <span>System ({systemTheme === 'dark' ? 'Dark' : 'Light'})</span>
        </button>
      </div>
    );
  }

  // Dropdown variant (standard for top navbar / header)
  return (
    <div className={`theme-switcher-wrapper ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="theme-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Current theme: ${currentLabel}. Click to switch theme.`}
        title={`Theme: ${currentLabel} (Click to switch)`}
      >
        <span className="theme-current-icon">
          <ActiveIcon size={18} />
        </span>
        <span className="theme-btn-label">{currentLabel}</span>
        <ChevronDown size={14} className={`theme-chevron ${isOpen ? 'rotated' : ''}`} />
      </button>

      {isOpen && (
        <div className="theme-dropdown-card" role="listbox" aria-label="Theme options">
          <div className="theme-dropdown-header">
            <span>APPEARANCE</span>
          </div>

          {/* Light Mode Option */}
          <button
            type="button"
            role="option"
            aria-selected={themePreference === 'light'}
            className={`theme-option-row ${themePreference === 'light' ? 'selected' : ''}`}
            onClick={() => {
              setThemePreference('light');
              setIsOpen(false);
            }}
          >
            <div className="theme-option-left">
              <div className="theme-icon-badge light-badge">
                <Sun size={16} />
              </div>
              <div className="theme-option-text">
                <span className="theme-option-name">Light</span>
                <span className="theme-option-sub">Bright, crisp background</span>
              </div>
            </div>
            {themePreference === 'light' && <Check size={16} className="theme-check-icon" />}
          </button>

          {/* Dark Mode Option */}
          <button
            type="button"
            role="option"
            aria-selected={themePreference === 'dark'}
            className={`theme-option-row ${themePreference === 'dark' ? 'selected' : ''}`}
            onClick={() => {
              setThemePreference('dark');
              setIsOpen(false);
            }}
          >
            <div className="theme-option-left">
              <div className="theme-icon-badge dark-badge">
                <Moon size={16} />
              </div>
              <div className="theme-option-text">
                <span className="theme-option-name">Dark</span>
                <span className="theme-option-sub">Sleek, low-light canvas</span>
              </div>
            </div>
            {themePreference === 'dark' && <Check size={16} className="theme-check-icon" />}
          </button>

          {/* System Settings Option */}
          <button
            type="button"
            role="option"
            aria-selected={themePreference === 'system'}
            className={`theme-option-row ${themePreference === 'system' ? 'selected' : ''}`}
            onClick={() => {
              setThemePreference('system');
              setIsOpen(false);
            }}
          >
            <div className="theme-option-left">
              <div className="theme-icon-badge system-badge">
                <Laptop size={16} />
              </div>
              <div className="theme-option-text">
                <span className="theme-option-name">System</span>
                <span className="theme-option-sub">
                  Inherit device ({systemTheme === 'dark' ? '🌙 Dark' : '☀️ Light'})
                </span>
              </div>
            </div>
            {themePreference === 'system' && <Check size={16} className="theme-check-icon" />}
          </button>
        </div>
      )}
    </div>
  );
}
