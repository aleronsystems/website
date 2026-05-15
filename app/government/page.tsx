'use client';

import Image from 'next/image';
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
  Cloud,
  FileText,
  BadgeCheck,
} from 'lucide-react';

// =====================================================================
// DATA
// =====================================================================

const heroChips = [
  'Veteran-Owned',
  'Salesforce Operations',
  'Flow Automation',
  'Release Governance',
  'Compliance-Aware Support',
];

const identifiers: { label: string; value: string }[] = [
  { label: 'UEI', value: 'SUQ9LD8LND96' },
  { label: 'CAGE Code', value: '200X0' },
  { label: 'Business Status', value: 'Veteran-Owned Small Business' },
  { label: 'Entity', value: 'Pennsylvania Registered LLC' },
];

const naicsCodes: { code: string; title: string }[] = [
  { code: '541511', title: 'Custom Computer Programming Services' },
  { code: '541512', title: 'Computer Systems Design Services' },
  { code: '541519', title: 'Other Computer Related Services' },
];

const engagementModels = [
  'Time & Materials',
  'Fixed Price',
  'Retainer Support',
];

const capabilities: {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
}[] = [
  {
    title: 'Salesforce Administration',
    description:
      'Senior-level platform administration covering user access, security model maintenance, configuration changes, and day to day operational support.',
    Icon: ShieldCheck,
  },
  {
    title: 'Flow & Workflow Modernization',
    description:
      'Migration of legacy process automation to Flow, consolidation of overlapping logic, and structured documentation of automation across the org.',
    Icon: Workflow,
  },
  {
    title: 'Release Governance & DevOps Coordination',
    description:
      'Release planning, change tracking, and deployment coordination across sandboxes with attention to risk, rollback paths, and audit readiness.',
    Icon: GitBranch,
  },
  {
    title: 'Experience Cloud Support',
    description:
      'Operational support for partner, customer, and internal communities including access management, page configuration, and ongoing content workflows.',
    Icon: Users,
  },
  {
    title: 'CRM Operational Support',
    description:
      'Steady state platform support covering user requests, defect triage, data hygiene, and recurring administrative tasks across business units.',
    Icon: LifeBuoy,
  },
  {
    title: 'Enterprise Integrations',
    description:
      'Support and coordination of middleware integrations including Workato, Celigo, and direct API connections between Salesforce and adjacent systems.',
    Icon: Cable,
  },
  {
    title: 'Sandbox & UAT Coordination',
    description:
      'Sandbox lifecycle management, refresh planning, and structured UAT coordination aligned with release windows and stakeholder sign off.',
    Icon: FlaskConical,
  },
  {
    title: 'Operational Reporting & Process Optimization',
    description:
      'Reporting, dashboards, and process review work focused on reducing manual effort and surfacing operational signal for business owners.',
    Icon: BarChart3,
  },
];

const pastPerformance: {
  client: string;
  context: string;
  description: string;
}[] = [
  {
    client: 'Qlik',
    context: 'Global Analytics Organization',
    description:
      'Supported enterprise Salesforce operations, workflow modernization initiatives, and platform process optimization within a global analytics organization.',
  },
  {
    client: 'UL Solutions',
    context: 'Regulated Environment / FDA 21 CFR Part 11',
    description:
      'Supported Salesforce platform operations in a highly regulated environment aligned with FDA 21 CFR Part 11 governance practices, including deployment coordination, operational support, and workflow management.',
  },
  {
    client: 'Aptos',
    context: 'Retail Technology / Integration Migration',
    description:
      'Supported Salesforce administration and enterprise integrations, including Celigo operational support and migration initiatives toward Workato automation workflows.',
  },
  {
    client: 'BankUnited',
    context: 'Financial Services / Multi Business Unit',
    description:
      'Supported Salesforce operational governance, release coordination, workflow improvements, and enterprise platform administration across business units.',
  },
];

const whyAleron = [
  'Senior-level direct engagement',
  'Enterprise operational experience',
  'Compliance-aware governance support',
  'No offshore handoffs',
];

// =====================================================================
// SHARED STYLES
// =====================================================================

