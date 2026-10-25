import './Home.css';

function ArrowRightIcon() {
  return (
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
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
  );
}

function LeafIcon() {
  return (
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function HammerIcon() {
  return (
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
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </svg>
  );
}

function DropletIcon() {
  return (
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
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

const BENEFICIOS = [
  {
    Icono: LeafIcon,
    titulo: 'Maderas certificadas',
    texto:
      'Priorizamos maderas de bosques gestionados responsablemente y un mínimo de 30% de materiales recuperados.',
  },
  {
    Icono: HammerIcon,
    titulo: 'Producción artesanal',
    texto:
      'Sin procesos masivos. Cada mueble se ensambla a mano en nuestra casa taller, cuidando cada unión y cada detalle.',
  },
  {
    Icono: DropletIcon,
    titulo: 'Acabados naturales',
    texto:
      'Aceites, ceras y tintes de bajo COV que protegen la madera sin comprometer la calidad del aire de tu hogar.',
  },
];

function Home({ onNavegar }) {
  const navegar = (destino) => (evento) => {
    evento.preventDefault();
    onNavegar(destino);
  };

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero__inner container">
          <div className="hero__copy">
            <p className="eyebrow">Casa taller · Buenos Aires</p>
            <h1 id="home-title">
              Muebles que <em>se heredan</em>, no se reemplazan
            </h1>
            <p className="hero__text">
              Diseño clásico de los años 60, maderas certificadas y un compromiso real con el
              ambiente. Fabricados a mano para acompañarte toda la vida.
            </p>
            <div className="hero__actions">
              <a className="btn btn-primario" href="#catalogo" onClick={navegar('catalogo')}>
                Ver catálogo
                <ArrowRightIcon />
              </a>
              <a className="btn hero__ghost" href="#contacto" onClick={navegar('contacto')}>
                Contacto
              </a>
            </div>

            <ul className="hero__trust" aria-label="Nuestros compromisos">
              <li>
                <strong>10 años</strong>
                <span>de garantía estructural</span>
              </li>
              <li>
                <strong>FSC®</strong>
                <span>maderas certificadas</span>
              </li>
              <li>
                <strong>Hecho a mano</strong>
                <span>por ebanistas locales</span>
              </li>
            </ul>
          </div>

          <div className="hero__media">
            <div className="hero__image-frame">
              <img
                src="/img/sofa-patagonia.png"
                alt="Sofá Patagonia de tres cuerpos tapizado en lino"
                width="1024"
                height="1024"
              />
            </div>
            <div className="hero__badge">
              <MapPinIcon />
              <span>
                Casa taller
                <strong>San Cristóbal</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits section" aria-labelledby="beneficios-title">
        <div className="container">
          <div className="benefits__header">
            <p className="eyebrow">Nuestro compromiso</p>
            <h2 id="beneficios-title">Menos huella, más hogar</h2>
          </div>

          <ul className="benefits__grid">
            {BENEFICIOS.map((beneficio, indice) => {
              const Icono = beneficio.Icono;
              return (
                <li className="benefit" key={beneficio.titulo}>
                  <div className="benefit__top">
                    <span className="benefit__icon" aria-hidden="true">
                      <Icono />
                    </span>
                    <span className="benefit__number">0{indice + 1}</span>
                  </div>
                  <h3>{beneficio.titulo}</h3>
                  <p>{beneficio.texto}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="historia" className="story">
        <div className="story__inner container">
          <div className="story__intro">
            <p className="eyebrow eyebrow--light">Nuestra historia</p>
            <h2>Un oficio que se hereda</h2>
            <p>
              Hermanos Jota nació de un oficio que creíamos olvidado: el de fabricar muebles que
              acompañan, no solo decoran. Cada pieza está pensada para dejar la menor huella posible
              en el planeta y la mayor en tu hogar.
            </p>
          </div>

          <div className="story__detail">
            <blockquote>
              “Cada pieza cuenta la historia de manos expertas y materiales nobles.”
            </blockquote>
            <dl className="story__stats">
              <div>
                <dt>10 años</dt>
                <dd>de garantía estructural</dd>
              </div>
              <div>
                <dt>30%</dt>
                <dd>de materiales recuperados</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>acabados de bajo COV</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta__inner container">
          <div>
            <p className="eyebrow eyebrow--light">Asesoramiento personal</p>
            <h2>¿Buscás una pieza en particular?</h2>
            <p>
              Contanos qué espacio querés transformar y te ayudamos a encontrar la combinación justa
              de materiales, medidas y acabados.
            </p>
          </div>
          <a className="btn contact-cta__btn" href="#contacto" onClick={navegar('contacto')}>
            Hablemos
            <ArrowRightIcon />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
