import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const CMS_DIR = path.join(process.cwd(), 'src', 'data', 'cms');

function readJsonSafe(filePath, fallback = null) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (err) {
    console.warn(`[CMS Data API] Failed to read ${filePath}:`, err.message);
  }
  return fallback;
}

export async function GET() {
  try {
    const siteSettings = readJsonSafe(path.join(CMS_DIR, 'site_settings.json'), {});
    const aboutPage = readJsonSafe(path.join(CMS_DIR, 'about.json'), {});
    const leaderboard = readJsonSafe(path.join(CMS_DIR, 'leaderboard.json'), { entries: [] });
    const languagesMeta = readJsonSafe(path.join(CMS_DIR, 'languages_meta.json'), { languages: [] });

    const curriculaDir = path.join(CMS_DIR, 'curricula');
    const curricula = {};
    if (fs.existsSync(curriculaDir)) {
      const files = fs.readdirSync(curriculaDir);
      for (const file of files) {
        if (file.endsWith('.json')) {
          const langId = file.replace(/\.json$/i, '');
          const data = readJsonSafe(path.join(curriculaDir, file), null);
          if (data) {
            curricula[langId] = data;
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      siteSettings,
      aboutPage,
      leaderboard: leaderboard.entries || [],
      languagesMeta: languagesMeta.languages || [],
      curricula
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

