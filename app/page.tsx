'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Zap, TrendingUp, GitMerge, Server } from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const metrics = [
  { value: '15+', label: 'Years Enterprise Experience' },
  { value: '2,000+', label: 'Users Supported' },
  { value: 'Veteran', label: 'Owned Business' },
  { value: 'Enterprise', label: 'CRM Specialization' },
];

const services = [
  {
    icon: <BarChart3 size={18} />,
    title: 'CRM Solutions',
    description: 'Salesforce administration, optimization, and enterprise CRM operations for global teams.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Workflow Automation',
    description: 'Process automation and integration architecture that reduces manual overhead at scale.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Business Process Improvement',
    description: 'Operational analysis, workflow redesign, and reporting that drives measurable efficiency.',
  },
  {
    icon: <GitMerge size={18} />,
    title: 'DevOps & Release Governance',
    description: 'Controlled deployment pipelines, CI/CD governance, and structured release management.',
  },
  {
    icon: <Server size={18} />,
    title: 'Enterprise Platform Support',
    description: 'Ongoing administration and integrations for enterprise platforms in compliance-critical environments.',
  },
];

const whyAleron = [
  {
    heading: 'Deep Enterprise CRM Experience',
    body: 'Over 15 years supporting large-scale Salesforce environments across global operations — as a focused CRM specialist, not a generalist.',
  },
  {
    heading: 'Compliance-Focused Governance',
    body: 'Supported enterprise systems in highly regulated environments requiring controlled operational processes, including FDA 21 CFR Part 11 aligned practices.',
  },
  {
    heading: 'Senior-Level Engagement',
    body: 'Every engagement is handled at the senior level. No junior handoffs, no account managers — direct expertise from day one.',
  },
  {
    heading: 'Global Salesforce Operations',
    body: 'Hands-on experience supporting Salesforce platforms serving international business teams across multiple regions and complex operational structures.',
  },
];

