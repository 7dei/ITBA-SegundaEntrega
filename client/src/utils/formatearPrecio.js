const formatoPrecio = new Intl.NumberFormat('es-AR', {
  maximumFractionDigits: 0,
});

export function formatearPrecio(precio) {
  return `$${formatoPrecio.format(precio)}`;
}
