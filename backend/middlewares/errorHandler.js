function errorHandler(err, req, res, next) {
  const status = err.status || 500;

  if (status >= 500) {
    console.error(err.stack);
  }

  res.status(status).json({
    error: status < 500 ? err.message : 'Error interno del servidor',
  });
}

module.exports = errorHandler;
