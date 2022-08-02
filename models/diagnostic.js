'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnostic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diagnostic.init({
    maladieId: DataTypes.INTEGER,
    bovinId: DataTypes.INTEGER,
    dateMaladie: DataTypes.DATE,
    dateGuerison: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Diagnostic',
  });
  return Diagnostic;
};