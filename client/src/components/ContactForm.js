import { useState } from 'react';
import './ContactForm.css';

const DATOS_INICIALES = {
  nombre: '',
  email: '',
  mensaje: '',
};

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [datos, setDatos] = useState(DATOS_INICIALES);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setDatos((anteriores) => ({ ...anteriores, [name]: value }));
    setErrores((anteriores) => ({ ...anteriores, [name]: '' }));
    setEnviado(false);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevosErrores = {};
    const nombre = datos.nombre.trim();
    const email = datos.email.trim();
    const mensaje = datos.mensaje.trim();

    if (nombre.length < 3) {
      nuevosErrores.nombre = 'Ingresá al menos 3 caracteres.';
    }

    if (!REGEX_EMAIL.test(email)) {
      nuevosErrores.email = 'Ingresá un correo electrónico válido.';
    }

    if (mensaje.length < 10) {
      nuevosErrores.mensaje = 'Contanos un poco más (mínimo 10 caracteres).';
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    setEnviado(true);
    setDatos(DATOS_INICIALES);
    setErrores({});
  };

  return (
    <section id="contacto" className="contacto" aria-labelledby="contacto-titulo">
      <div className="contacto__head">
        <p className="eyebrow">Contacto</p>
        <h1 id="contacto-titulo" className="contacto__titulo">
          Hablemos de tu próximo mueble
        </h1>
        <p className="contacto__bajada">
          Podés escribirnos por consultas de productos, proyectos a medida o para coordinar una
          visita a la casa taller.
        </p>
      </div>

      <div className="contacto__grid">
        <div className="contacto__form-card">
          <div className="contacto__intro">
            <p className="eyebrow">Escribinos</p>
            <h3>Contanos qué necesitás</h3>
            <p>
              Respondemos consultas sobre medidas, materiales, disponibilidad y proyectos a medida.
            </p>
          </div>

          {enviado && (
            <div className="contacto__alerta" role="status">
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
                <path d="m20 6-11 11-5-5" />
              </svg>
              <p>¡Gracias! Recibimos tu mensaje.</p>
            </div>
          )}

          <form className="contacto__form" onSubmit={manejarEnvio} noValidate>
            <div className="contacto__fila">
              <div className="contacto__campo">
                <label htmlFor="contacto-nombre">Nombre completo</label>
                <input
                  id="contacto-nombre"
                  name="nombre"
                  type="text"
                  value={datos.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  maxLength={80}
                  required
                  aria-invalid={Boolean(errores.nombre)}
                  aria-describedby={errores.nombre ? 'contacto-nombre-error' : undefined}
                />
                <span className="contacto__error" id="contacto-nombre-error" role="alert">
                  {errores.nombre || ''}
                </span>
              </div>

              <div className="contacto__campo">
                <label htmlFor="contacto-email">Correo electrónico</label>
                <input
                  id="contacto-email"
                  name="email"
                  type="email"
                  value={datos.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  autoComplete="email"
                  maxLength={120}
                  required
                  aria-invalid={Boolean(errores.email)}
                  aria-describedby={errores.email ? 'contacto-email-error' : undefined}
                />
                <span className="contacto__error" id="contacto-email-error" role="alert">
                  {errores.email || ''}
                </span>
              </div>
            </div>

            <div className="contacto__campo">
              <div className="contacto__label-row">
                <label htmlFor="contacto-mensaje">Mensaje</label>
                <span className="contacto__contador">{datos.mensaje.length}/600</span>
              </div>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                rows={6}
                value={datos.mensaje}
                onChange={manejarCambio}
                placeholder="Contanos sobre el espacio, la pieza que te interesa o tu proyecto..."
                maxLength={600}
                required
                aria-invalid={Boolean(errores.mensaje)}
                aria-describedby={errores.mensaje ? 'contacto-mensaje-error' : undefined}
              />
              <span className="contacto__error" id="contacto-mensaje-error" role="alert">
                {errores.mensaje || ''}
              </span>
            </div>

            <button type="submit" className="btn btn-primario contacto__enviar">
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
              Enviar mensaje
            </button>

            <p className="contacto__demo">
              Demostración académica: el formulario valida los datos y simula el envío en el
              navegador.
            </p>
          </form>
        </div>

        <aside className="contacto__panel">
          <p className="eyebrow eyebrow--light">Casa taller</p>
          <h3>Visitanos</h3>
          <p className="contacto__panel-intro">
            Un espacio para ver y tocar las piezas, conocer los materiales y conversar sobre tu
            proyecto.
          </p>

          <ul className="contacto__datos">
            <li>
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
              <div>
                <strong>Dirección</strong>
                <address>Av. San Juan 2847, CABA</address>
              </div>
            </li>
            <li>
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
              <div>
                <strong>Email</strong>
                <a href="mailto:info@hermanosjota.com.ar">info@hermanosjota.com.ar</a>
              </div>
            </li>
            <li>
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
              <div>
                <strong>Teléfono</strong>
                <a href="tel:+541145678900">+54 11 4567-8900</a>
              </div>
            </li>
            <li>
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
              <div>
                <strong>Horarios</strong>
                <p>Lun a vie 10–19 h · Sáb 10–14 h</p>
              </div>
            </li>
          </ul>

          <a
            className="contacto__instagram"
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

          <p className="contacto__nota">Respondemos consultas en 24–48 hs hábiles.</p>
        </aside>
      </div>
    </section>
  );
}

export default ContactForm;
