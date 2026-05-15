'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Menu,
  X,
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
  { label: 'Business Status', value: 'Veteran-Owned Small Business' },
  { label: 'Entity', value: 'Pennsylvania Registered LLC' },
];

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

export default function GovernmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        /* ── NAV ── */
        .nav {
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(2,8,23,.92);
          backdrop-filter: blur(12px);
          position: sticky; top: 0; z-index: 50;
        }
        .nav-inner {
          max-width: 1280px;
          height: 132px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          line-height: 0;
        }
        .nav-logo-img {
          width: 447px;
          height: auto;
          display: block;
          max-width: 60vw;
        }
        @media (max-width: 768px) {
          .nav-inner { height: 100px; padding: 0 20px; }
          .nav-logo-img { width: 313px; }
        }
        @media (max-width: 420px) {
          .nav-inner { height: 88px; }
          .nav-logo-img { width: 270px; }
        }
        .nav-links {
          display: flex; gap: 32px; align-items: center; list-style: none;
        }
        .nav-links a {
          color: var(--text-2); text-decoration: none;
          font-size: 13px; font-weight: 500; letter-spacing: .04em;
          transition: color .18s;
        }
        .nav-links a:hover { color: var(--text-1); }
        .nav-links a.gov { color: var(--teal); }
        .nav-contact {
          padding: 9px 18px; border-radius: 6px;
          border: 1px solid var(--border);
          color: var(--text-1); background: transparent;
          font-size: 13px; font-weight: 500; text-decoration: none;
          transition: border-color .18s, background .18s;
          display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap;
        }
        .nav-contact:hover { border-color: rgba(94,234,212,.3); background: rgba(94,234,212,.05); }

        /* ── MOBILE MENU TRIGGER ── */
        .nav-mobile-trigger {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 8px;
          color: var(--text-1);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: border-color .18s, background .18s;
        }
        .nav-mobile-trigger:hover { border-color: rgba(94,234,212,.3); }
        .nav-mobile-trigger:focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 2px;
        }

        /* ── MOBILE MENU PANEL ── */
        .nav-mobile-menu {
          position: fixed;
          top: 100px;
          left: 0; right: 0;
          background: rgba(2,8,23,.98);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          z-index: 49;
          overflow: hidden;
        }
        @media (max-width: 420px) {
          .nav-mobile-menu { top: 88px; }
        }
        .nav-mobile-list {
          list-style: none;
          padding: 8px 20px 20px;
          display: flex; flex-direction: column;
        }
        .nav-mobile-list li { border-bottom: 1px solid var(--border); }
        .nav-mobile-list li:last-child { border-bottom: none; }
        .nav-mobile-list a {
          display: block;
          padding: 16px 4px;
          color: var(--text-1);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: .02em;
        }
        .nav-mobile-list a.gov { color: var(--teal); }
        .nav-mobile-list a.cta {
          margin-top: 12px;
          padding: 12px 16px;
          background: var(--teal);
          color: #021a14;
          font-weight: 600;
          border-radius: 6px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-mobile-trigger { display: inline-flex; }
        }

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
      <motion.header
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="nav-inner">
          <a href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <img
              src="/logos/navbar-logo-dark.png"
              alt="Aleron Systems"
              className="nav-logo-img"
            />
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/government" className="gov">Government</a></li>
              <li>
                <a href="/contact" className="nav-contact">
                  Contact <ArrowRight size={12} />
                </a>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="nav-mobile-trigger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              className="nav-mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ul className="nav-mobile-list">
                <li><a href="/services" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="/government" className="gov" onClick={() => setMenuOpen(false)}>Government</a></li>
                <li><a href="/contact" className="cta" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Hero ── */}
      <section className="hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="hero-label" variants={fadeUp} custom={0}>
            Government &amp; Public Sector · Veteran-Owned · Compliance-Aware
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
            >
              <Download size={14} /> Download Capability Statement
            </a>
            <a href="/contact" className="btn-ghost">
              Contact Aleron <ArrowRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </section>

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
            Practical capability areas Aleron supports across commercial and public sector Salesforce environments.
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
          <div className="cta-label">Capability Statement</div>
          <h2 className="cta-h2">
            Procurement, teaming, and subcontracting inquiries welcome.
          </h2>
          <p className="cta-sub">
            Download the capability statement for a complete overview of services, identifiers, and engagement structures. For teaming opportunities, procurement questions, or subcontracting discussions, reach out directly.
          </p>
          <div className="cta-btns">
            <a
              href="/docs/Aleron_Federal_Capability_Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download size={14} /> Download Capability Statement
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
