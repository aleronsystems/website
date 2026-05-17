import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '../../../lib/contact-schema';

/**
 * POST /api/contact
 *
 * Flow:
 *   1. Parse JSON body.
 *   2. If honeypot `website` field is populated, silently return success.
 *   3. Validate against zod schema.
 *   4. Submit to HubSpot Forms API and send Resend notification in parallel.
 *   5. If either downstream call succeeds, return 200. If both fail, return 502.
 *
 * Secrets are never returned to the client. Downstream errors are logged
 * server-side only.
 */

export const runtime = 'nodejs';

// ─── HubSpot field mapping ────────────────────────────────────────────────────
//
// Property names below match the internal names of fields in the HubSpot form.
// Standard properties (email, firstname, lastname, company, message) are
// HubSpot defaults. `engagement_type_1` is the confirmed internal name of the
// custom dropdown property.

type HubSpotField = { objectTypeId: string; name: string; value: string };

function buildHubSpotFields(payload: {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  engagementType: string;
  message: string;
}): HubSpotField[] {
  const fields: HubSpotField[] = [
    { objectTypeId: '0-1', name: 'email', value: payload.email },
    { objectTypeId: '0-1', name: 'firstname', value: payload.firstname },
    { objectTypeId: '0-1', name: 'message', value: payload.message },
  ];
  if (payload.lastname) {
    fields.push({ objectTypeId: '0-1', name: 'lastname', value: payload.lastname });
  }
  if (payload.company) {
    fields.push({ objectTypeId: '0-1', name: 'company', value: payload.company });
  }
  if (payload.engagementType) {
    fields.push({
      objectTypeId: '0-1',
      name: 'engagement_type_1', // confirmed HubSpot internal property name
      value: payload.engagementType,
    });
  }
  return fields;
}

// ─── HubSpot submission ──────────────────────────────────────────────────────
async function submitToHubSpot(fields: HubSpotField[]): Promise<void> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    throw new Error('HubSpot environment variables are not configured.');
  }

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields,
      context: { pageUri: 'https://aleronsystems.com/contact', pageName: 'Contact' },
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`HubSpot ${response.status}: ${detail.slice(0, 500)}`);
  }
}

// ─── Resend notification ─────────────────────────────────────────────────────
async function sendNotificationEmail(payload: {
  name: string;
  email: string;
  company: string;
  engagementType: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  const resend = new Resend(apiKey);
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const subjectLine = `New inquiry: ${payload.engagementType || 'General Discussion'} (${payload.name})`;

  const textBody = [
    `New contact form submission`,
    ``,
    `Name:            ${payload.name}`,
    `Email:           ${payload.email}`,
    `Company:         ${payload.company || '(not provided)'}`,
    `Engagement Type: ${payload.engagementType || '(not selected)'}`,
    `Received:        ${timestamp} ET`,
    ``,
    `Message:`,
    `${payload.message}`,
  ].join('\n');

  const htmlBody = `
    <div style="font-family: -apple-system, Segoe UI, sans-serif; max-width: 560px; color: #0B1220;">
      <h2 style="font-size: 16px; margin: 0 0 16px; color: #0B1220; font-weight: 600;">
        New contact form submission
      </h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
        <tr><td style="padding: 6px 12px 6px 0; color: #506070; width: 140px;">Name</td><td style="padding: 6px 0;">${escapeHtml(payload.name)}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #506070;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(payload.email)}" style="color: #0F8F7E;">${escapeHtml(payload.email)}</a></td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #506070;">Company</td><td style="padding: 6px 0;">${escapeHtml(payload.company) || '<span style="color:#7C8AA0">(not provided)</span>'}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #506070;">Engagement Type</td><td style="padding: 6px 0;">${escapeHtml(payload.engagementType) || '<span style="color:#7C8AA0">(not selected)</span>'}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; color: #506070;">Received</td><td style="padding: 6px 0;">${escapeHtml(timestamp)} ET</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #E2E6EE; margin: 20px 0;">
      <div style="font-size: 13.5px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(payload.message)}</div>
    </div>
  `.trim();

  const { error } = await resend.emails.send({
    from: 'Aleron Systems <noreply@aleronsystems.com>',
    to: 'info@aleronsystems.com',
    replyTo: payload.email,
    subject: subjectLine,
    text: textBody,
    html: htmlBody,
  });

  if (error) {
    throw new Error(`Resend: ${error.message}`);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─── Route handler ───────────────────────────────────────────────────────────
export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: bots fill every visible field including hidden ones. If the
  // `website` field has any value, we accept the request silently and drop it.
  const honeypot = (body as Record<string, unknown>)?.website;
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Please check the form and try again.',
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const [firstname, ...rest] = data.name.split(/\s+/);
  const lastname = rest.join(' ');

  const hubspotFields = buildHubSpotFields({
    firstname,
    lastname,
    email: data.email,
    company: data.company,
    engagementType: data.engagementType,
    message: data.message,
  });

  // Run both downstream calls in parallel. If both succeed, ideal. If one
  // succeeds, we still have the lead captured somewhere; return success and
  // log the partial failure server-side. Only return an error if both fail.
  const [hubspotResult, resendResult] = await Promise.allSettled([
    submitToHubSpot(hubspotFields),
    sendNotificationEmail({
      name: data.name,
      email: data.email,
      company: data.company,
      engagementType: data.engagementType,
      message: data.message,
    }),
  ]);

  if (hubspotResult.status === 'rejected') {
    console.error('[contact] HubSpot submission failed:', hubspotResult.reason);
  }
  if (resendResult.status === 'rejected') {
    console.error('[contact] Resend notification failed:', resendResult.reason);
  }

  if (hubspotResult.status === 'rejected' && resendResult.status === 'rejected') {
    return NextResponse.json(
      { ok: false, error: 'We could not deliver your message. Please email info@aleronsystems.com directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
