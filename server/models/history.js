'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  History.init({
    orderedBy: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    payment_options: DataTypes.STRING,
    status: DataTypes.ENUM('pending','payed','delivered','canceled')
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};