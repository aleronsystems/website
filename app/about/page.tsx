'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

const philosophy = [
  {
    heading: 'Direct Senior Engagement',
    body: 'The person scoping the work is the person performing it. No handoffs to junior resources after the kickoff call. Every engagement is operated personally.',
  },
  {
    heading: 'Practical Execution',
    body: 'Work is scoped to the operational reality of the environment rather than abstract frameworks. Solutions are built to be maintained, not just delivered.',
  },
  {
    heading: 'Controlled Deployment Practices',
    body: 'Changes move through sandboxes with intent. Documentation, rollback paths, and audit considerations are part of the work, not afterthoughts.',
  },
  {
    heading: 'Governance-Aware Support',
    body: 'Comfortable working inside environments with formal change control, regulated requirements, and structured release coordination across business units.',
  },
  {
    heading: 'Maintainability First',
    body: 'Automation, configuration, and integrations are built with clear ownership and structured documentation so the next person can support what was delivered.',
  },
  {
    heading: 'Operational Consistency',
    body: 'Steady-state support is approached with the same care as project work. Recurring administrative tasks, defect triage, and platform hygiene receive senior attention.',
  },
];

const credentials = [
  {
    label: 'Certified Tooling',
    value: 'Gearset Deployment Certified\nWorkato Automation Pro I & II',
  },
  {
    label: 'Deployment & DevOps',
    value: 'Gearset, AutoRABIT, GitHub',
  },
  {
    label: 'Integration & Automation',
    value: 'Workato, Celigo, Data Loader, REST/SOAP APIs',
  },
  {
    label: 'Salesforce Platforms',
    value: 'Sales Cloud, Service Cloud, Experience Cloud, nCino',
  },
];

