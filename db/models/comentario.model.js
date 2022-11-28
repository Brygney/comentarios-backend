const { Model, DataTypes, Sequelize } = require('sequelize');

const COMENTARIO_TABLE = 'comentarios';

const ComentarioSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  comentario: {
    allowNull: false,
    type: DataTypes.STRING
  },
  idCliente: {
    allowNull: false,
    type: DataTypes.UUID
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Comentario extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: COMENTARIO_TABLE,
      modelName: 'Comentario',
      timestamps: false
    };
  }
}

module.exports = {COMENTARIO_TABLE, ComentarioSchema, Comentario};
