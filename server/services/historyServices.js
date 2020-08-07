import Sequelize from 'sequelize';
import models from '../models';

const { History } = models;
const Op = Sequelize.Op;

class HistoryServices {
  static createHistory = async (data) => {
    const {dataValues} = await History.create({
      ...data
    },{
      fields:[
        'orderedBy',
        'productId',
        'amount',
        'currency',
        'payment_options',
        'status',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllHistory = async () => {
    const allHistory = await History.findAll();
    return allHistory;
  }
  static getHistory = async (id) => {
    const allHistory = await History.findOne({ where: { id: id } });
    return allHistory;
  }
  static getAllHistoryByCustomer = async (customerId) => {
    const allHistory = await History.findAll({ where: {orderedBy: customerId}});
    return allHistory;
  }
  static getHistoryStatusBased = async (status) => {
    const allHistory = await History.findAll({ where: { status: status } });
    return allHistory;
  }
}

export default HistoryServices;