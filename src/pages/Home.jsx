import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-800 to-purple-500 flex items-center justify-center text-center px-6">
        <div>
          <p className="text-yellow-200 tracking-widest text-xs uppercase mb-4">
            ✦ Nail Art Profesional · Buenos Aires
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-light leading-tight mb-6">
            El arte que lleva <br />
            <em className="text-pink-300">tus manos</em>
          </h1>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Manicuría, nail art y cursos profesionales en el corazón de Buenos Aires.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/reservar" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              📅 Reservar turno
            </Link>
            <Link to="/cursos" className="border border-yellow-200/50 text-yellow-200 px-8 py-3 rounded-full font-medium hover:bg-yellow-200/10 transition-all">
              🎓 Ver cursos
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-purple-950 py-12 px-6 grid grid-cols-3 gap-6 text-center">
        {[
          { num: '6+', label: 'Años de experiencia' },
          { num: '8+', label: 'Cursos disponibles' },
          { num: '100%', label: 'Incluye materiales' },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-4xl font-serif text-yellow-200 font-semibold">{stat.num}</div>
            <div className="text-white/50 text-xs uppercase tracking-widest mt-2">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* SOBRE MI */}
      <section className="py-20 px-6 max-w-2xl mx-auto text-center">
        <span className="text-pink-500 text-xs tracking-widest uppercase font-semibold">
          Instructora profesional
        </span>
        <h2 className="text-4xl font-serif font-light text-purple-900 mt-3 mb-6">
          Hola, soy <em className="text-purple-600">Gabriela</em>
        </h2>
        <p className="text-gray-500 leading-relaxed text-base">
          Soy Gabriela Mendoza, profesional manicurista con más de 6 años de experiencia.
          Me especializo en Nail Art y técnicas avanzadas como manicura combinada,
          esculpidas en gel, polygel y acrílico. Me caracteriza la dedicación,
          el detalle y el compromiso con cada clienta y alumna.
        </p>
        <Link to="/cursos" className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
          Ver mis cursos →
        </Link>
      </section>

      {/* CONTACTO */}
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-serif font-light text-purple-900 mb-8">
          ¿Hablamos?
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://wa.me/message/TSYLVDCRN6EEA1" target="_blank" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
            💬 WhatsApp
          </a>
          <a href="https://www.instagram.com/caelaspa" target="_blank" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all">
            📸 Instagram
          </a>
        </div>
        <p className="text-gray-400 mt-6 text-sm">
          📍 Av. Santa Fe 934, al lado del café Martínez
        </p>
      </section>

    </div>
  )
}

export default Home