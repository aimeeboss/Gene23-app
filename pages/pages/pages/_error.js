function Error({ statusCode }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#0A2A4A' }}>
        {statusCode ? `Error ${statusCode}` : 'An error occurred'}
      </h1>
      <p style={{ color: '#666' }}>
        Please refresh or return to the Gene23 home page 💙
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
