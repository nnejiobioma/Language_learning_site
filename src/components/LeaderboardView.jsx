'use client';

import React from 'react';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';
import { LEADERBOARD_DATA } from '../data/languages';
import { 
  Trophy, 
  Crown, 
  Flame, 
  Sparkles, 
  Medal, 
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function LeaderboardView() {
  const { xp, streak, currentLanguage } = useGame();
  const { user } = useAuth();

  // Insert current user into leaderboard list dynamically based on their XP
  const currentUserEntry = {
    rank: 0,
    name: user?.displayName || 'You (Explorer)',
    avatar: '⚡',
    xp: xp,
    streak: streak,
    language: currentLanguage === 'pidgin' ? 'Naija Pidgin' : 'Yoruba',
    isCurrentUser: true,
    tier: xp > 1000 ? 'Diamond' : xp > 500 ? 'Gold' : 'Silver'
  };

  const combinedList = [...LEADERBOARD_DATA, currentUserEntry]
    .sort((a, b) => b.xp - a.xp)
    .map((item, idx) => ({ ...item, rank: idx + 1 }));

  const top3 = combinedList.slice(0, 3);
  const remainingList = combinedList.slice(3);

  return (
    <div className="leaderboard-container">
      {/* Header */}
      <div className="leaderboard-header">
        <div className="league-badge-pill">
          <Trophy size={16} />
          <span>Premier African Linguists League</span>
        </div>
        <h2 className="leaderboard-title">Weekly Champions Leaderboard</h2>
        <p className="leaderboard-subtitle">
          Complete daily lessons, maintain your streaks, and climb up the league ranks!
        </p>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="podium-row">
        {/* 2nd Place */}
        {top3[1] && (
          <div className="podium-card rank-2">
            <div className="podium-crown silver">
              <Medal size={24} />
            </div>
            <div className="podium-avatar">{top3[1].avatar}</div>
            <span className="podium-name">{top3[1].name}</span>
            <span className="podium-xp">{top3[1].xp} XP</span>
            <div className="podium-stand stand-2">
              <span className="podium-rank-num">#2</span>
            </div>
          </div>
        )}

        {/* 1st Place */}
        {top3[0] && (
          <div className="podium-card rank-1">
            <div className="podium-crown gold">
              <Crown size={32} />
            </div>
            <div className="podium-avatar large">{top3[0].avatar}</div>
            <span className="podium-name highlight">{top3[0].name}</span>
            <span className="podium-xp gold-xp">{top3[0].xp} XP</span>
            <div className="podium-stand stand-1">
              <span className="podium-rank-num">#1</span>
            </div>
          </div>
        )}

        {/* 3rd Place */}
        {top3[2] && (
          <div className="podium-card rank-3">
            <div className="podium-crown bronze">
              <Medal size={24} />
            </div>
            <div className="podium-avatar">{top3[2].avatar}</div>
            <span className="podium-name">{top3[2].name}</span>
            <span className="podium-xp">{top3[2].xp} XP</span>
            <div className="podium-stand stand-3">
              <span className="podium-rank-num">#3</span>
            </div>
          </div>
        )}
      </div>

      {/* Leaderboard Table / Rows */}
      <div className="leaderboard-table-card">
        <div className="table-header-row">
          <span className="th-cell rank-col">Rank</span>
          <span className="th-cell learner-col">Learner</span>
          <span className="th-cell lang-col">Focus Language</span>
          <span className="th-cell streak-col">Streak</span>
          <span className="th-cell xp-col">Total XP</span>
        </div>

        <div className="table-body">
          {combinedList.map((entry) => (
            <div 
              key={entry.rank} 
              className={`table-row ${entry.isCurrentUser ? 'current-user-row' : ''}`}
            >
              <div className="td-cell rank-col">
                <span className={`rank-number-badge rank-${entry.rank}`}>
                  {entry.rank <= 3 ? (entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉') : `#${entry.rank}`}
                </span>
              </div>

              <div className="td-cell learner-col">
                <span className="table-avatar">{entry.avatar}</span>
                <div className="learner-names">
                  <span className="learner-title">{entry.name}</span>
                  {entry.isCurrentUser && <span className="you-pill">You</span>}
                </div>
              </div>

              <div className="td-cell lang-col">
                <span className="lang-tag-pill">{entry.language}</span>
              </div>

              <div className="td-cell streak-col">
                <div className="table-streak-wrap">
                  <Flame size={16} className="flame-orange" />
                  <span>{entry.streak} days</span>
                </div>
              </div>

              <div className="td-cell xp-col">
                <span className="table-xp-val">{entry.xp} XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
