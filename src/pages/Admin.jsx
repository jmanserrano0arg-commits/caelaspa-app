import { useState } from 'react'

const USUARIO = 'caelaspa'
const PASSWORD = 'caela2024'

function Admin() {
  const [logueado, setLogueado] = useState(false)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [tab, setTab] = useState('citas')

  function handleLogin(e) {
    e.preventDefault()
    if (user === USUARIO && pass === PASSWORD) {
      setLogueado(true)
      setError('')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
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

      {/* NAVBAR ADMIN */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-600 px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-serif text-lg">💅 Panel Admin — Caela Spa</h1>
        <button
          onClick={() => setLogueado(false)}
          className="text-white/70 text-sm hover:text-white transition-colors"
        >
          Cerrar sesión
        </button>
      </div>

      {/* TABS */}
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
              <h2 className="text-xl font-serif text-purple-900">Citas del día</h2>
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                + Nueva cita
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center">
              <p className="text-4xl mb-3">📅</p>
              <p className="text-gray-400 text-sm">No hay citas registradas todavía.</p>
              <p className="text-gray-300 text-xs mt-1">Próximamente conectado al sistema de reservas</p>
            </div>
          </div>
        )}

        {/* CURSOS */}
        {tab === 'cursos' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif text-purple-900">Gestión de Cursos</h2>
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                + Nuevo curso
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center">
              <p className="text-4xl mb-3">🎓</p>
              <p className="text-gray-400 text-sm">Gestión de cursos próximamente.</p>
              <p className="text-gray-300 text-xs mt-1">Podrás agregar, editar y eliminar cursos</p>
            </div>
          </div>
        )}

        {/* CLIENTES */}
        {tab === 'clientes' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif text-purple-900">Clientes</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-purple-100 text-center">
              <p className="text-4xl mb-3">👥</p>
              <p className="text-gray-400 text-sm">Gestión de clientes próximamente.</p>
              <p className="text-gray-300 text-xs mt-1">Historial de servicios y datos de contacto</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Admin