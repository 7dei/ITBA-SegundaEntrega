export async function obtenerProductos() {
  const res = await fetch('/api/productos');

  if (!res.ok) {
    throw new Error('No se pudieron cargar los productos');
  }

  return res.json();
}
