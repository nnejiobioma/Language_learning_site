import { NextResponse } from 'next/server';

/**
 * GitHub OAuth initiation endpoint for Decap CMS in production.
 * Requires GITHUB_CLIENT_ID in environment variables.
 */
export async function GET(request) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const { searchParams } = new URL(request.url);
  const scope = searchParams.get('scope') || 'repo,user';

  if (!clientId) {
    return NextResponse.json(
      {
        error: 'GITHUB_CLIENT_ID is not configured. Add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET to .env.local for GitHub OAuth, or use local_backend / Netlify Git Gateway.'
      },
      { status: 500 }
    );
  }

  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.set('client_id', clientId);
  githubAuthUrl.searchParams.set('scope', scope);

  return NextResponse.redirect(githubAuthUrl.toString());
}

