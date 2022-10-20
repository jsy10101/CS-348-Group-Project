'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      AccountID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        references: {
          model: {
            tableName: 'Users',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Balance: {
        allowNull: false,
        type: Sequelize.REAL
      },
      Type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DateCreated: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DateUpdated: {
        allowNull: false,
        type: Sequelize.DATE
      }});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Accounts');
  }
};