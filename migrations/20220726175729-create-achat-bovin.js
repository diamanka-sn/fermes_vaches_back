'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AchatBovins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bovinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Bovins',
          key: 'id'
        }
      },
      UtilisateurId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Utilisateurs',
          key: 'id'
        }
      },
      montant: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateAchat: {
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
    await queryInterface.dropTable('AchatBovins');
  }
};