const formatoPrecio = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

export function formatearPrecio(precio) {
  if (precio === 0 || precio === 'Desconocido' || precio === null || precio === undefined) {
    return 'Consultar';
  }

  const numero = Number(precio);
  return Number.isNaN(numero) ? 'Consultar' : formatoPrecio.format(numero);
}
