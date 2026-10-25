import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar cantidadCarrito={0} />
      <main className="contenedor">
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

export default App;
