const express = require('express');
const comentariosRouter = require('./comentario.router');
const pagosRouter = require('./pago.router');

function routerApi(app){
  const routerV1 = express.Router();
  app.use('/api/v1',routerV1);
  routerV1.use('/comentarios',comentariosRouter);
  routerV1.use('/pagos',pagosRouter);
}

module.exports = routerApi;
