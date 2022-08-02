'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fermier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Fermier.hasMany(models.TraiteJour)
      models.Fermier.hasMany(models.AlimentationJour);

      // define association here
    }
  }
  Fermier.init({
    utilisateurId: DataTypes.INTEGER,
    salaire: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fermier',
  });
  return Fermier;
};