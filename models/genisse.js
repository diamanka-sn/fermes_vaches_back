'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genisse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Genisse.belongsTo(models.Bovin,{
        foreignKey: {
          allowNull: false
        }
      })

    }
  }
  Genisse.init({
    bovinId: DataTypes.INTEGER,
    etat: DataTypes.STRING,
    dateIA: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Genisse',
  });
  return Genisse;
};