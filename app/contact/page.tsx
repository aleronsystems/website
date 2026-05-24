'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Clock, Globe } from 'lucide-react';
import posthog from 'posthog-js';
import SiteNav from '../../components/SiteNav';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 6 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const engagementOptions = [
  'Salesforce Administration',
  'Workflow Automation',
  'Release Governance & DevOps',
  'Enterprise Integrations',
  'Experience Cloud Support',
  'Government Inquiry',
  'General Discussion',
];

const contactDetails = [
  {
    icon: <Mail size={15} />,
    label: 'Email',
    value: 'info@aleronsystems.com',
    href: 'mailto:info@aleronsystems.com',
  },
  {
    icon: <MapPin size={15} />,
    label: 'Region',
    value: 'Pennsylvania, United States',
  },
  {
    icon: <Globe size={15} />,
    label: 'Availability',
    value: 'Remote support across U.S. time zones',
  },
  {
    icon: <Clock size={15} />,
    label: 'Response Window',
    value: 'Typically within 1 to 2 business days',
  },
];

const engagementTypes = [
  {
    heading: 'Project-Based Support',
    body: 'Defined scope engagements with clear deliverables. Common for Flow modernization, integration work, release pipeline setup, or platform reviews.',
  },
  {
    heading: 'Operational Augmentation',
    body: 'Embedded senior support working alongside internal teams during release cycles, regulated changes, or elevated operational demand.',
  },
  {
    heading: 'Advisory Engagement',
    body: 'Short-cycle advisory work for teams that need senior input on architecture, automation strategy, or governance practices.',
  },
  {
    heading: 'Ongoing Platform Support',
    body: 'Continuous Salesforce operations covering administration, governance, integration support, and release coordination on a retainer basis.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get('name') ?? '').trim(),
      company: String(data.get('company') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      engagementType: String(data.get('engagementType') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      // Honeypot field: must remain empty for real users.
      website: String(data.get('website') ?? ''),
    };

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        throw new Error(
          typeof json.error === 'string'
            ? json.error
            : 'Something went wrong. Please try again or email info@aleronsystems.com directly.',
        );
      }

      setStatus('success');
      form.reset();

      // Custom PostHog conversion event. Fires only after the API
      // response confirms the submission succeeded. Properties are
      // deliberately PII-free: no name, email, company name, or
      // message text is sent to PostHog.
      try {
        posthog.capture('contact_form_submitted', {
          page: window.location.pathname,
          engagementType: payload.engagementType,
          companyProvided: Boolean(payload.company),
          messageLength: payload.message.length,
          source: 'contact_page',
        });
      } catch {
        // Swallow analytics errors. Form submission already succeeded;
        // a PostHog hiccup should never surface to the user.
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email info@aleronsystems.com directly.',
      );
    }
  }

  return (
    <main className="root">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --teal:      #5eead4;
          --sky:       #38bdf8;
          --bg:        #060c16;
          --bg2:       #0a1120;
          --border:    rgba(255,255,255,.07);
          --border-t:  rgba(94,234,212,.14);
          --surface:   rgba(255,255,255,.03);
          --text-1:    #edf2ff;
          --text-2:    #8899b0;
          --text-3:    #506070;
          --accent:    #5eead4;
          --max-w:     1200px;
          --px:        clamp(20px, 4vw, 44px);
        }

        .root {
          min-height: 100vh;
          background: var(--bg);
          background-image: radial-gradient(ellipse 70% 40% at 15% 0%, rgba(56,189,248,.05) 0%, transparent 55%);
          color: var(--text-1);
          font-family: -apple-system, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        /* Horizontal scroll protection that does not break sticky/fixed contexts. */
        html, body { overflow-x: clip; }

        /* Nav styles now live inside components/SiteNav.tsx */

        /* ── HERO (calm, tight) ── */
        .hero {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(28px,3vw,40px) var(--px) clamp(20px,2.5vw,32px);
          border-bottom: 1px solid var(--border);
        }
        .hero-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 12px;
        }
        .hero h1 {
          font-size: clamp(26px, 3.3vw, 47px);
          font-weight: 500; line-height: 1.04;
          letter-spacing: -.026em; color: var(--text-1);
          max-width: 760px; margin-bottom: 14px;
        }
        .hero h1 span { color: var(--teal); }
        .hero-sub {
          font-size: clamp(13.5px, 1.2vw, 15px);
          line-height: 1.65; color: var(--text-2);
          max-width: 560px; margin-bottom: 0;
        }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 7px;
          padding: 11px 22px; border-radius: 7px;
          background: var(--teal); color: #021a14;
          font-size: 14px; font-weight: 600;
          text-decoration: none; border: none; cursor: pointer;
          transition: opacity .18s;
        }
        .btn-primary:hover:not(:disabled) { opacity: .88; }
        .btn-primary:disabled { opacity: .55; cursor: not-allowed; }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 22px; border-radius: 7px;
          border: 1px solid var(--border);
          color: var(--text-2);
          font-size: 14px; font-weight: 500;
          text-decoration: none;
          transition: border-color .18s, color .18s;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,.18); color: var(--text-1); }

        /* ── SECTION COMMON ── */
        .section {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(28px,3.5vw,44px) var(--px);
          border-bottom: 1px solid var(--border);
        }
        .section-alt { background: rgba(255,255,255,.016); }
        .section-hd { display: flex; flex-direction: column; gap: 5px; margin-bottom: 24px; }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
        }
        .section-h2 {
          font-size: clamp(19px, 2vw, 27px);
          font-weight: 400; letter-spacing: -.02em; line-height: 1.1;
          color: var(--text-1); max-width: 540px;
        }
        .section-sub {
          font-size: 13px; line-height: 1.6; color: var(--text-2);
          max-width: 540px; margin-top: 2px;
        }

        /* ── CONTACT GRID ── */
        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
          gap: clamp(24px, 3.5vw, 56px);
          align-items: start;
        }
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        /* ── FORM ── */
        .form-card {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: clamp(22px, 2.4vw, 32px);
          background: var(--surface);
          display: flex; flex-direction: column; gap: 14px;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 520px) { .form-row { grid-template-columns: 1fr; } }
        .field { display: flex; flex-direction: column; gap: 6px; }
        .field-label {
          font-size: 11px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase; color: var(--text-3);
        }
        .field-input,
        .field-select,
        .field-textarea {
          width: 100%;
          padding: 11px 12px;
          border-radius: 7px;
          border: 1px solid var(--border);
          background: rgba(2,8,23,.5);
          color: var(--text-1);
          font-size: 13.5px;
          font-family: inherit;
          line-height: 1.5;
          outline: none;
          transition: border-color .18s, background .18s;
          -webkit-appearance: none;
          appearance: none;
        }
        .field-input::placeholder,
        .field-textarea::placeholder { color: var(--text-3); }
        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          border-color: rgba(94,234,212,.45);
          background: rgba(2,8,23,.7);
        }
        .field-textarea { resize: vertical; min-height: 120px; }
        .field-select {
          padding-right: 36px;
          background-image: linear-gradient(45deg, transparent 50%, var(--text-2) 50%),
                            linear-gradient(135deg, var(--text-2) 50%, transparent 50%);
          background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
        }
        .field-select option { background: var(--bg); color: var(--text-1); }
        .form-actions {
          display: flex; align-items: center; gap: 14px;
          margin-top: 6px; flex-wrap: wrap;
        }
        .form-note { font-size: 12px; color: var(--text-3); line-height: 1.5; }

        /* ── HONEYPOT (invisible to humans, visible to bots) ── */
        .honeypot {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        /* ── FORM STATES ── */
        .form-success,
        .form-error {
          padding: 12px 14px;
          border-radius: 7px;
          font-size: 13px; line-height: 1.55;
        }
        .form-success {
          border: 1px solid rgba(94,234,212,.25);
          background: rgba(94,234,212,.05);
          color: var(--teal);
        }
        .form-error {
          border: 1px solid rgba(248,113,113,.25);
          background: rgba(248,113,113,.05);
          color: #fca5a5;
        }

        /* ── DETAILS PANEL ── */
        .details-panel { display: flex; flex-direction: column; padding-top: 4px; }
        .detail-row {
          display: grid;
          grid-template-columns: 18px 1fr;
          gap: 14px;
          align-items: start;
          padding: 14px 0;
          border-top: 1px solid var(--border);
        }
        .detail-row:first-child { border-top: none; padding-top: 0; }
        .detail-icon { color: var(--teal); margin-top: 2px; }
        .detail-content { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .detail-label {
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--text-3);
        }
        .detail-value {
          font-size: 13.5px; color: var(--text-1); font-weight: 400;
          line-height: 1.5; word-break: break-word;
        }
        .detail-value a { color: var(--text-1); text-decoration: none; transition: color .18s; }
        .detail-value a:hover { color: var(--teal); }

        /* ── SCHEDULE CARD (secondary Calendly CTA inside details panel) ── */
        .schedule-card {
          margin-top: 18px;
          padding: 18px 16px;
          border: 1px solid var(--border-t);
          border-radius: 8px;
          background: rgba(94,234,212,.025);
          display: flex; flex-direction: column; gap: 10px;
        }
        .schedule-label {
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
        }
        .schedule-title {
          font-size: 14px; font-weight: 600; color: var(--text-1); line-height: 1.4;
        }
        .schedule-copy {
          font-size: 13px; color: var(--text-2); line-height: 1.55;
        }
        .schedule-card .btn-primary {
          align-self: flex-start;
          margin-top: 2px;
        }

        /* ── ENGAGEMENT TYPES (homepage why-grid pattern) ── */
        .eng-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          column-gap: 32px;
          row-gap: 0;
        }
        .eng-item { padding: 16px 0; border-top: 1px solid var(--border-t); }
        .eng-title { font-size: 13.5px; font-weight: 600; color: var(--text-1); margin-bottom: 6px; }
        .eng-body { font-size: 13px; line-height: 1.65; color: var(--text-2); }

        /* ── FOOTER ── */
        .footer { border-top: 1px solid var(--border); padding: 24px var(--px); }
        .footer-inner {
          max-width: var(--max-w); margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; flex-wrap: wrap;
        }
        .footer-copy, .footer-naics { font-size: 12px; color: var(--text-3); }
        @media (max-width: 560px) { .footer-naics { display: none; } }
      `}</style>

      {/* ── Navigation ── */}
      <SiteNav active="contact" />

      {/* ── Hero ── */}
      <section className="hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="hero-label" variants={fadeUp} custom={0}>
            Contact
          </motion.div>
          <motion.h1 variants={fadeUp} custom={0.05}>
            Discuss your Salesforce environment.
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
            For platform operations questions, release governance support, integration work, or government procurement conversations, reach out directly.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Form + Details ── */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <div className="contact-grid">
          <motion.form
            className="form-card"
            variants={itemFade}
            onSubmit={onSubmit}
            noValidate
          >
            {/* Honeypot. Real users never see or fill this. Bots typically do. */}
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="website">Website (leave blank)</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-row">
              <div className="field">
                <label className="field-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="field-input"
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="field-input"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label className="field-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="field-input"
                  placeholder="you@company.com"
                />
              </div>
              <div className="field">
                <label className="field-label" htmlFor="engagementType">Engagement Type</label>
                <select
                  id="engagementType"
                  name="engagementType"
                  defaultValue=""
                  className="field-select"
                >
                  <option value="" disabled>Select an area</option>
                  {engagementOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label className="field-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="field-textarea"
                placeholder="A few sentences about the environment or the work."
              />
            </div>

            {status === 'success' && (
              <div className="form-success" role="status">
                Thank you. Your message has been received.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error" role="alert">
                {errorMessage || 'Something went wrong. Please try emailing info@aleronsystems.com directly.'}
              </div>
            )}

            <div className="form-actions">
              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : (
                  <>Send Message <ArrowRight size={14} /></>
                )}
              </button>
              <span className="form-note">
                Or email <a href="mailto:info@aleronsystems.com" style={{ color: 'var(--text-2)' }}>info@aleronsystems.com</a> directly.
              </span>
            </div>
          </motion.form>

          <motion.aside className="details-panel" variants={itemFade} aria-label="Contact details">
            {contactDetails.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-icon" aria-hidden="true">{d.icon}</span>
                <div className="detail-content">
                  <div className="detail-label">{d.label}</div>
                  <div className="detail-value">
                    {d.href ? <a href={d.href}>{d.value}</a> : d.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="schedule-card">
              <div className="schedule-label">Schedule Directly</div>
              <div className="schedule-title">Prefer to schedule directly?</div>
              <div className="schedule-copy">
                Book a 30 minute consultation and choose a time that works for you.
              </div>
              <a
                href="https://calendly.com/bogdan-aleronsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => {
                  try {
                    posthog.capture('calendly_opened', {
                      source: 'contact_page',
                      cta: 'Book a Consultation',
                    });
                  } catch {
                    // Swallow analytics errors so navigation is never blocked.
                  }
                }}
              >
                Book a Consultation
              </a>
            </div>
          </motion.aside>
        </div>
      </motion.section>

      {/* ── Engagement Types ── */}
      <div className="section-alt">
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">How Engagements Work</div>
          <h2 className="section-h2">A short note on what to expect</h2>
          <p className="section-sub">
            Engagements are scoped to the work rather than packaged into fixed offerings. Most fall into one of the structures below.
          </p>
        </motion.div>

        <motion.div className="eng-grid" variants={stagger}>
          {engagementTypes.map((e) => (
            <motion.div key={e.heading} className="eng-item" variants={itemFade}>
              <div className="eng-title">{e.heading}</div>
              <div className="eng-body">{e.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-copy">
            © {new Date().getFullYear()} Aleron Systems LLC. All rights reserved.
          </div>
          <div className="footer-naics">
            NAICS: 541511 · 541512 · 541519
          </div>
        </div>
      </footer>
    </main>
  );
}
