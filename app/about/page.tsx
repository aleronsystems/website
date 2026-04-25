'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  '15+ Years Enterprise Technology Experience',
  'Salesforce, CRM, Automation, and Cloud Systems',
  'Veteran Owned Business',
  'Direct and Responsive Support',
  'Commercial and Government Focus',
];

const experience = [
  'Enterprise Salesforce administration and platform support',
  'Workflow automation and process optimization',
  'CRM reporting, visibility, and operational improvements',
  'Release management, DevOps coordination, and deployment support',
  'Technology support across SaaS, professional services, and public sector environments',
];

export default function AboutPage() {
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
          <a href="/about" style={{ color: '#5eead4', textDecoration: 'none' }}>About</a>
          <a href="/government" style={{ color: 'white', textDecoration: 'none' }}>Government</a>
          <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      <section
        style={{
          maxWidth: '1280px',
          margin: '-45px auto 0',
          padding: '0px 28px 50px',
          display: 'grid',
          gridTemplateColumns: '1.15fr .85fr',
          gap: '44px',
          alignItems: 'start',
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
            About Aleron Systems
          </div>

          <h1
            style={{
              fontSize: 'clamp(38px, 4.5vw, 64px)',
              lineHeight: '0.95',
              margin: '0 0 22px',
              letterSpacing: '-0.04em',
              maxWidth: '820px',
            }}
          >
            Enterprise experience with practical, direct support.
          </h1>

          <p
            style={{
              color: '#dbeafe',
              fontSize: '18px',
              lineHeight: '1.5',
              marginBottom: '16px',
              maxWidth: '760px',
            }}
          >
            Aleron Systems LLC was built to provide reliable CRM, cloud, automation, and technology
            support for businesses and government organizations that need experienced execution
            without the overhead of a large consulting firm.
          </p>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '16px',
              lineHeight: '1.55',
              marginBottom: '20px',
              maxWidth: '760px',
            }}
          >
            The company is led by Bogdan Alekseyenko, a U.S. Army veteran with more than 15 years of
            hands-on experience supporting enterprise technology environments, Salesforce platforms,
            workflow automation, release management, and operational systems.
          </p>

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
            Work With Us <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            maxWidth: '440px',
            justifySelf: 'end',
          }}
        >
          <div
            style={{
              padding: '20px',
              borderRadius: '24px',
              background:
                'linear-gradient(180deg, rgba(15,23,42,.92), rgba(7,16,31,.92))',
              border: '1px solid rgba(94,234,212,.14)',
              boxShadow: '0 20px 60px rgba(0,0,0,.25)',
            }}
          >
            <Image
              src="/marketing/About_Headshot_photo.jpg"
              alt="Bogdan Alekseyenko"
              width={420}
              height={520}
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '18px',
                marginBottom: '18px',
                objectFit: 'cover',
                objectPosition: 'center 22%',
              }}
            />

            <h2 style={{ fontSize: '34px', margin: '0 0 6px', lineHeight: 1.0 }}>
              Bogdan Alekseyenko
            </h2>

            <div
              style={{
                color: '#5eead4',
                fontSize: '15px',
                fontWeight: 700,
                marginBottom: '14px',
              }}
            >
              Founder & Managing Consultant
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                color: '#e2e8f0',
                fontSize: '15px',
              }}
            >
              {highlights.map((item) => (
                <li key={item} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="#5eead4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 28px' }}>
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 800 }}>
            Experience That Matters
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 48px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            A background built across real enterprise systems.
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            Aleron Systems brings practical experience from complex business environments where
            reliability, security, usability, and operational efficiency all matter.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px',
          }}
        >
          {experience.map((item) => (
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
            Let’s build something practical.
          </div>
          <h2 style={{ fontSize: 'clamp(34px, 4vw, 46px)', margin: '0 0 14px', lineHeight: 1.05 }}>
            Need a technology partner who understands execution?
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
          Contact Aleron <ArrowRight size={18} />
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
