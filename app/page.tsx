'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Zap, TrendingUp, GitMerge, Server } from 'lucide-react';

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

const metrics = [
  { value: '15+', label: 'Years Salesforce Experience' },
  { value: '2,000+', label: 'Platform Users Supported' },
  { value: 'Veteran', label: 'Owned Business' },
  { value: 'Gearset', label: 'Certified Specialist' },
];

const services = [
  {
    icon: <BarChart3 size={18} />,
    title: 'Salesforce Administration',
    description: 'Roles, profiles, permission sets, page layouts, validation rules, and ongoing platform configuration for enterprise Salesforce orgs.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Flow & Automation Modernization',
    description: 'Flow Builder development, migration of legacy Workflow Rules and Process Builders to Flow, and automation debugging across sandbox and production.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Experience Cloud & Integrations',
    description: 'Customer portal configuration, external user access, and enterprise integrations with third-party platforms using Workato, Celigo, and native connectors.',
  },
  {
    icon: <GitMerge size={18} />,
    title: 'Release Governance & DevOps',
    description: 'Deployment coordination across Dev, QA, UAT, and Production using Gearset and AutoRABIT, with change management practices suited to regulated environments.',
  },
  {
    icon: <Server size={18} />,
    title: 'Platform Operations & Support',
    description: 'Ongoing operational support for enterprise Salesforce environments, including data management, metadata migrations, and production stability.',
  },
];

const whyAleron = [
  {
    heading: '15 Years of Direct Platform Work',
    body: 'Hands-on Salesforce administration across enterprise orgs — including a single engagement supporting 2,000+ users over eight years. Not advisory. Not oversight.',
  },
  {
    heading: 'Regulated Environment Experience',
    body: 'Supported Salesforce and CI/CD operations where deployment documentation, change control, and audit-readiness are required — including FDA 21 CFR Part 11 aligned practices.',
  },
  {
    heading: 'Certified in the Tools That Matter',
    body: 'Gearset Certified Deployment Specialist. Workato Automation Pro I & II. Hands-on with AutoRABIT, Celigo, GitHub, and Data Loader.',
  },
  {
    heading: 'Senior Work, Directly Delivered',
    body: 'No account managers. No junior resources on production systems. Every engagement is handled personally at the senior level.',
  },
];

