const { Model, DataTypes, Sequelize } = require('sequelize');

const PAGO_TABLE = 'pagos';

const PagoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  cliente: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Pago extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: PAGO_TABLE,
      modelName: 'Pago',
      timestamps: false
    };
  }
}

module.exports = {PAGO_TABLE, PagoSchema, Pago};
