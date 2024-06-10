'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: 'ProductCategory',
        foreignKey: 'productId',
        otherKey: 'categoryId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Product.hasMany(models.Order, {
        foreignKey: 'productId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Product.hasMany(models.Review, {
        foreignKey: 'productId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Product.hasOne(models.Discount, {
        foreignKey: 'productId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Product.belongsTo(models.Merchant, {
        foreignKey: 'merchantId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Product.init(
    {
      productName: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL,
      merchantId: DataTypes.INTEGER,
      category: DataTypes.ARRAY(DataTypes.INTEGER),
      stock: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
