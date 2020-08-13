'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Orders, { foreignKey: 'order_id' });
      Transaction.belongsTo(models.User, { foreignKey: 'transactedBy' });
    }
  };
  Transaction.init({
    type: DataTypes.ENUM('momo','card'),
    phone_number: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    transactedBy: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};