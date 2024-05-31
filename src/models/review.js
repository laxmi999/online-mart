'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'clientId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Review.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Review.init(
    {
      productId: DataTypes.INTEGER,
      clientId: DataTypes.INTEGER,
      rating: DataTypes.DECIMAL,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
