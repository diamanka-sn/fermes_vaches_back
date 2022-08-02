"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bovin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Bovin.hasMany(models.Pesage);
      models.Bovin.hasMany(models.Genisse);
      models.Bovin.hasMany(models.Vache);
      models.Bovin.belongsTo(models.Race, {
        foreignKey: {
          allowNull: false,
        },
      });
      models.Bovin.belongsToMany(models.Commande, {
        through: "VenteBovin",
        foreignKey: "bovinId",
      });
      models.Bovin.belongsToMany(models.Utilisateur, {
        through: "AchatBovin",
        foreignKey: "bovinId",
      });

      models.Bovin.belongsToMany(models.Maladie, {
        through: "Diagnostic",
        foreignKey: "bovinId",
      });
    }
  }
  Bovin.init(
    {
      raceId: DataTypes.INTEGER,
      codeBovin: DataTypes.STRING,
      nom: DataTypes.STRING,
      photo: DataTypes.STRING,
      dateNaissane: DataTypes.DATE,
      etatSante: DataTypes.STRING,
      geniteur: DataTypes.STRING,
      genitrice: DataTypes.STRING,
      situation: DataTypes.STRING,
      prix: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bovin",
    }
  );
  return Bovin;
};
