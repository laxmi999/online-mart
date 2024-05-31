'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    static associate(models) {
      // define association here
    }
  }
  ProductCategory.init(
    {
      productId: DataTypes.INTEGER,
      categoryID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProductCategory',
    }
  );
  return ProductCategory;
};