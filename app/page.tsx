'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const expertise = [
  'Salesforce Administration & Development',
  'Sales Cloud, Service Cloud & Marketing Cloud',
  'Workflow & Process Automation',
  'Data Migration & Integration',
  'Release Management & DevOps',
  'Reporting & Analytics',
  'Government & Commercial Solutions',
];

const services = [
  {
    title: 'CRM Consulting',
    text: 'CRM strategy, administration, optimization, user support, reporting, and process design.',
    icon: '/icons/icon-crm.png',
  },
  {
    title: 'Salesforce Solutions',
    text: 'Configuration, automation, integrations, release support, reporting, and ongoing platform support.',
    icon: '/icons/icon-cloud.png',
  },
  {
    title: 'Workflow Automation',
    text: 'Eliminate repetitive tasks and streamline operations with cleaner automated workflows.',
    icon: '/icons/icon-automation.png',
  },
  {
    title: 'Security & Infrastructure',
    text: 'Security cameras, access control, cabling, WiFi, network installs, and low voltage support.',
    icon: '/icons/icon-security.png',
  },
];

const why = [
  'Veteran Owned Business',
  'Disabled Veteran Owned Business',
  'Agile and Responsive',
  'Enterprise Level Experience',
  'Cost Effective Solutions',
];

const industries = [
  'Technology',
  'SaaS',
  'Professional Services',
  'Government',
  'Construction',
  'Healthcare',
  'Financial Services',
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
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
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
          <a href="/government" style={{ color: 'white', textDecoration: 'none' }}>Government</a>
          <a href="/contact" style={{ color: '#5eead4', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0px 28px 10px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
            CRM • Cloud • Automation
          </div>

          <h1
            style={{
              fontSize: 'clamp(38px, 5vw, 62px)',
              lineHeight: '0.98',
              margin: '0 0 24px',
              letterSpacing: '-0.04em',
              maxWidth: '760px',
            }}
          >
            Enterprise CRM & Cloud Solutions That Drive Results
          </h1>

          <p
            style={{
              color: '#dbeafe',
              fontSize: '20px',
              lineHeight: '1.55',
              marginBottom: '18px',
              maxWidth: '720px',
            }}
          >
            Aleron Systems delivers expert CRM consulting, cloud solutions, and workflow automation
            for businesses and government organizations looking to scale smarter.
          </p>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '12px',
              maxWidth: '720px',
            }}
          >
            From Salesforce administration and implementation to process automation and operational
            optimization, we help organizations simplify complexity and accelerate growth.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{
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
              Get Started <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(15,23,42,.8)',
                color: 'white',
                padding: '15px 22px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 'bold',
                border: '1px solid rgba(94,234,212,.25)',
              }}
            >
              View Services
            </a>
          </div>
        </motion.div>

<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
  <div
    style={{
      position: 'relative',
      minHeight: '380px',
      borderRadius: '34px',
      overflow: 'hidden',
      background:
        'radial-gradient(circle at center, rgba(94,234,212,.18), transparent 42%)',
    }}
  >
    <Image
  src="/banners/hero-logo-feature.png"
  alt="Aleron Systems technology visual"
  width={700}
  height={700}
  priority
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center center',
    display: 'block',
    opacity: 0.88,
    mixBlendMode: 'screen',
    filter: 'drop-shadow(0 0 28px rgba(94,234,212,.18))',
  }}
/>
  </div>
</motion.div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ maxWidth: '800px', marginBottom: '32px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Built on Enterprise Experience
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Trusted expertise across the systems businesses rely on.
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            With over 15 years of hands on experience supporting enterprise environments, Aleron
            Systems provides strategic and technical expertise across CRM, cloud, automation, and operations.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '14px',
          }}
        >
          {expertise.map((item) => (
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

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 38px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Solutions Designed to Scale
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Technology services built for real business needs.
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            From platform support to field infrastructure, Aleron combines enterprise systems
            experience with practical delivery.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
                minHeight: '360px',
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

              <h3 style={{ fontSize: '28px', margin: '0 0 14px', lineHeight: 1.1 }}>
                {service.title}
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.65', margin: 0, fontSize: '18px' }}>
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '64px 28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '22px',
        }}
      >
        <div
          style={{
            padding: '32px',
            borderRadius: '26px',
            background: 'rgba(15,23,42,.75)',
            border: '1px solid rgba(94,234,212,.14)',
          }}
        >
          <h3 style={{ fontSize: '30px', marginTop: 0 }}>Government & Contracting</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '18px' }}>
            Capability statement style positioning for public sector opportunities, subcontracting,
            and reliable technology support.
          </p>
          <a href="/government" style={{ color: '#5eead4', textDecoration: 'none', fontWeight: 'bold' }}>
            View Government Capabilities →
          </a>
        </div>

        <div
          style={{
            padding: '32px',
            borderRadius: '26px',
            background: 'rgba(15,23,42,.75)',
            border: '1px solid rgba(94,234,212,.14)',
          }}
        >
          <h3 style={{ fontSize: '30px', marginTop: 0 }}>Commercial Systems Support</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '18px' }}>
            CRM setup, workflow improvement, infrastructure coordination, and practical technology
            support for growing businesses.
          </p>
          <a href="/services" style={{ color: '#5eead4', textDecoration: 'none', fontWeight: 'bold' }}>
            View Services →
          </a>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 28px' }}>
        <div style={{ maxWidth: '800px', marginBottom: '32px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Why Aleron Systems
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Enterprise level experience with direct, responsive service.
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            Unlike large consulting firms, we provide direct access, faster turnaround, and practical
            solutions without unnecessary overhead.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '14px',
          }}
        >
          {why.map((item) => (
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

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 28px', textAlign: 'center' }}>
        <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
          Industries We Support
        </div>
        <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', margin: '0 0 28px', lineHeight: 1.05 }}>
          Flexible support across commercial and public sector environments.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {industries.map((industry) => (
            <span
              key={industry}
              style={{
                padding: '12px 16px',
                borderRadius: '999px',
                background: 'rgba(15,23,42,.75)',
                border: '1px solid rgba(94,234,212,.14)',
                color: '#e2e8f0',
              }}
            >
              {industry}
            </span>
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
            Ready to Streamline Your Business?
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 46px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Let’s build smarter systems together.
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            Whether you need CRM support, automation, field infrastructure, or a complete cloud strategy,
            Aleron Systems is ready to help.
          </p>
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
          Contact Us Today <ArrowRight size={18} />
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
