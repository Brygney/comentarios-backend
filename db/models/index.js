const {COMENTARIO_TABLE, ComentarioSchema, Comentario} = require('./comentario.model');
const {PAGO_TABLE, PagoSchema, Pago} = require('./pagos.model');

function setupModels(sequelize) {
  Comentario.init(ComentarioSchema, Comentario.config(sequelize));
  Pago.init(PagoSchema, Pago.config(sequelize));
}

module.exports = setupModels;
