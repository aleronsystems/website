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
  'Construction & Roofing',
  'Healthcare',
  'Financial Services',
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#050b14', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <Image src="/logos/navbar-logo-dark.png" alt="Aleron Systems" width={240} height={80} />
        <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="/government" style={{ color: 'white', textDecoration: 'none' }}>Government</a>
          <a href="/roofing-crm" style={{ color: 'white', textDecoration: 'none' }}>Roofing CRM</a>
          <a href="/contact" style={{ color: '#5eead4', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ color: '#5eead4', marginBottom: '16px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            CRM • Cloud • Automation
          </div>
          <h1 style={{ fontSize: 'clamp(42px, 6vw, 68px)', lineHeight: '1', marginBottom: '20px' }}>
            Enterprise CRM & Cloud Solutions That Drive Results
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '20px', lineHeight: '1.6', marginBottom: '18px' }}>
            Aleron Systems delivers expert CRM consulting, cloud solutions, and workflow automation for businesses and government organizations looking to scale smarter.
          </p>
          <p style={{ color: '#94a3b8', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
            From Salesforce administration and implementation to process automation and operational optimization, we help organizations simplify complexity and accelerate growth.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg,#5eead4,#38bdf8)', color: '#021014', padding: '14px 20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
              Get Started <ArrowRight size={18} />
            </a>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(15,23,42,.8)', color: 'white', padding: '14px 20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid rgba(94,234,212,.25)' }}>
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Image src="/banners/hero-logo-feature.png" alt="Aleron Systems technology visual" width={700} height={700} style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 24px 70px rgba(0,0,0,.35)' }} />
        </motion.div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ maxWidth: '760px', marginBottom: '28px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 700 }}>Built on Enterprise Experience</div>
          <h2 style={{ fontSize: '42px', margin: '0 0 14px' }}>Trusted expertise across the systems businesses rely on.</h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            With over 15 years of hands on experience supporting enterprise environments, Aleron Systems provides strategic and technical expertise across CRM, cloud, automation, and operations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          {expertise.map((item) => (
            <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '16px', borderRadius: '16px', background: 'rgba(15,23,42,.75)', border: '1px solid rgba(94,234,212,.14)' }}>
              <CheckCircle2 size={18} color="#5eead4" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 34px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 700 }}>Solutions Designed to Scale</div>
          <h2 style={{ fontSize: '42px', margin: '0 0 14px' }}>Technology services built for real business needs.</h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            From platform support to field infrastructure, Aleron combines enterprise systems experience with practical delivery.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {services.map((service) => (
            <motion.div key={service.title} whileHover={{ y: -6 }} style={{ padding: '24px', borderRadius: '22px', background: 'linear-gradient(180deg, rgba(15,23,42,.92), rgba(7,16,31,.92))', border: '1px solid rgba(94,234,212,.14)' }}>
              <Image src={service.icon} alt="" width={90} height={90} style={{ borderRadius: '20px', marginBottom: '18px' }} />
              <h3 style={{ fontSize: '24px', margin: '0 0 12px' }}>{service.title}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '28px', borderRadius: '24px', background: 'rgba(15,23,42,.75)', border: '1px solid rgba(94,234,212,.14)' }}>
          <h3 style={{ fontSize: '28px', marginTop: 0 }}>Government & Contracting</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Capability statement style positioning for public sector opportunities, subcontracting, and reliable technology support.</p>
          <a href="/government" style={{ color: '#5eead4', textDecoration: 'none', fontWeight: 'bold' }}>View Government Capabilities →</a>
        </div>
        <div style={{ padding: '28px', borderRadius: '24px', background: 'rgba(15,23,42,.75)', border: '1px solid rgba(94,234,212,.14)' }}>
          <h3 style={{ fontSize: '28px', marginTop: 0 }}>Roofing CRM Systems</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>CRM setup, lead tracking, follow up workflows, estimate pipeline visibility, and automation for roofing businesses.</p>
          <a href="/roofing-crm" style={{ color: '#5eead4', textDecoration: 'none', fontWeight: 'bold' }}>Explore Roofing CRM →</a>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ maxWidth: '760px', marginBottom: '28px' }}>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 700 }}>Why Aleron Systems</div>
          <h2 style={{ fontSize: '42px', margin: '0 0 14px' }}>Enterprise level experience with direct, responsive service.</h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6' }}>
            Unlike large consulting firms, we provide direct access, faster turnaround, and practical solutions without unnecessary overhead.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {why.map((item) => (
            <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '16px', borderRadius: '16px', background: 'rgba(15,23,42,.75)', border: '1px solid rgba(94,234,212,.14)' }}>
              <CheckCircle2 size={18} color="#5eead4" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 700 }}>Industries We Support</div>
        <h2 style={{ fontSize: '42px', margin: '0 0 28px' }}>Flexible support across commercial and public sector environments.</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {industries.map((industry) => (
            <span key={industry} style={{ padding: '12px 16px', borderRadius: '999px', background: 'rgba(15,23,42,.75)', border: '1px solid rgba(94,234,212,.14)', color: '#e2e8f0' }}>{industry}</span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '40px auto 80px', padding: '40px 22px', borderRadius: '28px', background: 'linear-gradient(rgba(5,11,20,.78), rgba(5,11,20,.92)), url("/footer/footer-bg-glow.png") center / cover no-repeat', border: '1px solid rgba(94,234,212,.18)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
        <div>
          <div style={{ color: '#5eead4', marginBottom: '12px', fontWeight: 700 }}>Ready to Streamline Your Business?</div>
          <h2 style={{ fontSize: '42px', margin: '0 0 14px' }}>Let’s build smarter systems together.</h2>
          <p style={{ color: '#cbd5e1', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            Whether you need CRM support, automation, field infrastructure, or a complete cloud strategy, Aleron Systems is ready to help.
          </p>
        </div>
        <a href="/contact" style={{ justifySelf: 'start', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg,#5eead4,#38bdf8)', color: '#021014', padding: '14px 20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
          Contact Us Today <ArrowRight size={18} />
        </a>
      </section>

      <footer style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px 44px', textAlign: 'center', borderTop: '1px solid rgba(94,234,212,.12)' }}>
        <Image src="/footer/footer-logo-dark.png" alt="Aleron Systems" width={240} height={80} />
        <p style={{ color: '#94a3b8' }}>CRM consulting • Cloud solutions • Workflow automation • Security & infrastructure</p>
        <p style={{ color: '#64748b', fontSize: '13px' }}>© 2026 Aleron Systems LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
