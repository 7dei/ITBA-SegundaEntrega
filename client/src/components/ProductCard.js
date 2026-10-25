import { formatearPrecio } from '../utils/formatearPrecio';
import './ProductCard.css';

function ProductCard({ producto, onVerDetalle, onAgregar }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img
          className="product-card__imagen"
          src={producto.imagen}
          alt={producto.nombre}
          loading="lazy"
        />
        <span className="product-card__categoria">{producto.categoria}</span>
      </div>
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn btn-primario product-card__boton-primario"
            type="button"
            onClick={() => onAgregar(producto.id)}
          >
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
              <path d="M12 5v14M5 12h14" />
            </svg>
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
