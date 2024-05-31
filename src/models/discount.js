'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Discount.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Discount.init(
    {
      productId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      inPercent: DataTypes.BOOLEAN,
      discount: DataTypes.DECIMAL,
      fromDate: DataTypes.DATE,
      toDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Discount',
    }
  );
  return Discount;
};
