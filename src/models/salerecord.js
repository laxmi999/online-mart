'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SaleRecord.belongsTo(models.Merchant, {
        foreignKey: 'merchantId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      SaleRecord.belongsTo(models.User, {
        foreignKey: 'clientId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      SaleRecord.belongsTo(models.Order, {
        foreignKey: 'voucherNo',
        sourceKey: 'voucherNo',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  SaleRecord.init(
    {
      voucherNo: DataTypes.STRING,
      merchantId: DataTypes.INTEGER,
      clientId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SaleRecord',
    }
  );
  return SaleRecord;
};
