import models from '../models';

const { StudySupervision } = models;

class StudySupervisionServices {
  static createStudySupervision = async (data) => {
    const {dataValues} = await StudySupervision.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'studyBy',
        'description',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllStudySupervision = async () => {
    const allStudySupervision = await StudySupervision.findAll();
    return allStudySupervision;
  }
  static getStudySupervision = async (id) => {
    const allStudySupervision = await StudySupervision.findOne({ where: { id: id } });
    return allStudySupervision;
  }
  static deleteStudySupervision = async (id) => {
    const deletedStudySupervision = await StudySupervision.destroy(
      { where: { id: id } }
    );
    return deletedStudySupervision;
  }
  static updateStudySupervision = async (newData) => {
    const updatedStudySupervision = await StudySupervision.update(
      { 
        description: newData.description,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedStudySupervision;
  }
  static async StudySupervisionExists(attr, val) {
    const studySupervision = await StudySupervision.findOne({ where: { [attr]: val } });
    return studySupervision;
  }
}

export default StudySupervisionServices;