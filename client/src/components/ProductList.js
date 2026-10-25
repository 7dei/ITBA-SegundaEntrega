import { useEffect, useState } from 'react';
import { obtenerProductos } from '../api/productos';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ onVerDetalle, onAgregar }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

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

  if (cargando) {
    return <p className="estado">Cargando productos…</p>;
  }

  if (error) {
    return <p className="estado">{error}</p>;
  }

  return (
    <section id="catalogo" className="productos">
      <h2 className="productos__titulo">Nuestro Catálogo</h2>
      <div className="productos__grilla">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onVerDetalle={onVerDetalle}
            onAgregar={onAgregar}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
