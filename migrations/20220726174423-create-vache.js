'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vaches', {
      bovinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Bovins',
          key: 'id'
        }
      },
      periode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phase: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Vaches');
  }
};