import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { db, isFirebaseConfigured, doc, setDoc } from '../../../lib/firebase';
import { sendContactEmail, RECIPIENT_EMAILS } from '../../../lib/email';

const MESSAGES_FILE = path.join(process.cwd(), 'src', 'data', 'contact_messages.json');

// Helper to read saved messages safely
function getSavedMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const content = fs.readFileSync(MESSAGES_FILE, 'utf8');
      return JSON.parse(content || '[]');
    }
  } catch (err) {
    console.error('Error reading contact messages file:', err);
  }
  return [];
}

// Helper to save messages safely
function saveMessages(list) {
  try {
    const dir = path.dirname(MESSAGES_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing contact messages file:', err);
  }
}

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * GET /api/contact
 * Diagnostic / status endpoint
 */
export async function GET() {
  const messages = getSavedMessages();

  return NextResponse.json({
    status: 'online',
    service: 'FiksLingo Contact & Inquiries Service',
    endpoint: '/api/contact',
    recipients: RECIPIENT_EMAILS,
    totalMessagesLogged: messages.length,
    description: 'Direct contact routing to nnejieb@gmail.com and nneji.obioma@gmail.com'
  }, { status: 200 });
}

/**
 * POST /api/contact
 * Handles contact requests and dispatches emails to nnejieb@gmail.com & nneji.obioma@gmail.com
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
          error: 'Invalid request body. Expected JSON payload with name, email, subject, and message.' 
        }, 
        { status: 400 }
      );
    }

    const { 
      name, 
      email, 
      subject, 
      message, 
      category = 'General Inquiry', 
      language = 'All Languages / General',
      phone = '' 
    } = body || {};

    // Validate Name
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid full name (at least 2 characters).' 
        }, 
        { status: 400 }
      );
    }

    // Validate Email
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid email address so we can reply to you.' 
        }, 
        { status: 400 }
      );
    }

    // Validate Subject
    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a subject line (at least 3 characters).' 
        }, 
        { status: 400 }
      );
    }

    // Validate Message
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a message with at least 10 characters.' 
        }, 
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();
    const cleanCategory = String(category).trim() || 'General Inquiry';
    const cleanLanguage = String(language).trim() || 'All Languages / General';
    const cleanPhone = String(phone).trim();

    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const createdAt = new Date().toISOString();

    // Send email dispatch via Nodemailer to nnejieb@gmail.com and nneji.obioma@gmail.com
    const emailResult = await sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      category: cleanCategory,
      language: cleanLanguage,
      phone: cleanPhone
    });

    const contactRecord = {
      id: messageId,
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      subject: cleanSubject,
      message: cleanMessage,
      category: cleanCategory,
      language: cleanLanguage,
      recipients: RECIPIENT_EMAILS,
      createdAt,
      emailStatus: emailResult.sent ? 'sent' : (emailResult.simulated ? 'queued_local' : 'failed'),
      deliveryDetails: emailResult
    };

    // 1. Store in local JSON data file
    const messages = getSavedMessages();
    messages.unshift(contactRecord);
    saveMessages(messages);

    // 2. Mirror to Firestore if configured
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, 'contact_messages', messageId), contactRecord, { merge: true });
      } catch (cloudErr) {
        console.warn('Could not mirror contact message to Firestore (using local storage):', cloudErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${cleanName}! Your message has been received and routed to our team (${RECIPIENT_EMAILS.join(', ')}). We will respond to ${cleanEmail} shortly.`,
        id: messageId,
        recipients: RECIPIENT_EMAILS,
        createdAt,
        emailDelivery: emailResult
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected server error occurred while sending your message. Please try again or email us directly at nnejieb@gmail.com and nneji.obioma@gmail.com.' 
      }, 
      { status: 500 }
    );
  }
}
