'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useAdminContent } from '../context/AdminContentContext';
import { Shield, Edit3, Eye, Sliders, ChevronDown, ChevronUp, CheckCircle, RefreshCw } from 'lucide-react';

export default function AdminFloatingToolbar() {
  const router = useRouter();
  const { user } = useAuth();
  const { isAdmin, adminEditMode, toggleAdminEditMode, syncStatus } = useAdminContent();
  const [collapsed, setCollapsed] = useState(false);

  if (!isAdmin) return null;

  return (
    <aside 
      className={`admin-floating-dock ${collapsed ? 'collapsed' : ''}`}
      aria-label="Administrator Content Management Controls"
    >
      <div className="admin-dock-header">
        <div className="admin-dock-title" onClick={() => setCollapsed(!collapsed)}>
          <span className="admin-crown-badge">👑</span>
          <span className="admin-title-text">Admin CMS</span>
          {syncStatus === 'saving' && <RefreshCw size={12} className="spin-icon" />}
          {syncStatus === 'synced' && <CheckCircle size={12} style={{ color: '#10b981' }} />}
        </div>
        <button 
          className="admin-collapse-toggle" 
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Expand Admin Dock' : 'Collapse Admin Dock'}
        >
          {collapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {!collapsed && (
        <div className="admin-dock-content">
          <p className="admin-logged-user">
            Logged in: <strong>{user?.email}</strong>
          </p>
          {adminEditMode && (
            <p style={{ fontSize: '0.72rem', color: '#38bdf8', margin: '4px 0 8px', fontWeight: 600, lineHeight: 1.3 }}>
              ✨ Direct edit active: click any text on page to edit & save in-place!
            </p>
          )}

          <div className="admin-dock-actions">
            <button
              type="button"
              className={`admin-mode-pill ${adminEditMode ? 'active' : ''}`}
              onClick={toggleAdminEditMode}
              title="Toggle in-page edit badges on lessons and questions"
            >
              {adminEditMode ? <Eye size={14} /> : <Edit3 size={14} />}
              <span>{adminEditMode ? 'Edit Mode: ON' : 'Edit Mode: OFF'}</span>
            </button>

            <button
              type="button"
              className="admin-dashboard-link"
              onClick={() => router.push('/admin')}
              title="Open Full Content Management System"
            >
              <Sliders size={14} />
              <span>Full CMS</span>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
