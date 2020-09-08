import Sequelize from 'sequelize';
import models from '../models';

const { Orders } = models;
const Op = Sequelize.Op;

class OrdersServices {
  static createOrders = async (data) => {
    let due_date = new Date();
    due_date.setMinutes(due_date.getMinutes() + data.due_time);
    const {dataValues} = await Orders.create({
      ...data,
      status: 'pending',
      due_time: due_date,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'orderedBy',
        'productId',
        'product',
        'amount',
        'currency',
        'ordered_quantity',
        'payment_options',
        'status',
        'due_time',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllOrders = async () => {
    const allOrders = await Orders.findAll();
    return allOrders;
  }
  static getOrders = async (id) => {
    const allOrders = await Orders.findOne({ where: { id: id } });
    return allOrders;
  }
  static deleteOrders = async (id) => {
    const deletedOrders = await Orders.destroy(
      { where: { id: id } }
    );
    return deletedOrders;
  }
  static getAllClientOrders = async (userId) => {
    const orders = await Orders.findAll({ where: { orderedBy: userId, status : { [Op.ne]: 'canceled' } } });
    return orders;
  }
  static changeOrderStatus = async (order) => {
    const updatedOrders = await Orders.update(
      { 
        status: order.status,
        due_time: null,
      }, 
      { where: { id: order.id } }
    );
    return updatedOrders;
  }
  static getOrdersStatusBased = async (status) => {
    const allOrders = await Orders.findAll({ where: { status: status } });
    return allOrders;
  }
  static getAllPayedClientOrders = async () => {
    const orders = await Orders.findAll({ where: { status : 'payed' } });
    return orders;
  }
  static async ordersExists(attr, val) {
    const orders = await Orders.findOne({ where: { [attr]: val } });
    return orders;
  }
  static getPayedOrders = async (id) => {
    const allOrders = await Orders.findOne({ where: { id: id } });
    return allOrders;
  }
  static addExpiredOrderQuantity = async (id) => {
    const totalQuantity = await Orders.sum('ordered_quantity', {where: {due_time: { [Op.lt] : new Date()}, productId: id}});
    return totalQuantity;
  }
  static deleteExpiredOrder = async (id) => {
    const deleted = await Orders.destroy({where: {due_time: { [Op.lt] : new Date()}, productId: id}});
    return deleted;
  }
  static getAllExpiredOrder = async (id) => {
    const deleted = await Orders.findAll({where: {due_time: { [Op.lt] : new Date()}, productId: id}});
    return deleted;
  }
}

export default OrdersServices;