'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maladie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Maladie.belongsToMany(models.Bovin, {
        through: "Diagnostic",
        foreignKey: "maladieId",
      });
    }
  }
  Maladie.init({
    nomMaladie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Maladie',
  });
  return Maladie;
};