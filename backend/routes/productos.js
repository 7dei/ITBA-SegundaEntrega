const express = require('express');
const productos = require('../data/productos');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(productos);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'Id inválido' });
  }

  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(producto);
});

module.exports = router;
