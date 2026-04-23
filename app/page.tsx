export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '60px 20px'
    }}>
      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '56px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Aleron Systems LLC
        </h1>

        <p style={{
          fontSize: '24px',
          color: '#cbd5e1',
          marginBottom: '40px'
        }}>
          Smart support for government and commercial technology work.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '40px'
        }}>
          <div style={{
            background: '#0f172a',
            padding: '20px',
            borderRadius: '12px'
          }}>
            <h2>Federal Contract Support</h2>
            <p>Professional support for government and commercial contract opportunities.</p>
          </div>

          <div style={{
            background: '#0f172a',
            padding: '20px',
            borderRadius: '12px'
          }}>
            <h2>Technology Operations</h2>
            <p>Reliable execution for IT, automation, and operational support.</p>
          </div>

          <div style={{
            background: '#0f172a',
            padding: '20px',
            borderRadius: '12px'
          }}>
            <h2>Business Automation</h2>
            <p>CRM, workflow automation, and process optimization solutions.</p>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2>Contact</h2>
          <p>Email: info@aleronsystems.com</p>
          <p>Pennsylvania, United States</p>
        </div>
      </section>
    </main>
  );
}
