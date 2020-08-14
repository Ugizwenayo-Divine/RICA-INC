'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Refund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Refund.belongsTo(models.User, { foreignKey: 'createdBy' });
    }
  }
  Refund.init(
    {
      createdBy: DataTypes.INTEGER,
      refundOrder: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      status: DataTypes.ENUM('pending', 'approved', 'rejected'),
    },
    {
      sequelize,
      modelName: 'Refund',
    }
  );
  return Refund;
};
