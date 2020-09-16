'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: 'userId' });
      Product.hasOne(models.Orders, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Product.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      image: DataTypes.STRING,
      brand: DataTypes.STRING,
      description:DataTypes.TEXT,
      type: DataTypes.ENUM('normal', 'best'),
      cloudinaryId: DataTypes.STRING,
      due_time: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