const caseStudies = [
  {
    ref: 'Qlik',
    client: 'Analytics Platform Provider',
    challenge: 'Legacy workflow processes creating bottlenecks across global sales operations.',
    solution: 'Redesigned CRM workflows and automation architecture to reduce manual touchpoints and unify data across regional teams.',
    outcome: 'Streamlined sales cycle management and improved cross-team operational visibility.',
  },
  {
    ref: 'UL Solutions',
    client: 'Safety Science Organization',
    challenge: 'Fragmented enterprise platform support with inconsistent governance across deployment cycles.',
    solution: 'Implemented structured DevOps governance, controlled release processes, and ongoing platform administration.',
    outcome: 'Consistent, audit-ready deployment practices aligned with enterprise compliance requirements.',
  },
  {
    ref: 'BankUnited',
    client: 'Financial Services Institution',
    challenge: 'CRM environment lacking operational maturity and integration with core business processes.',
    solution: 'Delivered Salesforce optimization, integration development, and operational workflow improvements.',
    outcome: 'Increased CRM adoption and data integrity across business units.',
  },
  {
    ref: 'Aptos',
    client: 'Retail Technology Platform',
    challenge: 'Scaling operations requiring enterprise platform support and automation modernization.',
    solution: 'Provided platform support, workflow automation consulting, and process improvement advisory.',
    outcome: 'Reduced operational overhead and improved system reliability at scale.',
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
          position: sticky; top: 0; z-index: 50;
          background: rgba(6,12,22,.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: var(--max-w); margin: 0 auto; padding: 0 var(--px);
          height: 72px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo img { height: 52px; width: auto; display: block; }
        .nav-links {
          display: flex; gap: 28px; align-items: center; list-style: none;
        }
        .nav-links a {
          color: var(--text-2); text-decoration: none;
          font-size: 13px; font-weight: 500; letter-spacing: .04em;
          transition: color .18s;
        }
        .nav-links a:hover { color: var(--text-1); }
        .nav-links a.gov { color: var(--teal); }
        .nav-contact {
          padding: 8px 16px; border-radius: 6px;
          border: 1px solid var(--border);
          color: var(--text-1); background: transparent;
          font-size: 13px; font-weight: 500; text-decoration: none;
          transition: border-color .18s, background .18s;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .nav-contact:hover { border-color: rgba(94,234,212,.3); background: rgba(94,234,212,.05); }
        @media (max-width: 600px) { .nav-links { display: none; } }

        /* ── HERO ── */
        .hero {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(48px,6vw,80px) var(--px) clamp(40px,5vw,64px);
          border-bottom: 1px solid var(--border);
        }
        .hero-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 20px;
        }
        .hero h1 {
          font-size: var(--fs-h1);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -.025em;
          color: var(--text-1);
          max-width: 820px;
          margin-bottom: 20px;
        }
        .hero h1 span { color: var(--teal); }
        .hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.7;
          color: var(--text-2);
          max-width: 600px;
          margin-bottom: 32px;
        }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
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

        /* ── METRICS ── */
        .metrics {
          max-width: var(--max-w); margin: 0 auto;
          padding: 0 var(--px);
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 640px) { .metrics { grid-template-columns: repeat(2, 1fr); } }
        .metric {
          padding: 28px 20px;
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
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 300;
          letter-spacing: -.02em;
          color: var(--text-1);
          margin-bottom: 6px;
        }
        .metric-lbl {
          font-size: 11px; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase;
          color: var(--text-3);
        }

        /* ── SECTION COMMON ── */
        .section {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(40px,5vw,60px) var(--px);
          border-bottom: 1px solid var(--border);
        }
        .section-hd {
          display: flex; flex-direction: column; gap: 8px;
          margin-bottom: 32px;
        }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
        }
        .section-h2 {
          font-size: var(--fs-h2);
          font-weight: 400;
          letter-spacing: -.018em;
          line-height: 1.15;
          color: var(--text-1);
          max-width: 520px;
        }
        .section-sub {
          font-size: 15px; line-height: 1.65; color: var(--text-2);
          max-width: 480px; margin-top: 4px;
        }

        /* ── SERVICES ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        /* 5th item spans 4 cols so it doesn't orphan with empty siblings */
        .service-item:last-child {
          grid-column: 1 / -1;
          max-width: 320px;
        }
        .service-item {
          background: var(--bg);
          padding: 24px;
          transition: background .18s;
        }
        .service-item:hover { background: var(--bg2); }
        .svc-icon {
          color: var(--accent);
          margin-bottom: 14px;
          opacity: .85;
        }
        .svc-title {
          font-size: 15px; font-weight: 500;
          color: var(--text-1);
          margin-bottom: 8px;
          letter-spacing: -.01em;
        }
        .svc-desc {
          font-size: 13.5px; line-height: 1.65;
          color: var(--text-2);
        }

        /* ── WHY ALERON ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }
        .why-item {
          padding: 20px 0;
          border-top: 1px solid var(--border-t);
        }
        .why-title {
          font-size: 14px; font-weight: 600;
          color: var(--text-1);
          margin-bottom: 8px;
        }
        .why-body {
          font-size: 13.5px; line-height: 1.7;
          color: var(--text-2);
        }

        /* ── CASE STUDIES ── */
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 16px;
        }
        .case-card {
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 22px;
          background: var(--surface);
          display: flex; flex-direction: column; gap: 14px;
          transition: border-color .18s;
        }
        .case-card:hover { border-color: rgba(255,255,255,.14); }
        .case-ref {
          font-size: 10px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 3px;
        }
        .case-name {
          font-size: 16px; font-weight: 400;
          color: var(--text-1); letter-spacing: -.01em;
        }
        .case-rule { height: 1px; background: var(--border); }
        .case-block { display: flex; flex-direction: column; gap: 3px; }
        .case-lbl {
          font-size: 10px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase; color: var(--text-3);
        }
        .case-txt { font-size: 13px; line-height: 1.65; color: var(--text-2); }
        .case-outcome {
          font-size: 13px; line-height: 1.65;
          color: var(--teal);
          padding: 10px 12px;
          border-radius: 6px;
          background: rgba(94,234,212,.05);
          border: 1px solid rgba(94,234,212,.1);
        }

        /* ── CTA ── */
        .cta-section {
          max-width: var(--max-w); margin: 0 auto;
          padding: clamp(40px,5vw,60px) var(--px);
        }
        .cta-inner {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: clamp(32px,4vw,48px);
          background: var(--surface);
        }
        .cta-label {
          font-size: 11px; font-weight: 600; letter-spacing: .14em;
          text-transform: uppercase; color: var(--accent);
          margin-bottom: 14px;
        }
        .cta-h2 {
          font-size: clamp(20px, 2.5vw, 30px);
          font-weight: 400; letter-spacing: -.02em; line-height: 1.15;
          color: var(--text-1); max-width: 460px;
          margin-bottom: 12px;
        }
        .cta-sub {
          font-size: 15px; line-height: 1.7; color: var(--text-2);
          max-width: 500px; margin-bottom: 24px;
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
          <a href="/">
            <Image
              src="/logos/navbar-logo-dark.png"
              alt="Aleron Systems"
              width={480}
              height={140}
              priority
              style={{ height: '50px', width: 'auto' }}
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
            CRM · Automation · Process Optimization
          </motion.div>
          <motion.h1 variants={fadeUp} custom={0.05}>
            Streamline Operations Through{' '}
            <span>CRM, Automation</span>{' '}
            &amp; Process Optimization
          </motion.h1>
          <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
            Aleron Systems delivers focused consulting for enterprise CRM platforms, workflow
            automation, and operational improvement. Operationally mature. Compliance-aware.
            Senior-level engagement.
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
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
      >
        <motion.div className="section-hd" variants={itemFade}>
          <div className="section-label">Core Services</div>
          <h2 className="section-h2">Enterprise consulting built around operational outcomes</h2>
          <p className="section-sub">
            Five practice areas grounded in enterprise experience, not template solutions.
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
          <h2 className="section-h2">Credibility earned through enterprise work</h2>
          <p className="section-sub">
            Specific differentiators — not marketing language.
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
          <h2 className="section-h2">Enterprise engagements, measurable outcomes</h2>
          <p className="section-sub">
            Selected examples from past enterprise consulting engagements.
          </p>
        </motion.div>

        <motion.div className="cases-grid" variants={stagger}>
          {caseStudies.map((c) => (
            <motion.div key={c.ref} className="case-card" variants={itemFade}>
              <div>
                <div className="case-ref">{c.ref}</div>
                <div className="case-name">{c.client}</div>
              </div>
              <div className="case-rule" />
              <div className="case-block">
                <div className="case-lbl">Challenge</div>
                <div className="case-txt">{c.challenge}</div>
              </div>
              <div className="case-block">
                <div className="case-lbl">Approach</div>
                <div className="case-txt">{c.solution}</div>
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
            Let's discuss your operational and CRM goals.
          </h2>
          <p className="cta-sub">
            Whether you're optimizing an existing Salesforce environment, modernizing legacy
            workflows, or establishing governance practices for controlled deployments — we're
            ready to engage.
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
