'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
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

const services = [
  {
    icon: <ShieldCheck size={18} />,
    title: 'Salesforce Administration',
    description:
      'Roles, profiles, permission sets, page layouts, validation rules, and ongoing platform configuration across enterprise Salesforce orgs.',
    examples: 'User access reviews · Security model maintenance · Data hygiene · Configuration changes',
  },
  {
    icon: <Workflow size={18} />,
    title: 'Flow & Workflow Modernization',
    description:
      'Flow Builder development and migration of legacy Workflow Rules and Process Builders into consolidated Flow architecture with structured documentation.',
    examples: 'Process Builder migration · Flow consolidation · Automation debugging · Documentation',
  },
  {
    icon: <GitBranch size={18} />,
    title: 'Release Governance & DevOps Coordination',
    description:
      'Deployment coordination across Dev, QA, UAT, and Production environments using Gearset and AutoRABIT with change management suited to regulated work.',
    examples: 'Sandbox pipelines · Change tracking · Rollback planning · Audit-ready releases',
  },
  {
    icon: <Users size={18} />,
    title: 'Experience Cloud Support',
    description:
      'Operational support for partner, customer, and internal communities including access management, page configuration, and ongoing content workflows.',
    examples: 'External user access · Page configuration · Portal operations · Community admin',
  },
  {
    icon: <Cable size={18} />,
    title: 'Enterprise Integrations',
    description:
      'Support and coordination of middleware integrations including Workato, Celigo, and direct API connections between Salesforce and adjacent systems.',
    examples: 'Workato recipes · Celigo flows · API connections · Integration migrations',
  },
  {
    icon: <LifeBuoy size={18} />,
    title: 'CRM Operational Support',
    description:
      'Steady state platform support covering user requests, defect triage, data hygiene, and recurring administrative tasks across business units.',
    examples: 'Tier 2/3 support · Defect triage · Data corrections · Recurring admin work',
  },
  {
    icon: <FlaskConical size={18} />,
    title: 'Sandbox & UAT Coordination',
    description:
      'Sandbox lifecycle management, refresh planning, and structured UAT coordination aligned with release windows and stakeholder sign off.',
    examples: 'Refresh planning · UAT scripts · Stakeholder coordination · Release readiness',
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Operational Reporting & Process Optimization',
    description:
      'Reporting, dashboards, and process review work focused on reducing manual effort and surfacing operational signal for business owners.',
    examples: 'Report development · Dashboards · Process review · Operational metrics',
  },
];

const engagementModels = [
  {
    label: 'Advisory Support',
    body: 'Short-cycle advisory work for teams that need senior input on architecture, automation strategy, or governance practices without ongoing platform ownership.',
  },
  {
    label: 'Project-Based Engagements',
    body: 'Defined scope engagements with clear deliverables. Common for Flow modernization, integration work, release pipeline setup, or platform reviews.',
  },
  {
    label: 'Operational Augmentation',
    body: 'Embedded senior support working alongside internal teams during release cycles, regulated changes, or periods of elevated operational demand.',
  },
  {
    label: 'Ongoing Platform Support',
    body: 'Continuous Salesforce operations covering administration, governance, integration support, and release coordination on a retainer basis.',
  },
];

