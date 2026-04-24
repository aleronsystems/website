'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const competencies = [
  'CRM Consulting & Salesforce Support',
  'Workflow Automation & Process Optimization',
  'Cloud Solutions & Operational Support',
  'Security & Infrastructure Services',
  'Commercial & Government Technology Support',
];

const differentiators = [
  'Veteran Owned Business',
  'Direct and Responsive Service',
  'Enterprise Level Experience',
  'Agile and Cost Effective Solutions',
  'Commercial and Public Sector Focus',
];

const naics = [
  '541511 – Custom Computer Programming Services',
  '541512 – Computer Systems Design Services',
  '541513 – Computer Facilities Management Services',
  '541519 – Other Computer Related Services',
  '561621 – Security Systems Services',
];

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
          padding: '0px 28px 30px',
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
            Government Capabilities
          </div>

          <h1
            style={{
              fontSize: 'clamp(40px, 5vw, 68px)',
              lineHeight: '0.98',
              margin: '0 0 24px',
              letterSpacing: '-0.04em',
              maxWidth: '900px',
            }}
          >
            Reliable technology support for government and commercial contracts.
          </h1>

          <p
            style={{
              color: '#dbeafe',
              fontSize: '20px',
              lineHeight: '1.5',
              marginBottom: '24px',
              maxWidth: '760px',
            }}
          >
            Aleron Systems LLC provides practical CRM, cloud, automation, security, and infrastructure support for government agencies, prime contractors, and commercial organizations.
          </p>
        </motion.div>
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
            NAICS Codes
          </div>
        </div>

        <div style={{ display: 'grid', gap: '14px' }}>
          {naics.map((item) => (
            <div
              key={item}
              style={{
                padding: '16px',
                borderRadius: '16px',
                background: 'rgba(15,23,42,.75)',
                border: '1px solid rgba(94,234,212,.14)',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: '1200px',
          margin: '40px auto 80px',
          padding: '42px 28px',
          borderRadius: '28px',
          background:
            'linear-gradient(rgba(5,11,20,.78), rgba(5,11,20,.92)), url("/footer/footer-bg-glow.png") center / cover no-repeat',
          border: '1px solid rgba(94,234,212,.18)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Need a capability statement?
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 46px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Contact us for contracting and subcontracting opportunities.
          </h2>
        </div>

        <a
          href="/contact"
          style={{
            justifySelf: 'start',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg,#5eead4,#38bdf8)',
            color: '#021014',
            padding: '15px 22px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Contact Us <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
