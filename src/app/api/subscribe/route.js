import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { db, isFirebaseConfigured, doc, setDoc, getDoc, collection, getDocs } from '../../../lib/firebase';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'src', 'data', 'subscribers.json');

// Helper to read subscribers safely
function getSubscribers() {
  try {
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      const content = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8');
      return JSON.parse(content || '[]');
    }
  } catch (err) {
    console.error('Error reading subscribers file:', err);
  }
  return [];
}

// Helper to save subscribers safely
function saveSubscribers(list) {
  try {
    const dir = path.dirname(SUBSCRIBERS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing subscribers file:', err);
  }
}

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  let subscribers = getSubscribers();

  // If Firestore is available, fetch live list
  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(collection(db, 'subscribers'));
      if (!snap.empty) {
        const cloudList = [];
        snap.forEach(docSnap => cloudList.push(docSnap.data()));
        if (cloudList.length > 0) {
          subscribers = cloudList;
        }
      }
    } catch (err) {
      console.warn('Firestore fetch failed in GET /api/subscribe (using local):', err);
    }
  }

  return NextResponse.json({
    status: 'online',
    service: 'FiksLingo Newsletter & Updates Service',
    endpoint: '/api/subscribe',
    totalSubscribers: subscribers.length,
    subscribers: subscribers.map(s => ({
      name: s.name,
      email: s.email,
      source: s.source,
      subscribedAt: s.subscribedAt
    }))
  }, { status: 200 });
}

/**
 * POST /api/subscribe
 * Body: { name: string, email: string, source?: string }
 */
export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid JSON body. Please provide a JSON object with "name" and "email".' 
        }, 
        { status: 400 }
      );
    }

    const { name, email, source = 'website' } = body || {};

    // Validate name
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid name (at least 2 characters).' 
        }, 
        { status: 400 }
      );
    }

    // Validate email
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid email address.' 
        }, 
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const subscribers = getSubscribers();

    // Check if subscriber already exists locally or in Firestore
    let existing = subscribers.find(s => s.email === cleanEmail);
    if (!existing && isFirebaseConfigured && db) {
      try {
        const cloudDoc = await getDoc(doc(db, 'subscribers', cleanEmail));
        if (cloudDoc.exists()) {
          existing = cloudDoc.data();
        }
      } catch (err) {
        // Ignore read errors and proceed
      }
    }

    if (existing) {
      return NextResponse.json(
        {
          success: true,
          message: `Great news, ${cleanName}! You are already subscribed to FiksLingo updates.`,
          alreadySubscribed: true,
          subscriber: existing
        },
        { status: 200 }
      );
    }

    // Create new subscriber record
    const newSubscriber = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      name: cleanName,
      email: cleanEmail,
      source: String(source).trim() || 'website',
      subscribedAt: new Date().toISOString()
    };

    // Store in local JSON data file
    subscribers.unshift(newSubscriber);
    saveSubscribers(subscribers);

    // If Firestore is available, save to cloud collection as well
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, 'subscribers', cleanEmail), newSubscriber, { merge: true });
      } catch (cloudErr) {
        console.warn('Could not mirror subscriber to Firestore (using local storage):', cloudErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: `Welcome aboard, ${cleanName}! You've successfully subscribed to FiksLingo weekly vocabulary and cultural secrets.`,
        subscriber: newSubscriber
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected server error occurred while processing your subscription. Please try again.' 
      }, 
      { status: 500 }
    );
  }
}