const whyAleron = [
  {
    heading: 'Senior-Level Direct Engagement',
    body: 'The person scoping the work is the person performing it. No account managers, no junior resources placed on production systems.',
  },
  {
    heading: 'Regulated Environment Experience',
    body: 'Supported Salesforce and CI/CD operations in environments requiring deployment documentation, change control, and FDA 21 CFR Part 11 aligned practices.',
  },
  {
    heading: 'Enterprise Operational Maturity',
    body: '15 years of hands-on Salesforce administration across enterprise environments, including a single engagement supporting 2,000+ users over eight years.',
  },
  {
    heading: 'Deployment Governance Exposure',
    body: 'Gearset Deployment Certified. Workato Automation Pro I & II. Hands-on with AutoRABIT, Celigo, GitHub, and Data Loader across production pipelines.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
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
        .nav-links a.active { color: var(--teal); }
        .nav-links a.gov { color: var(--text-2); }
        .nav-links a.gov:hover { color: var(--text-1); }
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
        .nav-mobile-list a.active { color: var(--teal); }
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
          max-width: 560px;
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

        /* ── SERVICES GRID (matches homepage services-grid; 8 cards lock to 4/2/1) ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        /* 8 cards factor cleanly into 4 / 2 / 1; skipping 3-col avoids orphans. */
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        .service-item {
          background: var(--bg);
          padding: 28px 26px;
          transition: background .2s;
          cursor: default;
          display: flex; flex-direction: column;
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
          margin-bottom: 14px;
        }
        .svc-examples {
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--border);
          font-size: 11.5px; line-height: 1.55;
          color: var(--text-3);
          letter-spacing: .005em;
        }

        /* ── ENGAGEMENT MODELS (cred-item pattern from homepage founder block) ── */
        .eng-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          column-gap: 32px;
          row-gap: 0;
        }
        .eng-item {
          padding: 16px 0;
          border-top: 1px solid var(--border-t);
        }
        .eng-title {
          font-size: 13.5px; font-weight: 600;
          color: var(--text-1);
          margin-bottom: 6px;
        }
        .eng-body {
          font-size: 13px; line-height: 1.65;
          color: var(--text-2);
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
              <li><a href="/services" className="active">Services</a></li>
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
                <li><a href="/services" className="active" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="/government" onClick={() => setMenuOpen(false)}>Government</a></li>
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
            Services · Salesforce Operations · Automation · Release Governance
          </motion.div>
          <motion.h1 variants={fadeUp} custom={0.05}>
            Operational Salesforce support, automation modernization, and{' '}
            <span>release governance</span> for enterprise environments.
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
            Senior-level platform work delivered directly. No layered account management, no junior resources on production systems. Engagements scoped to fit the operational reality of the environment.
          </motion.p>
          <motion.div className="hero-btns" variants={fadeUp} custom={0.15}>
            <a href="/contact" className="btn-primary">
              Book a Consultation <ArrowRight size={14} />
            </a>
            <a href="/government" className="btn-ghost">
              Government Capabilities
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Core Service Grid ── */}
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
          <h2 className="section-h2">Salesforce operations and platform services</h2>
          <p className="section-sub">
            Focused capability areas built around direct enterprise platform experience.
          </p>
        </motion.div>

        <motion.div className="services-grid" variants={stagger}>
          {services.map((s) => (
            <motion.div key={s.title} className="service-item" variants={itemFade}>
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.description}</div>
              <div className="svc-examples">{s.examples}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </div>

      {/* ── How Engagements Work ── */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">How Engagements Work</div>
          <h2 className="section-h2">Engagement models built around operational reality</h2>
          <p className="section-sub">
            Engagements are scoped to the work, not packaged into fixed offerings. Most fall into one of the structures below.
          </p>
        </motion.div>

        <motion.div className="eng-grid" variants={stagger}>
          {engagementModels.map((e) => (
            <motion.div key={e.label} className="eng-item" variants={itemFade}>
              <div className="eng-title">{e.label}</div>
              <div className="eng-body">{e.body}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Why Aleron ── */}
      <div className="section-alt">
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
            15 years of hands-on platform operations across enterprise and regulated environments. Not advisory. Not oversight.
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
      </div>

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
            Whether you need ongoing administration, release governance support, or workflow automation, we bring senior-level platform expertise directly to your environment.
          </p>
          <div className="cta-btns">
            <a href="/contact" className="btn-primary">
              Start the Conversation <ArrowRight size={14} />
            </a>
            <a href="/government" className="btn-ghost">
              Government Capabilities
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
