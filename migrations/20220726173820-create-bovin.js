'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bovins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      raceId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      codeBovin: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dateNaissane: {
        allowNull: false,
        type: Sequelize.DATE
      },
      etatSante: {
        allowNull: false,
        type: Sequelize.STRING
      },
      geniteur: {
        allowNull: false,
        type: Sequelize.STRING
      },
      genitrice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      situation: {
        type: Sequelize.STRING
      },
      prix: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
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
    await queryInterface.dropTable('Bovins');
  }
};