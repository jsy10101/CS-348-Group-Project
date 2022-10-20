'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      TransactionID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SenderID: {
        references: {
          model: {
            tableName: 'Account',
            schema: 'schema'
          },
          key: 'AccountID'
        },
        type: Sequelize.INTEGER
      },
      ReceiverID: {
        references: {
          model: {
            tableName: 'Account',
            schema: 'schema'
          },
          key: 'AccountID'
        },
        type: Sequelize.INTEGER
      },
      Amount: {
        allowNull: false,
        type: Sequelize.REAL
      },
      Date: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};