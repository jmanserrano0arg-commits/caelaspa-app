import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #2C1A3E 0%, #7B2D8B 50%, #9B59B6 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <div>
          <p style={{ color: '#E8D5A3', letterSpacing: '0.2em', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            ✦ Nail Art Profesional · Buenos Aires
          </p>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            El arte que lleva<br />
            <em style={{ color: '#F48FB1' }}>tus manos</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Manicuría, nail art y cursos profesionales en el corazón de Buenos Aires.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/reservar" className="btn-primary">
              📅 Reservar turno
            </Link>
            <Link to="/cursos" style={{
              border: '1px solid rgba(232,213,163,0.5)',
              color: '#E8D5A3',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'all 0.3s'
            }}>
              🎓 Ver cursos
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        background: '#2C1A3E',
        padding: '3rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        textAlign: 'center'
      }}>
        {[
          { num: '6+', label: 'Años de experiencia' },
          { num: '8+', label: 'Cursos disponibles' },
          { num: '100%', label: 'Incluye materiales' },
        ].map((stat, i) => (
          <div key={i}>
            <div style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', color: '#E8D5A3', fontWeight: 600 }}>{stat.num}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* SOBRE MI */}
      <section style={{ padding: '5rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ color: '#E91E8C', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Instructora profesional</span>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 300, color: '#2C1A3E', margin: '1rem 0' }}>
          Hola, soy <em style={{ color: '#9B59B6' }}>Gabriela</em>
        </h2>
        <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1rem' }}>
          Soy Gabriela Mendoza, profesional manicurista con más de 6 años de experiencia en el mundo de las uñas.
          Me especializo en Nail Art y en técnicas avanzadas como manicura combinada, esculpidas en gel, polygel y acrílico.
          Me caracteriza la dedicación, el detalle y el compromiso con cada clienta y alumna.
        </p>
        <Link to="/cursos" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
          Ver mis cursos →
        </Link>
      </section>

      {/* CONTACTO */}
      <section style={{ background: '#f8f4ff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 300, color: '#2C1A3E', marginBottom: '2rem' }}>
          ¿Hablamos?
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/message/TSYLVDCRN6EEA1" target="_blank" className="btn-primary">
            💬 WhatsApp
          </a>
          <a href="https://www.instagram.com/caelaspa" target="_blank" style={{
            border: '2px solid #9B59B6', color: '#9B59B6',
            padding: '0.8rem 2rem', borderRadius: '50px',
            textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s'
          }}>
            📸 Instagram
          </a>
        </div>
        <p style={{ color: '#888', marginTop: '1.5rem', fontSize: '0.9rem' }}>
          📍 Av. Santa Fe 934, al lado del café Martínez
        </p>
      </section>

    </div>
  )
}

export default Home