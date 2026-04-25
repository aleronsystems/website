'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'CRM Consulting',
    text: 'CRM strategy, process improvement, user support, reporting, and operational optimization.',
    icon: '/icons/icon-crm.png',
  },
  {
    title: 'Salesforce Solutions',
    text: 'Administration, configuration, automation, integrations, release support, and ongoing platform management.',
    icon: '/icons/icon-cloud.png',
  },
  {
    title: 'Workflow Automation',
    text: 'Eliminate repetitive tasks and streamline business operations through smarter automated workflows.',
    icon: '/icons/icon-automation.png',
  },
  {
    title: 'Security & Infrastructure',
    text: 'Security cameras, access control, low voltage cabling, WiFi/network installs, and onsite technical support.',
    icon: '/icons/icon-security.png',
  },
];

const benefits = [
  '15+ Years Enterprise Experience',
  'Veteran Owned Business',
  'Agile and Responsive Support',
  'Cost Effective Solutions',
  'Direct Access, No Layers of Management',
];

export default function ServicesPage() {
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
          <a href="/services" style={{ color: '#5eead4', textDecoration: 'none' }}>Services</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="/government" style={{ color: 'white', textDecoration: 'none' }}>Government</a>
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
            CRM • Salesforce • Automation • Infrastructure
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
            Services Designed to Scale Your Business
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
  From CRM optimization to automation and infrastructure support, Aleron Systems delivers practical solutions built on enterprise experience.
</p>

<a
  href="/docs/Aleron_Commercial_Capability_Statement.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-flex',
    marginTop: '8px',
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
  Download Commercial Capability Statement <ArrowRight size={18} />
</a>
        </motion.div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '22px',
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              style={{
                padding: '28px',
                borderRadius: '26px',
                background:
                  'linear-gradient(180deg, rgba(15,23,42,.92), rgba(7,16,31,.92))',
                border: '1px solid rgba(94,234,212,.14)',
                minHeight: '340px',
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  marginBottom: '24px',
                  background: 'rgba(2,6,23,.8)',
                  boxShadow: '0 0 34px rgba(94,234,212,.12)',
                }}
              >
                <Image
                  src={service.icon}
                  alt=""
                  width={220}
                  height={220}
                  style={{
                    width: '160px',
                    height: '160px',
                    objectFit: 'cover',
                    transform: 'translate(-20px, -20px)',
                  }}
                />
              </div>

              <h2 style={{ fontSize: '28px', margin: '0 0 14px', lineHeight: 1.1 }}>
                {service.title}
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: '1.65', margin: 0, fontSize: '18px' }}>
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Why Businesses Choose Aleron Systems
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Practical technology support without unnecessary overhead.
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            Aleron Systems combines enterprise level experience with direct, responsive service for businesses that need reliable technical execution.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
          }}
        >
          {benefits.map((item) => (
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
            Need help with your systems?
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 46px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Let’s discuss how Aleron Systems can streamline your business.
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

      <footer
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '30px 28px 44px',
          textAlign: 'center',
          borderTop: '1px solid rgba(94,234,212,.12)',
        }}
      >
        <Image
          src="/footer/footer-logo-dark.png"
          alt="Aleron Systems"
          width={300}
          height={100}
          style={{ width: '260px', height: 'auto' }}
        />
        <p style={{ color: '#94a3b8' }}>
          CRM consulting • Cloud solutions • Workflow automation • Security & infrastructure
        </p>
        <p style={{ color: '#64748b', fontSize: '13px' }}>
          © 2026 Aleron Systems LLC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
