'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sector.belongsTo(models.District, { foreignKey: 'districtId' });
    }
  };
  Sector.init({
    districtId: DataTypes.INTEGER,
    sector: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sector',
  });
  return Sector;
};