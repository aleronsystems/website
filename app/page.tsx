import Image from 'next/image';

const services = [
  {
    title: 'CRM & Platform Solutions',
    text: 'Salesforce administration, workflow automation, platform support, and business process optimization.',
  },
  {
    title: 'Security & Low Voltage',
    text: 'Security systems, structured cabling, surveillance, access control, and smart infrastructure support.',
  },
  {
    title: 'Network & IT Infrastructure',
    text: 'Practical design, implementation, and operational support for reliable technology environments.',
  },
];

const highlights = [
  'Enterprise Experience',
  'Mission Focused',
  'Reliable & Compliant',
  'Veteran Owned',
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="bg-grid" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />

      <section className="shell">
        <header className="nav">
          <div className="navBrand">
            <Image
              src="/logos/banner-white-side-a.PNG"
              alt="Aleron Systems"
              width={320}
              height={70}
              className="navLogo"
              priority
            />
          </div>

          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </header>

        <section className="hero">
          <div className="heroText">
            <div className="eyebrow">Technology. Security. CRM Solutions.</div>

            <h1>
              Modern solutions for infrastructure, automation, and business systems.
            </h1>

            <p>
              Aleron Systems delivers practical support across CRM platforms, security and low voltage solutions, and operational technology execution for commercial and government focused work.
            </p>

            <div className="ctaRow">
              <a className="btnPrimary" href="#contact">
                Contact Us
              </a>
              <a className="btnSecondary" href="#services">
                View Services
              </a>
            </div>

            <div className="trustRow">
              {highlights.map((item) => (
                <span key={item} className="trustPill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="heroVisual">
            <div className="visualCard">
              <div className="iconWrap">
                <Image
                  src="/logos/logo-icon.PNG"
                  alt="Aleron Icon"
                  width={220}
                  height={220}
                  className="heroIcon"
                />
              </div>

              <div className="miniStats">
                <div className="stat">
                  <span className="statLabel">Focus</span>
                  <strong>Enterprise Tech</strong>
                </div>
                <div className="stat">
                  <span className="statLabel">Delivery</span>
                  <strong>Practical Solutions</strong>
                </div>
                <div className="stat">
                  <span className="statLabel">Approach</span>
                  <strong>Clean & Reliable</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="servicesSection">
          <div className="sectionHeader">
            <span className="eyebrow">Core Capabilities</span>
            <h2>Built for real world execution</h2>
            <p>
              We focus on solutions that support operations, improve visibility, and create cleaner systems for growth.
            </p>
          </div>

          <div className="cards">
            {services.map((service) => (
              <article key={service.title} className="card">
                <div className="cardLine" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilityStrip">
          <div className="stripGrid">
            <div className="stripItem">
              <span className="stripTitle">CRM & Platform</span>
              <span className="stripText">Administration, automation, and support</span>
            </div>
            <div className="stripItem">
              <span className="stripTitle">Security Systems</span>
              <span className="stripText">Access control, surveillance, and infrastructure</span>
            </div>
            <div className="stripItem">
              <span className="stripTitle">Network & IT</span>
              <span className="stripText">Implementation, optimization, and support</span>
            </div>
            <div className="stripItem">
              <span className="stripTitle">Low Voltage</span>
              <span className="stripText">Structured cabling and practical deployments</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contactSection">
          <div className="contactCard">
            <div>
              <span className="eyebrow">Let’s Connect</span>
              <h2>Ready to talk through your needs?</h2>
              <p>
                Reach out for business inquiries, future partnerships, and technology support discussions.
              </p>
            </div>

            <div className="contactInfo">
              <div>
                <span>Email</span>
                <strong>info@aleronsystems.com</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Pennsylvania, United States</strong>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footerBrand">
            <Image
              src="/logos/banner-white-side-a.PNG"
              alt="Aleron Systems"
              width={260}
              height={60}
              className="footerLogo"
            />
          </div>
          <p>Enterprise experience. Practical solutions.</p>
        </footer>
      </section>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(37, 99, 235, 0.12), transparent 35%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1), transparent 30%),
            linear-gradient(180deg, #020617 0%, #071226 45%, #08101f 100%);
          color: white;
          font-family: Arial, sans-serif;
        }

        .shell {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin: 0 auto;
          padding: 28px 20px 80px;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(255,255,255,0.35), transparent 75%);
          z-index: 0;
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          opacity: 0.35;
          animation: drift 12s ease-in-out infinite;
          z-index: 1;
        }

        .glow-1 {
          width: 260px;
          height: 260px;
          background: #2563eb;
          top: 80px;
          left: 8%;
        }

        .glow-2 {
          width: 220px;
          height: 220px;
          background: #1d4ed8;
          top: 440px;
          right: 10%;
          animation-delay: 2s;
        }

        .glow-3 {
          width: 180px;
          height: 180px;
          background: #0ea5e9;
          bottom: 120px;
          left: 20%;
          animation-delay: 4s;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 48px;
          padding: 8px 0;
        }

        .navLogo {
          width: 100%;
          max-width: 300px;
          height: auto;
          display: block;
        }

        .navLinks {
          display: flex;
          gap: 22px;
        }

        .navLinks a {
          color: #dbeafe;
          text-decoration: none;
          font-size: 15px;
          transition: opacity 0.2s ease;
        }

        .navLinks a:hover {
          opacity: 0.75;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
          align-items: center;
          min-height: 72vh;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #60a5fa;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .heroText h1 {
          margin: 0 0 20px;
          font-size: clamp(42px, 7vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.03em;
          max-width: 820px;
        }

        .heroText p {
          max-width: 760px;
          margin: 0 0 28px;
          color: #cbd5e1;
          font-size: 20px;
          line-height: 1.65;
        }

        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 28px;
        }

        .btnPrimary,
        .btnSecondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          padding: 14px 20px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .btnPrimary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.3);
        }

        .btnSecondary {
          border: 1px solid rgba(96, 165, 250, 0.28);
          background: rgba(15, 23, 42, 0.6);
          color: #dbeafe;
        }

        .btnPrimary:hover,
        .btnSecondary:hover {
          transform: translateY(-2px);
        }

        .trustRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .trustPill {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(96, 165, 250, 0.16);
          color: #dbeafe;
          font-size: 14px;
        }

        .heroVisual {
          display: flex;
          justify-content: center;
        }

        .visualCard {
          width: 100%;
          max-width: 430px;
          padding: 28px;
          border-radius: 26px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(9, 17, 32, 0.88));
          border: 1px solid rgba(96, 165, 250, 0.16);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.34);
          animation: floatCard 6s ease-in-out infinite;
        }

        .iconWrap {
          display: flex;
          justify-content: center;
          margin-bottom: 22px;
        }

        .heroIcon {
          width: 100%;
          max-width: 210px;
          height: auto;
          opacity: 0.96;
        }

        .miniStats {
          display: grid;
          gap: 12px;
        }

        .stat {
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(148, 163, 184, 0.12);
        }

        .statLabel {
          display: block;
          margin-bottom: 4px;
          color: #93c5fd;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .stat strong {
          font-size: 16px;
          color: #f8fafc;
        }

        .servicesSection {
          padding: 80px 0 30px;
        }

        .sectionHeader {
          max-width: 760px;
          margin-bottom: 30px;
        }

        .sectionHeader h2 {
          margin: 0 0 14px;
          font-size: clamp(30px, 4vw, 48px);
        }

        .sectionHeader p {
          margin: 0;
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.65;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .card {
          position: relative;
          overflow: hidden;
          padding: 26px;
          border-radius: 20px;
          background: rgba(10, 18, 35, 0.86);
          border: 1px solid rgba(59, 130, 246, 0.16);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
        }

        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(96, 165, 250, 0.35);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.26);
        }

        .cardLine {
          width: 64px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #60a5fa, #2563eb);
          margin-bottom: 16px;
        }

        .card h3 {
          margin: 0 0 14px;
          font-size: 28px;
          line-height: 1.15;
        }

        .card p {
          margin: 0;
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.65;
        }

        .capabilityStrip {
          margin-top: 40px;
          margin-bottom: 70px;
          padding: 26px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(96, 165, 250, 0.14);
          backdrop-filter: blur(10px);
        }

        .stripGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .stripItem {
          padding: 6px 4px;
        }

        .stripTitle {
          display: block;
          margin-bottom: 8px;
          color: #eff6ff;
          font-size: 16px;
          font-weight: 700;
        }

        .stripText {
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.6;
        }

        .contactSection {
          margin-bottom: 48px;
        }

        .contactCard {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          padding: 30px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(8, 15, 28, 0.94));
          border: 1px solid rgba(96, 165, 250, 0.16);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
        }

        .contactCard h2 {
          margin: 0 0 12px;
          font-size: clamp(28px, 4vw, 42px);
        }

        .contactCard p {
          margin: 0;
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.65;
        }

        .contactInfo {
          display: grid;
          gap: 18px;
          align-content: center;
        }

        .contactInfo div {
          padding: 18px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }

        .contactInfo span {
          display: block;
          margin-bottom: 8px;
          color: #93c5fd;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .contactInfo strong {
          color: #f8fafc;
          font-size: 18px;
        }

        .footer {
          padding: 28px 0 10px;
          text-align: center;
          color: #94a3b8;
        }

        .footerLogo {
          width: 100%;
          max-width: 240px;
          height: auto;
          opacity: 0.95;
        }

        .footer p {
          margin-top: 14px;
          font-size: 14px;
          letter-spacing: 0.04em;
        }

        @keyframes drift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -22px, 0);
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 980px) {
          .hero,
          .contactCard,
          .cards,
          .stripGrid {
            grid-template-columns: 1fr;
          }

          .nav {
            flex-direction: column;
            align-items: flex-start;
          }

          .navLinks {
            gap: 16px;
          }

          .hero {
            min-height: auto;
          }
        }

        @media (max-width: 640px) {
          .shell {
            padding: 24px 16px 60px;
          }

          .heroText p,
          .sectionHeader p,
          .contactCard p {
            font-size: 17px;
          }

          .card h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </main>
  );
}
