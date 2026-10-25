import './Navbar.css';

function Navbar({ cantidadCarrito = 0, onVerCatalogo }) {
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
            onClick={onVerCatalogo}
          >
            <img className="navbar__logo" src="/img/logo-invertido.svg" alt="Hermanos Jota" />
          </a>

          <nav className="navbar__nav" aria-label="Navegación principal">
            <ul>
              <li>
                <a className="navbar__link" href="#inicio" onClick={onVerCatalogo}>
                  Inicio
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#catalogo" onClick={onVerCatalogo}>
                  Catálogo
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <button className="navbar__carrito" type="button" aria-label="Ver carrito">
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
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