const cardBase: React.CSSProperties = {
  padding: '22px',
  borderRadius: '16px',
  background: 'rgba(15,23,42,.75)',
  border: '1px solid rgba(94,234,212,.14)',
};

const eyebrow: React.CSSProperties = {
  color: '#5eead4',
  marginBottom: '14px',
  fontWeight: 800,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  fontSize: '13px',
};

const sectionWrap: React.CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '56px 28px',
};

const sectionHeading: React.CSSProperties = {
  fontSize: 'clamp(28px, 3.2vw, 40px)',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  margin: '0 0 14px',
};

const sectionSub: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: '16px',
  lineHeight: 1.6,
  maxWidth: '720px',
  margin: 0,
};

// =====================================================================
// PAGE
// =====================================================================

export default function GovernmentPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 20% 10%, rgba(20,184,166,.12), transparent 26%), radial-gradient(circle at 80% 20%, rgba(56,189,248,.10), transparent 28%), #050b14',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* =================================================================
          HEADER / NAV (preserved from existing page)
      ================================================================== */}
      <header
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          marginTop: '-105px',
          padding: '0px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'nowrap',
        }}
      >
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '-20px' }}>
          <Image
            src="/logos/navbar-logo-dark.png"
            alt="Aleron Systems"
            width={520}
            height={160}
            priority
            style={{
              width: '540px',
              height: 'auto',
              display: 'block',
            }}
          />
        </a>

        <nav
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'nowrap',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="/government" style={{ color: '#5eead4', textDecoration: 'none' }}>Government</a>
          <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* =================================================================
          1. HERO
      ================================================================== */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0px 28px 30px',
        }}
      >
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          {/* Credibility chip row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '24px',
            }}
          >
            {heroChips.map((chip) => (
              <span
                key={chip}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  background: 'rgba(94,234,212,.06)',
                  border: '1px solid rgba(94,234,212,.18)',
                  color: '#cbd5e1',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                {chip}
              </span>
            ))}
          </div>

          <div
            style={{
              color: '#5eead4',
              marginBottom: '18px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '14px',
            }}
          >
            Government & Public Sector
          </div>

          <h1
            style={{
              fontSize: 'clamp(40px, 5vw, 68px)',
              lineHeight: '0.98',
              margin: '0 0 24px',
              letterSpacing: '-0.04em',
              maxWidth: '960px',
            }}
          >
            Government Focused Salesforce Operations & Release Governance
          </h1>

          <p
            style={{
              color: '#dbeafe',
              fontSize: '20px',
              lineHeight: '1.5',
              marginBottom: '32px',
              maxWidth: '780px',
            }}
          >
            Senior-level Salesforce administration, workflow modernization, release governance, and enterprise operational support for commercial and public sector environments.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a
              href="/docs/Aleron_Federal_Capability_Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg,#5eead4,#38bdf8)',
                color: '#021014',
                padding: '15px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                boxShadow: '0 8px 24px rgba(56,189,248,.18)',
              }}
            >
              <Download size={18} />
              Download Capability Statement
            </a>

            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'white',
                padding: '15px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                border: '1px solid rgba(94,234,212,.30)',
              }}
            >
              Contact Aleron <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =================================================================
          2. REGISTRATIONS & IDENTIFIERS
      ================================================================== */}
      <section style={sectionWrap}>
        <div style={{ marginBottom: '32px' }}>
          <div style={eyebrow}>Registrations & Identifiers</div>
          <h2 style={sectionHeading}>Government Registration Information</h2>
          <p style={sectionSub}>
            Procurement identifiers, federal codes, and engagement structures for contracting officers and prime partners.
          </p>
        </div>

        {/* Identifiers grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginBottom: '20px',
          }}
        >
          {identifiers.map((item) => (
            <div key={item.label} style={cardBase}>
              <div
                style={{
                  color: '#5eead4',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: '17px', fontWeight: 600, color: 'white' }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* NAICS + Engagement Models split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '14px',
          }}
        >
          {/* NAICS card */}
          <div style={cardBase}>
            <div
              style={{
                color: '#5eead4',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              NAICS Codes
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {naicsCodes.map((n) => (
                <div
                  key={n.code}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'baseline',
                    paddingBottom: '10px',
                    borderBottom: '1px solid rgba(94,234,212,.08)',
                  }}
                >
                  <span style={{ color: 'white', fontWeight: 700, minWidth: '60px' }}>
                    {n.code}
                  </span>
                  <span style={{ color: '#cbd5e1', fontSize: '14px' }}>{n.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement models card */}
          <div style={cardBase}>
            <div
              style={{
                color: '#5eead4',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              Engagement Models
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {engagementModels.map((m) => (
                <div
                  key={m}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid rgba(94,234,212,.08)',
                  }}
                >
                  <BadgeCheck size={16} color="#5eead4" />
                  <span style={{ color: 'white', fontWeight: 600 }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. CORE CAPABILITIES
      ================================================================== */}
      <section style={sectionWrap}>
        <div style={{ marginBottom: '32px' }}>
          <div style={eyebrow}>Core Capabilities</div>
          <h2 style={sectionHeading}>Operational Salesforce & CRM Services</h2>
          <p style={sectionSub}>
            Practical capability areas Aleron supports across commercial and public sector Salesforce environments.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '14px',
          }}
        >
          {capabilities.map(({ title, description, Icon }) => (
            <div
              key={title}
              style={{
                ...cardBase,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'border-color .2s ease, transform .2s ease',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(94,234,212,.08)',
                  border: '1px solid rgba(94,234,212,.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={20} color="#5eead4" strokeWidth={1.8} />
              </div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  margin: 0,
                  color: 'white',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '14px',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          4. PAST PERFORMANCE
      ================================================================== */}
      <section style={sectionWrap}>
        <div style={{ marginBottom: '32px' }}>
          <div style={eyebrow}>Past Performance</div>
          <h2 style={sectionHeading}>Selected Enterprise Engagements</h2>
          <p style={sectionSub}>
            Representative engagements supporting enterprise Salesforce operations across regulated, financial, and global organizations.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
          }}
        >
          {pastPerformance.map((p) => (
            <article
              key={p.client}
              style={{
                ...cardBase,
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '4px',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    margin: 0,
                    color: 'white',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.client}
                </h3>
                <Cloud size={18} color="#5eead4" strokeWidth={1.8} />
              </div>

              <div
                style={{
                  color: '#5eead4',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                {p.context}
              </div>

              <p
                style={{
                  color: '#cbd5e1',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =================================================================
          5. CAPABILITY STATEMENT CTA
      ================================================================== */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '40px auto',
          padding: '42px 32px',
          borderRadius: '28px',
          background:
            'linear-gradient(rgba(5,11,20,.78), rgba(5,11,20,.92)), url("/footer/footer-bg-glow.png") center / cover no-repeat',
          border: '1px solid rgba(94,234,212,.18)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={eyebrow}>Capability Statement</div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.4vw, 40px)',
                margin: '0 0 14px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Procurement, teaming, and subcontracting inquiries welcome.
            </h2>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '15px',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '560px',
              }}
            >
              Download the capability statement for a complete overview of services, identifiers, and engagement structures. For teaming opportunities, procurement questions, or subcontracting discussions, reach out directly.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/docs/Aleron_Federal_Capability_Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg,#5eead4,#38bdf8)',
                color: '#021014',
                padding: '15px 22px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '15px',
                boxShadow: '0 8px 24px rgba(56,189,248,.18)',
              }}
            >
              <FileText size={18} />
              Download Capability Statement
            </a>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'white',
                padding: '15px 22px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '15px',
                border: '1px solid rgba(94,234,212,.30)',
              }}
            >
              Contact Aleron <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================
          6. WHY ALERON
      ================================================================== */}
      <section style={{ ...sectionWrap, paddingTop: '40px', paddingBottom: '100px' }}>
        <div style={{ marginBottom: '28px' }}>
          <div style={eyebrow}>Why Aleron</div>
          <h2 style={sectionHeading}>What sets the engagement apart</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
          }}
        >
          {whyAleron.map((item) => (
            <div
              key={item}
              style={{
                ...cardBase,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '20px',
              }}
            >
              <BadgeCheck size={20} color="#5eead4" strokeWidth={1.8} />
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'white' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
