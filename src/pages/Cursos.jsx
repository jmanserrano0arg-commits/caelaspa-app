const cursos = [
  {
    id: 1,
    tipo: 'Curso · 16 hs',
    tipoColor: 'bg-purple-100 text-purple-600',
    nombre: 'Nail Art Avanzado',
    descripcion: 'Especializate en 3D, encapsulado, difuminados y más.',
    contenido: ['Diseños 3D y Texturas', 'Efectos Ópticos y French dobles', 'Micropintura: retratos y mandalas'],
    precio: '$220.000',
    experiencia: 'Requiere experiencia previa',
    wa: 'Hola! Me interesa el Nail Art Avanzado'
  },
  {
    id: 2,
    tipo: 'Carrera · 32 hs',
    tipoColor: 'bg-yellow-100 text-yellow-700',
    nombre: 'Carrera Profesional de Manicuría',
    descripcion: 'Formación completa para convertirte en técnica profesional.',
    contenido: ['Manicuría rusa y torno', 'Soft gel, Kapping y Acrílico', 'Decoraciones y Nail Art básico'],
    precio: '$350.000',
    experiencia: 'Sin experiencia previa',
    wa: 'Hola! Me interesa la Carrera Profesional de Manicuria'
  },
  {
    id: 3,
    tipo: 'Curso · 16 hs',
    tipoColor: 'bg-purple-100 text-purple-600',
    nombre: 'Especialista en Soft y Geles',
    descripcion: 'Para quienes quieran ser expertas en el tema.',
    contenido: ['Kapping: gel, poligel y acrílico', 'Soft gel completo', 'Reconstrucción y service'],
    precio: '$250.000',
    experiencia: 'Sin experiencia previa',
    wa: 'Hola! Me interesa el curso Especialista en Soft y Geles'
  },
  {
    id: 4,
    tipo: 'Carrera · 32+ hs',
    tipoColor: 'bg-yellow-100 text-yellow-700',
    nombre: 'Especialista en Acrílico',
    descripcion: 'Dominá el acrílico desde cero hasta técnicas avanzadas.',
    contenido: ['Química del acrílico', 'Estructuras comerciales', 'Reversa y Baby Boomer'],
    precio: '$250.000',
    experiencia: 'Sin experiencia previa',
    wa: 'Hola! Me interesa el curso Especialista en Acrilico'
  },
]

const intensivos = [
  { nombre: 'Pedicuría Combinada', precio: '$110.000', wa: 'Hola! Me interesa el Intensivo de Pedicuria' },
  { nombre: 'Taller de Nail Art', precio: '$110.000', wa: 'Hola! Me interesa el Taller de Nail Art' },
  { nombre: 'Intensivo Soft Gel', precio: '$130.000', wa: 'Hola! Me interesa el Intensivo de Soft Gel' },
  { nombre: 'Intensivo Capping', precio: '$140.000', wa: 'Hola! Me interesa el Intensivo de Capping' },
  { nombre: 'Control de Producto y Estructura', precio: '$160.000', wa: 'Hola! Me interesa el Intensivo de Control de Producto' },
  { nombre: 'Reducción de Tiempos', precio: '$160.000', wa: 'Hola! Me interesa el Intensivo de Reduccion de Tiempos' },
  { nombre: 'Cero Desprendimiento y Sellado', precio: '$160.000', wa: 'Hola! Me interesa el Intensivo de Cero Desprendimiento' },
]

const WA = 'https://wa.me/message/TSYLVDCRN6EEA1'

function Cursos() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-600 py-16 px-6 text-center">
        <span className="text-yellow-200 text-xs tracking-widest uppercase">Formación profesional</span>
        <h1 className="text-white text-4xl md:text-5xl font-serif font-light mt-3">
          Cursos & <em className="text-pink-300">Capacitaciones</em>
        </h1>
        <p className="text-white/70 mt-4 max-w-md mx-auto">
          Aprendé con más de 6 años de experiencia profesional
        </p>
      </div>

      {/* CURSOS */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif text-purple-900 mb-8">🎓 Cursos y Carreras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cursos.map(curso => (
            <div key={curso.id} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${curso.tipoColor}`}>
                {curso.tipo}
              </span>
              <h3 className="text-xl font-serif text-purple-900 mt-3 mb-2">{curso.nombre}</h3>
              <p className="text-gray-500 text-sm mb-4">{curso.descripcion}</p>
              <ul className="space-y-1 mb-4">
                {curso.contenido.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-purple-400">✦</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mb-4">✅ {curso.experiencia}</p>
              <div className="flex items-center justify-between pt-4 border-t border-purple-50">
                <span className="text-2xl font-serif text-purple-700 font-semibold">{curso.precio}</span>
                <a href={`${WA}?text=${encodeURIComponent(curso.wa)}`} target="_blank" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-md transition-all">
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* INTENSIVOS */}
        <h2 className="text-2xl font-serif text-purple-900 mt-16 mb-8">⚡ Intensivos · 1 día · 8 hs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {intensivos.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-purple-100 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-600">
                  Intensivo · 1 día
                </span>
                <h3 className="text-base font-semibold text-purple-900 mt-3 mb-1">{item.nombre}</h3>
                <p className="text-xs text-gray-400">8 hs + Coffee Break · Av. Santa Fe 934</p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-purple-50">
                <span className="text-xl font-serif text-purple-700 font-semibold">{item.precio}</span>
                <a href={`${WA}?text=${encodeURIComponent(item.wa)}`} target="_blank" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-semibold hover:shadow-md transition-all">
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Cursos