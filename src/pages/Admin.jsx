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
          <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center">
            <p className="text-4xl mb-3">🎓</p>
            <p className="text-gray-400 text-sm">Gestión de cursos próximamente.</p>
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