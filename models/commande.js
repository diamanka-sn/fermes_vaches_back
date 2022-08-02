"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Commande.hasMany(models.VenteLait, {
        foreignKey: {
          allowNull: false,
        },
      });
      models.Commande.belongsTo(models.Bovin, {
        through: 'VenteBovin',
        foreignKey: 'commandeId'
    })
    }
  }
  Commande.init(
    {
      utilisateurId: DataTypes.INTEGER,
      dateCommande: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Commande",
    }
  );
  return Commande;
};
