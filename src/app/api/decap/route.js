import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Statically bundled CMS data so serverless environments (/var/task) always have every file available
import siteSettingsJson from '../../../data/cms/site_settings.json';
import aboutJson from '../../../data/cms/about.json';
import contactJson from '../../../data/cms/contact.json';
import leaderboardJson from '../../../data/cms/leaderboard.json';
import languagesMetaJson from '../../../data/cms/languages_meta.json';
import subscribersJson from '../../../data/subscribers.json';
import spanishJson from '../../../data/cms/curricula/spanish.json';
import frenchJson from '../../../data/cms/curricula/french.json';
import germanJson from '../../../data/cms/curricula/german.json';
import japaneseJson from '../../../data/cms/curricula/japanese.json';
import mandarinJson from '../../../data/cms/curricula/mandarin.json';
import pidginJson from '../../../data/cms/curricula/pidgin.json';
import yorubaJson from '../../../data/cms/curricula/yoruba.json';
import portugueseJson from '../../../data/cms/curricula/portuguese.json';
import swedishJson from '../../../data/cms/curricula/swedish.json';
import finnishJson from '../../../data/cms/curricula/finnish.json';
import igboJson from '../../../data/cms/curricula/igbo.json';
import hausaJson from '../../../data/cms/curricula/hausa.json';

const ROOT_DIR = process.cwd();
const GITHUB_REPO = process.env.GITHUB_REPO || 'nnejiobioma/Language_learning_site';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.DECAP_GITHUB_TOKEN || '';
const IS_SERVERLESS = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || ROOT_DIR.startsWith('/var/task'));

const BUNDLED_FILES = {
  'src/data/cms/site_settings.json': siteSettingsJson,
  'src/data/cms/about.json': aboutJson,
  'src/data/cms/contact.json': contactJson,
  'src/data/cms/leaderboard.json': leaderboardJson,
  'src/data/cms/languages_meta.json': languagesMetaJson,
  'src/data/subscribers.json': subscribersJson,
  'src/data/cms/curricula/spanish.json': spanishJson,
  'src/data/cms/curricula/french.json': frenchJson,
  'src/data/cms/curricula/german.json': germanJson,
  'src/data/cms/curricula/japanese.json': japaneseJson,
  'src/data/cms/curricula/mandarin.json': mandarinJson,
  'src/data/cms/curricula/pidgin.json': pidginJson,
  'src/data/cms/curricula/yoruba.json': yorubaJson,
  'src/data/cms/curricula/portuguese.json': portugueseJson,
  'src/data/cms/curricula/swedish.json': swedishJson,
  'src/data/cms/curricula/finnish.json': finnishJson,
  'src/data/cms/curricula/igbo.json': igboJson,
  'src/data/cms/curricula/hausa.json': hausaJson
};

const BUILTIN_MEDIA = [
  'mascot.jpg',
  'spanish_badge.jpg',
  'french_badge.jpg',
  'german_badge.jpg',
  'japanese_badge.jpg',
  'mandarin_badge.jpg',
  'pidgin_badge.jpg',
  'yoruba_badge.jpg',
  'portuguese_badge.jpg',
  'swedish_badge.jpg',
  'finnish_badge.jpg',
  'igbo_badge.jpg',
  'hausa_badge.jpg'
].map((name) => ({
  id: `public/images/${name}`,
  name,
  path: `public/images/${name}`,
  size: 45000,
  displayURL: `/images/${name}`
}));

function normalizeRelPath(relPath = '') {
  return String(relPath).replace(/^[/\\]+/, '').split(path.sep).join('/');
}

function resolveSafePath(relPath = '') {
  const clean = normalizeRelPath(relPath);
  const resolved = path.resolve(/*turbopackIgnore: true*/ ROOT_DIR, clean);
  if (!resolved.startsWith(ROOT_DIR)) {
    throw new Error('Path traversal outside workspace is not allowed.');
  }
  return resolved;
}

async function readEntryContent(relPath) {
  const cleanPath = normalizeRelPath(relPath);

  // 1. On serverless or when GITHUB_TOKEN is set, try reading latest committed version from GitHub first
  if (IS_SERVERLESS || GITHUB_TOKEN) {
    try {
      if (GITHUB_TOKEN) {
        const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${cleanPath}?ref=${encodeURIComponent(GITHUB_BRANCH)}`;
        const res = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.raw+json',
            'X-GitHub-Api-Version': '2022-11-28'
          },
          cache: 'no-store'
        });
        if (res.ok) {
          return await res.text();
        }
      } else {
        const rawUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/${encodeURIComponent(GITHUB_BRANCH)}/${cleanPath}`;
        const res = await fetch(rawUrl, { cache: 'no-store' });
        if (res.ok) {
          return await res.text();
        }
      }
    } catch {
      // Fallback to local or bundled
    }
  }

  // 2. Try reading from local disk (works in local dev)
  try {
    const absFile = resolveSafePath(cleanPath);
    if (fs.existsSync(/*turbopackIgnore: true*/ absFile)) {
      return fs.readFileSync(/*turbopackIgnore: true*/ absFile, 'utf8');
    }
  } catch {
    // Fallback to bundled
  }

  // 3. Fallback to statically bundled JSON
  if (BUNDLED_FILES[cleanPath] !== undefined) {
    return JSON.stringify(BUNDLED_FILES[cleanPath], null, 2);
  }

  return null;
}

