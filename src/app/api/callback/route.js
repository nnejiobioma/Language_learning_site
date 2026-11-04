import { NextResponse } from 'next/server';

/**
 * GitHub OAuth callback endpoint for Decap CMS.
 * Exchanges the temporary code for an access token and posts it back to the Decap CMS opener window.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'Missing OAuth code or GitHub OAuth credentials.' },
      { status: 400 }
    );
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code
      })
    });

    const tokenData = await tokenRes.json();
    const status = tokenData.access_token ? 'success' : 'error';
    const content = tokenData.access_token
      ? { token: tokenData.access_token, provider: 'github' }
      : tokenData;

    const html = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Decap CMS OAuth Callback</title></head>
<body>
<script>
  (function() {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:${status}:' + JSON.stringify(${JSON.stringify(content)}),
        e.origin
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body>
</html>`;

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

