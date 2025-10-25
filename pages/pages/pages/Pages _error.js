export default function Home() {
  return (
    <main style={{textAlign:'center',padding:'40px',fontFamily:'Arial,sans-serif'}}>
      <img 
        src="/icons/icon-192.png" 
        alt="Gene23 logo" 
        style={{width:'100px',marginBottom:'20px'}}
      />
      <h1 style={{color:'#0A2A4A'}}>Welcome to Gene23 Health & Wellbeing</h1>
      <p style={{color:'#555'}}>
        Your personal hub for blood health, IV drips, aesthetics & wellness.
      </p>

      <a 
        href="https://wa.me/441616722233" 
        style={{
          display:'inline-block',
          marginTop:'20px',
          background:'#0A2A4A',
          color:'#fff',
          padding:'10px 20px',
          borderRadius:'8px',
          textDecoration:'none'
        }}
      >
        📲 Book via WhatsApp
      </a>
    </main>
  );
}
