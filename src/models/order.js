'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasOne(models.SaleRecord, {
        foreignKey: 'voucherNo',
        sourceKey: 'voucherNo',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Order.belongsTo(models.User, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Order.belongsTo(models.Product, {
        foreignKey: 'clientId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Order.init(
    {
      clientId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      deliveryAddress: DataTypes.STRING,
      orderDate: DataTypes.DATE,
      orderAmount: DataTypes.DECIMAL,
      voucherNo: DataTypes.STRING,
      isDelivered: DataTypes.BOOLEAN,
      isCancelled: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
