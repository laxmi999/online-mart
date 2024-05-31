'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Merchant, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Order, {
        foreignKey: 'clientId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.SaleRecord, {
        foreignKey: 'clientId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Review, {
        foreignKey: 'clientId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      encryptedPassword: DataTypes.STRING,
      username: DataTypes.STRING,
      contactNo: DataTypes.STRING,
      fullName: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      isMerchant: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
