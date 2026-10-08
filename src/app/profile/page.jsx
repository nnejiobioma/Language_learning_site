'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Camera, Trash2, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LANGUAGES } from '../../data/languages';
import Avatar, { AVATARS } from '../../components/Avatar';
import './profile.css';

const EMPTY_FORM = {
  displayName: '',
  bio: '',
  contactEmail: '',
  phone: '',
  dateOfBirth: '',
  nativeLanguage: '',
  dailyGoal: 20,
  street: '',
  city: '',
  region: '',
  postalCode: '',
  country: ''
};

// Shrink a chosen photo to a small square JPEG so it can be stored with the profile.
function resizeImage(file, size = 256) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read the image.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('That file is not a valid image.'));
      img.onload = () => {
        const side = Math.min(img.width, img.height);
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        canvas.getContext('2d').drawImage(
          img,
          (img.width - side) / 2,
          (img.height - side) / 2,
          side,
          side,
          0,
          0,
          size,
          size
        );
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

export default function ProfilePage() {
  const router = useRouter();
  const { user, profile, loading, saveProfileData } = useAuth();
  const fileRef = useRef(null);

  const [form, setForm] = useState(EMPTY_FORM);
  const [avatar, setAvatar] = useState('fox');
  const [photoURL, setPhotoURL] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.replace('/signup');
  }, [loading, user, router]);

  // Fill the form once the saved profile is available.
  useEffect(() => {
    if (loading || !user || loaded) return;
    setForm({
      ...EMPTY_FORM,
      ...Object.fromEntries(
        Object.keys(EMPTY_FORM).map((k) => [k, profile?.[k] ?? EMPTY_FORM[k]])
      ),
      contactEmail: profile?.contactEmail || user.email || ''
    });
    setAvatar(profile?.avatar || 'fox');
    setPhotoURL(profile?.photoURL || null);
    setLoaded(true);
  }, [loading, user, profile, loaded]);

  if (loading || !user) {
    return (
      <div className="app-shell" aria-busy="true">
        <p className="auth-gate-message">Loading your profile…</p>
      </div>
    );
  }

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handlePhoto = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please choose an image file.' });
      return;
    }
    try {
      setPhotoURL(await resizeImage(file));
      setMessage(null);
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const name = form.displayName.trim();
    if (!name) {
      setMessage({ type: 'error', text: 'Please enter a display name.' });
      return;
    }
    if (form.contactEmail && !/^\S+@\S+\.\S+$/.test(form.contactEmail)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (form.phone && !/^[+()\d\s-]{6,20}$/.test(form.phone)) {
      setMessage({ type: 'error', text: 'Please enter a valid phone number.' });
      return;
    }
    setSaving(true);
    setMessage(null);
    try {
      await saveProfileData({
        ...form,
        displayName: name,
        dailyGoal: Number(form.dailyGoal) || 20,
        avatar,
        photoURL: photoURL || null
      });
      setMessage({ type: 'success', text: 'Profile saved!' });
    } catch {
      setMessage({ type: 'error', text: 'Could not save your profile. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const preview = { avatar, photoURL };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <Link href="/learn" className="profile-back">
          <ArrowLeft size={16} /> Back to lessons
        </Link>

        <h1 className="profile-title">My Profile</h1>

        <form onSubmit={handleSave} className="profile-form" noValidate>
          <section className="profile-card">
            <h2>Picture &amp; avatar</h2>
            <div className="profile-avatar-row">
              <Avatar profile={preview} size={96} />
              <div className="profile-avatar-actions">
                <button type="button" className="profile-btn" onClick={() => fileRef.current?.click()}>
                  <Camera size={16} /> Upload photo
                </button>
                {photoURL && (
                  <button type="button" className="profile-btn ghost" onClick={() => setPhotoURL(null)}>
                    <Trash2 size={16} /> Remove photo
                  </button>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handlePhoto}
                  id="profile-photo-input"
                />
              </div>
            </div>

            <p className="profile-hint">Or pick a fun avatar{photoURL ? ' (remove your photo to use it)' : ''}:</p>
            <div className="avatar-grid" role="radiogroup" aria-label="Choose an avatar">
              {AVATARS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  role="radio"
                  aria-checked={avatar === a.id}
                  aria-label={a.id}
                  className={`avatar-choice ${avatar === a.id ? 'selected' : ''}`}
                  style={{ background: a.bg }}
                  onClick={() => setAvatar(a.id)}
                >
                  {a.emoji}
                  {avatar === a.id && <Check size={14} className="avatar-check" />}
                </button>
              ))}
            </div>
          </section>

          <section className="profile-card">
            <h2>About you</h2>
            <div className="profile-grid">
              <label className="profile-field">
                Display name
                <input value={form.displayName} onChange={update('displayName')} maxLength={40} />
              </label>
              <label className="profile-field">
                Date of birth
                <input type="date" value={form.dateOfBirth} onChange={update('dateOfBirth')} />
              </label>
              <label className="profile-field">
                Native language
                <select value={form.nativeLanguage} onChange={update('nativeLanguage')}>
                  <option value="">Select…</option>
                  {Object.values(LANGUAGES).map((l) => (
                    <option key={l.id} value={l.name}>{l.name}</option>
                  ))}
                  <option value="English">English</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="profile-field">
                Daily goal
                <select value={form.dailyGoal} onChange={update('dailyGoal')}>
                  <option value={10}>Casual — 10 XP</option>
                  <option value={20}>Regular — 20 XP</option>
                  <option value={30}>Serious — 30 XP</option>
                  <option value={50}>Intense — 50 XP</option>
                </select>
              </label>
              <label className="profile-field full">
                Bio
                <textarea rows={3} maxLength={200} value={form.bio} onChange={update('bio')} placeholder="Tell other learners about yourself" />
              </label>
            </div>
          </section>

          <section className="profile-card">
            <h2>Contact details</h2>
            <div className="profile-grid">
              <label className="profile-field">
                Login email
                <input value={user.email || ''} disabled />
              </label>
              <label className="profile-field">
                Contact email
                <input type="email" value={form.contactEmail} onChange={update('contactEmail')} />
              </label>
              <label className="profile-field">
                Phone number
                <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+358 40 123 4567" />
              </label>
            </div>
          </section>

          <section className="profile-card">
            <h2>Home address</h2>
            <div className="profile-grid">
              <label className="profile-field full">
                Street address
                <input value={form.street} onChange={update('street')} />
              </label>
              <label className="profile-field">
                City
                <input value={form.city} onChange={update('city')} />
              </label>
              <label className="profile-field">
                State / region
                <input value={form.region} onChange={update('region')} />
              </label>
              <label className="profile-field">
                Postal code
                <input value={form.postalCode} onChange={update('postalCode')} />
              </label>
              <label className="profile-field">
                Country
                <input value={form.country} onChange={update('country')} />
              </label>
            </div>
          </section>

          {message && (
            <p className={`profile-message ${message.type}`} role="status">{message.text}</p>
          )}

          <div className="profile-actions">
            <Link href="/learn" className="profile-btn ghost">Cancel</Link>
            <button type="submit" className="profile-btn primary" disabled={saving} id="profile-save-btn">
              {saving ? 'Saving…' : 'Save changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
