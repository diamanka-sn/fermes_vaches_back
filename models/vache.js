'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vache extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Vache.hasMany(models.TraiteJour)
      models.Vache.belongsTo(models.Bovin, {
        foreignKey: {
          allowNull: false
        }
      })

    }
  }
  Vache.init({
    bovinId: DataTypes.INTEGER,
    periode: DataTypes.STRING,
    phase: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vache',
  });
  return Vache;
};