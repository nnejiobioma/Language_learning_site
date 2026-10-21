import nodemailer from 'nodemailer';

export const RECIPIENT_EMAILS = ['nnejieb@gmail.com', 'nneji.obioma@gmail.com'];

/**
 * Creates a nodemailer transporter if environment variables are provided.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || process.env.GMAIL_USER || process.env.CONTACT_EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || process.env.CONTACT_EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  if (host) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
  }

  // Default to standard Gmail service if host isn't explicitly set
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
}

/**
 * Sends a contact inquiry email to nnejieb@gmail.com and nneji.obioma@gmail.com
 * 
 * @param {Object} payload
 * @param {string} payload.name
 * @param {string} payload.email
 * @param {string} payload.subject
 * @param {string} payload.message
 * @param {string} [payload.category]
 * @param {string} [payload.language]
 * @param {string} [payload.phone]
 * @returns {Promise<{sent: boolean, messageId?: string, reason?: string, error?: string, recipients: string[]}>}
 */
export async function sendContactEmail({
  name,
  email,
  subject,
  message,
  category = 'General Inquiry',
  language = 'All Languages / General',
  phone = ''
}) {
  const transporter = createTransporter();

  if (!transporter) {
    console.info(
      `[FiksLingo Email] SMTP credentials not detected in environment variables. ` +
      `Contact message stored safely; to enable direct SMTP dispatch to ${RECIPIENT_EMAILS.join(', ')}, ` +
      `provide SMTP_USER & SMTP_PASS in .env.local.`
    );
    return {
      sent: false,
      reason: 'smtp_not_configured',
      simulated: true,
      recipients: RECIPIENT_EMAILS
    };
  }

  const senderUser = process.env.SMTP_USER || process.env.GMAIL_USER || process.env.CONTACT_EMAIL_USER;
  const fromAddress = process.env.SMTP_FROM || `"FiksLingo Inquiries" <${senderUser}>`;
  const sanitizedMessageHtml = (message || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br/>');

  const emailSubject = `[FiksLingo Contact] ${subject} - from ${name}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${emailSubject}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 24px; color: #1e293b; }
        .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .header { background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); color: #ffffff; padding: 28px 24px; text-align: center; border-bottom: 3px solid #10b981; }
        .badge { display: inline-block; background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; border: 1px solid rgba(52, 211, 153, 0.3); }
        .title { margin: 0; font-size: 22px; font-weight: 800; color: #f8fafc; }
        .content { padding: 28px 24px; }
        .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .meta-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
        .meta-table td.label { font-weight: 600; color: #64748b; width: 130px; }
        .meta-table td.value { color: #0f172a; font-weight: 500; }
        .message-box { background: #f8fafc; border-left: 4px solid #10b981; border-radius: 8px; padding: 18px; margin: 20px 0; color: #1e293b; font-size: 15px; line-height: 1.6; }
        .actions { text-align: center; margin: 28px 0 10px; }
        .btn { display: inline-block; background: #10b981; color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); }
        .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="badge">New Contact Submission</div>
          <h1 class="title">FiksLingo Learner Request</h1>
        </div>
        <div class="content">
          <table class="meta-table">
            <tr>
              <td class="label">From:</td>
              <td class="value"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `<tr><td class="label">Phone:</td><td class="value">${phone}</td></tr>` : ''}
            <tr>
              <td class="label">Category:</td>
              <td class="value">${category}</td>
            </tr>
            <tr>
              <td class="label">Language:</td>
              <td class="value">${language}</td>
            </tr>
            <tr>
              <td class="label">Subject:</td>
              <td class="value"><strong>${subject}</strong></td>
            </tr>
            <tr>
              <td class="label">Received:</td>
              <td class="value">${new Date().toUTCString()}</td>
            </tr>
          </table>

          <h3 style="margin: 0 0 8px; color: #334155; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message Body:</h3>
          <div class="message-box">
            ${sanitizedMessageHtml}
          </div>

          <div class="actions">
            <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}%20-%20FiksLingo" class="btn">
              Reply to ${name}
            </a>
          </div>
        </div>
        <div class="footer">
          Delivered automatically to <strong>${RECIPIENT_EMAILS.join(', ')}</strong> by FiksLingo Contact Service.
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New FiksLingo Contact Request:
----------------------------------------
From: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}Category: ${category}
Language: ${language}
Subject: ${subject}
Date: ${new Date().toUTCString()}
----------------------------------------

Message:
${message}

----------------------------------------
Recipients: ${RECIPIENT_EMAILS.join(', ')}
Reply directly to: ${email}
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: RECIPIENT_EMAILS,
      replyTo: `"${name}" <${email}>`,
      subject: emailSubject,
      text: textContent,
      html: htmlContent
    });

    return {
      sent: true,
      messageId: info.messageId,
      recipients: RECIPIENT_EMAILS
    };
  } catch (err) {
    console.error('[FiksLingo Email] Error delivering mail via nodemailer:', err);
    return {
      sent: false,
      error: err.message,
      recipients: RECIPIENT_EMAILS
    };
  }
}
