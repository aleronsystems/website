import Image from 'next/image';

const services = [
  {
    title: 'Federal Contract Support',
    text: 'Professional support for government and commercial contract opportunities.',
  },
  {
    title: 'Technology Operations',
    text: 'Reliable execution for IT, automation, and operational support.',
  },
  {
    title: 'Business Automation',
    text: 'CRM, workflow automation, and process optimization solutions.',
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #020617 0%, #081225 45%, #0f172a 100%)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '40px 20px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <Image
            src="/logos/banner-white-side-a.PNG"
            alt="Aleron Systems"
            width={620}
            height={150}
            priority
            style={{ width: '100%', maxWidth: '620px', height: 'auto' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <Image
            src="/banners/banner-blue.PNG"
            alt="Aleron Systems banner"
            width={900}
            height={420}
            style={{
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            }}
          />
        </div>

        <p
          style={{
            fontSize: '24px',
            color: '#cbd5e1',
            marginBottom: '50px',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Technology. Security. CRM Solutions.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginTop: '20px',
            marginBottom: '50px',
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: 'rgba(15, 23, 42, 0.92)',
                padding: '26px',
                borderRadius: '16px',
                border: '1px solid rgba(59, 130, 246, 0.18)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.22)',
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: '14px',
                  fontSize: '30px',
                  lineHeight: 1.15,
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  margin: 0,
                  color: '#dbe4f0',
                  fontSize: '18px',
                  lineHeight: 1.6,
                }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
          }}
        >
          <Image
            src="/sections/buttons-links.PNG"
            alt="Aleron Systems service categories"
            width={1200}
            height={210}
            style={{
              width: '100%',
              maxWidth: '1100px',
              height: 'auto',
              borderRadius: '16px',
              backgroundColor: 'white',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
          }}
        >
          <Image
            src="/sections/footer.PNG"
            alt="Aleron Systems values"
            width={1200}
            height={110}
            style={{
              width: '100%',
              maxWidth: '1100px',
              height: 'auto',
              borderRadius: '16px',
            }}
          />
        </div>

        <div
          style={{
            marginTop: '40px',
            background: 'rgba(15, 23, 42, 0.92)',
            border: '1px solid rgba(59, 130, 246, 0.16)',
            borderRadius: '16px',
            padding: '28px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: '16px',
              fontSize: '32px',
            }}
          >
            Contact
          </h2>
          <p style={{ margin: '0 0 10px', fontSize: '20px', color: '#e2e8f0' }}>
            Email: info@aleronsystems.com
          </p>
          <p style={{ margin: 0, fontSize: '18px', color: '#cbd5e1' }}>
            Pennsylvania, United States
          </p>
        </div>
      </section>
    </main>
  );
}
