'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const competencies = [
  'Salesforce Administration & CRM Optimization',
  'Workflow Automation & Process Modernization',
  'Business Process Improvement & Reporting',
  'DevOps, CI/CD & Release Governance',
  'Enterprise Platform Support & Integrations',
];

const differentiators = [
  '15+ Years Supporting Enterprise CRM Environments',
  'Experience Supporting Global Salesforce Operations',
  'Platforms Supporting 2,000+ Users',
  'DevOps, Governance & Controlled Deployments',
  'Veteran-Owned Consulting Firm',
];

const naics = [
  '541511 – Custom Computer Programming Services',
  '541512 – Computer Systems Design Services',
  '541519 – Other Computer Related Services',
];

export default function HomePage() {
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

      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0px 28px 40px',
        }}
      >
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div
            style={{
              color: '#5eead4',
              marginBottom: '18px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '16px',
            }}
          >
            CRM • AUTOMATION • PROCESS OPTIMIZATION
          </div>

          <h1
            style={{
              fontSize: 'clamp(42px, 5vw, 72px)',
              lineHeight: '0.95',
              margin: '0 0 24px',
              letterSpacing: '-0.05em',
              maxWidth: '980px',
            }}
          >
            Streamline Sales. Automate Workflows. Improve Operations.
          </h1>

          <p
            style={{
              color: '#dbeafe',
              fontSize: '21px',
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '820px',
            }}
          >
            Aleron Systems helps businesses optimize CRM platforms, automate repetitive processes, and improve operational efficiency through practical consulting and enterprise-level experience.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="/contact"
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
              Book a Consultation <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(94,234,212,.22)',
                color: '#e2e8f0',
                padding: '15px 24px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                background: 'rgba(15,23,42,.55)',
              }}
            >
              View Services
            </a>
          </div>
        </motion.div>
      </section>

      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '18px 28px 42px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
          }}
        >
          {[
            '15+ Years Enterprise Experience',
            'Salesforce & CRM Specialization',
            '2,000+ Users Supported',
            'Veteran-Owned Consulting Firm',
          ].map((item) => (
            <div
              key={item}
              style={{
                background: 'rgba(15,23,42,.72)',
                border: '1px solid rgba(94,234,212,.14)',
                borderRadius: '18px',
                padding: '20px',
                textAlign: 'center',
                fontWeight: 700,
                color: '#e2e8f0',
                backdropFilter: 'blur(10px)',
                transition: 'all .25s ease',
                cursor: 'pointer',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 28px' }}>
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Core Competencies
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {competencies.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                padding: '16px',
                borderRadius: '16px',
                background: 'rgba(15,23,42,.75)',
                border: '1px solid rgba(94,234,212,.14)',
              }}
            >
              <CheckCircle2 size={18} color="#5eead4" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 28px' }}>
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Differentiators
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {differentiators.map((item) => (
            <div
              key={item}
              style={{
                padding: '18px',
                borderRadius: '18px',
                background: 'rgba(15,23,42,.72)',
                border: '1px solid rgba(94,234,212,.14)',
                color: '#dbeafe',
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '50px 28px' }}>
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div
            style={{
              color: '#5eead4',
              marginBottom: '12px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Proven Experience
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              margin: '0 0 16px',
              lineHeight: '1.05',
            }}
          >
            Enterprise experience focused on operational efficiency and modernization.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px',
          }}
        >
          {[
            {
              title: 'Enterprise Workflow Automation',
              text: 'Modernized legacy workflow systems into scalable automation processes supporting operational efficiency and reduced technical debt.',
            },
            {
              title: 'CRM Optimization & Support',
              text: 'Supported enterprise Salesforce environments serving global business teams across multiple operational environments.',
            },
            {
              title: 'DevOps & Release Governance',
              text: 'Managed controlled deployments, release coordination, and enterprise DevOps processes using structured governance practices.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: 'rgba(15,23,42,.72)',
                border: '1px solid rgba(94,234,212,.14)',
                borderRadius: '22px',
                padding: '28px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                style={{
                  fontSize: '22px',
                  marginBottom: '14px',
                  color: '#f8fafc',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: '#cbd5e1',
                  lineHeight: '1.7',
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
