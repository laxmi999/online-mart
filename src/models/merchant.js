'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Merchant.hasMany(models.Product, {
        foreignKey: 'merchantId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Merchant.hasMany(models.TransactionRecord, {
        foreignKey: 'createdBy',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Merchant.hasMany(models.SaleRecord, {
        foreignKey: 'merchantId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Merchant.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Merchant.init(
    {
      userId: DataTypes.INTEGER,
      businessName: DataTypes.STRING,
      businessContact: DataTypes.STRING,
      businessEmail: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Merchant',
    }
  );
  return Merchant;
};
