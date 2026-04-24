'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
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
            style={{ width: '540px', height: 'auto', display: 'block' }}
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
          padding: '0px 28px 50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '42px',
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
            Contact Aleron Systems
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
            Let’s talk through your technology needs.
          </h1>

          <p
            style={{
              color: '#dbeafe',
              fontSize: '20px',
              lineHeight: '1.5',
              marginBottom: '26px',
              maxWidth: '760px',
            }}
          >
            Reach out for CRM consulting, Salesforce support, workflow automation,
            infrastructure work, partnerships, or government contracting opportunities.
          </p>

          <div style={{ display: 'grid', gap: '16px', maxWidth: '620px' }}>
            <div style={infoBoxStyle}>
              <Mail color="#5eead4" size={22} />
              <div>
                <div style={labelStyle}>Email</div>
                <a href="mailto:info@aleronsystems.com" style={valueLinkStyle}>
                  info@aleronsystems.com
                </a>
              </div>
            </div>

            <div style={infoBoxStyle}>
              <Phone color="#5eead4" size={22} />
              <div>
                <div style={labelStyle}>Phone</div>
                <a href="tel:2154446525" style={valueLinkStyle}>
                  215.444.6525
                </a>
              </div>
            </div>

            <div style={infoBoxStyle}>
              <MapPin color="#5eead4" size={22} />
              <div>
                <div style={labelStyle}>Location</div>
                <div style={valueStyle}>Pennsylvania, United States</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
          <form
            action="mailto:info@aleronsystems.com"
            method="post"
            encType="text/plain"
            style={{
              padding: '32px',
              borderRadius: '28px',
              background:
                'linear-gradient(180deg, rgba(15,23,42,.92), rgba(7,16,31,.92))',
              border: '1px solid rgba(94,234,212,.14)',
              boxShadow: '0 28px 80px rgba(0,0,0,.28)',
              display: 'grid',
              gap: '16px',
            }}
          >
            <h2 style={{ fontSize: '32px', margin: '0 0 8px', lineHeight: 1.05 }}>
              Send a quick message
            </h2>

            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.55', margin: '0 0 8px' }}>
              Share a few details and we’ll follow up.
            </p>

            <input name="name" placeholder="Name" style={inputStyle} />
            <input name="email" placeholder="Email" style={inputStyle} />
            <input name="company" placeholder="Company" style={inputStyle} />
            <textarea name="message" placeholder="How can we help?" rows={6} style={inputStyle} />

            <button type="submit" style={buttonStyle}>
              Send Message <ArrowRight size={18} />
            </button>

            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              This form opens your email client. A hosted form can be added later with Formspree,
              HubSpot, or another form provider.
            </p>
          </form>
        </motion.div>
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

const infoBoxStyle = {
  display: 'flex',
  gap: '14px',
  alignItems: 'center',
  padding: '18px',
  borderRadius: '18px',
  background: 'rgba(15,23,42,.75)',
  border: '1px solid rgba(94,234,212,.14)',
};

const labelStyle = {
  color: '#94a3b8',
  fontSize: '13px',
  marginBottom: '4px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};

const valueStyle = {
  color: '#f8fafc',
  fontSize: '18px',
  fontWeight: 700,
};

const valueLinkStyle = {
  color: '#f8fafc',
  fontSize: '18px',
  fontWeight: 700,
  textDecoration: 'none',
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '14px',
  border: '1px solid rgba(94,234,212,.18)',
  background: 'rgba(2,6,23,.65)',
  color: 'white',
  fontSize: '16px',
  outline: 'none',
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  background: 'linear-gradient(135deg,#5eead4,#38bdf8)',
  color: '#021014',
  padding: '15px 22px',
  borderRadius: '12px',
  border: 'none',
  fontWeight: 800,
  fontSize: '16px',
  cursor: 'pointer',
};
