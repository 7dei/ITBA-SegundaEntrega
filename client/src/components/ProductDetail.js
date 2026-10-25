import { useEffect, useState } from 'react';
import { obtenerProducto } from '../api/productos';
import { formatearPrecio } from '../utils/formatearPrecio';
import './ProductDetail.css';

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
    return <p className="estado">Cargando producto…</p>;
  }

  if (error) {
    return (
      <section className="detalle-producto detalle-producto--estado">
        <p className="estado">{error}</p>
        <button className="btn btn-primario" type="button" onClick={onVolver}>
          Volver al catálogo
        </button>
      </section>
    );
  }

  if (!producto) {
    return null;
  }

  return (
    <section className="detalle-producto">
      <div className="detalle">
        <div className="detalle__imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detalle__info">
          <h2>{producto.nombre}</h2>
          <p className="detalle__precio">{formatearPrecio(producto.precio)}</p>
          <div className="detalle__descripcion">
            <h3>Descripción</h3>
            <p>{producto.descripcion}</p>
          </div>
          <div className="detalle__acciones">
            <button className="btn btn-primario" type="button" onClick={() => onAgregar(producto.id)}>
              Agregar al carrito
            </button>
            <button className="btn detalle__volver" type="button" onClick={onVolver}>
              ← Volver al catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
