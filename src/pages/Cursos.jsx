import { useState, useEffect } from 'react'

const WA = 'https://wa.me/message/TSYLVDCRN6EEA1'
const API = import.meta.env.VITE_API_URL

function Cursos() {
  const [cursosMes, setCursosMes] = useState([])
  const [todosLosCursos, setTodosLosCursos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    cargarCursos()
  }, [])

  async function cargarCursos() {
    try {
      const [resMes, resTodos] = await Promise.all([
        fetch(`${API}/cursos/mes-activo`),
        fetch(`${API}/cursos`)
      ])
      const mes = await resMes.json()
      const todos = await resTodos.json()
      setCursosMes(mes)
      setTodosLosCursos(todos.filter(c => !c.mesActivo && c.activo))
    } catch(error) {
      console.error('Error:', error)
    }
    setCargando(false)
  }

  const tipoColor = {
    'Curso 16 hs': 'bg-purple-100 text-purple-600',
    'Curso · 16 hs': 'bg-purple-100 text-purple-600',
    'Carrera 32 hs': 'bg-yellow-100 text-yellow-700',
    'Carrera · 32 hs': 'bg-yellow-100 text-yellow-700',
    'Carrera 32+ hs': 'bg-yellow-100 text-yellow-700',
    'Carrera · 32+ hs': 'bg-yellow-100 text-yellow-700',
    'Intensivo 1 dia': 'bg-pink-100 text-pink-600',
    'Intensivo · 1 día': 'bg-pink-100 text-pink-600',
  }

  function formatearPrecio(precio) {
    const num = precio?.toString().replace(/\D/g, '')
    if (!num) return precio
    return '$' + Number(num).toLocaleString('es-AR')
  }

  function formatearFecha(fecha) {
    if (!fecha) return ''
    if (fecha.includes('/')) return fecha
    const [year, month, day] = fecha.split('-')
    if (!day) return fecha
    return `${day}/${month}/${year}`
  }

  function CursoCard({ curso, boton = 'Consultar' }) {
    const tieneFecha = curso.fechaInicio || curso.fecha
    const tieneHora = curso.horaInicio || curso.horario

    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${tipoColor[curso.tipo] || 'bg-gray-100 text-gray-600'}`}>
          {curso.tipo}
        </span>
        <h3 className="text-xl font-serif text-purple-900 mt-3 mb-2">{curso.nombre}</h3>
        {curso.descripcion && <p className="text-gray-500 text-sm mb-4">{curso.descripcion}</p>}

        {(tieneFecha || tieneHora) && (
          <div className="bg-purple-50 rounded-xl p-3 mb-4 space-y-1">
            {tieneFecha && (
              <p className="text-sm text-gray-600">
                Fecha: {formatearFecha(curso.fechaInicio || curso.fecha)}
                {curso.fechaFin ? ' al ' + formatearFecha(curso.fechaFin) : ''}
              </p>
            )}
            {tieneHora && (
              <p className="text-sm text-gray-600">
                Horario: {curso.horaInicio || curso.horario}
                {curso.horaFin ? ' a ' + curso.horaFin : ''}
              </p>
            )}
          </div>
        )}

        <p className="text-xs text-gray-400 mb-4">{curso.experiencia}</p>
        <div className="flex items-center justify-between pt-4 border-t border-purple-50 mt-auto">
          <span className="text-2xl font-serif text-purple-700 font-semibold">{formatearPrecio(curso.precio)}</span>
          <a href={`${WA}?text=${encodeURIComponent('Hola! Me interesa el curso ' + curso.nombre)}`} target="_blank" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-md transition-all">
            {boton} →
          </a>
        </div>
      </div>
    )
  }

  if(cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Cargando cursos...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-gradient-to-r from-purple-900 to-purple-600 py-16 px-6 text-center">
        <span className="text-yellow-200 text-xs tracking-widest uppercase">Formacion profesional</span>
        <h1 className="text-white text-4xl md:text-5xl font-serif font-light mt-3">
          Cursos y Capacitaciones
        </h1>
        <p className="text-white/70 mt-4 max-w-md mx-auto">
          Aprende con mas de 6 anos de experiencia profesional
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {cursosMes.length > 0 && (
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif text-purple-900">Disponibles este mes</h2>
              <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                Inscripciones abiertas
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursosMes.map(curso => (
                <CursoCard key={curso._id} curso={curso} boton="Reservar" />
              ))}
            </div>
          </div>
        )}

        {todosLosCursos.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif text-purple-900 mb-8">Todos los cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todosLosCursos.map(curso => (
                <CursoCard key={curso._id} curso={curso} boton="Consultar" />
              ))}
            </div>
          </div>
        )}

        {cursosMes.length === 0 && todosLosCursos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">No hay cursos disponibles por el momento.</p>
            <a href={WA} target="_blank" className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold">
              Consultar por WhatsApp
            </a>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cursos
