'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#050b14',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <header
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '24px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          src="/logos/navbar-logo-dark.png"
          alt="Aleron Systems"
          width={240}
          height={80}
        />

        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={{ color: '#5eead4', marginBottom: '16px' }}>
            CRM • Cloud • Automation
          </div>

          <h1 style={{ fontSize: '60px', lineHeight: '1', marginBottom: '20px' }}>
            Enterprise CRM & Cloud Solutions That Drive Results
          </h1>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '20px',
              lineHeight: '1.6',
              marginBottom: '30px',
            }}
          >
            Aleron Systems delivers expert CRM consulting, cloud solutions,
            and workflow automation for businesses and government organizations.
          </p>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg,#5eead4,#38bdf8)',
              color: '#021014',
              padding: '14px 20px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Get Started <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="/banners/hero-logo-feature.png"
            alt="Hero"
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto', borderRadius: '24px' }}
          />
        </motion.div>
      </section>
    </main>
  );
}
