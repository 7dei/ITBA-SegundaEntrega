import { formatearPrecio } from '../utils/formatearPrecio';
import './ProductCard.css';

function ProductCard({ producto, onVerDetalle, onAgregar }) {
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
        <div className="product-card__acciones">
          <button
            className="btn product-card__boton"
            type="button"
            onClick={() => onVerDetalle(producto.id)}
          >
            Ver detalle
          </button>
          <button
            className="btn btn-primario product-card__boton-primario"
            type="button"
            onClick={() => onAgregar(producto.id)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
