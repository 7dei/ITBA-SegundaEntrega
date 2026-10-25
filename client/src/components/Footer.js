import './Footer.css';

function Footer({ onNavegar }) {
  const navegar = (destino) => (evento) => {
    evento.preventDefault();
    onNavegar(destino);
  };

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__brand">
          <img className="footer__logo" src="/img/logo-invertido.svg" alt="Hermanos Jota" />
          <p>
            Muebles que se heredan, no se reemplazan. Diseño atemporal y materiales nobles para
            habitar mejor.
          </p>
          <a
            className="footer__social"
            href="https://instagram.com/hermanosjota_ba"
            target="_blank"
            rel="noreferrer noopener"
          >
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
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h.01" />
            </svg>
            @hermanosjota_ba
          </a>
        </div>

        <nav className="footer__col" aria-label="Enlaces del pie de página">
          <h2 className="footer__title">Explorar</h2>
          <a href="#inicio" onClick={navegar('inicio')}>
            Inicio
          </a>
          <a href="#catalogo" onClick={navegar('catalogo')}>
            Catálogo completo
          </a>
          <a href="#contacto" onClick={navegar('contacto')}>
            Contacto
          </a>
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Casa taller</h2>
          <address className="footer__contact">
            <span>
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
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Av. San Juan 2847, CABA
            </span>
            <a href="mailto:info@hermanosjota.com.ar">
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
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              info@hermanosjota.com.ar
            </a>
            <a href="tel:+541145678900">
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +54 11 4567-8900
            </a>
            <span>
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
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Lun a vie 10–19 h · Sáb 10–14 h
            </span>
          </address>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2026 Mueblería Hermanos Jota. Todos los derechos reservados.</p>
        <p>Sprint 3-4 · React + Node.js/Express</p>
      </div>
    </footer>
  );
}

export default Footer;
