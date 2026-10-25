import { useEffect, useState } from 'react';
import './Navbar.css';

const ENLACES = [
  { id: 'inicio', etiqueta: 'Inicio' },
  { id: 'catalogo', etiqueta: 'Catálogo' },
  { id: 'contacto', etiqueta: 'Contacto' },
];

function Navbar({ cantidadCarrito = 0, vistaActual, onNavegar }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    setMenuAbierto(false);
  }, [vistaActual]);

  const navegar = (destino) => (evento) => {
    evento.preventDefault();
    setMenuAbierto(false);
    onNavegar(destino);
  };

  const alternarMenu = () => setMenuAbierto((abierto) => !abierto);

  return (
    <>
      <div className="topbar">
        <p>
          <span className="topbar__long">
            Diseño atemporal · Maderas certificadas · Hecho a mano en Buenos Aires
          </span>
          <span className="topbar__short">Diseño atemporal · Hecho en Buenos Aires</span>
        </p>
      </div>

      <header className="navbar" id="inicio">
        <div className="navbar__inner container">
          <a
            className="navbar__marca"
            href="#inicio"
            aria-label="Hermanos Jota, ir al inicio"
            onClick={navegar('inicio')}
          >
            <img className="navbar__logo" src="/img/logo-invertido.svg" alt="Hermanos Jota" />
          </a>

          <nav className="navbar__nav" aria-label="Navegación principal">
            {ENLACES.map((enlace) => (
              <a
                key={enlace.id}
                className={`navbar__link ${
                  vistaActual === enlace.id ? 'navbar__link--activo' : ''
                }`}
                href={`#${enlace.id}`}
                onClick={navegar(enlace.id)}
                aria-current={vistaActual === enlace.id ? 'page' : undefined}
              >
                {enlace.etiqueta}
              </a>
            ))}
          </nav>

          <div className="navbar__acciones">
            <span
              className="navbar__carrito"
              aria-label={`Carrito: ${cantidadCarrito} ${
                cantidadCarrito === 1 ? 'producto' : 'productos'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="navbar__carrito-texto">Carrito</span>
              <span className="navbar__contador">{cantidadCarrito}</span>
            </span>

            <button
              type="button"
              className="navbar__toggle"
              onClick={alternarMenu}
              aria-expanded={menuAbierto}
              aria-controls="menu-principal"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuAbierto ? (
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuAbierto && (
          <nav id="menu-principal" className="navbar__mobile" aria-label="Navegación móvil">
            {ENLACES.map((enlace) => (
              <a
                key={enlace.id}
                className={`navbar__mobile-link ${
                  vistaActual === enlace.id ? 'navbar__mobile-link--activo' : ''
                }`}
                href={`#${enlace.id}`}
                onClick={navegar(enlace.id)}
                aria-current={vistaActual === enlace.id ? 'page' : undefined}
              >
                {enlace.etiqueta}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
