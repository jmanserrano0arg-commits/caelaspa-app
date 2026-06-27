import { useState, useEffect } from 'react'

const USUARIO = 'caelaspa'
const PASSWORD = 'caela2024'
const API = import.meta.env.VITE_API_URL

function Admin() {
  const [logueado, setLogueado] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [tab, setTab] = useState('citas')
  const [citas, setCitas] = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(logueado && tab === 'citas') {
      cargarCitas()
    }
  }, [logueado, tab])

  async function cargarCitas() {
    setCargando(true)
    try {
      const res = await fetch(`${API}/citas`)
      const data = await res.json()
      setCitas(data)
    } catch(error) {
      console.error('Error:', error)
    }
    setCargando(false)
  }

  async function cambiarEstado(id, estado) {
    try {
      await fetch(`${API}/citas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado })
      })
      cargarCitas()
    } catch(error) {
      console.error('Error:', error)
    }
  }

  async function eliminarCita(id) {
    if(!confirm('¿Seguro que querés eliminar esta cita?')) return
    try {
      await fetch(`${API}/citas/${id}`, { method: 'DELETE' })
      cargarCitas()
    } catch(error) {
      console.error('Error:', error)
    }
  }

  const [cursos, setCursos] = useState([])
const [showFormCurso, setShowFormCurso] = useState(false)
const [cursoEditando, setCursoEditando] = useState(null)
const [formCurso, setFormCurso] = useState({
  nombre: '',
  tipo: 'Curso · 16 hs',
  precio: '',
  descripcion: '',
  fecha: '',
  horario: '',
  experiencia: 'Sin experiencia previa',
  mesActivo: false,
  activo: true
})

useEffect(() => {
  if(logueado && tab === 'cursos') {
    cargarCursos()
  }
}, [logueado, tab])

async function cargarCursos() {
  try {
    const res = await fetch(`${API}/cursos`)
    const data = await res.json()
    setCursos(data)
  } catch(error) {
    console.error('Error:', error)
  }
}

async function guardarCurso(e) {
  e.preventDefault()
  try {
    const url = cursoEditando
      ? `${API}/cursos/${cursoEditando._id}`
      : `${API}/cursos`
    const method = cursoEditando ? 'PUT' : 'POST'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formCurso)
    })

    setShowFormCurso(false)
    setCursoEditando(null)
    setFormCurso({ nombre: '', tipo: 'Curso · 16 hs', precio: '', descripcion: '', fecha: '', horario: '', experiencia: 'Sin experiencia previa', mesActivo: false, activo: true })
    cargarCursos()
  } catch(error) {
    console.error('Error:', error)
  }
}

async function eliminarCurso(id) {
  if(!confirm('¿Seguro que querés eliminar este curso?')) return
  try {
    await fetch(`${API}/cursos/${id}`, { method: 'DELETE' })
    cargarCursos()
  } catch(error) {
    console.error('Error:', error)
  }
}

function editarCurso(curso) {
  setCursoEditando(curso)
  setFormCurso(curso)
  setShowFormCurso(true)
}

useEffect(() => {
  if(logueado && tab === 'cursos') {
    cargarCursos()
  }
}, [logueado, tab])

async function cargarCursos() {
  try {
    const res = await fetch(`${API}/cursos`)
    const data = await res.json()
    setCursos(data)
  } catch(error) {
    console.error('Error:', error)
  }
}

async function guardarCurso(e) {
  e.preventDefault()
  try {
    const url = cursoEditando
      ? `${API}/cursos/${cursoEditando._id}`
      : `${API}/cursos`
    const method = cursoEditando ? 'PUT' : 'POST'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formCurso)
    })

    setShowFormCurso(false)
    setCursoEditando(null)
    setFormCurso({ nombre: '', tipo: 'Curso · 16 hs', precio: '', descripcion: '', fecha: '', horario: '', experiencia: 'Sin experiencia previa', mesActivo: false, activo: true })
    cargarCursos()
  } catch(error) {
    console.error('Error:', error)
  }
}

async function eliminarCurso(id) {
  if(!confirm('¿Seguro que querés eliminar este curso?')) return
  try {
    await fetch(`${API}/cursos/${id}`, { method: 'DELETE' })
    cargarCursos()
  } catch(error) {
    console.error('Error:', error)
  }
}

function editarCurso(curso) {
  setCursoEditando(curso)
  setFormCurso(curso)
  setShowFormCurso(true)
}

  function handleLogin(e) {
    e.preventDefault()
    if (user === USUARIO && pass === PASSWORD) {
      setLogueado(true)
      setError('')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  const estadoColor = {
    pendiente: 'bg-yellow-100 text-yellow-700',
    confirmada: 'bg-green-100 text-green-700',
    cancelada: 'bg-red-100 text-red-700'
  }

  if (!logueado) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 w-full max-w-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-serif text-purple-900">💅 Caela Spa</h1>
            <p className="text-gray-400 text-sm mt-1">Panel de administración</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Usuario"
              value={user}
              onChange={e => setUser(e.target.value)}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
            />
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-gradient-to-r from-purple-900 to-purple-600 px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-serif text-lg">💅 Panel Admin — Caela Spa</h1>
        <button onClick={() => setLogueado(false)} className="text-white/70 text-sm hover:text-white transition-colors">
          Cerrar sesión
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { id: 'citas', label: '📅 Citas' },
            { id: 'cursos', label: '🎓 Cursos' },
            { id: 'clientes', label: '👥 Clientes' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                tab === t.id
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-purple-600 border-2 border-purple-200 hover:border-purple-400'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* CITAS */}
        {tab === 'citas' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif text-purple-900">
                Citas ({citas.length})
              </h2>
              <button onClick={cargarCitas} className="text-purple-600 text-sm hover:text-purple-800">
                🔄 Actualizar
              </button>
            </div>

            {cargando ? (
              <p className="text-center text-gray-400 py-8">Cargando...</p>
            ) : citas.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center">
                <p className="text-4xl mb-3">📅</p>
                <p className="text-gray-400 text-sm">No hay citas registradas todavía.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {citas.map(cita => (
                  <div key={cita._id} className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm">
                    <div className="flex justify-between items-start flex-wrap gap-3">
                      <div>
                        <h3 className="font-semibold text-purple-900">{cita.nombre}</h3>
                        <p className="text-sm text-gray-500">{cita.telefono}</p>
                        <p className="text-sm text-gray-600 mt-1">💅 {cita.servicio}</p>
                        <p className="text-sm text-gray-600">📅 {cita.fecha} · {cita.hora} hs</p>
                        {cita.mensaje && <p className="text-sm text-gray-400 mt-1">💬 {cita.mensaje}</p>}
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${estadoColor[cita.estado]}`}>
                          {cita.estado}
                        </span>
                        <div className="flex gap-2">
                          {cita.estado === 'pendiente' && (
                            <button
                              onClick={() => cambiarEstado(cita._id, 'confirmada')}
                              className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold hover:bg-green-200 transition-all"
                            >
                              ✅ Confirmar
                            </button>
                          )}
                          {cita.estado !== 'cancelada' && (
                            <button
                              onClick={() => cambiarEstado(cita._id, 'cancelada')}
                              className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold hover:bg-red-200 transition-all"
                            >
                              ❌ Cancelar
                            </button>
                          )}
                          <button
                            onClick={() => eliminarCita(cita._id)}
                            className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-semibold hover:bg-gray-200 transition-all"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

{/* CURSOS */}
{tab === 'cursos' && (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-serif text-purple-900">
        Cursos ({cursos.length})
      </h2>
      <button
        onClick={() => { setShowFormCurso(true); setCursoEditando(null) }}
        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
      >
        + Nuevo curso
      </button>
    </div>

    {/* FORMULARIO */}
    {showFormCurso && (
      <form onSubmit={guardarCurso} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm mb-6 space-y-4">
        <h3 className="font-serif text-purple-900 text-lg">
          {cursoEditando ? 'Editar curso' : 'Nuevo curso'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
            <input
              type="text"
              required
              value={formCurso.nombre}
              onChange={e => setFormCurso({...formCurso, nombre: e.target.value})}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
            <select
              value={formCurso.tipo}
              onChange={e => setFormCurso({...formCurso, tipo: e.target.value})}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-400"
            >
              <option>Curso · 16 hs</option>
              <option>Carrera · 32 hs</option>
              <option>Carrera · 32+ hs</option>
              <option>Intensivo · 1 día</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Precio *</label>
            <input
              type="text"
              required
              placeholder="$220.000"
              value={formCurso.precio}
              onChange={e => setFormCurso({...formCurso, precio: e.target.value})}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
            <input
              type="text"
              placeholder="9 Jun → 2 Jul"
              value={formCurso.fecha}
              onChange={e => setFormCurso({...formCurso, fecha: e.target.value})}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Horario</label>
            <input
              type="text"
              placeholder="18:00 a 20:00 hs"
              value={formCurso.horario}
              onChange={e => setFormCurso({...formCurso, horario: e.target.value})}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experiencia</label>
            <select
              value={formCurso.experiencia}
              onChange={e => setFormCurso({...formCurso, experiencia: e.target.value})}
              className="w-full border-2 border-purple-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-400"
            >
              <option>Sin experiencia previa</option>
              <option>Requiere experiencia previa</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea
            rows={2}
            value={formCurso.descripcion}
            onChange={e => setFormCurso({...formCurso, descripcion: e.target.value})}
            className="w-full border-2 border-purple-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-400 resize-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={formCurso.mesActivo}
              onChange={e => setFormCurso({...formCurso, mesActivo: e.target.checked})}
              className="w-4 h-4 accent-purple-600"
            />
            Mostrar en mes activo
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={formCurso.activo}
              onChange={e => setFormCurso({...formCurso, activo: e.target.checked})}
              className="w-4 h-4 accent-purple-600"
            />
            Activo
          </label>
        </div>
        <div className="flex gap-3">
          <button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Guardar
          </button>
          <button
            type="button"
            onClick={() => { setShowFormCurso(false); setCursoEditando(null) }}
            className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full text-sm font-semibold"
          >
            Cancelar
          </button>
        </div>
      </form>
    )}

    {/* LISTA DE CURSOS */}
    {cursos.length === 0 ? (
      <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center">
        <p className="text-4xl mb-3">🎓</p>
        <p className="text-gray-400 text-sm">No hay cursos cargados todavía.</p>
      </div>
    ) : (
      <div className="space-y-3">
        {cursos.map(curso => (
          <div key={curso._id} className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm flex justify-between items-center flex-wrap gap-3">
            <div>
              <span className="text-xs font-semibold text-purple-500 uppercase tracking-wider">{curso.tipo}</span>
              <h3 className="font-semibold text-purple-900">{curso.nombre}</h3>
              <p className="text-sm text-gray-500">{curso.precio}</p>
              {curso.fecha && <p className="text-xs text-gray-400">📅 {curso.fecha}</p>}
              <div className="flex gap-2 mt-1">
                {curso.mesActivo && <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">Mes activo</span>}
                {!curso.activo && <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">Inactivo</span>}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => editarCurso(curso)}
                className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold hover:bg-purple-200 transition-all"
              >
                ✏️ Editar
              </button>
              <button
                onClick={() => eliminarCurso(curso._id)}
                className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-semibold hover:bg-red-200 transition-all"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)}

        {/* CLIENTES */}
        {tab === 'clientes' && (
          <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center">
            <p className="text-4xl mb-3">👥</p>
            <p className="text-gray-400 text-sm">Gestión de clientes próximamente.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Admin