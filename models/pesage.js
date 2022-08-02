'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      models.Pesage.belongsTo(models.Bovin,  {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Pesage.init({
    bovinId:DataTypes.INTEGER,
    poids: DataTypes.DOUBLE,
    datePesee:{
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Pesage',
  });
  return Pesage;
};