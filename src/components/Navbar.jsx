import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-purple-600 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">

      <Link to="/" className="text-white text-xl font-bold font-serif">
        Caela Spa
      </Link>

      <div className="flex gap-8">
        <Link to="/" className="text-white text-sm font-medium uppercase tracking-wider">
          Inicio
        </Link>
        <Link to="/cursos" className="text-white text-sm font-medium uppercase tracking-wider">
          Cursos
        </Link>
        <Link to="/reservar" className="text-white text-sm font-medium uppercase tracking-wider">
          Reservar turno
        </Link>
      </div>

      <a href="https://wa.me/message/TSYLVDCRN6EEA1" target="_blank" className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
        WhatsApp
      </a>

    </nav>
  )
}

export default Navbar