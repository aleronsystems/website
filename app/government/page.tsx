'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  ShieldCheck,
  Workflow,
  GitBranch,
  Users,
  LifeBuoy,
  Cable,
  FlaskConical,
  BarChart3,
  ClipboardCheck,
} from 'lucide-react';
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

const identifiers = [
  { label: 'UEI', value: 'SUQ9LD8LND96' },
  { label: 'CAGE Code', value: '200X0' },
  { label: 'SAM Status', value: 'Active · SAM Registered' },
  { label: 'Business Status', value: 'Veteran-Owned Small Business (VOSB)' },
  { label: 'Entity', value: 'Pennsylvania Registered LLC' },
];

// Procurement scan strip: the highest-signal items for at-a-glance verification.
// Shown directly under the hero so contracting officers can confirm vendor
// status without scrolling into the full registrations grid.
const procurementScan = [
  { label: 'UEI', value: 'SUQ9LD8LND96' },
  { label: 'CAGE', value: '200X0' },
  { label: 'Status', value: 'VOSB · SAM Registered' },
];

// Enterprise client list shown in the trust strip below the procurement
// scan. Mirrors the four past-performance engagements detailed further
// down the page; gives procurement visitors fast-recognition validation
// before they scroll into the registrations and capabilities content.
const trustStripClients = ['Qlik', 'UL Solutions', 'BankUnited', 'Aptos'];

const naicsCodes = [
  { code: '541511', title: 'Custom Computer Programming Services' },
  { code: '541512', title: 'Computer Systems Design Services' },
  { code: '541519', title: 'Other Computer Related Services' },
];

const engagementModels = ['Time & Materials', 'Fixed Price', 'Retainer Support'];

const capabilities = [
  {
    icon: <ShieldCheck size={18} />,
    title: 'Salesforce Administration',
    description:
      'Senior-level platform administration covering user access, security model maintenance, configuration changes, and day to day operational support.',
  },
  {
    icon: <Workflow size={18} />,
    title: 'Flow & Workflow Modernization',
    description:
      'Migration of legacy process automation to Flow, consolidation of overlapping logic, and structured documentation of automation across the org.',
  },
  {
    icon: <GitBranch size={18} />,
    title: 'Release Governance & DevOps Coordination',
    description:
      'Release planning, change tracking, and deployment coordination across sandboxes with attention to risk, rollback paths, and audit readiness.',
  },
  {
    icon: <Users size={18} />,
    title: 'Experience Cloud Support',
    description:
      'Operational support for partner, customer, and internal communities including access management, page configuration, and ongoing content workflows.',
  },
  {
    icon: <LifeBuoy size={18} />,
    title: 'CRM Operational Support',
    description:
      'Steady state platform support covering user requests, defect triage, data hygiene, and recurring administrative tasks across business units.',
  },
  {
    icon: <Cable size={18} />,
    title: 'Enterprise Integrations',
    description:
      'Support and coordination of middleware integrations including Workato, Celigo, and direct API connections between Salesforce and adjacent systems.',
  },
  {
    icon: <FlaskConical size={18} />,
    title: 'Sandbox & UAT Coordination',
    description:
      'Sandbox lifecycle management, refresh planning, and structured UAT coordination aligned with release windows and stakeholder sign off.',
    },
  {
    icon: <BarChart3 size={18} />,
    title: 'Operational Reporting & Process Optimization',
    description:
      'Reporting, dashboards, and process review work focused on reducing manual effort and surfacing operational signal for business owners.',
  },
  {
    icon: <ClipboardCheck size={18} />,
    title: 'Platform Governance & Change Management',
    description:
      'Structured operational governance covering deployment controls, access review coordination, release readiness validation, and cross-team change management processes.',
  },
];

const pastPerformance = [
  {
    ref: 'Qlik',
    client: 'Global Analytics Organization',
    summary:
      'Supported enterprise Salesforce operations, workflow modernization initiatives, and platform process optimization within a global analytics organization.',
  },
  {
    ref: 'UL Solutions',
    client: 'Regulated Environment / FDA 21 CFR Part 11',
    summary:
      'Supported Salesforce platform operations in a highly regulated environment aligned with FDA 21 CFR Part 11 governance practices, including deployment coordination, operational support, and workflow management.',
  },
  {
    ref: 'Aptos',
    client: 'Retail Technology / Integration Migration',
    summary:
      'Supported Salesforce administration and enterprise integrations, including Celigo operational support and migration initiatives toward Workato automation workflows.',
  },
  {
    ref: 'BankUnited',
    client: 'Financial Services / Multi Business Unit',
    summary:
      'Supported Salesforce operational governance, release coordination, workflow improvements, and enterprise platform administration across business units.',
  },
];

