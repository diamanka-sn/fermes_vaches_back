'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TraiteJour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.TraiteJour.belongsTo(models.Fermier,  {
        foreignKey: {
          allowNull: false
        }
      })
      models.TraiteJour.belongsTo(models.Vache,  {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  TraiteJour.init({
    bovinId: DataTypes.INTEGER,
    utilisateurId:DataTypes.INTEGER,
    traiteMatin: DataTypes.DOUBLE,
    traiteSoir: DataTypes.DOUBLE,
    dateTraite: {
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'TraiteJour',
  });
  return TraiteJour;
};