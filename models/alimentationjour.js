'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlimentationJour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.AlimentationJour.belongsTo(models.Fermier,{
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  AlimentationJour.init({
    utilisateurId: DataTypes.INTEGER,
    nomAliment: DataTypes.STRING,
    quantite: DataTypes.INTEGER,
    date: {
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'AlimentationJour',
  });
  return AlimentationJour;
};