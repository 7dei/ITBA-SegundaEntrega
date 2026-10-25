import { useEffect, useState } from 'react';
import { obtenerProductos } from '../api/productos';
import ProductCard from './ProductCard';
import './ProductList.css';

const normalizarTexto = (texto = '') =>
  texto
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

function ProductList({ onVerDetalle, onAgregar }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  useEffect(() => {
    let activo = true;

    const cargarProductos = async () => {
      try {
        const data = await obtenerProductos();
        if (activo) setProductos(data);
      } catch {
        if (activo) {
          setError('No pudimos cargar los productos. Revisá la conexión e intentá de nuevo.');
        }
      } finally {
        if (activo) setCargando(false);
      }
    };

    cargarProductos();

    return () => {
      activo = false;
    };
  }, []);

  const categorias = ['Todas', ...new Set(productos.map((producto) => producto.categoria))];
  const termino = normalizarTexto(busqueda);
  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria = categoria === 'Todas' || producto.categoria === categoria;
    const texto = normalizarTexto(
      [producto.nombre, producto.categoria, producto.descripcion].filter(Boolean).join(' ')
    );

    return coincideCategoria && (!termino || texto.includes(termino));
  });
  const hayFiltros = busqueda.trim().length > 0 || categoria !== 'Todas';

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('Todas');
  };

  return (
    <section id="catalogo" className="productos" aria-labelledby="catalogo-title">
      <header className="productos__head">
        <p className="eyebrow">Catálogo completo</p>
        <h1 id="catalogo-title" className="productos__titulo">
          Piezas para habitar mejor
        </h1>
        <p className="productos__bajada">
          Once piezas de diseño atemporal, pensadas para distintos espacios y momentos de la vida
          cotidiana. Filtrá por categoría o buscá por nombre, categoría o descripción.
        </p>
      </header>

      {cargando && (
        <div
          className="productos__grilla productos__grilla--cargando"
          aria-busy="true"
          aria-label="Cargando productos"
        >
          {Array.from({ length: 6 }, (_, indice) => (
            <div className="product-card product-card--skeleton" key={indice} aria-hidden="true">
              <div className="skeleton skeleton--media" />
              <div className="skeleton-copy">
                <div className="skeleton skeleton--line skeleton--line-lg" />
                <div className="skeleton skeleton--line skeleton--line-sm" />
                <div className="skeleton-actions">
                  <div className="skeleton skeleton--button" />
                  <div className="skeleton skeleton--button" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!cargando && error && (
        <div className="productos__error" role="alert">
          <span className="productos__error-icon" aria-hidden="true">
            !
          </span>
          <h2>No pudimos cargar el catálogo</h2>
          <p>{error}</p>
        </div>
      )}

      {!cargando && !error && (
        <>
          <div className="productos__toolbar">
            <label className="productos__buscador">
              <span className="sr-only">Buscar productos</span>
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
                placeholder="Buscar por nombre, categoría o descripción..."
              />
              {busqueda && (
                <button
                  type="button"
                  className="productos__limpiar"
                  onClick={() => setBusqueda('')}
                  aria-label="Limpiar búsqueda"
                >
                  ×
                </button>
              )}
            </label>

            <div className="productos__chips" role="group" aria-label="Filtrar por categoría">
              {categorias.map((nombreCategoria) => (
                <button
                  key={nombreCategoria}
                  type="button"
                  className={`productos__chip ${
                    categoria === nombreCategoria ? 'productos__chip--activo' : ''
                  }`}
                  onClick={() => setCategoria(nombreCategoria)}
                  aria-pressed={categoria === nombreCategoria}
                >
                  {nombreCategoria}
                </button>
              ))}
            </div>
          </div>

          <div className="productos__resumen">
            <p aria-live="polite">
              {productosFiltrados.length}{' '}
              {productosFiltrados.length === 1 ? 'pieza' : 'piezas'}
            </p>
            {hayFiltros && (
              <button type="button" className="productos__limpiar-filtros" onClick={limpiarFiltros}>
                Limpiar filtros
              </button>
            )}
          </div>

          {productosFiltrados.length > 0 ? (
            <div className="productos__grilla">
              {productosFiltrados.map((producto) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                  onVerDetalle={onVerDetalle}
                  onAgregar={onAgregar}
                />
              ))}
            </div>
          ) : (
            <div className="productos__vacio" role="status">
              <h2>Sin resultados</h2>
              <p>No encontramos piezas con esa búsqueda.</p>
              <button type="button" className="btn btn-primario" onClick={limpiarFiltros}>
                Limpiar filtros
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default ProductList;
