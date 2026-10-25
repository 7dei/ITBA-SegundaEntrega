import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const verDetalle = (id) => {
    setProductoSeleccionado(id);
    window.scrollTo(0, 0);
  };

  const volverAlCatalogo = () => {
    setProductoSeleccionado(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar cantidadCarrito={0} onVerCatalogo={volverAlCatalogo} />
      <main className="contenedor">
        {productoSeleccionado ? (
          <ProductDetail id={productoSeleccionado} onVolver={volverAlCatalogo} />
        ) : (
          <ProductList onVerDetalle={verDetalle} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