const caseStudies = [
  {
    ref: 'Qlik',
    client: 'Global Analytics Platform',
    years: '2017 – 2026',
    challenge: 'Enterprise org serving 2,000+ global users with accumulated legacy automation, fragmented Experience Cloud configurations, and growing deployment complexity.',
    solution: 'Full Salesforce administration, Flow migration from legacy Workflow Rules, Experience Cloud portal operations, enterprise integrations, and Gearset-managed deployments across Dev, QA, UAT, and Production.',
    outcome: 'Eight years of stable, governed platform operations with modernized automation.',
  },
  {
    ref: 'UL Solutions',
    client: 'Life Sciences Division',
    years: '2011 – 2017',
    challenge: 'Regulated life sciences environment requiring Salesforce support and CI/CD operations for ComplianceWire, aligned to FDA standards.',
    solution: 'Salesforce administration for Sales and Marketing, then DevOps support with AutoRABIT pipeline migration, validation documentation, and controlled deployments aligned with FDA 21 CFR Part 11 governance practices.',
    outcome: 'Audit-ready deployment operations with validation documentation meeting regulatory requirements.',
  },
  {
    ref: 'BankUnited',
    client: 'Regulated Financial Institution',
    years: '2023',
    challenge: 'Regulated financial services environment requiring deployment governance and controlled release coordination for Salesforce and nCino.',
    solution: 'AutoRABIT pipeline operations, release validation, post-deployment stabilization, and change control documentation aligned with compliance requirements.',
    outcome: 'Controlled, audit-ready release operations sustaining production stability.',
  },
  {
    ref: 'Aptos',
    client: 'Retail Technology Platform',
    years: 'Contract',
    challenge: 'Scaling Salesforce environment requiring consistent administration, integration support, and workflow operations.',
    solution: 'Salesforce administration, integration maintenance, and workflow improvements to sustain reliability as operational demands grew.',
    outcome: 'Stable platform operations with supportable integrations through growth.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomePage() {
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
          --fs-h1:     clamp(32px, 4vw, 58px);
          --fs-h2:     clamp(22px, 2.5vw, 34px);
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
          height: 112px;
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
          width: 253px;
          height: auto;
          display: block;
        }
        @media (max-width: 768px) {
          .nav-inner { height: 88px; padding: 0 20px; }
          .nav-logo-img { width: 187px; }
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
        @media (max-width: 600px) { .nav-links { display: none; } }

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
          max-width: 760px;
          margin-bottom: 14px;
        }
        .hero h1 span { color: var(--teal); }
        .hero-sub {
          font-size: clamp(13.5px, 1.2vw, 15px);
          line-height: 1.65;
          color: var(--text-2);
          max-width: 500px;
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

        /* ── HERO LAYOUT ── (unused class removed) */

        /* ── METRICS ── */
        .metrics {
          max-width: var(--max-w); margin: 0 auto;
          padding: 0 var(--px);
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 640px) { .metrics { grid-template-columns: repeat(2, 1fr); } }
        .metric {
          padding: 22px 16px;
          border-right: 1px solid var(--border);
          text-align: center;
        }
        .metric:last-child { border-right: none; }
        @media (max-width: 640px) {
          .metric:nth-child(2) { border-right: none; }
          .metric:nth-child(3) { border-right: 1px solid var(--border); }
          .metric:nth-child(3), .metric:nth-child(4) { border-top: 1px solid var(--border); }
        }
        .metric-val {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 300;
          letter-spacing: -.02em;
          color: var(--text-1);
          margin-bottom: 5px;
        }
        .metric-lbl {
          font-size: 10px; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase;
          color: var(--text-3);
        }

        /* ── SECTION COMMON ── */
        .section {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(28px,3.5vw,44px) var(--px);
          border-bottom: 1px solid var(--border);
        }
        /* Alternating section surfaces */
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
          max-width: 480px;
        }
        .section-sub {
          font-size: 13px; line-height: 1.6; color: var(--text-2);
          max-width: 400px; margin-top: 2px;
        }

        /* ── SERVICES ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        .service-item {
          background: var(--bg);
          padding: 28px 26px;
          transition: background .2s;
          cursor: default;
        }
        .service-item:hover { background: var(--bg2); }
        .service-item:hover .svc-icon { opacity: 1; }
        .service-item:hover .svc-title { color: #ffffff; }
        .svc-icon {
          color: var(--teal);
          margin-bottom: 16px;
          opacity: .65;
          transition: opacity .2s;
        }
        .svc-title {
          font-size: 14px; font-weight: 600;
          color: #d8e8ff;
          margin-bottom: 9px;
          letter-spacing: -.01em;
          transition: color .2s;
        }
        .svc-desc {
          font-size: 12.5px; line-height: 1.6;
          color: var(--text-2);
        }

        /* ── WHY ALERON ── */
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

        /* ── CASE STUDIES ── */
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
          align-items: stretch;
        }
        .case-card {
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 18px;
          background: var(--surface);
          display: flex; flex-direction: column;
          transition: border-color .18s;
        }
        .case-card:hover { border-color: rgba(255,255,255,.14); }
        .case-head { margin-bottom: 12px; }
        .case-ref {
          font-size: 10px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 4px;
          display: flex; align-items: center; gap: 8px;
        }
        .case-years {
          font-weight: 400; letter-spacing: .06em;
          color: var(--text-3); text-transform: none;
        }

        /* ── FOUNDER ── */
        .founder {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(28px,3.5vw,44px) var(--px);
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(28px, 4vw, 64px);
          align-items: start;
        }
        @media (max-width: 720px) {
          .founder { grid-template-columns: 1fr; gap: 24px; }
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
          max-width: 460px;
        }
        .founder-bio p { margin-bottom: 12px; }
        .founder-bio p:last-child { margin-bottom: 0; }
        .founder-creds {
          display: flex; flex-direction: column;
          padding-top: 4px;
        }
        .cred-item {
          display: flex; flex-direction: column; gap: 2px;
          padding: 12px 0;
          border-top: 1px solid var(--border);
        }
        .cred-item:first-child { border-top: none; padding-top: 0; }
        .cred-label {
          font-size: 10px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase; color: var(--text-3);
        }
        .cred-value {
          font-size: 13.5px; color: var(--text-1); font-weight: 400;
          line-height: 1.4;
        }
        .case-name {
          font-size: 15px; font-weight: 500;
          color: var(--text-1); letter-spacing: -.01em;
          line-height: 1.3;
        }
        .case-rule { height: 1px; background: var(--border); margin-bottom: 12px; }
        .case-blocks { display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .case-block { display: flex; flex-direction: column; gap: 3px; }
        .case-lbl {
          font-size: 10px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase; color: var(--text-3);
        }
        .case-txt { font-size: 12.5px; line-height: 1.6; color: var(--text-2); }
        .case-outcome {
          font-size: 12.5px; line-height: 1.55;
          color: var(--teal);
          padding: 9px 11px;
          border-radius: 6px;
          background: rgba(94,234,212,.05);
          border: 1px solid rgba(94,234,212,.1);
          margin-top: 12px;
        }

        /* ── CTA ── */
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
          color: var(--text-1); max-width: 420px;
          margin-bottom: 8px;
        }
        .cta-sub {
          font-size: 13.5px; line-height: 1.6; color: var(--text-2);
          max-width: 460px; margin-bottom: 18px;
        }

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
          <a href="/" className="nav-logo">
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
        </div>
      </motion.header>

      {/* ── Hero ── */}
      <section className="hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="hero-label" variants={fadeUp} custom={0}>
            Salesforce Administration · Flow Automation · Release Governance
          </motion.div>
          <motion.h1 variants={fadeUp} custom={0.05}>
            Enterprise Salesforce Operations &amp;{' '}
            <span>Release Governance</span>
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
            Senior-level Salesforce administration, workflow automation, and deployment
            governance for enterprise environments. Hands-on platform work. Compliance-aware.
            No junior handoffs.
          </motion.p>
          <motion.div className="hero-btns" variants={fadeUp} custom={0.15}>
            <a href="/contact" className="btn-primary">
              Book a Consultation <ArrowRight size={14} />
            </a>
            <a href="/services" className="btn-ghost">
              View Services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Metrics ── */}
      <motion.div
        className="metrics"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        {metrics.map((m) => (
          <motion.div key={m.label} className="metric" variants={itemFade}>
            <div className="metric-val">{m.value}</div>
            <div className="metric-lbl">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Services ── */}
      <div className="section-alt">
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Core Services</div>
          <h2 className="section-h2">Platform operations built on direct enterprise experience</h2>
          <p className="section-sub">
            Focused Salesforce and operational services. No broad consulting engagements.
          </p>
        </motion.div>

        <motion.div className="services-grid" variants={stagger}>
          {services.map((s) => (
            <motion.div key={s.title} className="service-item" variants={itemFade}>
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.description}</div>
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
          <h2 className="section-h2">Senior Salesforce work, directly delivered</h2>
          <p className="section-sub">
            15 years of hands-on platform operations. Not advisory. Not oversight.
          </p>
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
          <div className="founder-label">About</div>
          <div className="founder-name">Bogdan Alekseyenko</div>
          <div className="founder-title">Founder, Aleron Systems LLC</div>
          <div className="founder-bio">
            <p>
              15 years of hands-on Salesforce administration across enterprise and regulated
              environments. Aleron Systems brings that experience directly to clients who need
              senior-level platform work done reliably, without the overhead of a large firm.
            </p>
            <p>
              Background covers Salesforce administration, Flow modernization, Experience Cloud,
              enterprise integrations, DevOps support, and FDA 21 CFR Part 11 aligned deployment
              practices. Veteran-owned. U.S. Army, Operation Iraqi Freedom.
            </p>
          </div>
        </motion.div>
        <motion.div className="founder-creds" variants={stagger}>
          {[
            { label: 'Certifications', value: 'Gearset Certified Deployment Specialist\nWorkato Automation Pro I & II' },
            { label: 'Tools', value: 'Gearset, AutoRABIT, Workato, Celigo, GitHub, Data Loader' },
            { label: 'Platforms', value: 'Salesforce Sales Cloud, Service Cloud, Experience Cloud, nCino' },
            { label: 'Industries', value: 'Life Sciences, Financial Services, Retail Technology, Analytics' },
            { label: 'Military Service', value: 'U.S. Army, Cavalry Scout E4\nOperation Iraqi Freedom' },
          ].map((c) => (
            <motion.div key={c.label} className="cred-item" variants={itemFade}>
              <div className="cred-label">{c.label}</div>
              <div className="cred-value" style={{ whiteSpace: 'pre-line' }}>{c.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </div>

      {/* ── Case Studies ── */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Proven Experience</div>
          <h2 className="section-h2">Enterprise and regulated environment engagements</h2>
          <p className="section-sub">
            Selected platform operations work across enterprise, financial services, and life sciences.
          </p>
        </motion.div>

        <motion.div className="cases-grid" variants={stagger}>
          {caseStudies.map((c) => (
            <motion.div key={c.ref} className="case-card" variants={itemFade}>
              <div className="case-head">
                <div className="case-ref">{c.ref} <span className="case-years">{c.years}</span></div>
                <div className="case-name">{c.client}</div>
              </div>
              <div className="case-rule" />
              <div className="case-blocks">
                <div className="case-block">
                  <div className="case-lbl">Context</div>
                  <div className="case-txt">{c.challenge}</div>
                </div>
                <div className="case-block">
                  <div className="case-lbl">Work Performed</div>
                  <div className="case-txt">{c.solution}</div>
                </div>
              </div>
              <div className="case-outcome">{c.outcome}</div>
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
            Let's discuss your Salesforce and platform operations needs.
          </h2>
          <p className="cta-sub">
            Whether you need ongoing Salesforce administration, release governance support,
            or workflow automation, we bring senior-level platform expertise directly to your environment.
          </p>
          <a href="/contact" className="btn-primary">
            Start the Conversation <ArrowRight size={14} />
          </a>
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
