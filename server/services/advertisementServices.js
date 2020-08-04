import models from '../models';

const { Advertisement } = models;

class AdvertisementServices {
  static createAdvertisement = async (data) => {
    const {dataValues} = await Advertisement.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'advertisedBy',
        'title',
        'description',
        'type',
        'advertisingCompany',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllAdvertisement = async () => {
    const allAdvertisement = await Advertisement.findAll();
    return allAdvertisement;
  }
  static getAdvertisement = async (id) => {
    const allAdvertisement = await Advertisement.findOne({ where: { id: id } });
    return allAdvertisement;
  }
  static deleteAdvertisement = async (id) => {
    const deletedAdvertisement = await Advertisement.destroy(
      { where: { id: id } }
    );
    return deletedAdvertisement;
  }
  static updateAdvertisement = async (newData) => {
    const updatedAdvertisement = await Advertisement.update(
      { 
        title: newData.title,
        description: newData.description,
        type: newData.type,
        advertisingCompany: newData.advertisingCompany,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedAdvertisement;
  }
  static async advertisementExists(attr, val) {
    const advertisement = await Advertisement.findOne({ where: { [attr]: val } });
    return advertisement;
  }
  static getAllAdvertisementByType = async (type) => {
    const allAdvertisement = await Advertisement.findAll({ where: { type: type } });
    return allAdvertisement;
}
}

export default AdvertisementServices;