async function commitFileToGitHub(relPath, contentBase64, commitMessage) {
  if (!GITHUB_TOKEN) return false;
  const cleanPath = normalizeRelPath(relPath);
  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${cleanPath}`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  let sha = undefined;
  const getRes = await fetch(`${apiUrl}?ref=${encodeURIComponent(GITHUB_BRANCH)}`, {
    headers,
    cache: 'no-store'
  });
  if (getRes.ok) {
    const existing = await getRes.json();
    sha = existing.sha;
  }

  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message: commitMessage || `Update ${cleanPath} via Decap CMS`,
      content: contentBase64,
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {})
    })
  });

  if (!putRes.ok) {
    const errText = await putRes.text();
    throw new Error(`GitHub API commit failed (${putRes.status}): ${errText}`);
  }
  return true;
}

export async function GET() {
  return NextResponse.json({
    repo: 'Language_learning_site',
    publish_modes: ['simple'],
    type: 'local_fs'
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { action, params = {} } = body;

    switch (action) {
      case 'info': {
        return NextResponse.json({
          repo: 'Language_learning_site',
          publish_modes: ['simple'],
          type: 'local_fs'
        });
      }

      case 'entriesByFolder': {
        const { folder, extension } = params;
        const cleanFolder = normalizeRelPath(folder).replace(/\/+$/, '');
        const extSuffix = extension ? `.${extension.toLowerCase()}` : '.json';

        // Collect all candidate paths from both bundled files and local disk
        const candidatePaths = new Set(
          Object.keys(BUNDLED_FILES).filter(
            (k) => k.startsWith(`${cleanFolder}/`) && k.toLowerCase().endsWith(extSuffix)
          )
        );

        try {
          const folderAbs = resolveSafePath(cleanFolder);
          if (fs.existsSync(/*turbopackIgnore: true*/ folderAbs)) {
            const items = fs.readdirSync(/*turbopackIgnore: true*/ folderAbs, { withFileTypes: true });
            for (const item of items) {
              if (item.isFile() && item.name.toLowerCase().endsWith(extSuffix)) {
                candidatePaths.add(`${cleanFolder}/${item.name}`);
              }
            }
          }
        } catch {
          // Serverless environment: rely on candidatePaths
        }

        const nowIso = new Date().toISOString();
        const entries = await Promise.all(
          Array.from(candidatePaths).map(async (relPath) => {
            const data = await readEntryContent(relPath);
            if (data === null) return null;
            return {
              file: {
                path: relPath,
                id: relPath,
                author: 'CMS Admin',
                updatedOn: nowIso
              },
              data
            };
          })
        );

        return NextResponse.json(entries.filter(Boolean));
      }

      case 'entriesByFiles': {
        const { files = [] } = params;
        const nowIso = new Date().toISOString();
        const entries = await Promise.all(
          files.map(async (f) => {
            const relPath = normalizeRelPath(f.path);
            const data = await readEntryContent(relPath);
            if (data === null) return null;
            return {
              file: {
                path: f.path,
                label: f.label,
                id: f.path,
                author: 'CMS Admin',
                updatedOn: nowIso
              },
              data
            };
          })
        );
        return NextResponse.json(entries.filter(Boolean));
      }

      case 'getEntry': {
        const { path: filePath } = params;
        const relPath = normalizeRelPath(filePath);
        const data = await readEntryContent(relPath);
        if (data === null) {
          return NextResponse.json({ error: `Entry not found: ${relPath}` }, { status: 404 });
        }
        return NextResponse.json({
          file: {
            path: filePath,
            id: filePath,
            author: 'CMS Admin',
            updatedOn: new Date().toISOString()
          },
          data
        });
      }

      case 'persistEntry': {
        const { entry, dataFiles = [], assets = [], options = {} } = params;
        const filesToWrite = dataFiles.length > 0 ? dataFiles : entry ? [entry] : [];
        const commitMsg = options.commitMessage || 'Update content via Decap CMS';

        let wroteLocally = false;
        let wroteGitHub = false;

        for (const df of filesToWrite) {
          if (!df || !df.path) continue;
          const cleanPath = normalizeRelPath(df.path);

          // Update in-memory bundle cache for current lambda instance
          try {
            BUNDLED_FILES[cleanPath] = JSON.parse(df.raw);
          } catch {}

          if (!IS_SERVERLESS) {
            try {
              const absFile = resolveSafePath(cleanPath);
              fs.mkdirSync(/*turbopackIgnore: true*/ path.dirname(absFile), { recursive: true });
              fs.writeFileSync(/*turbopackIgnore: true*/ absFile, df.raw, 'utf8');
              wroteLocally = true;
            } catch (fsErr) {
              console.warn('[Decap API] Local write skipped:', fsErr.message);
            }
          }

          if (GITHUB_TOKEN) {
            await commitFileToGitHub(cleanPath, Buffer.from(df.raw, 'utf8').toString('base64'), commitMsg);
            wroteGitHub = true;
          }
        }

        for (const asset of assets) {
          if (!asset || !asset.path) continue;
          const cleanAssetPath = normalizeRelPath(asset.path);
          const buf = Buffer.from(asset.content, asset.encoding || 'base64');

          if (!IS_SERVERLESS) {
            try {
              const absAsset = resolveSafePath(cleanAssetPath);
              fs.mkdirSync(/*turbopackIgnore: true*/ path.dirname(absAsset), { recursive: true });
              fs.writeFileSync(/*turbopackIgnore: true*/ absAsset, buf);
              wroteLocally = true;
            } catch (fsErr) {
              console.warn('[Decap API] Local asset write skipped:', fsErr.message);
            }
          }

          if (GITHUB_TOKEN) {
            await commitFileToGitHub(cleanAssetPath, buf.toString('base64'), commitMsg);
            wroteGitHub = true;
          }
        }

        if (IS_SERVERLESS && !wroteGitHub && !wroteLocally) {
          return NextResponse.json(
            {
              error:
                'To save changes from production (Vercel), add GITHUB_TOKEN to your Vercel Environment Variables with Read & Write Contents access to nnejiobioma/Language_learning_site.'
            },
            { status: 400 }
          );
        }

        return NextResponse.json({ saved: true });
      }

      case 'getMedia': {
        const seenPaths = new Set();
        const mediaFiles = [];

        for (const item of BUILTIN_MEDIA) {
          seenPaths.add(item.path);
          mediaFiles.push(item);
        }

        if (!IS_SERVERLESS) {
          try {
            const { mediaFolder = 'public/images/uploads' } = params;
            const dirsToScan = [resolveSafePath(mediaFolder), resolveSafePath('public/images')];
            for (const scanDir of dirsToScan) {
              if (!fs.existsSync(/*turbopackIgnore: true*/ scanDir)) continue;
              const items = fs.readdirSync(/*turbopackIgnore: true*/ scanDir, { withFileTypes: true });
              for (const item of items) {
                if (!item.isFile() || item.name.startsWith('.')) continue;
                const full = path.join(scanDir, item.name);
                const relPath = normalizeRelPath(path.relative(ROOT_DIR, full));
                if (seenPaths.has(relPath)) continue;
                seenPaths.add(relPath);
                const stat = fs.statSync(/*turbopackIgnore: true*/ full);
                const publicUrl = relPath.startsWith('public/') ? relPath.slice('public'.length) : `/${relPath}`;
                mediaFiles.push({
                  id: relPath,
                  name: item.name,
                  path: relPath,
                  size: stat.size,
                  displayURL: publicUrl
                });
              }
            }
          } catch {
            // Ignore filesystem scan errors in serverless environments
          }
        }

        return NextResponse.json(mediaFiles);
      }

      case 'getMediaFile': {
        const { path: mediaPath } = params;
        const relPath = normalizeRelPath(mediaPath);
        const publicUrl = relPath.startsWith('public/') ? relPath.slice('public'.length) : `/${relPath}`;
        return NextResponse.json({
          id: relPath,
          name: path.basename(relPath),
          path: relPath,
          size: 45000,
          displayURL: publicUrl
        });
      }

      case 'persistMedia': {
        const { asset } = params;
        if (!asset || !asset.path) {
          return NextResponse.json({ error: 'Invalid media asset' }, { status: 400 });
        }
        const buf = Buffer.from(asset.content, asset.encoding || 'base64');
        const relPath = normalizeRelPath(asset.path);

        if (!IS_SERVERLESS) {
          try {
            const absAsset = resolveSafePath(relPath);
            fs.mkdirSync(/*turbopackIgnore: true*/ path.dirname(absAsset), { recursive: true });
            fs.writeFileSync(/*turbopackIgnore: true*/ absAsset, buf);
          } catch (fsErr) {
            console.warn('[Decap API] Local media write skipped:', fsErr.message);
          }
        }

        if (GITHUB_TOKEN) {
          await commitFileToGitHub(relPath, buf.toString('base64'), `Upload media ${path.basename(relPath)} via Decap CMS`);
        }

        const publicUrl = relPath.startsWith('public/') ? relPath.slice('public'.length) : `/${relPath}`;

        return NextResponse.json({
          id: relPath,
          name: path.basename(relPath),
          size: buf.length,
          displayURL: publicUrl,
          path: relPath
        });
      }

      case 'deleteFile':
      case 'deleteFiles': {
        const paths = params.paths || (params.path ? [params.path] : []);
        if (!IS_SERVERLESS) {
          for (const p of paths) {
            try {
              const absFile = resolveSafePath(p);
              if (fs.existsSync(/*turbopackIgnore: true*/ absFile)) {
                fs.unlinkSync(/*turbopackIgnore: true*/ absFile);
              }
            } catch {}
          }
        }
        return NextResponse.json({ deleted: true });
      }

      default:
        return NextResponse.json({ error: `Unsupported Decap action: ${action}` }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
