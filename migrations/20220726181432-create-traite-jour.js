'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TraiteJours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      utilisateurId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Utilisateurs',
          key: 'id'
        }
      },
      bovinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Bovins',
          key: 'id'
        }
      },
      traiteMatin: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      traiteSoir: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      dateTraite: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('TraiteJours');
  }
};