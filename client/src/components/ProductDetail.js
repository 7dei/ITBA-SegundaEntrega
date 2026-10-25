import { useEffect, useState } from 'react';
import { obtenerProducto } from '../api/productos';
import { formatearPrecio } from '../utils/formatearPrecio';
import './ProductDetail.css';

const ETIQUETAS = {
  medidas: 'Medidas',
  materiales: 'Materiales',
  acabado: 'Acabado',
  peso: 'Peso',
  capacidad: 'Capacidad',
  rotacion: 'Rotación',
  garantia: 'Garantía',
  caracteristicas: 'Características',
  relleno: 'Relleno',
  sostenibilidad: 'Sostenibilidad',
  extension: 'Extensión',
  apilables: 'Apilables',
  incluye: 'Incluye',
  almacenamiento: 'Almacenamiento',
  cables: 'Pasacables',
  regulacion: 'Regulación',
  certificacion: 'Certificación',
};

const CLAVES_EXCLUIDAS = new Set([
  'id',
  'nombre',
  'precio',
  'categoria',
  'descripcion',
  'imagen',
  'stock',
]);

function ProductDetail({ id, onVolver, onAgregar }) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;
    setProducto(null);
    setError(null);
    setCargando(true);

    const cargarProducto = async () => {
      try {
        const data = await obtenerProducto(id);
        if (activo) setProducto(data);
      } catch (err) {
        if (activo) {
          setError(
            err.message === 'Producto no encontrado'
              ? err.message
              : 'No pudimos cargar el producto. Intentá de nuevo.'
          );
        }
      } finally {
        if (activo) setCargando(false);
      }
    };

    cargarProducto();

    return () => {
      activo = false;
    };
  }, [id]);

  if (cargando) {
    return (
      <div className="detalle__estado">
        <div className="detalle__estado-card detalle__loader" role="status" aria-live="polite">
          <span className="detalle__spinner" aria-hidden="true" />
          <p>Cargando producto…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detalle__estado">
        <div className="detalle__estado-card" role="alert">
          <span className="detalle__estado-icon" aria-hidden="true">
            !
          </span>
          <h2>
            {error === 'Producto no encontrado'
              ? 'Producto no encontrado'
              : 'No pudimos cargar el producto'}
          </h2>
          <p>
            {error === 'Producto no encontrado'
              ? 'La pieza que buscás no existe o ya no forma parte del catálogo.'
              : error}
          </p>
          <button className="btn detalle__seguir" type="button" onClick={onVolver}>
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  if (!producto) {
    return null;
  }

  const sku = `HJ-${String(id).padStart(3, '0')}`;
  const especificaciones = Object.entries(producto).filter(
    ([clave, valor]) =>
      !CLAVES_EXCLUIDAS.has(clave) &&
      valor !== 'Desconocido' &&
      valor !== '' &&
      valor !== null &&
      valor !== undefined
  );

  return (
    <section className="detalle-producto">
      <nav className="detalle__breadcrumb" aria-label="Migas de pan">
        <span>Inicio</span>
        <span aria-hidden="true">/</span>
        <span>Catálogo</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{producto.nombre}</span>
      </nav>

      <div className="detalle">
        <div className="detalle__imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detalle__info">
          <div className="detalle__meta">
            <span className="detalle__categoria">{producto.categoria}</span>
            <span className="detalle__sku">{sku}</span>
          </div>

          <h1>{producto.nombre}</h1>
          <p className="detalle__precio">{formatearPrecio(producto.precio)}</p>
          <p className="detalle__descripcion">{producto.descripcion}</p>

          {especificaciones.length > 0 && (
            <div className="detalle__specs">
              <h2>Detalles de fabricación</h2>
              <dl className="detalle__specs-lista">
                {especificaciones.map(([clave, valor]) => (
                  <div className="detalle__spec" key={clave}>
                    <dt>{ETIQUETAS[clave] || clave.charAt(0).toUpperCase() + clave.slice(1)}</dt>
                    <dd>{Array.isArray(valor) ? valor.join(', ') : valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="detalle__acciones">
            <button className="btn btn-primario" type="button" onClick={() => onAgregar(producto.id)}>
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
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Añadir al carrito
            </button>
            <button className="btn detalle__seguir" type="button" onClick={onVolver}>
              Seguir explorando
            </button>
          </div>

          <ul className="detalle__trust">
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
                <path d="M10 17h4V5H2v12h3" />
                <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
              Envío coordinado a todo el país
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              10 años de garantía estructural
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
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              Materiales nobles y acabados naturales
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
