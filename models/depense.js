'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Depense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Depense.belongsTo(models.Utilisateur, {
        foreignKey: {
          allowNull: false
        }
      })
      models.Depense.belongsTo(models.Type, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Depense.init({
    utilisateurId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    libelle: DataTypes.STRING,
    dateDepense: {
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    montant: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Depense',
  });
  return Depense;
};