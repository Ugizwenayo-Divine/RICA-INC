'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudySupervision extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudySupervision.belongsTo(models.User, { foreignKey: 'studyBy' });
    }
  };
  StudySupervision.init({    
    studyBy: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    cloudinaryId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'StudySupervision',
  });
  return StudySupervision;
};