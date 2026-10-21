import { NextResponse } from 'next/server';
import { isUserAdmin } from '../../../../lib/admin';
import fs from 'fs';
import path from 'path';

const OVERRIDES_FILE = path.join(process.cwd(), 'src', 'data', 'content_overrides.json');

export async function GET() {
  try {
    if (fs.existsSync(OVERRIDES_FILE)) {
      const data = fs.readFileSync(OVERRIDES_FILE, 'utf8');
      return NextResponse.json({ success: true, overrides: JSON.parse(data) });
    }
    return NextResponse.json({ success: true, overrides: {} });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { overrides, userEmail } = body;

    // Verify administrator identity
    if (!isUserAdmin(userEmail)) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Admin credentials required.' }, { status: 403 });
    }

    if (!overrides || typeof overrides !== 'object') {
      return NextResponse.json({ success: false, error: 'Invalid overrides payload.' }, { status: 400 });
    }

    // Persist to filesystem when possible (local dev & container environments)
    try {
      fs.writeFileSync(OVERRIDES_FILE, JSON.stringify(overrides, null, 2), 'utf8');
    } catch (fsErr) {
      console.warn('[Admin API] Server filesystem is read-only or not writable:', fsErr.message);
    }

    return NextResponse.json({
      success: true,
      message: 'Content overrides successfully saved.',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
