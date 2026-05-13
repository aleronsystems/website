'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Shield, Zap, BarChart3, GitMerge, Server } from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const metrics = [
  { value: '15+', label: 'Years Enterprise Experience' },
  { value: '2,000+', label: 'Users Supported' },
  { value: 'Veteran', label: 'Owned Consulting Firm' },
  { value: 'Enterprise', label: 'CRM Specialization' },
];

const services = [
  {
    icon: <BarChart3 size={22} />,
    title: 'CRM Solutions',
    description:
      'Salesforce administration, optimization, and enterprise CRM strategy for global business operations.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Workflow Automation',
    description:
      'Eliminate manual overhead through intelligent process automation and integration architecture.',
  },
  {
    icon: <ArrowUpRight size={22} />,
    title: 'Business Process Improvement',
    description:
      'Operational analysis, workflow redesign, and reporting frameworks that drive measurable efficiency.',
  },
  {
    icon: <GitMerge size={22} />,
    title: 'DevOps & Release Governance',
    description:
      'Controlled deployment pipelines, CI/CD governance, and structured release management practices.',
  },
  {
    icon: <Server size={22} />,
    title: 'Enterprise Platform Support',
    description:
      'Ongoing administration and integrations for enterprise platforms in regulated, compliance-critical environments.',
  },
];

const whyAleron = [
  {
    heading: 'Deep Enterprise CRM Experience',
    body: 'Over 15 years supporting large-scale Salesforce environments across global operations — not as a generalist, but as a focused CRM specialist.',
  },
  {
    heading: 'Compliance-Focused Governance',
    body: 'Supported enterprise systems in highly regulated environments requiring controlled operational processes, including FDA 21 CFR Part 11 aligned practices.',
  },
  {
    heading: 'Senior-Level Engagement',
    body: 'Every engagement is handled at the senior level. No junior handoffs, no account managers as middlemen — direct expertise from day one.',
  },
  {
    heading: 'Global Salesforce Operations',
    body: 'Hands-on experience supporting Salesforce platforms serving international business teams across multiple regions and complex operational structures.',
  },
];

