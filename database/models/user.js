'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    UserID: DataTypes.INTEGER,
    Username: DataTypes.STRING(30),
    Password: DataTypes.STRING(100),
    FirstName: DataTypes.STRING(30),
    LastName: DataTypes.STRING(30),
    MobileNo: DataTypes.INTEGER,
    EmailID: DataTypes.STRING(50),
    Address: DataTypes.STRING(100),
    Admin: DataTypes.BOOLEAN,
    DateJoined: DataTypes.DATE,
    DateUpdated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};