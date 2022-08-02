'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VenteLaits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commandeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Commandes',
          key: 'id'
        }
      },
      capacite: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      etat: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VenteLaits');
  }
};