const caseStudies = [
  {
    client: 'Analytics Platform Provider',
    ref: 'Qlik',
    challenge: 'Legacy workflow processes creating bottlenecks across global sales operations.',
    solution: 'Redesigned CRM workflows and automation architecture to reduce manual touchpoints and unify data across regional teams.',
    outcome: 'Streamlined sales cycle management and improved cross-team operational visibility.',
  },
  {
    client: 'Safety Science Organization',
    ref: 'UL Solutions',
    challenge: 'Fragmented enterprise platform support with inconsistent governance across deployment cycles.',
    solution: 'Implemented structured DevOps governance, controlled release processes, and ongoing platform administration support.',
    outcome: 'Consistent, audit-ready deployment practices aligned with enterprise compliance requirements.',
  },
  {
    client: 'Financial Services Institution',
    ref: 'BankUnited',
    challenge: 'CRM environment lacking operational maturity and integration with core business processes.',
    solution: 'Delivered Salesforce optimization, integration development, and operational workflow improvements.',
    outcome: 'Increased CRM adoption and data integrity across business units.',
  },
  {
    client: 'Retail Technology Platform',
    ref: 'Aptos',
    challenge: 'Rapidly scaling operations requiring enterprise platform support and automation modernization.',
    solution: 'Provided ongoing enterprise platform support, workflow automation consulting, and process improvement advisory.',
    outcome: 'Reduced operational overhead and improved system reliability as the business scaled.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="home-root">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --teal:       #5eead4;
          --teal-dim:   rgba(94,234,212,.15);
          --teal-line:  rgba(94,234,212,.18);
          --sky:        #38bdf8;
          --bg:         #050b14;
          --surface:    rgba(11,20,38,.80);
          --surface-2:  rgba(15,26,48,.70);
          --border:     rgba(94,234,212,.12);
          --border-h:   rgba(94,234,212,.28);
          --text-1:     #f0f6ff;
          --text-2:     #94a3b8;
          --text-3:     #64748b;
          --max-w:      1240px;
          --px:         clamp(20px, 4vw, 48px);
        }

        .home-root {
          min-height: 100vh;
          background: var(--bg);
          background-image:
            radial-gradient(ellipse 60% 40% at 10% -5%, rgba(56,189,248,.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 35% at 90% 5%, rgba(94,234,212,.06) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 50% 100%, rgba(94,234,212,.04) 0%, transparent 50%);
          color: var(--text-1);
          font-family: 'Georgia', 'Times New Roman', serif;
          overflow-x: hidden;
        }

        /* ── Nav ── */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(5,11,20,.88);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: 0 var(--px);
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .nav-logo { display: flex; align-items: center; }
        .nav-logo img { height: 44px; width: auto; display: block; }
        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
          list-style: none;
        }
        .nav-links a {
          color: var(--text-2);
          text-decoration: none;
          font-family: 'Arial', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          transition: color .2s;
        }
        .nav-links a:hover { color: var(--text-1); }
        .nav-links a.accent { color: var(--teal); }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          border-radius: 8px;
          background: var(--teal-dim);
          border: 1px solid var(--teal-line);
          color: var(--teal);
          font-family: 'Arial', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background .2s, border-color .2s;
        }
        .nav-cta:hover { background: rgba(94,234,212,.22); border-color: rgba(94,234,212,.4); }

        /* ── Hero ── */
        .hero {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: clamp(60px, 8vw, 100px) var(--px) clamp(50px, 6vw, 80px);
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Arial', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 28px;
        }
        .hero-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--teal);
        }
        .hero h1 {
          font-size: clamp(38px, 5.5vw, 78px);
          line-height: 1.0;
          letter-spacing: -.03em;
          font-weight: 400;
          color: var(--text-1);
          max-width: 900px;
          margin-bottom: 28px;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--teal);
        }
        .hero-sub {
          font-family: 'Arial', sans-serif;
          font-size: clamp(16px, 1.8vw, 19px);
          line-height: 1.7;
          color: var(--text-2);
          max-width: 680px;
          margin-bottom: 40px;
          font-weight: 400;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 26px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--teal), var(--sky));
          color: #021014;
          font-family: 'Arial', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: .02em;
          text-decoration: none;
          box-shadow: 0 6px 32px rgba(56,189,248,.16);
          transition: opacity .2s, transform .2s;
        }
        .btn-primary:hover { opacity: .9; transform: translateY(-1px); }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 26px;
          border-radius: 10px;
          border: 1px solid var(--border-h);
          color: var(--text-1);
          background: var(--surface);
          font-family: 'Arial', sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: border-color .2s, background .2s;
        }
        .btn-ghost:hover { border-color: rgba(94,234,212,.4); background: var(--surface-2); }

        /* ── Divider ── */
        .divider {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: 0 var(--px);
        }
        .divider hr {
          border: none;
          border-top: 1px solid var(--border);
        }

        /* ── Metrics ── */
        .metrics {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: clamp(40px,5vw,64px) var(--px);
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        @media (max-width: 720px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .metric-cell {
          background: var(--surface);
          padding: 32px 24px;
          text-align: center;
        }
        .metric-value {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 300;
          letter-spacing: -.03em;
          color: var(--text-1);
          line-height: 1;
          margin-bottom: 10px;
        }
        .metric-label {
          font-family: 'Arial', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--text-3);
        }

        /* ── Section Header ── */
        .section-wrap {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: clamp(48px,6vw,80px) var(--px);
        }
        .section-label {
          font-family: 'Arial', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 16px;
        }
        .section-h2 {
          font-size: clamp(28px, 3.5vw, 46px);
          font-weight: 400;
          letter-spacing: -.025em;
          line-height: 1.1;
          color: var(--text-1);
          margin-bottom: 16px;
          max-width: 640px;
        }
        .section-sub {
          font-family: 'Arial', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-2);
          max-width: 560px;
          margin-bottom: 48px;
        }

        /* ── Services ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .service-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          transition: border-color .25s, background .25s, transform .25s;
          cursor: default;
        }
        .service-card:hover {
          border-color: var(--border-h);
          background: var(--surface-2);
          transform: translateY(-2px);
        }
        .service-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: var(--teal-dim);
          border: 1px solid var(--teal-line);
          display: flex; align-items: center; justify-content: center;
          color: var(--teal);
          margin-bottom: 20px;
        }
        .service-title {
          font-size: 17px;
          font-weight: 400;
          letter-spacing: -.01em;
          color: var(--text-1);
          margin-bottom: 10px;
        }
        .service-desc {
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-2);
        }

        /* ── Why Aleron ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }
        .why-card {
          border-left: 2px solid var(--teal-line);
          padding: 24px 24px 24px 28px;
          background: var(--surface);
          border-radius: 0 12px 12px 0;
          transition: border-color .25s;
        }
        .why-card:hover { border-left-color: var(--teal); }
        .why-heading {
          font-size: 16px;
          font-weight: 400;
          color: var(--text-1);
          margin-bottom: 10px;
          letter-spacing: -.01em;
        }
        .why-body {
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          line-height: 1.75;
          color: var(--text-2);
        }

        /* ── Case Studies ── */
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }
        .case-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color .25s;
        }
        .case-card:hover { border-color: var(--border-h); }
        .case-ref {
          font-family: 'Arial', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--teal);
        }
        .case-client {
          font-size: 18px;
          font-weight: 400;
          color: var(--text-1);
          letter-spacing: -.01em;
        }
        .case-divider {
          height: 1px;
          background: var(--border);
        }
        .case-row { display: flex; flex-direction: column; gap: 4px; }
        .case-row-label {
          font-family: 'Arial', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--text-3);
        }
        .case-row-text {
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-2);
        }
        .case-outcome {
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: var(--teal);
          padding: 12px 14px;
          background: var(--teal-dim);
          border-radius: 8px;
          border: 1px solid var(--teal-line);
        }

        /* ── CTA ── */
        .cta-band {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: clamp(48px,6vw,80px) var(--px);
        }
        .cta-inner {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: clamp(40px, 5vw, 64px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 28px;
          position: relative;
          overflow: hidden;
        }
        .cta-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 100% 50%, rgba(94,234,212,.04), transparent);
          pointer-events: none;
        }
        .cta-eyebrow {
          font-family: 'Arial', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--teal);
        }
        .cta-h2 {
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 400;
          letter-spacing: -.025em;
          line-height: 1.1;
          color: var(--text-1);
          max-width: 540px;
        }
        .cta-sub {
          font-family: 'Arial', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-2);
          max-width: 520px;
        }

        /* ── Footer ── */
        .footer {
          border-top: 1px solid var(--border);
          padding: clamp(28px,4vw,48px) var(--px);
        }
        .footer-inner {
          max-width: var(--max-w);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-family: 'Arial', sans-serif;
          font-size: 13px;
          color: var(--text-3);
        }
        .footer-naics {
          font-family: 'Arial', sans-serif;
          font-size: 12px;
          color: var(--text-3);
          text-align: right;
          line-height: 1.8;
        }
        @media (max-width: 640px) {
          .footer-naics { text-align: left; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* ── Navigation ── */}
      <motion.header
        className="nav"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <Image
              src="/logos/navbar-logo-dark.png"
              alt="Aleron Systems"
              width={480}
              height={140}
              priority
              style={{ height: '40px', width: 'auto' }}
            />
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/government" className="accent">Government</a></li>
              <li><a href="/contact" className="nav-cta">Contact <ArrowRight size={12} /></a></li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* ── Hero ── */}
      <section className="hero">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero-eyebrow" variants={fadeUp} custom={0}>
            <span className="hero-eyebrow-dot" />
            CRM Administration &amp; Automation Consulting
          </motion.div>

          <motion.h1 variants={fadeUp} custom={0.1}>
            Streamline Operations Through <em>CRM, Automation</em> &amp; Process Optimization
          </motion.h1>

          <motion.p className="hero-sub" variants={fadeUp} custom={0.2}>
            Aleron Systems delivers focused consulting for enterprise CRM platforms, workflow automation, and business process improvement. Operationally mature. Compliance-aware. Senior-level engagement.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp} custom={0.3}>
            <a href="/contact" className="btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </a>
            <a href="/services" className="btn-ghost">
              View Services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Metrics ── */}
      <div className="metrics">
        <motion.div
          className="metrics-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {metrics.map((m) => (
            <motion.div key={m.label} className="metric-cell" variants={cardVariant}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Services ── */}
      <div className="divider"><hr /></div>
      <section className="section-wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.div className="section-label" variants={fadeUp} custom={0}>Core Services</motion.div>
          <motion.h2 className="section-h2" variants={fadeUp} custom={0.05}>
            Enterprise consulting built around operational outcomes
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp} custom={0.1}>
            Five focused practice areas — each grounded in enterprise experience, not template solutions.
          </motion.p>

          <motion.div className="services-grid" variants={staggerContainer}>
            {services.map((s) => (
              <motion.div key={s.title} className="service-card" variants={cardVariant}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Why Aleron ── */}
      <div className="divider"><hr /></div>
      <section className="section-wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.div className="section-label" variants={fadeUp} custom={0}>Why Aleron</motion.div>
          <motion.h2 className="section-h2" variants={fadeUp} custom={0.05}>
            Credibility earned through enterprise-level work
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp} custom={0.1}>
            We don't lead with buzzwords. These are specific, earned differentiators.
          </motion.p>

          <motion.div className="why-grid" variants={staggerContainer}>
            {whyAleron.map((w) => (
              <motion.div key={w.heading} className="why-card" variants={cardVariant}>
                <div className="why-heading">{w.heading}</div>
                <div className="why-body">{w.body}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Case Studies ── */}
      <div className="divider"><hr /></div>
      <section className="section-wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.div className="section-label" variants={fadeUp} custom={0}>Proven Experience</motion.div>
          <motion.h2 className="section-h2" variants={fadeUp} custom={0.05}>
            Enterprise engagements focused on operational efficiency
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp} custom={0.1}>
            Selected examples from past enterprise consulting work.
          </motion.p>

          <motion.div className="cases-grid" variants={staggerContainer}>
            {caseStudies.map((c) => (
              <motion.div key={c.client} className="case-card" variants={cardVariant}>
                <div>
                  <div className="case-ref">{c.ref}</div>
                  <div className="case-client">{c.client}</div>
                </div>
                <div className="case-divider" />
                <div className="case-row">
                  <div className="case-row-label">Challenge</div>
                  <div className="case-row-text">{c.challenge}</div>
                </div>
                <div className="case-row">
                  <div className="case-row-label">Approach</div>
                  <div className="case-row-text">{c.solution}</div>
                </div>
                <div className="case-outcome">{c.outcome}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <div className="divider"><hr /></div>
      <div className="cta-band">
        <motion.div
          className="cta-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={0}
        >
          <div className="cta-eyebrow">Let's Talk</div>
          <h2 className="cta-h2">
            Let's discuss your operational and CRM goals.
          </h2>
          <p className="cta-sub">
            Whether you're optimizing an existing Salesforce environment, modernizing legacy workflows, or establishing governance practices for controlled deployments — we're ready to engage.
          </p>
          <a href="/contact" className="btn-primary">
            Start the Conversation <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-copy">
            © {new Date().getFullYear()} Aleron Systems LLC. All rights reserved.
          </div>
          <div className="footer-naics">
            541511 · 541512 · 541519
          </div>
        </div>
      </footer>
    </main>
  );
}
