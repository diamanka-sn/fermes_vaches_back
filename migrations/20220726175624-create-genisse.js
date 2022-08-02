'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Genisses', {
      bovinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Bovins',
          key: 'id'
        }
      },
      etat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateIA: {
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
    await queryInterface.dropTable('Genisses');
  }
};