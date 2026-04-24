'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Cloud,
  ShieldCheck,
  Network,
  Workflow,
  Building2,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    title: 'CRM Consulting',
    text: 'CRM strategy, administration, optimization, user support, reporting, and process design.',
    icon: '/icons/icon-crm.png',
  },
  {
    title: 'Salesforce Solutions',
    text: 'Salesforce configuration, automation, integrations, release support, and platform cleanup.',
    icon: '/icons/icon-cloud.png',
  },
  {
    title: 'Workflow Automation',
    text: 'Reduce repetitive work with cleaner workflows, smart routing, and business process automation.',
    icon: '/icons/icon-automation.png',
  },
  {
    title: 'Security & Low Voltage',
    text: 'Security cameras, access control, cabling, WiFi, and infrastructure support through partner delivery.',
    icon: '/icons/icon-security.png',
  },
];

const expertise = [
  'Salesforce Administration & Development',
  'Sales Cloud, Service Cloud & Marketing Cloud',
  'Workflow & Process Automation',
  'Data Migration & Integration',
  'Release Management & DevOps',
  'Reporting & Analytics',
  'Government & Commercial Solutions',
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

const whyAleron = [
  'Veteran-Owned Business',
  'Disabled Veteran-Owned Business',
  'Agile and Responsive',
  'Enterprise-Level Experience',
  'Cost-Effective Solutions',
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="heroBg" />
      <div className="noise" />

      <header className="nav">
        <a href="/" className="brand">
          <Image
            src="/logos/navbar-logo-dark.png"
            alt="Aleron Systems"
            width={260}
            height={80}
            priority
            className="brandLogo"
          />
        </a>

        <nav className="navLinks">
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/government">Government</a>
          <a href="/roofing-crm">Roofing CRM</a>
          <a href="/contact" className="navCta">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">CRM • Cloud • Automation • Infrastructure</div>

            <h1>Enterprise CRM & Cloud Solutions That Drive Results</h1>

            <p className="heroLead">
              Aleron Systems delivers expert CRM consulting, cloud solutions, and workflow automation
              for businesses and government organizations looking to scale smarter.
            </p>

            <p className="heroSub">
              From Salesforce administration and implementation to process automation and operational
              optimization, we help organizations simplify complexity and accelerate growth.
            </p>

            <div className="heroActions">
              <a href="/contact" className="btnPrimary">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="/contact" className="btnSecondary">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="visualCard">
            <Image
              src="/banners/hero-logo-feature.png"
              alt="Aleron Systems technology visual"
              width={720}
              height={720}
              className="heroImage"
              priority
            />
            <div className="floatingBadge badgeOne">
              <Cloud size={18} /> Cloud
            </div>
            <div className="floatingBadge badgeTwo">
              <Workflow size={18} /> Automation
            </div>
            <div className="floatingBadge badgeThree">
              <ShieldCheck size={18} /> Security
            </div>
          </div>
        </motion.div>
      </section>

      <section className="trusted">
        <div className="sectionHeader">
          <span className="eyebrow">Built on Enterprise Experience</span>
          <h2>Trusted expertise across CRM, cloud, automation, and operations.</h2>
          <p>
            With over 15 years of hands-on experience supporting enterprise environments, Aleron
            Systems provides strategic and technical support across the systems businesses rely on.
          </p>
        </div>

        <div className="expertiseGrid">
          {expertise.map((item) => (
            <div className="expertiseItem" key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="sectionHeader center">
          <span className="eyebrow">Solutions Designed to Scale</span>
          <h2>Technology services built for real business needs.</h2>
          <p>
            From platform support to field infrastructure, Aleron combines enterprise systems
            experience with practical delivery.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <motion.article
              className="serviceCard"
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="iconShell">
                <Image src={service.icon} alt="" width={110} height={110} className="serviceIcon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="splitSection">
        <div className="splitCard">
          <div className="splitIcon">
            <Building2 size={34} />
          </div>
          <h3>Government & Contracting Support</h3>
          <p>
            Capability statement style positioning for public sector opportunities, subcontracting,
            and technology support engagements.
          </p>
          <a href="/government">View Government Capabilities <ArrowRight size={16} /></a>
        </div>

        <div className="splitCard">
          <div className="splitIcon">
            <Hammer size={34} />
          </div>
          <h3>Roofing CRM & Contractor Systems</h3>
          <p>
            CRM setup, lead tracking, follow up workflows, estimate pipeline visibility, and
            automation for roofing and construction businesses.
          </p>
          <a href="/roofing-crm">Explore Roofing CRM <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="why">
        <div className="sectionHeader">
          <span className="eyebrow">Why Aleron Systems</span>
          <h2>Enterprise-level experience with direct, responsive service.</h2>
          <p>
            Unlike large consulting firms, we provide direct access, faster turnaround, and practical
            solutions without unnecessary overhead.
          </p>
        </div>

        <div className="whyGrid">
          {whyAleron.map((item) => (
            <div className="whyItem" key={item}>
              <CheckCircle2 size={18} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="industries">
        <div className="sectionHeader center">
          <span className="eyebrow">Industries We Support</span>
          <h2>Flexible support across commercial and public sector environments.</h2>
        </div>

        <div className="industryGrid">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <span className="eyebrow">Ready to Streamline Your Business?</span>
          <h2>Let’s build smarter systems together.</h2>
          <p>
            Whether you need CRM support, automation, field infrastructure, or a complete cloud
            strategy, Aleron Systems is ready to help.
          </p>
        </div>
        <a href="/contact" className="btnPrimary">
          Contact Us Today <ArrowRight size={18} />
        </a>
      </section>

      <footer className="footer">
        <Image
          src="/footer/footer-logo-dark.png"
          alt="Aleron Systems"
          width={260}
          height={80}
          className="footerLogo"
        />
        <p>CRM consulting • Cloud solutions • Workflow automation • Security & infrastructure</p>
        <p className="small">© 2026 Aleron Systems LLC. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          color: #f8fafc;
          background: #050b14;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .heroBg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(5, 11, 20, 0.68), rgba(5, 11, 20, 0.96)),
            url('/banners/hero-bg-network-dark.png') center top / cover no-repeat;
          z-index: 0;
        }

        .noise {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 10%, rgba(20, 184, 166, 0.18), transparent 24%),
            radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.16), transparent 26%),
            radial-gradient(circle at 50% 80%, rgba(20, 184, 166, 0.08), transparent 30%);
          z-index: 1;
          pointer-events: none;
        }

        .nav,
        .hero,
        .trusted,
        .services,
        .splitSection,
        .why,
        .industries,
        .cta,
        .footer {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 22px;
          padding-right: 22px;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          padding-bottom: 24px;
        }

        .brandLogo {
          width: 240px;
          height: auto;
          display: block;
        }

        .navLinks {
          display: flex;
          gap: 22px;
          align-items: center;
        }

        .navLinks a {
          color: #dbeafe;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .navLinks a:hover {
          color: #5eead4;
          transform: translateY(-1px);
        }

        .navCta {
          border: 1px solid rgba(94, 234, 212, 0.35);
          border-radius: 999px;
          padding: 10px 16px;
        }

        .hero {
          min-height: 78vh;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
          padding-top: 42px;
          padding-bottom: 88px;
        }

        .eyebrow {
          display: inline-flex;
          color: #5eead4;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 13px;
          margin-bottom: 16px;
        }

        h1 {
          font-size: clamp(44px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.045em;
          margin: 0 0 24px;
          max-width: 760px;
        }

        h2 {
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 18px;
        }

        h3 {
          margin: 0 0 12px;
          font-size: 25px;
          line-height: 1.15;
        }

        .heroLead,
        .heroSub,
        .sectionHeader p,
        .splitCard p,
        .cta p {
          color: #cbd5e1;
          font-size: 19px;
          line-height: 1.7;
        }

        .heroLead {
          font-size: 22px;
          margin: 0 0 18px;
        }

        .heroSub {
          margin: 0 0 32px;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .btnPrimary,
        .btnSecondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          justify-content: center;
          border-radius: 14px;
          padding: 15px 21px;
          text-decoration: none;
          font-weight: 800;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .btnPrimary {
          color: #021014;
          background: linear-gradient(135deg, #5eead4, #38bdf8);
          box-shadow: 0 16px 40px rgba(45, 212, 191, 0.23);
        }

        .btnSecondary {
          color: #f8fafc;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(94, 234, 212, 0.25);
        }

        .btnPrimary:hover,
        .btnSecondary:hover {
          transform: translateY(-2px);
        }

        .visualCard {
          position: relative;
          border-radius: 34px;
          overflow: hidden;
          background: rgba(8, 15, 28, 0.78);
          border: 1px solid rgba(94, 234, 212, 0.18);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35);
        }

        .heroImage {
          width: 100%;
          height: auto;
          display: block;
        }

        .floatingBadge {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 999px;
          color: #ecfeff;
          font-size: 13px;
          font-weight: 800;
          background: rgba(2, 8, 23, 0.74);
          border: 1px solid rgba(94, 234, 212, 0.25);
          backdrop-filter: blur(10px);
        }

        .badgeOne { top: 30px; left: 28px; }
        .badgeTwo { right: 28px; top: 46%; }
        .badgeThree { left: 28px; bottom: 28px; }

        .trusted,
        .services,
        .why,
        .industries {
          padding-top: 82px;
          padding-bottom: 40px;
        }

        .sectionHeader {
          max-width: 820px;
          margin-bottom: 34px;
        }

        .sectionHeader.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .expertiseGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .expertiseItem,
        .whyItem {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px;
          border-radius: 16px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(94, 234, 212, 0.12);
          color: #e2e8f0;
        }

        .expertiseItem svg,
        .whyItem svg {
          color: #5eead4;
          flex: 0 0 auto;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .serviceCard {
          min-height: 320px;
          padding: 24px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(7, 16, 31, 0.88));
          border: 1px solid rgba(94, 234, 212, 0.14);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
          transition: transform 0.22s ease, border-color 0.22s ease;
        }

        .serviceCard:hover {
          transform: translateY(-7px);
          border-color: rgba(94, 234, 212, 0.38);
        }

        .iconShell {
          width: 92px;
          height: 92px;
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 20px;
          box-shadow: 0 14px 35px rgba(20, 184, 166, 0.15);
        }

        .serviceIcon {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .serviceCard p {
          color: #cbd5e1;
          line-height: 1.65;
          margin: 0;
        }

        .splitSection {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          padding-top: 52px;
          padding-bottom: 52px;
        }

        .splitCard {
          padding: 32px;
          border-radius: 28px;
          background: rgba(15, 23, 42, 0.74);
          border: 1px solid rgba(94, 234, 212, 0.14);
        }

        .splitIcon {
          color: #5eead4;
          margin-bottom: 18px;
        }

        .splitCard a {
          color: #5eead4;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          text-decoration: none;
          font-weight: 800;
        }

        .whyGrid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .industryGrid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .industryGrid span {
          padding: 12px 16px;
          border-radius: 999px;
          color: #e2e8f0;
          background: rgba(15, 23, 42, 0.76);
          border: 1px solid rgba(94, 234, 212, 0.12);
        }

        .cta {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          margin-top: 64px;
          margin-bottom: 74px;
          padding-top: 40px;
          padding-bottom: 40px;
          border-radius: 32px;
          background:
            linear-gradient(rgba(5, 11, 20, 0.75), rgba(5, 11, 20, 0.9)),
            url('/footer/footer-bg-glow.png') center / cover no-repeat;
          border: 1px solid rgba(94, 234, 212, 0.18);
        }

        .cta h2 {
          margin-bottom: 12px;
        }

        .cta p {
          margin: 0;
          max-width: 780px;
        }

        .footer {
          text-align: center;
          padding-top: 34px;
          padding-bottom: 42px;
          border-top: 1px solid rgba(94, 234, 212, 0.11);
        }

        .footerLogo {
          width: 250px;
          height: auto;
          margin-bottom: 14px;
        }

        .footer p {
          margin: 8px 0;
          color: #94a3b8;
        }

        .footer .small {
          font-size: 13px;
        }

        @media (max-width: 1050px) {
          .hero,
          .splitSection,
          .cta {
            grid-template-columns: 1fr;
          }

          .serviceGrid,
          .expertiseGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .whyGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .nav {
            align-items: flex-start;
            flex-direction: column;
          }

          .navLinks {
            flex-wrap: wrap;
            gap: 12px;
          }

          .brandLogo {
            width: 220px;
          }

          .hero {
            padding-top: 20px;
            min-height: auto;
          }

          h1 {
            font-size: 43px;
          }

          .heroLead {
            font-size: 19px;
          }

          .heroSub,
          .sectionHeader p,
          .splitCard p,
          .cta p {
            font-size: 17px;
          }

          .serviceGrid,
          .expertiseGrid,
          .whyGrid {
            grid-template-columns: 1fr;
          }

          .serviceCard {
            min-height: auto;
          }

          .cta {
            margin-left: 22px;
            margin-right: 22px;
          }
        }
      `}</style>
    </main>
  );
}
