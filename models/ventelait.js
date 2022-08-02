'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VenteLait extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.VenteLait.belongsTo(models.Commande,  {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  VenteLait.init({
    commandeId: DataTypes.INTEGER,
    capacite: DataTypes.DOUBLE,
    etat: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'VenteLait',
  });
  return VenteLait;
};