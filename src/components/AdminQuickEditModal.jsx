'use client';

import React, { useState, useEffect } from 'react';
import { useAdminContent } from '../context/AdminContentContext';
import { X, Save, RotateCcw, Check, Sparkles, AlertCircle, Edit3 } from 'lucide-react';

export default function AdminQuickEditModal() {
  const { activeEditItem, closeQuickEdit, updateQuestion, updateLesson, updateUnit, updateFlashcard, updateCulture, updateCbt, resetItem } = useAdminContent();

  const [formData, setFormData] = useState({});
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (activeEditItem?.data) {
      setFormData({ ...activeEditItem.data });
      setSaveSuccess(false);
    }
  }, [activeEditItem]);

  if (!activeEditItem) return null;

  const { type, id, langId } = activeEditItem;

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOptionChange = (idx, value) => {
    const nextOptions = [...(formData.options || [])];
    nextOptions[idx] = value;
    setFormData(prev => ({ ...prev, options: nextOptions }));
  };

  const addOption = () => {
    setFormData(prev => ({ ...prev, options: [...(prev.options || []), 'New Option'] }));
  };

  const removeOption = (idx) => {
    setFormData(prev => ({
      ...prev,
      options: (prev.options || []).filter((_, i) => i !== idx)
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (type === 'question') {
      updateQuestion(id, formData);
    } else if (type === 'lesson') {
      updateLesson(id, formData);
    } else if (type === 'unit') {
      updateUnit(id, formData);
    } else if (type === 'flashcard') {
      updateFlashcard(id, formData);
    } else if (type === 'culture') {
      updateCulture(id, formData);
    } else if (type === 'cbt') {
      updateCbt(id, formData);
    }

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      closeQuickEdit();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Reset this item to default content?')) {
      resetItem(type === 'question' ? 'questions' : type === 'lesson' ? 'lessons' : type === 'unit' ? 'units' : type === 'flashcard' ? 'flashcards' : type === 'culture' ? 'culture' : 'cbt', id);
      closeQuickEdit();
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={closeQuickEdit} role="dialog" aria-modal="true">
      <div className="admin-modal-card" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="admin-modal-header">
          <div className="admin-modal-badge">
            <Edit3 size={15} />
            <span>Admin Editor · {type.toUpperCase()}</span>
          </div>
          <button className="admin-modal-close" onClick={closeQuickEdit} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <p className="admin-modal-sub">
          Editing <strong>ID: {id}</strong> {langId ? `(${langId.toUpperCase()})` : ''}. Changes take effect immediately across the site.
        </p>

        {saveSuccess && (
          <div className="admin-save-banner">
            <Check size={16} />
            <span>Saved successfully! Changes are live on the frontend.</span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSave} className="admin-form-body">
          {/* QUESTION OR CBT EDITOR */}
          {(type === 'question' || type === 'cbt') && (
            <>
              <div className="admin-field-group">
                <label>Question Prompt</label>
                <textarea
                  rows={3}
                  value={formData.prompt || ''}
                  onChange={e => handleFieldChange('prompt', e.target.value)}
                  required
                />
              </div>

              {formData.options && (
                <div className="admin-field-group">
                  <div className="admin-options-header">
                    <label>Multiple Choice Options</label>
                    <button type="button" onClick={addOption} className="admin-add-opt-btn">+ Add Option</button>
                  </div>
                  {formData.options.map((opt, idx) => (
                    <div key={idx} className="admin-opt-row">
                      <input
                        type="text"
                        value={opt}
                        onChange={e => handleOptionChange(idx, e.target.value)}
                        placeholder={`Option ${idx + 1}`}
                      />
                      <button 
                        type="button" 
                        onClick={() => removeOption(idx)} 
                        className="admin-opt-del-btn" 
                        title="Delete option"
                        disabled={formData.options.length <= 2}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="admin-field-group">
                <label>Correct Answer</label>
                <input
                  type="text"
                  value={formData.correctAnswer || ''}
                  onChange={e => handleFieldChange('correctAnswer', e.target.value)}
                  required
                />
              </div>

              <div className="admin-field-group">
                <label>Explanation / Linguistic Notes</label>
                <textarea
                  rows={2}
                  value={formData.explanation || ''}
                  onChange={e => handleFieldChange('explanation', e.target.value)}
                />
              </div>

              {formData.sentence !== undefined && (
                <div className="admin-field-group">
                  <label>Fill-in Sentence</label>
                  <input
                    type="text"
                    value={formData.sentence || ''}
                    onChange={e => handleFieldChange('sentence', e.target.value)}
                  />
                </div>
              )}

              {formData.missingWord !== undefined && (
                <div className="admin-field-group">
                  <label>Missing Word</label>
                  <input
                    type="text"
                    value={formData.missingWord || ''}
                    onChange={e => handleFieldChange('missingWord', e.target.value)}
                  />
                </div>
              )}

              {formData.audioText !== undefined && (
                <div className="admin-field-group">
                  <label>Audio Prompt Text</label>
                  <input
                    type="text"
                    value={formData.audioText || ''}
                    onChange={e => handleFieldChange('audioText', e.target.value)}
                  />
                </div>
              )}
            </>
          )}

          {/* LESSON EDITOR */}
          {type === 'lesson' && (
            <>
              <div className="admin-field-group">
                <label>Lesson Title</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={e => handleFieldChange('title', e.target.value)}
                  required
                />
              </div>
              <div className="admin-field-group">
                <label>Lesson Description</label>
                <textarea
                  rows={3}
                  value={formData.description || ''}
                  onChange={e => handleFieldChange('description', e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* UNIT EDITOR */}
          {type === 'unit' && (
            <>
              <div className="admin-field-group">
                <label>Unit Title</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={e => handleFieldChange('title', e.target.value)}
                  required
                />
              </div>
              <div className="admin-field-group">
                <label>Unit Subtitle / CEFR Level</label>
                <input
                  type="text"
                  value={formData.subtitle || ''}
                  onChange={e => handleFieldChange('subtitle', e.target.value)}
                />
              </div>
              <div className="admin-field-group">
                <label>Unit Description</label>
                <textarea
                  rows={3}
                  value={formData.description || ''}
                  onChange={e => handleFieldChange('description', e.target.value)}
                />
              </div>
            </>
          )}

          {/* FLASHCARD EDITOR */}
          {type === 'flashcard' && (
            <>
              <div className="admin-field-group">
                <label>Card Front (Target Word / Phrase)</label>
                <input
                  type="text"
                  value={formData.front || ''}
                  onChange={e => handleFieldChange('front', e.target.value)}
                  required
                />
              </div>
              <div className="admin-field-group">
                <label>Card Back (English Translation)</label>
                <input
                  type="text"
                  value={formData.back || ''}
                  onChange={e => handleFieldChange('back', e.target.value)}
                  required
                />
              </div>
              <div className="admin-field-group">
                <label>Phonetic Pronunciation Guide</label>
                <input
                  type="text"
                  value={formData.phonetic || ''}
                  onChange={e => handleFieldChange('phonetic', e.target.value)}
                />
              </div>
              <div className="admin-field-group">
                <label>Example Sentence</label>
                <textarea
                  rows={2}
                  value={formData.example || ''}
                  onChange={e => handleFieldChange('example', e.target.value)}
                />
              </div>
            </>
          )}

          {/* CULTURE VAULT EDITOR */}
          {type === 'culture' && (
            <>
              <div className="admin-field-group">
                <label>Title / Proverb</label>
                <input
                  type="text"
                  value={formData.title || formData.proverb || ''}
                  onChange={e => {
                    handleFieldChange('title', e.target.value);
                    if (formData.proverb !== undefined) handleFieldChange('proverb', e.target.value);
                  }}
                  required
                />
              </div>
              <div className="admin-field-group">
                <label>Meaning / Translation</label>
                <textarea
                  rows={2}
                  value={formData.meaning || ''}
                  onChange={e => handleFieldChange('meaning', e.target.value)}
                  required
                />
              </div>
              <div className="admin-field-group">
                <label>Cultural Context / Etiquette Advice</label>
                <textarea
                  rows={3}
                  value={formData.context || formData.description || ''}
                  onChange={e => {
                    handleFieldChange('context', e.target.value);
                    handleFieldChange('description', e.target.value);
                  }}
                />
              </div>
            </>
          )}

          {/* Actions */}
          <div className="admin-modal-actions">
            <button type="button" onClick={handleReset} className="admin-reset-btn" title="Revert to default content">
              <RotateCcw size={15} />
              <span>Reset</span>
            </button>
            <div className="admin-modal-right-actions">
              <button type="button" onClick={closeQuickEdit} className="admin-cancel-btn">
                Cancel
              </button>
              <button type="submit" className="admin-save-btn">
                <Save size={15} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
