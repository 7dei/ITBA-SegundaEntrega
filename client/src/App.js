import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const verDetalle = (id) => {
    setProductoSeleccionado(id);
    window.scrollTo(0, 0);
  };

  const volverAlCatalogo = () => {
    setProductoSeleccionado(null);
    window.scrollTo(0, 0);
  };

  const agregarAlCarrito = (id) => {
    setCarrito((anteriores) => {
      const existe = anteriores.find((item) => item.id === id);

      if (existe) {
        return anteriores.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }

      return [...anteriores, { id, cantidad: 1 }];
    });
  };

  const cantidadCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar cantidadCarrito={cantidadCarrito} onVerCatalogo={volverAlCatalogo} />
      <main id="contenido" className="contenedor" tabIndex={-1}>
        {productoSeleccionado ? (
          <ProductDetail
            id={productoSeleccionado}
            onVolver={volverAlCatalogo}
            onAgregar={agregarAlCarrito}
          />
        ) : (
          <ProductList onVerDetalle={verDetalle} onAgregar={agregarAlCarrito} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
