'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransactionRecord.belongsTo(models.Merchant, {
        foreignKey: 'createdBy',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  TransactionRecord.init(
    {
      salesToken: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      amount: DataTypes.DECIMAL,
      discount: DataTypes.DECIMAL,
      transactionDate: DataTypes.DATE,
      createdBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'TransactionRecord',
    }
  );
  return TransactionRecord;
};