const whyAleron = [
  {
    heading: 'Senior-Level Direct Engagement',
    body: 'Every engagement is handled personally at the senior level. No account managers, no junior resources placed on production systems.',
  },
  {
    heading: 'Enterprise Operational Experience',
    body: 'Hands-on Salesforce administration across enterprise environments, including multi-business-unit orgs and large user populations.',
  },
  {
    heading: 'Compliance-Aware Governance',
    body: 'Deployment documentation, change control, and operational practices suited to regulated environments and audit-ready release operations.',
  },
  {
    heading: 'No Offshore Handoffs',
    body: 'Direct engagement throughout the relationship. The person scoping the work is the person performing it.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

// Fires the capability statement download event. Wrapped in try/catch so
// PostHog failures (ad blockers, missing env vars) never block the PDF
// download. No preventDefault, no await; the anchor's default navigation
// proceeds immediately after the synchronous capture call returns.
function trackCapabilityStatementDownload() {
  try {
    posthog.capture('capability_statement_downloaded', {
      source: 'government_page',
      asset: 'federal_capability_statement',
    });
  } catch {
    // Swallow analytics errors so download is never blocked.
  }
}

export default function GovernmentPage() {
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

        /* ── HERO ── */
        .hero {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(32px,3.5vw,48px) var(--px) clamp(24px,3vw,36px);
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
          max-width: 820px;
          margin-bottom: 14px;
        }
        .hero h1 span { color: var(--teal); }
        .hero-sub {
          font-size: clamp(13.5px, 1.2vw, 15px);
          line-height: 1.65;
          color: var(--text-2);
          max-width: 540px;
          margin-bottom: 22px;
        }
        .hero-btns { display: flex; gap: 10px; flex-wrap: wrap; }
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

        /* ── PROCUREMENT SCAN STRIP (under hero, above-the-fold) ── */
        .procurement-scan {
          max-width: var(--max-w); margin: 0 auto;
          padding: 14px var(--px);
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,.016);
          display: flex;
          align-items: center;
          gap: clamp(14px, 2.2vw, 32px);
          flex-wrap: wrap;
        }
        .ps-item {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
        }
        .ps-label {
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
        }
        .ps-value {
          font-size: 12.5px;
          color: var(--text-1);
          font-weight: 500;
          letter-spacing: .005em;
          font-variant-numeric: tabular-nums;
        }
        .ps-divider {
          width: 1px; height: 14px;
          background: var(--border);
        }
        .ps-cta {
          margin-left: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid rgba(94,234,212,.30);
          background: rgba(94,234,212,.04);
          color: var(--teal);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: .02em;
          text-decoration: none;
          transition: background .18s, border-color .18s;
        }
        .ps-cta:hover {
          background: rgba(94,234,212,.08);
          border-color: rgba(94,234,212,.5);
        }
        @media (max-width: 720px) {
          .procurement-scan { gap: 10px 18px; padding: 12px var(--px); }
          .ps-divider { display: none; }
          .ps-cta { margin-left: 0; width: 100%; justify-content: center; }
        }

        /* ── TRUST STRIP (enterprise client signal, between scan and registrations) ── */
        .trust-strip {
          max-width: var(--max-w); margin: 0 auto;
          padding: 18px var(--px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: baseline;
          gap: clamp(14px, 2vw, 32px);
          flex-wrap: wrap;
        }
        .trust-label {
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          flex-shrink: 0;
        }
        .trust-list {
          display: flex; flex-wrap: wrap;
          gap: 6px 22px;
          list-style: none;
          padding: 0; margin: 0;
        }
        .trust-list li {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-1);
          letter-spacing: .01em;
          position: relative;
          padding-right: 22px;
        }
        .trust-list li:not(:last-child)::after {
          content: '·';
          position: absolute;
          right: 6px;
          color: var(--text-3);
          font-weight: 400;
        }
        @media (max-width: 560px) {
          .trust-strip { flex-direction: column; align-items: flex-start; gap: 8px; padding: 16px var(--px); }
          .trust-list { gap: 4px 18px; }
          .trust-list li { padding-right: 18px; font-size: 12.5px; }
        }

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
          max-width: 480px; margin-top: 2px;
        }

        /* ── REGISTRATIONS ── */
        .reg-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 12px;
        }
        .reg-item {
          background: var(--bg);
          padding: 18px 20px;
          display: flex; flex-direction: column; gap: 5px;
        }
        .reg-label {
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
        }
        .reg-value {
          font-size: 14px; font-weight: 500;
          color: var(--text-1); letter-spacing: -.005em;
        }
        .reg-split {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 12px;
        }
        .reg-card {
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 18px 20px;
          background: var(--surface);
          transition: border-color .18s;
        }
        .reg-card:hover { border-color: rgba(255,255,255,.14); }
        .reg-card-label {
          font-size: 10px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 12px;
        }
        .reg-list { display: flex; flex-direction: column; }
        .reg-list-row {
          display: flex; align-items: baseline; gap: 14px;
          padding: 9px 0;
          border-top: 1px solid var(--border);
        }
        .reg-list-row:first-child { border-top: none; padding-top: 0; }
        .reg-list-row:last-child { padding-bottom: 0; }
        .reg-list-key {
          font-size: 12.5px; font-weight: 600;
          color: var(--text-1);
          min-width: 56px;
          letter-spacing: .02em;
        }
        .reg-list-val {
          font-size: 12.5px; color: var(--text-2);
          line-height: 1.5;
        }

        /* ── CAPABILITIES (matches services-grid) ── */
        .caps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        /* 9 cards = 3x3. Skip 2-col to avoid orphan; collapse to single column on narrow viewports. */
        @media (max-width: 720px) {
          .caps-grid { grid-template-columns: 1fr; }
        }
        .cap-item {
          background: var(--bg);
          padding: 28px 26px;
          transition: background .2s;
          cursor: default;
        }
        .cap-item:hover { background: var(--bg2); }
        .cap-item:hover .cap-icon { opacity: 1; }
        .cap-item:hover .cap-title { color: #ffffff; }
        .cap-icon {
          color: var(--teal);
          margin-bottom: 16px;
          opacity: .65;
          transition: opacity .2s;
        }
        .cap-title {
          font-size: 14px; font-weight: 600;
          color: #d8e8ff;
          margin-bottom: 9px;
          letter-spacing: -.01em;
          transition: color .2s;
        }
        .cap-desc {
          font-size: 12.5px; line-height: 1.6;
          color: var(--text-2);
        }

        /* ── PAST PERFORMANCE (matches case-card pattern) ── */
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
          align-items: stretch;
        }
        .pp-card {
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 18px;
          background: var(--surface);
          display: flex; flex-direction: column;
          transition: border-color .18s;
        }
        .pp-card:hover { border-color: rgba(255,255,255,.14); }
        .pp-ref {
          font-size: 10px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 4px;
        }
        .pp-client {
          font-size: 15px; font-weight: 500;
          color: var(--text-1); letter-spacing: -.01em;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .pp-rule {
          height: 1px; background: var(--border); margin-bottom: 12px;
        }
        .pp-text {
          font-size: 12.5px; line-height: 1.6; color: var(--text-2);
        }

        /* ── WHY ALERON (matches homepage why-grid) ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          column-gap: 32px;
          row-gap: 0;
        }
        .why-item {
          padding: 16px 0;
          border-top: 1px solid var(--border-t);
        }
        .why-title {
          font-size: 13.5px; font-weight: 600;
          color: var(--text-1);
          margin-bottom: 6px;
        }
        .why-body {
          font-size: 13px; line-height: 1.65;
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
          color: var(--text-1); max-width: 480px;
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
      <SiteNav active="government" />

      {/* ── Hero ── */}
      <section className="hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="hero-label" variants={fadeUp} custom={0}>
            Government &amp; Public Sector · VOSB · SAM Registered · Compliance-Aware
          </motion.div>
          <motion.h1 variants={fadeUp} custom={0.05}>
            Government Focused Salesforce Operations &amp;{' '}
            <span>Release Governance</span>
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
            Senior-level Salesforce administration, workflow modernization, release governance, and enterprise operational support for commercial and public sector environments.
          </motion.p>
          <motion.div className="hero-btns" variants={fadeUp} custom={0.15}>
            <a
              href="/docs/Aleron_Federal_Capability_Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={trackCapabilityStatementDownload}
            >
              <Download size={14} /> Download Capability Statement
            </a>
            <a href="/contact" className="btn-ghost">
              Contact Aleron <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Procurement Scan Strip ── */}
      <motion.div
        className="procurement-scan"
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-label="Procurement identifiers"
      >
        {procurementScan.map((item, idx) => (
          <Fragment key={item.label}>
            <div className="ps-item">
              <span className="ps-label">{item.label}</span>
              <span className="ps-value">{item.value}</span>
            </div>
            {idx < procurementScan.length - 1 && <span className="ps-divider" aria-hidden="true" />}
          </Fragment>
        ))}
        <a
          href="/docs/Aleron_Federal_Capability_Statement.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ps-cta"
          onClick={trackCapabilityStatementDownload}
        >
          <Download size={12} /> Capability Statement (PDF)
        </a>
      </motion.div>

      {/* ── Trust Strip (enterprise client signal) ── */}
      <motion.div
        className="trust-strip"
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-label="Enterprise and regulated environment experience"
      >
        <div className="trust-label">Enterprise &amp; Regulated Environment Experience</div>
        <ul className="trust-list">
          {trustStripClients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </motion.div>

      {/* ── Registrations & Identifiers ── */}
      <div className="section-alt">
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Registrations &amp; Identifiers</div>
          <h2 className="section-h2">Government registration information</h2>
          <p className="section-sub">
            Procurement identifiers, federal codes, and engagement structures for contracting officers and prime partners.
          </p>
        </motion.div>

        <motion.div className="reg-grid" variants={stagger}>
          {identifiers.map((i) => (
            <motion.div key={i.label} className="reg-item" variants={itemFade}>
              <div className="reg-label">{i.label}</div>
              <div className="reg-value">{i.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="reg-split" variants={stagger}>
          <motion.div className="reg-card" variants={itemFade}>
            <div className="reg-card-label">NAICS Codes</div>
            <div className="reg-list">
              {naicsCodes.map((n) => (
                <div key={n.code} className="reg-list-row">
                  <div className="reg-list-key">{n.code}</div>
                  <div className="reg-list-val">{n.title}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="reg-card" variants={itemFade}>
            <div className="reg-card-label">Engagement Models</div>
            <p
              style={{
                fontSize: '12.5px',
                lineHeight: 1.6,
                color: 'var(--text-2)',
                marginBottom: '12px',
              }}
            >
              Flexible contract structures aligned to operational support, project delivery, and ongoing platform governance.
            </p>
            <div className="reg-list">
              {engagementModels.map((m) => (
                <div key={m} className="reg-list-row">
                  <div className="reg-list-val" style={{ color: 'var(--text-1)', fontWeight: 500 }}>
                    {m}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      </div>

      {/* ── Core Capabilities ── */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Core Capabilities</div>
          <h2 className="section-h2">Operational Salesforce and CRM services</h2>
          <p className="section-sub">
            Structured operational practices aligned to controlled deployment, change governance, and audit-aware environments across commercial and public sector Salesforce platforms.
          </p>
        </motion.div>

        <motion.div className="caps-grid" variants={stagger}>
          {capabilities.map((c) => (
            <motion.div key={c.title} className="cap-item" variants={itemFade}>
              <div className="cap-icon">{c.icon}</div>
              <div className="cap-title">{c.title}</div>
              <div className="cap-desc">{c.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Past Performance ── */}
      <div className="section-alt">
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Past Performance</div>
          <h2 className="section-h2">Selected enterprise engagements</h2>
          <p className="section-sub">
            Representative engagements supporting enterprise Salesforce operations across regulated, financial, and global organizations.
          </p>
        </motion.div>

        <motion.div className="pp-grid" variants={stagger}>
          {pastPerformance.map((p) => (
            <motion.div key={p.ref} className="pp-card" variants={itemFade}>
              <div className="pp-ref">{p.ref}</div>
              <div className="pp-client">{p.client}</div>
              <div className="pp-rule" />
              <div className="pp-text">{p.summary}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </div>

      {/* ── Why Aleron ── */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Why Aleron</div>
          <h2 className="section-h2">What sets the engagement apart</h2>
        </motion.div>

        <motion.div className="why-grid" variants={stagger}>
          {whyAleron.map((w) => (
            <motion.div key={w.heading} className="why-item" variants={itemFade}>
              <div className="why-title">{w.heading}</div>
              <div className="why-body">{w.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Capability Statement CTA ── */}
      <motion.div
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={fadeUp}
        custom={0}
      >
        <div className="cta-inner">
          <div className="cta-label">Federal Capability Statement</div>
          <h2 className="cta-h2">
            Download the Federal Capability Statement.
          </h2>
          <p className="cta-sub">
            A single-page overview of services, identifiers, NAICS codes, engagement structures, and past performance. For teaming opportunities, procurement questions, or subcontracting discussions, reach out directly.
          </p>
          <div className="cta-btns">
            <a
              href="/docs/Aleron_Federal_Capability_Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={trackCapabilityStatementDownload}
            >
              <Download size={14} /> Federal Capability Statement (PDF)
            </a>
            <a href="/contact" className="btn-ghost">
              Contact Aleron <ArrowRight size={14} />
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
