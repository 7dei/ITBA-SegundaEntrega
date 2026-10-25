export async function obtenerProductos() {
  const res = await fetch('/api/productos');

  if (!res.ok) {
    throw new Error('No se pudieron cargar los productos');
  }

  return res.json();
}

export async function obtenerProducto(id) {
  const res = await fetch(`/api/productos/${id}`);

  if (res.status === 404) {
    throw new Error('Producto no encontrado');
  }

  if (!res.ok) {
    throw new Error('No se pudo cargar el producto');
  }

  return res.json();
}
