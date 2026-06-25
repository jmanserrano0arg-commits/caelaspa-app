import { useState } from 'react'

const servicios = [
  'Manicura simple',
  'Manicura semipermanente',
  'Soft Gel',
  'Nail Art básico',
  'Nail Art avanzado',
  'Pedicura combinada',
  'Retiro de semipermanente',
]

function Reservar() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    fecha: '',
    hora: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

async function handleSubmit(e) {
  e.preventDefault()
  
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/citas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if(res.ok) {
      // También abrir WhatsApp
      const texto = `Hola! Quiero reservar un turno.
Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Servicio: ${form.servicio}
Fecha preferida: ${form.fecha}
Hora preferida: ${form.hora}
${form.mensaje ? 'Mensaje: ' + form.mensaje : ''}`

      window.open(`https://wa.me/message/TSYLVDCRN6EEA1?text=${encodeURIComponent(texto)}`, '_blank')
      setEnviado(true)
    }
  } catch(error) {
    console.error('Error:', error)
  }
}

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-600 py-16 px-6 text-center">
        <span className="text-yellow-200 text-xs tracking-widest uppercase">Reservas online</span>
        <h1 className="text-white text-4xl md:text-5xl font-serif font-light mt-3">
          Reservar <em className="text-pink-300">turno</em>
        </h1>
        <p className="text-white/70 mt-4">
          Completá el formulario y te confirmamos por WhatsApp
        </p>
      </div>

      {/* FORMULARIO */}
      <div className="max-w-lg mx-auto px-6 py-16">

        {enviado ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-serif text-purple-900 mb-2">¡Listo!</h2>
            <p className="text-gray-500 mb-6">Te redirigimos a WhatsApp para confirmar tu turno.</p>
            <button
              onClick={() => setEnviado(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold"
            >
              Hacer otra reserva
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                required
                value={form.telefono}
                onChange={handleChange}
                placeholder="Tu número de teléfono"
                className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Servicio *</label>
              <select
                name="servicio"
                required
                value={form.servicio}
                onChange={handleChange}
                className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
              >
                <option value="">Elegí un servicio</option>
                {servicios.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha preferida *</label>
                <input
                  type="date"
                  name="fecha"
                  required
                  value={form.fecha}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hora preferida *</label>
                <select
                  name="hora"
                  required
                  value={form.hora}
                  onChange={handleChange}
                  className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                >
                  <option value="">Elegí</option>
                  {['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'].map(h => (
                    <option key={h} value={h}>{h} hs</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje adicional</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="¿Alguna consulta o preferencia?"
                rows={3}
                className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-semibold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              💬 Enviar por WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400">
              📍 Av. Santa Fe 934 · Lunes a Viernes 10:00 a 19:00 hs
            </p>

          </form>
        )}
      </div>
    </div>
  )
}

export default Reservar