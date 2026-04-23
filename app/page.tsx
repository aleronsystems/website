'use client';

import Image from 'next/image';

const services = [
  {
    title: 'CRM & Platform Solutions',
    text: 'Salesforce administration, workflow automation, platform support, and process optimization for growing organizations.',
  },
  {
    title: 'Security & Low Voltage',
    text: 'Access control, surveillance, smart infrastructure, structured cabling, and practical systems support.',
  },
  {
    title: 'Network & IT Infrastructure',
    text: 'Implementation, optimization, documentation, and operational support for reliable technology environments.',
  },
];

const capabilityPills = [
  'Enterprise Experience',
  'Practical Solutions',
  'Mission Focused',
  'Veteran Owned',
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="grid" />
      <div className="glow glowA" />
      <div className="glow glowB" />
      <div className="glow glowC" />

      <div className="floatingNodes">
        <span className="node n1" />
        <span className="node n2" />
        <span className="node n3" />
        <span className="node n4" />
        <span className="node n5" />
        <span className="node n6" />
      </div>

      <section className="shell">
        <header className="nav">
          <a href="#" className="brand">
            <Image
              src="/logos/banner-white-side-a.PNG"
              alt="Aleron Systems"
              width={280}
              height={64}
              className="brandLogo"
              priority
            />
          </a>

          <nav className="navLinks">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero">
          <div className="heroCopy">
            <div className="eyebrow">Technology. Security. CRM Solutions.</div>

            <h1>
              Clean systems,
              <br />
              modern execution,
              <br />
              practical results.
            </h1>

            <p>
              Aleron Systems supports infrastructure, automation, CRM, and
              business technology initiatives with a modern, mission focused
              approach built for real world delivery.
            </p>

            <div className="ctaRow">
              <a href="#contact" className="btnPrimary">
                Contact Us
              </a>
              <a href="#services" className="btnSecondary">
                View Services
              </a>
            </div>

            <div className="pillRow">
              {capabilityPills.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="heroVisual">
            <div className="visualFrame">
              <div className="orbital orbital1" />
              <div className="orbital orbital2" />
              <div className="orbital orbital3" />

              <div className="centerMark">
                <Image
                  src="/logos/logo-icon.PNG"
                  alt="Aleron icon"
                  width={200}
                  height={200}
                  className="iconMain"
                />
              </div>

              <div className="visualBadge badge1">CRM</div>
              <div className="visualBadge badge2">Security</div>
              <div className="visualBadge badge3">Infrastructure</div>
              <div className="visualBadge badge4">Low Voltage</div>
            </div>
          </div>
        </section>

        <section className="valueStrip">
          <div className="valueItem">
            <strong>Enterprise Experience</strong>
            <span>Built on practical execution</span>
          </div>
          <div className="valueItem">
            <strong>Reliable & Compliant</strong>
            <span>Clean, structured delivery</span>
          </div>
          <div className="valueItem">
            <strong>Veteran Owned</strong>
            <span>Committed to excellence</span>
          </div>
        </section>

        <section id="services" className="services">
          <div className="sectionTop">
            <div className="eyebrow">Core Capabilities</div>
            <h2>Built for real world execution</h2>
            <p>
              We focus on solutions that improve visibility, reduce friction,
              and create stronger operational foundations.
            </p>
          </div>

          <div className="cardGrid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <div className="cardAccent" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilitiesPanel">
          <div className="capCol">
            <span className="capTitle">CRM & Platform</span>
            <span className="capText">Administration, automation, and support</span>
          </div>
          <div className="capCol">
            <span className="capTitle">Security Systems</span>
            <span className="capText">Access control, surveillance, and infrastructure</span>
          </div>
          <div className="capCol">
            <span className="capTitle">Network & IT</span>
            <span className="capText">Implementation, optimization, and support</span>
          </div>
          <div className="capCol">
            <span className="capTitle">Low Voltage</span>
            <span className="capText">Structured cabling and practical deployments</span>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contactCard">
            <div className="contactLeft">
              <div className="eyebrow">Let’s Connect</div>
              <h2>Ready to talk through your needs?</h2>
              <p>
                Reach out for business inquiries, partnerships, and technology
                support discussions.
              </p>
            </div>

            <div className="contactRight">
              <div className="infoBox">
                <span>Email</span>
                <strong>info@aleronsystems.com</strong>
              </div>
              <div className="infoBox">
                <span>Location</span>
                <strong>Pennsylvania, United States</strong>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <Image
            src="/logos/banner-white-side-a.PNG"
            alt="Aleron Systems"
            width={240}
            height={56}
            className="footerLogo"
          />
          <p>Enterprise experience. Practical solutions.</p>
        </footer>
      </section>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          color: #ffffff;
          font-family: Arial, sans-serif;
          background:
            radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.18), transparent 28%),
            radial-gradient(circle at 82% 24%, rgba(59, 130, 246, 0.14), transparent 24%),
            radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.08), transparent 25%),
            linear-gradient(180deg, #020617 0%, #071124 48%, #08101f 100%);
        }

        .shell {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          margin: 0 auto;
          padding: 28px 20px 80px;
        }

        .grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: linear-gradient(to bottom, rgba(255,255,255,0.38), transparent 76%);
          pointer-events: none;
        }

        .glow {
          position: absolute;
          z-index: 1;
          border-radius: 999px;
          filter: blur(90px);
          opacity: 0.35;
          animation: drift 10s ease-in-out infinite;
          pointer-events: none;
        }

        .glowA {
          width: 280px;
          height: 280px;
          background: #2563eb;
          top: 130px;
          left: 6%;
        }

        .glowB {
          width: 230px;
          height: 230px;
          background: #1d4ed8;
          top: 540px;
          right: 9%;
          animation-delay: 2s;
        }

        .glowC {
          width: 190px;
          height: 190px;
          background: #0ea5e9;
          bottom: 120px;
          left: 22%;
          animation-delay: 4s;
        }

        .floatingNodes {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .node {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(96, 165, 250, 0.75);
          box-shadow: 0 0 22px rgba(59, 130, 246, 0.45);
          animation: pulse 4s ease-in-out infinite;
        }

        .n1 { top: 12%; left: 12%; animation-delay: 0s; }
        .n2 { top: 18%; right: 16%; animation-delay: 1s; }
        .n3 { top: 44%; left: 8%; animation-delay: 2s; }
        .n4 { top: 54%; right: 9%; animation-delay: 1.4s; }
        .n5 { bottom: 22%; left: 14%; animation-delay: 2.4s; }
        .n6 { bottom: 16%; right: 18%; animation-delay: 0.8s; }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 56px;
        }

        .brandLogo {
          width: 100%;
          max-width: 300px;
          height: auto;
          display: block;
          opacity: 0.96;
        }

        .navLinks {
          display: flex;
          gap: 26px;
        }

        .navLinks a {
          color: #e2e8f0;
          text-decoration: none;
          font-size: 15px;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .navLinks a:hover {
          opacity: 0.75;
          transform: translateY(-1px);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
          min-height: 72vh;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #7aa8ff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .heroCopy h1 {
          margin: 0 0 20px;
          max-width: 760px;
          font-size: clamp(44px, 7vw, 82px);
          line-height: 0.96;
          letter-spacing: -0.04em;
        }

        .heroCopy p {
          max-width: 760px;
          margin: 0 0 30px;
          color: #cbd5e1;
          font-size: 22px;
          line-height: 1.6;
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
          min-width: 180px;
          padding: 15px 22px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 18px;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease;
        }

        .btnPrimary {
          color: white;
          background: linear-gradient(135deg, #4f6df5, #3b82f6);
          box-shadow: 0 14px 40px rgba(59, 130, 246, 0.35);
        }

        .btnSecondary {
          color: #e2e8f0;
          border: 1px solid rgba(96, 165, 250, 0.25);
          background: rgba(15, 23, 42, 0.6);
        }

        .btnPrimary:hover,
        .btnSecondary:hover {
          transform: translateY(-2px);
        }

        .pillRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .pill {
          padding: 11px 16px;
          border-radius: 999px;
          background: rgba(10, 18, 35, 0.72);
          border: 1px solid rgba(96, 165, 250, 0.12);
          color: #dbeafe;
          font-size: 14px;
        }

        .heroVisual {
          display: flex;
          justify-content: center;
        }

        .visualFrame {
          position: relative;
          width: 100%;
          max-width: 480px;
          min-height: 560px;
          padding: 34px 28px 26px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(8, 15, 28, 0.88));
          border: 1px solid rgba(96, 165, 250, 0.14);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
          overflow: hidden;
          animation: floatCard 6s ease-in-out infinite;
        }

        .orbital {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(96, 165, 250, 0.16);
        }

        .orbital1 {
          width: 330px;
          height: 330px;
          top: 48px;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbital2 {
          width: 250px;
          height: 250px;
          top: 88px;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbital3 {
          width: 170px;
          height: 170px;
          top: 128px;
          left: 50%;
          transform: translateX(-50%);
        }

        .centerMark {
          position: relative;
          display: flex;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 28px;
        }

        .iconMain {
          width: 100%;
          max-width: 180px;
          height: auto;
          display: block;
          filter: drop-shadow(0 0 28px rgba(59, 130, 246, 0.18));
        }

        .visualBadge {
          position: absolute;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(96, 165, 250, 0.18);
          color: #dbeafe;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
        }

        .badge1 { top: 86px; left: 18px; }
        .badge2 { top: 146px; right: 18px; }
        .badge3 { top: 262px; left: 10px; }
        .badge4 { top: 320px; right: 12px; }

        .valueStrip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 22px;
          margin-bottom: 86px;
        }

        .valueItem {
          padding: 22px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(96, 165, 250, 0.12);
          backdrop-filter: blur(8px);
        }

        .valueItem strong {
          display: block;
          margin-bottom: 8px;
          color: #f8fafc;
          font-size: 18px;
        }

        .valueItem span {
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.5;
        }

        .services {
          margin-bottom: 54px;
        }

        .sectionTop {
          max-width: 760px;
          margin-bottom: 28px;
        }

        .sectionTop h2 {
          margin: 0 0 14px;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.02;
        }

        .sectionTop p {
          margin: 0;
          color: #cbd5e1;
          font-size: 19px;
          line-height: 1.65;
        }

        .cardGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .card {
          position: relative;
          overflow: hidden;
          padding: 28px;
          min-height: 250px;
          border-radius: 22px;
          background: rgba(7, 16, 31, 0.9);
          border: 1px solid rgba(59, 130, 246, 0.16);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(96, 165, 250, 0.3);
          box-shadow: 0 20px 46px rgba(0, 0, 0, 0.26);
        }

        .cardAccent {
          width: 78px;
          height: 5px;
          margin-bottom: 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, #7aa8ff, #2563eb);
        }

        .card h3 {
          margin: 0 0 14px;
          font-size: 28px;
          line-height: 1.1;
        }

        .card p {
          margin: 0;
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.65;
        }

        .capabilitiesPanel {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 76px;
          padding: 22px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(96, 165, 250, 0.12);
        }

        .capCol {
          padding: 10px 14px;
        }

        .capTitle {
          display: block;
          margin-bottom: 8px;
          color: #f8fafc;
          font-size: 17px;
          font-weight: 700;
        }

        .capText {
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.55;
        }

        .contact {
          margin-bottom: 50px;
        }

        .contactCard {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
          padding: 34px;
          border-radius: 26px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(8, 15, 28, 0.92));
          border: 1px solid rgba(96, 165, 250, 0.14);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
        }

        .contactLeft h2 {
          margin: 0 0 14px;
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.02;
        }

        .contactLeft p {
          margin: 0;
          color: #cbd5e1;
          font-size: 20px;
          line-height: 1.65;
          max-width: 620px;
        }

        .contactRight {
          display: grid;
          gap: 18px;
          align-content: center;
        }

        .infoBox {
          padding: 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }

        .infoBox span {
          display: block;
          margin-bottom: 10px;
          color: #93c5fd;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .infoBox strong {
          color: #f8fafc;
          font-size: 18px;
        }

        .footer {
          padding-top: 10px;
          text-align: center;
          color: #94a3b8;
        }

        .footerLogo {
          width: 100%;
          max-width: 240px;
          height: auto;
          display: block;
          margin: 0 auto 12px;
          opacity: 0.95;
        }

        .footer p {
          margin: 0;
          font-size: 14px;
          letter-spacing: 0.04em;
        }

        @keyframes drift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -24px, 0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.65;
          }
          50% {
            transform: scale(1.4);
            opacity: 1;
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 1080px) {
          .hero,
          .contactCard,
          .cardGrid,
          .capabilitiesPanel,
          .valueStrip {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
          }
        }

        @media (max-width: 760px) {
          .shell {
            padding: 24px 16px 64px;
          }

          .nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .heroCopy p,
          .sectionTop p,
          .contactLeft p {
            font-size: 18px;
          }

          .btnPrimary,
          .btnSecondary {
            width: 100%;
          }

          .visualFrame {
            min-height: 520px;
          }
        }
      `}</style>
    </main>
  );
}
