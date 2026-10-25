const express = require('express');
const logger = require('./middlewares/logger');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const productosRouter = require('./routes/productos');

const app = express();

app.disable('x-powered-by');

app.use(logger);
app.use(express.json());
app.use('/api/productos', productosRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
