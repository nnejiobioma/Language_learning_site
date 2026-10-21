'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAdminContent } from '../context/AdminContentContext';
import { Check, X, Edit3 } from 'lucide-react';

export default function InlineEditableText({
  value = '',
  onSave,
  tagName = 'span',
  multiline = false,
  className = '',
  style = {},
  placeholder = 'Click to edit...',
  fieldLabel = '',
  children
}) {
  const { isAdmin, adminEditMode } = useAdminContent();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value || '');
  const [justSaved, setJustSaved] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setText(value || '');
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (typeof inputRef.current.select === 'function') {
        inputRef.current.select();
      }
    }
  }, [isEditing]);

  const canEdit = isAdmin && adminEditMode;

  if (!canEdit && !isEditing) {
    const Tag = tagName;
    return (
      <Tag className={className} style={style}>
        {children || value}
      </Tag>
    );
  }

  const handleStartEditing = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setText(value || '');
    setIsEditing(true);
  };

  const handleSave = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const trimmed = text.trim();
    if (trimmed !== value) {
      onSave(trimmed);
      setJustSaved(true);
      setTimeout(() => setJustSaved(false), 1800);
    }
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setText(value || '');
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!multiline || e.ctrlKey || e.metaKey) {
        handleSave(e);
      }
    } else if (e.key === 'Escape') {
      handleCancel(e);
    }
  };

  const Tag = tagName;

  if (isEditing) {
    return (
      <div 
        className="inline-edit-active-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'inline-block', width: '100%', position: 'relative', margin: '4px 0' }}
      >
        {multiline ? (
          <textarea
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="inline-edit-textarea"
            rows={Math.max(2, Math.min(8, text.split('\n').length + 1))}
            placeholder={placeholder}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="inline-edit-input"
            placeholder={placeholder}
          />
        )}
        <div className="inline-edit-actions-bar">
          <button 
            type="button" 
            className="inline-edit-save-btn" 
            onClick={handleSave}
            title="Save changes (Enter)"
          >
            <Check size={14} />
            <span>Save</span>
          </button>
          <button 
            type="button" 
            className="inline-edit-cancel-btn" 
            onClick={handleCancel}
            title="Cancel (Esc)"
          >
            <X size={14} />
            <span>Cancel</span>
          </button>
          {multiline && <span className="inline-edit-hint">Ctrl+Enter to save</span>}
        </div>
      </div>
    );
  }

  return (
    <Tag
      className={`inline-editable-target ${className} ${justSaved ? 'just-saved' : ''}`}
      style={{
        ...style,
        cursor: 'pointer',
        position: 'relative'
      }}
      onClick={handleStartEditing}
      title={fieldLabel ? `Click to edit ${fieldLabel}` : 'Click to edit text directly'}
    >
      {children || value || <span style={{ opacity: 0.5, fontStyle: 'italic' }}>{placeholder}</span>}
      <span className="inline-edit-indicator" aria-hidden="true">
        <Edit3 size={12} />
        {fieldLabel && <span className="inline-edit-label">{fieldLabel}</span>}
      </span>
      {justSaved && (
        <span className="inline-edit-saved-badge">✓ Saved</span>
      )}
    </Tag>
  );
}