const industries = [
  {
    name: 'Life Sciences',
    note: 'Regulated environments, FDA 21 CFR Part 11 aligned operations, validation documentation, controlled deployments.',
  },
  {
    name: 'Financial Services',
    note: 'Release governance and Salesforce platform operations aligned with internal compliance and change control requirements.',
  },
  {
    name: 'SaaS & Analytics',
    note: 'Enterprise platform support, workflow governance, Experience Cloud operations, and integration administration at scale.',
  },
  {
    name: 'Retail Technology',
    note: 'Integration modernization, middleware migration, and ongoing platform support across business systems.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
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
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* Nav styles now live inside components/SiteNav.tsx */

        /* ── HERO (tighter vertical padding than other pages: this page reads calmer) ── */
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
          font-weight: 500;
          line-height: 1.04;
          letter-spacing: -.026em;
          color: var(--text-1);
          max-width: 760px;
          margin-bottom: 14px;
        }
        .hero h1 span { color: var(--teal); }
        .hero-sub {
          font-size: clamp(13.5px, 1.2vw, 15px);
          line-height: 1.65;
          color: var(--text-2);
          max-width: 580px;
          margin-bottom: 0;
        }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 22px; border-radius: 7px;
          background: var(--teal); color: #021a14;
          font-size: 14px; font-weight: 600;
          text-decoration: none;
          transition: opacity .18s;
        }
        .btn-primary:hover { opacity: .88; }
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
        .section-hd {
          display: flex; flex-direction: column; gap: 5px;
          margin-bottom: 24px;
        }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
        }
        .section-h2 {
          font-size: clamp(19px, 2vw, 27px);
          font-weight: 400;
          letter-spacing: -.02em;
          line-height: 1.1;
          color: var(--text-1);
          max-width: 540px;
        }
        .section-sub {
          font-size: 13px; line-height: 1.6; color: var(--text-2);
          max-width: 540px; margin-top: 2px;
        }

        /* ── FOUNDER SECTION (mirrors homepage .founder grid) ── */
        .founder {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(28px,3.5vw,44px) var(--px);
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(28px, 4vw, 56px);
          align-items: start;
        }
        @media (max-width: 820px) {
          .founder { grid-template-columns: 1fr; gap: 28px; }
        }
        .founder-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 12px;
        }
        .founder-name {
          font-size: clamp(20px, 2.2vw, 28px);
          font-weight: 400; letter-spacing: -.02em; line-height: 1.1;
          color: var(--text-1);
          margin-bottom: 4px;
        }
        .founder-title {
          font-size: 13px; color: var(--text-3);
          margin-bottom: 16px; font-weight: 400;
        }
        .founder-bio {
          font-size: 14px; line-height: 1.7;
          color: var(--text-2);
          max-width: 540px;
        }
        .founder-bio p { margin-bottom: 12px; }
        .founder-bio p:last-child { margin-bottom: 0; }
        .founder-photo-wrap {
          position: relative;
          width: 100%;
          max-width: 320px;
          justify-self: end;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          background: var(--surface);
          padding: 6px;
        }
        @media (max-width: 820px) {
          .founder-photo-wrap { justify-self: start; max-width: 260px; padding: 5px; }
        }
        .founder-photo {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center 22%;
          border-radius: 4px;
        }

        /* ── PHILOSOPHY (matches homepage why-grid pattern) ── */
        .phil-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          column-gap: 32px;
          row-gap: 0;
        }
        .phil-item {
          padding: 16px 0;
          border-top: 1px solid var(--border-t);
        }
        .phil-title {
          font-size: 13.5px; font-weight: 600;
          color: var(--text-1);
          margin-bottom: 6px;
        }
        .phil-body {
          font-size: 13px; line-height: 1.65;
          color: var(--text-2);
        }

        /* ── CREDENTIALS (matches homepage .cred-item; editorial, not a wall) ── */
        .cred-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          column-gap: 32px;
          row-gap: 0;
        }
        .cred-item {
          display: flex; flex-direction: column; gap: 4px;
          padding: 14px 0;
          border-top: 1px solid var(--border);
        }
        .cred-label {
          font-size: 10px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase; color: var(--text-3);
        }
        .cred-value {
          font-size: 13.5px; color: var(--text-1); font-weight: 400;
          line-height: 1.5;
          white-space: pre-line;
        }

        /* ── INDUSTRIES (4 cards lock to 4/2/1) ── */
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        @media (max-width: 980px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ind-grid { grid-template-columns: 1fr; }
        }
        .ind-item {
          background: var(--bg);
          padding: 24px 22px;
          transition: background .2s;
        }
        .ind-item:hover { background: var(--bg2); }
        .ind-name {
          font-size: 14px; font-weight: 600;
          color: #d8e8ff;
          margin-bottom: 8px;
          letter-spacing: -.01em;
        }
        .ind-note {
          font-size: 12.5px; line-height: 1.6;
          color: var(--text-2);
        }

        /* ── CTA (matches homepage) ── */
        .cta-section {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(24px,3vw,36px) var(--px);
        }
        .cta-inner {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: clamp(20px,2.5vw,32px) clamp(20px,3vw,36px);
          background: var(--surface);
        }
        .cta-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 8px;
        }
        .cta-h2 {
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 400; letter-spacing: -.02em; line-height: 1.15;
          color: var(--text-1); max-width: 460px;
          margin-bottom: 8px;
        }
        .cta-sub {
          font-size: 13.5px; line-height: 1.6; color: var(--text-2);
          max-width: 540px; margin-bottom: 18px;
        }
        .cta-btns { display: flex; gap: 10px; flex-wrap: wrap; }

        /* ── FOOTER ── */
        .footer {
          border-top: 1px solid var(--border);
          padding: 24px var(--px);
        }
        .footer-inner {
          max-width: var(--max-w); margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; flex-wrap: wrap;
        }
        .footer-copy, .footer-naics {
          font-size: 12px; color: var(--text-3);
        }
        @media (max-width: 560px) { .footer-naics { display: none; } }
      `}</style>

      {/* ── Navigation ── */}
      <SiteNav active="about" />

      {/* ── Hero ── */}
      <section className="hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="hero-label" variants={fadeUp} custom={0}>
            About Aleron Systems
          </motion.div>
          <motion.h1 variants={fadeUp} custom={0.05}>
            Practical Salesforce support, built around{' '}
            <span>operational experience</span>.
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
            Aleron Systems is a veteran-owned consulting firm focused on enterprise Salesforce operations, workflow governance, release coordination, and platform support for environments where reliability and maintainability matter.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Founder ── */}
      <div className="section-alt">
      <motion.section
        className="founder"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div variants={itemFade}>
          <div className="founder-label">Founder</div>
          <div className="founder-name">Bogdan Alekseyenko</div>
          <div className="founder-title">Founder, Aleron Systems LLC</div>
          <div className="founder-bio">
            <p>
              Senior-level Salesforce operations, governance, automation, and integration support across enterprise and regulated environments. 15 years of hands-on platform work, including a single engagement supporting 2,000+ users over eight years.
            </p>
            <p>
              Direct experience with Workflow governance and Flow consolidation, Experience Cloud operations, enterprise integration administration, and release coordination across Dev, QA, UAT, and Production environments. Comfortable working inside formal change control and audit-aware release practices.
            </p>
            <p>
              Engagements are operated personally. There is no account management layer between scoping and delivery, and no junior resources placed on production systems.
            </p>
          </div>
        </motion.div>
        <motion.div className="founder-photo-wrap" variants={itemFade}>
          <img
            src="/marketing/About_Headshot_photo.jpg"
            alt="Bogdan Alekseyenko"
            className="founder-photo"
          />
        </motion.div>
      </motion.section>
      </div>

      {/* ── Operational Philosophy ── */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Operational Philosophy</div>
          <h2 className="section-h2">How engagements are operated</h2>
          <p className="section-sub">
            A small set of working principles applied consistently across enterprise and regulated environments.
          </p>
        </motion.div>

        <motion.div className="phil-grid" variants={stagger}>
          {philosophy.map((p) => (
            <motion.div key={p.heading} className="phil-item" variants={itemFade}>
              <div className="phil-title">{p.heading}</div>
              <div className="phil-body">{p.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Tools & Platforms ── */}
      <div className="section-alt">
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Tools &amp; Platforms</div>
          <h2 className="section-h2">Operating environment and tooling</h2>
          <p className="section-sub">
            The tools and platforms used regularly across Salesforce operations, deployment governance, and integration work.
          </p>
        </motion.div>

        <motion.div className="cred-grid" variants={stagger}>
          {credentials.map((c) => (
            <motion.div key={c.label} className="cred-item" variants={itemFade}>
              <div className="cred-label">{c.label}</div>
              <div className="cred-value">{c.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </div>

      {/* ── Industries ── */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Industries Supported</div>
          <h2 className="section-h2">Environments operated</h2>
          <p className="section-sub">
            Selected industries with direct platform operations and governance experience.
          </p>
        </motion.div>

        <motion.div className="ind-grid" variants={stagger}>
          {industries.map((i) => (
            <motion.div key={i.name} className="ind-item" variants={itemFade}>
              <div className="ind-name">{i.name}</div>
              <div className="ind-note">{i.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.div
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={fadeUp}
        custom={0}
      >
        <div className="cta-inner">
          <div className="cta-label">Get in Touch</div>
          <h2 className="cta-h2">
            Discuss your Salesforce environment.
          </h2>
          <p className="cta-sub">
            For platform operations questions, release governance support, or workflow modernization conversations, reach out directly.
          </p>
          <div className="cta-btns">
            <a href="/contact" className="btn-primary">
              Connect With Aleron <ArrowRight size={14} />
            </a>
            <a href="/services" className="btn-ghost">
              View Services
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Footer ── */}
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
