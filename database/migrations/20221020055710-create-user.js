'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      UserID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FirstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      MobileNo: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      EmailID: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      Admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      DateJoined: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DateUpdated: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};