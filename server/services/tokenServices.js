import models from '../models';

const { Token } = models;

class TokenServices {
  static createToken = async (data) => {
    const {dataValues} = await Token.create({
      token: data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'token',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllToken = async () => {
    const allToken = await Token.findAll();
    return allToken;
  }
  static getToken = async (token) => {
    const allToken = await Token.findOne({ where: { token: token } });
    return allToken;
  }
  static deleteToken = async (id) => {
    const deletedToken = await Token.destroy(
      { where: { token: id } }
    );
    return deletedToken;
  }
}

export default TokenServices;