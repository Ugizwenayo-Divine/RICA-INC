'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.User, { foreignKey: 'orderedBy' });
      // Orders.belongsTo(models.Product, { foreignKey: 'productId' });
      Orders.hasMany(models.Transaction, {
        foreignKey: 'order_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  Orders.init({
    orderedBy: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    product: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    ordered_quantity: DataTypes.INTEGER,
    payment_options: DataTypes.STRING,
    status: DataTypes.ENUM('pending','payed','delivered','canceled'),
    due_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};