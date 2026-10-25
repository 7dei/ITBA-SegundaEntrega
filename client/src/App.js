import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [vista, setVista] = useState('inicio');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const navegar = (destino) => {
    setVista(destino);
    setProductoSeleccionado(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const verDetalle = (id) => {
    setProductoSeleccionado(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const volverAlCatalogo = () => navegar('catalogo');

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
      <Navbar
        cantidadCarrito={cantidadCarrito}
        vistaActual={productoSeleccionado ? 'catalogo' : vista}
        onNavegar={navegar}
      />
      <main
        id="contenido"
        className={vista === 'inicio' && !productoSeleccionado ? 'home-main' : 'contenedor'}
        tabIndex={-1}
      >
        {productoSeleccionado ? (
          <ProductDetail
            id={productoSeleccionado}
            onVolver={volverAlCatalogo}
            onAgregar={agregarAlCarrito}
          />
        ) : vista === 'inicio' ? (
          <Home onNavegar={navegar} />
        ) : vista === 'catalogo' ? (
          <ProductList onVerDetalle={verDetalle} onAgregar={agregarAlCarrito} />
        ) : (
          <ContactForm />
        )}
      </main>
      <Footer onNavegar={navegar} />
    </>
  );
}

export default App;
