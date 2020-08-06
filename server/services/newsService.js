import models from '../models';

const { News } = models;

class NewsServices {
  static createNews = async (data) => {
    const {dataValues} = await News.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'userId',
        'title',
        'description',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllNews = async () => {
    const allNews = await News.findAll();
    return allNews;
  }
  static getNews = async (id) => {
    const allNews = await News.findOne({ where: { id: id } });
    return allNews;
  }
  static deleteNews = async (id) => {
    const deletedNews = await News.destroy(
      { where: { id: id } }
    );
    return deletedNews;
  }
  static updateNews = async (newData) => {
    const updatedNews = await News.update(
      { 
        title: newData.title,
        description: newData.description,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedNews;
  }
  static async newsExists(attr, val) {
    const news = await News.findOne({ where: { [attr]: val } });
    return news;
  }
}

export default NewsServices;