"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pesages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bovinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Bovins',
          key: 'id'
        }
      },
      poids: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      datePesee: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pesages");
  },
};
