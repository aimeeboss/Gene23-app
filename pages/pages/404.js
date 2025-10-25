export default function Custom404() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', color: '#0A2A4A' }}>404</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Oops! Page not found — return to the Gene23 app 💙
      </p>
      <a href="/" style={{
        display: 'inline-block',
        marginTop: '20px',
        textDecoration: 'none',
        background: '#0A2A4A',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px'
      }}>Go Home</a>
    </div>
  );
}
