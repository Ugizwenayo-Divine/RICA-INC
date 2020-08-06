'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Announcement.belongsTo(models.User, { foreignKey: 'announcedBy' });
    }
  }
  Announcement.init(
    {
      announcedBy: DataTypes.INTEGER,
      title: DataTypes.STRING,
      announcement: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Announcement',
    }
  );
  return Announcement;
};
