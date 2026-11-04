import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const GITHUB_REPO = process.env.GITHUB_REPO || 'nnejiobioma/Language_learning_site';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.DECAP_GITHUB_TOKEN || '';

async function commitFileToGitHub(relPath, contentBase64, commitMessage) {
  if (!GITHUB_TOKEN) return false;
  const cleanPath = String(relPath).replace(/^[/\\]+/, '').split(path.sep).join('/');
  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${cleanPath}`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  let sha = undefined;
  const getRes = await fetch(`${apiUrl}?ref=${encodeURIComponent(GITHUB_BRANCH)}`, { headers });
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

function resolveSafePath(relPath = '') {
  const clean = String(relPath).replace(/^[/\\]+/, '');
  const resolved = path.resolve(/*turbopackIgnore: true*/ ROOT_DIR, clean);
  if (!resolved.startsWith(ROOT_DIR)) {
    throw new Error('Path traversal outside workspace is not allowed.');
  }
  return resolved;
}

function toPosixPath(p) {
  return p.split(path.sep).join('/');
}

function listFilesRecursive(dir, extFilter, maxDepth = 3, currentDepth = 1) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (currentDepth < maxDepth) {
        results.push(...listFilesRecursive(fullPath, extFilter, maxDepth, currentDepth + 1));
      }
    } else if (entry.isFile()) {
      if (!extFilter || entry.name.toLowerCase().endsWith(`.${extFilter.toLowerCase()}`)) {
        results.push(fullPath);
      }
    }
  }
  return results;
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
        const { folder, extension, depth = 1 } = params;
        const folderAbs = resolveSafePath(folder);
        const files = listFilesRecursive(folderAbs, extension, depth);
        const entries = files.map((absFile) => {
          const relPath = toPosixPath(path.relative(ROOT_DIR, absFile));
          const stat = fs.statSync(absFile);
          const data = fs.readFileSync(absFile, 'utf8');
          return {
            file: {
              path: relPath,
              id: relPath,
              author: 'Local Admin',
              updatedOn: stat.mtime.toISOString()
            },
            data
          };
        });
        return NextResponse.json(entries);
      }

      case 'entriesByFiles': {
        const { files = [] } = params;
        const entries = [];
        for (const f of files) {
          const absFile = resolveSafePath(f.path);
          if (fs.existsSync(absFile)) {
            const stat = fs.statSync(absFile);
            const data = fs.readFileSync(absFile, 'utf8');
            entries.push({
              file: {
                path: f.path,
                label: f.label,
                id: f.path,
                author: 'Local Admin',
                updatedOn: stat.mtime.toISOString()
              },
              data
            });
          }
        }
        return NextResponse.json(entries);
      }

      case 'getEntry': {
        const { path: filePath } = params;
        const absFile = resolveSafePath(filePath);
        if (!fs.existsSync(absFile)) {
          return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
        }
        const stat = fs.statSync(absFile);
        const data = fs.readFileSync(absFile, 'utf8');
        return NextResponse.json({
          file: {
            path: filePath,
            id: filePath,
            author: 'Local Admin',
            updatedOn: stat.mtime.toISOString()
          },
          data
        });
      }

      case 'persistEntry': {
        const { entry, dataFiles = [], assets = [], options = {} } = params;
        const filesToWrite = dataFiles.length > 0 ? dataFiles : entry ? [entry] : [];
        const commitMsg = options.commitMessage || 'Update content via Decap CMS';

        for (const df of filesToWrite) {
          if (!df || !df.path) continue;
          try {
            const absFile = resolveSafePath(df.path);
            fs.mkdirSync(path.dirname(absFile), { recursive: true });
            fs.writeFileSync(absFile, df.raw, 'utf8');
          } catch (fsErr) {
            console.warn('[Decap API] Local write skipped (read-only fs):', fsErr.message);
          }
          if (GITHUB_TOKEN) {
            await commitFileToGitHub(df.path, Buffer.from(df.raw, 'utf8').toString('base64'), commitMsg);
          }
        }

        for (const asset of assets) {
          if (!asset || !asset.path) continue;
          const buf = Buffer.from(asset.content, asset.encoding || 'base64');
          try {
            const absAsset = resolveSafePath(asset.path);
            fs.mkdirSync(path.dirname(absAsset), { recursive: true });
            fs.writeFileSync(absAsset, buf);
          } catch (fsErr) {
            console.warn('[Decap API] Local asset write skipped:', fsErr.message);
          }
          if (GITHUB_TOKEN) {
            await commitFileToGitHub(asset.path, buf.toString('base64'), commitMsg);
          }
        }

        return NextResponse.json({ saved: true });
      }

      case 'getMedia': {
        const { mediaFolder = 'public/images' } = params;
        const absMedia = resolveSafePath(mediaFolder);
        fs.mkdirSync(absMedia, { recursive: true });

        // Also include standard badge images from public/images so admins can pick them easily
        const dirsToScan = [absMedia];
        const publicImagesDir = resolveSafePath('public/images');
        if (publicImagesDir !== absMedia && fs.existsSync(publicImagesDir)) {
          dirsToScan.push(publicImagesDir);
        }

        const seenPaths = new Set();
        const mediaFiles = [];

        for (const scanDir of dirsToScan) {
          if (!fs.existsSync(/*turbopackIgnore: true*/ scanDir)) continue;
          const items = fs.readdirSync(/*turbopackIgnore: true*/ scanDir, { withFileTypes: true });
          for (const item of items) {
            if (!item.isFile() || item.name.startsWith('.')) continue;
            const full = path.join(scanDir, item.name);
            const relPath = toPosixPath(path.relative(ROOT_DIR, full));
            if (seenPaths.has(relPath)) continue;
            seenPaths.add(relPath);

            const stat = fs.statSync(full);
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

        return NextResponse.json(mediaFiles);
      }

      case 'getMediaFile': {
        const { path: mediaPath } = params;
        const absMedia = resolveSafePath(mediaPath);
        if (!fs.existsSync(absMedia)) {
          return NextResponse.json({ error: 'Media file not found' }, { status: 404 });
        }
        const stat = fs.statSync(absMedia);
        const relPath = toPosixPath(path.relative(ROOT_DIR, absMedia));
        const publicUrl = relPath.startsWith('public/') ? relPath.slice('public'.length) : `/${relPath}`;
        return NextResponse.json({
          id: relPath,
          name: path.basename(absMedia),
          path: relPath,
          size: stat.size,
          displayURL: publicUrl
        });
      }

      case 'persistMedia': {
        const { asset } = params;
        if (!asset || !asset.path) {
          return NextResponse.json({ error: 'Invalid media asset' }, { status: 400 });
        }
        const absAsset = resolveSafePath(asset.path);
        fs.mkdirSync(path.dirname(absAsset), { recursive: true });
        const buf = Buffer.from(asset.content, asset.encoding || 'base64');
        fs.writeFileSync(absAsset, buf);

        const stat = fs.statSync(absAsset);
        const relPath = toPosixPath(path.relative(ROOT_DIR, absAsset));
        const publicUrl = relPath.startsWith('public/') ? relPath.slice('public'.length) : `/${relPath}`;

        return NextResponse.json({
          id: relPath,
          name: path.basename(absAsset),
          size: stat.size,
          displayURL: publicUrl,
          path: relPath
        });
      }

      case 'deleteFile':
      case 'deleteFiles': {
        const paths = params.paths || (params.path ? [params.path] : []);
        for (const p of paths) {
          const absFile = resolveSafePath(p);
          if (fs.existsSync(absFile)) {
            fs.unlinkSync(absFile);
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

