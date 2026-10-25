import { formatearPrecio } from '../utils/formatearPrecio';
import './ProductCard.css';

function ProductCard({ producto }) {
  return (
    <article className="product-card">
      <img
        className="product-card__imagen"
        src={producto.imagen}
        alt={producto.nombre}
        loading="lazy"
      />
      <div className="product-card__info">
        <h3 className="product-card__nombre">{producto.nombre}</h3>
        <p className="product-card__precio">{formatearPrecio(producto.precio)}</p>
      </div>
    </article>
  );
}

export default ProductCard;
