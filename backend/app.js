const express = require('express');
const logger = require('./middlewares/logger');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(logger);
app.use(express.json());
app.use(notFound);
app.use(errorHandler);

module.exports = app;
