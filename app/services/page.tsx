'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  GitBranch,
  Users,
  LifeBuoy,
  Cable,
  FlaskConical,
  BarChart3,
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

const services = [
  {
    icon: <ShieldCheck size={18} />,
    title: 'Salesforce Administration',
    description:
      'Ongoing platform administration across enterprise Salesforce orgs. Roles, profiles, permission sets, validation rules, and configuration changes performed against production with senior-level review.',
    examples: 'User access reviews · Security model maintenance · Data hygiene · Configuration changes',
  },
  {
    icon: <Workflow size={18} />,
    title: 'Workflow Governance & Automation',
    description:
      'Flow Builder development and migration of legacy Workflow Rules and Process Builders into consolidated, documented automation. Built to be maintained, not just delivered.',
    examples: 'Process Builder migration · Flow consolidation · Automation debugging · Documentation',
  },
  {
    icon: <GitBranch size={18} />,
    title: 'Release Governance & DevOps Coordination',
    description:
      'Deployment coordination across Dev, QA, UAT, and Production environments using Gearset and AutoRABIT with change control practices suited to regulated environments.',
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
    title: 'Enterprise System Integration Support',
    description:
      'Ongoing administration and coordination of middleware integrations including Workato, Celigo, and direct API connections between Salesforce and adjacent enterprise systems.',
    examples: 'Workato recipes · Celigo flows · API connections · Integration migrations',
  },
  {
    icon: <LifeBuoy size={18} />,
    title: 'CRM Operational Support',
    description:
      'Steady-state platform support covering user requests, defect triage, data hygiene, and recurring administrative work across business units.',
    examples: 'Tier 2/3 support · Defect triage · Data corrections · Recurring admin work',
  },
  {
    icon: <FlaskConical size={18} />,
    title: 'Sandbox & UAT Coordination',
    description:
      'Sandbox lifecycle management, refresh planning, and structured UAT coordination aligned with release windows and stakeholder sign-off.',
    examples: 'Refresh planning · UAT scripts · Stakeholder coordination · Release readiness',
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Operational Reporting & Platform Visibility',
    description:
      'Reporting, dashboards, and process review focused on surfacing operational signal for business owners and reducing manual operational overhead.',
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
    body: 'The person scoping the work is the person performing it. No account managers between you and delivery. No junior resources placed on production systems.',
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
    heading: 'Production Release Governance',
    body: 'Hands-on with the deployment and integration tooling that runs enterprise CRM environments: Gearset, AutoRABIT, Workato, Celigo, GitHub, and Data Loader across production pipelines.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
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
      <SiteNav active="services" />

      {/* ── Hero ── */}
      <section className="hero">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="hero-label" variants={fadeUp} custom={0}>
            Enterprise CRM Operations · Release Governance · Production Platform Support
          </motion.div>
          <motion.h1 variants={fadeUp} custom={0.05}>
            Operational Salesforce support, automation modernization, and{' '}
            <span>release governance</span> for enterprise environments.
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
            Senior-level platform work delivered directly. No layered account management, no junior resources on production systems. Engagements scoped to fit the operational reality of the environment.
          </motion.p>
          <motion.div className="hero-btns" variants={fadeUp} custom={0.15}>
            <a
              href="https://calendly.com/bogdan-aleronsystems/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => {
                try {
                  posthog.capture('calendly_opened', {
                    source: 'services_page',
                    cta: 'Book a Consultation',
                  });
                } catch {
                  // Swallow analytics errors so navigation is never blocked.
                }
              }}
            >
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
            Service areas built around operating live enterprise Salesforce environments. Each capability is delivered with direct senior involvement and against the operational reality of the platform.
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
