'use client';

import React from 'react';

// Fun built-in avatars: an emoji on a coloured gradient.
export const AVATARS = [
  { id: 'fox', emoji: '🦊', bg: 'linear-gradient(135deg,#f97316,#fbbf24)' },
  { id: 'panda', emoji: '🐼', bg: 'linear-gradient(135deg,#64748b,#cbd5e1)' },
  { id: 'lion', emoji: '🦁', bg: 'linear-gradient(135deg,#f59e0b,#fde68a)' },
  { id: 'owl', emoji: '🦉', bg: 'linear-gradient(135deg,#7c3aed,#c4b5fd)' },
  { id: 'octopus', emoji: '🐙', bg: 'linear-gradient(135deg,#ec4899,#f9a8d4)' },
  { id: 'frog', emoji: '🐸', bg: 'linear-gradient(135deg,#10b981,#6ee7b7)' },
  { id: 'unicorn', emoji: '🦄', bg: 'linear-gradient(135deg,#8b5cf6,#f0abfc)' },
  { id: 'robot', emoji: '🤖', bg: 'linear-gradient(135deg,#0ea5e9,#7dd3fc)' },
  { id: 'rocket', emoji: '🚀', bg: 'linear-gradient(135deg,#ef4444,#fca5a5)' },
  { id: 'cat', emoji: '🐱', bg: 'linear-gradient(135deg,#14b8a6,#99f6e4)' },
  { id: 'dragon', emoji: '🐲', bg: 'linear-gradient(135deg,#16a34a,#bef264)' },
  { id: 'alien', emoji: '👽', bg: 'linear-gradient(135deg,#4f46e5,#a5b4fc)' }
];

export function getAvatar(id) {
  return AVATARS.find((a) => a.id === id) || AVATARS[0];
}

export default function Avatar({ profile, size = 36 }) {
  const style = {
    width: size,
    height: size,
    fontSize: size * 0.55
  };

  if (profile?.photoURL) {
    return (
      <img
        src={profile.photoURL}
        alt=""
        className="fl-avatar fl-avatar-photo"
        style={style}
      />
    );
  }

  const avatar = getAvatar(profile?.avatar);
  return (
    <span className="fl-avatar" style={{ ...style, background: avatar.bg }} aria-hidden="true">
      {avatar.emoji}
    </span>
  );
}
