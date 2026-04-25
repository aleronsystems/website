'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 20% 10%, rgba(20,184,166,.12), transparent 26%), radial-gradient(circle at 80% 20%, rgba(56,189,248,.10), transparent 28%), #050b14',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <header
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          marginTop: '-105px',
          padding: '0 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a href="/">
          <Image
            src="/logos/navbar-logo-dark.png"
            alt="Aleron Systems"
            width={520}
            height={160}
            priority
            style={{ width: '540px', height: 'auto' }}
          />
        </a>

        <nav
          style={{
            display: 'flex',
            gap: '24px',
            fontSize: '16px',
            fontWeight: 700,
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
          padding: '0 28px 50px',
          display: 'grid',
          gridTemplateColumns: '1.15fr .85fr',
          gap: '44px',
          alignItems: 'start',
        }}
      >
        <div>
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
              fontSize: '72px',
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
              display: 'inline-block',
              background: 'linear-gradient(135deg,#5eead4,#38bdf8)',
              color: '#021014',
              padding: '15px 22px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Work With Us
          </a>
        </div>

        <div
          style={{
            maxWidth: '440px',
            justifySelf: 'end',
            padding: '20px',
            borderRadius: '24px',
            background:
              'linear-gradient(180deg, rgba(15,23,42,.92), rgba(7,16,31,.92))',
            border: '1px solid rgba(94,234,212,.14)',
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

          <h2 style={{ fontSize: '34px', margin: '0 0 6px' }}>
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
              color: '#e2e8f0',
              fontSize: '15px',
              lineHeight: '2',
            }}
          >
            <li>✓ 15+ Years Enterprise Technology Experience</li>
            <li>✓ Salesforce, CRM, Automation, and Cloud Systems</li>
            <li>✓ Veteran Owned Business</li>
            <li>✓ Direct and Responsive Support</li>
            <li>✓ Commercial and Government Focus</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
