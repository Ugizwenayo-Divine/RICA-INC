import OrdersServices from '../services/ordersServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import ProductServices from '../services/productServices';
import HistoryServices from '../services/historyServices';
import sendNotification from '../helpers/smsNotification';
import AuthServices from '../services/authServices';
import orderHelper from '../helpers/orderHelper';

const {
  createOrders,
  getAllOrders,
  getOrders,
  deleteOrders,
  getAllClientOrders,
  changeOrderStatus,
  getOrdersStatusBased,
  getAllPayedClientOrders,
} = OrdersServices;
const {
  errorResponse,
  successResponse,
} = responseHandler;
const {
  error,
  successCreation,
  allOrders,
  orders,
  deleted,
} = responseMessage;
const {
  badRequest,
  created,
  ok,
} = statusCode;
const {
  getProduct,
  updateProduct,
} = ProductServices;
const {
  createHistory,
} = HistoryServices;
const {
  sendSMS,
} = sendNotification;
const {
  findAllUsers,
} = AuthServices;
const {
  allowDiscount
} = orderHelper;
class OrdersController {
  static addOrders = async (req,res) => {
    const {sessionUser} = req;
    const {id} = sessionUser;
    const { productId, quantity, payment_options, deliveredDistrict,deliveredLocation, deliveredSector} = req.body;

    try{
      const product = await getProduct(productId);
      product.dataValues.quantity = product.dataValues.quantity - quantity;
      await updateProduct(product.dataValues);
      const amount = product.dataValues.price.split(' ');
      const allowedBonus = await allowDiscount({id,amount:(amount[0]*quantity)});
      const data = {
        orderedBy:id,
        productId,
        product:product.dataValues.name,
        amount: ((amount[0]*quantity)+parseInt(deliveredDistrict.price)),
        currency: amount[1],
        ordered_quantity: quantity,
        due_time: (product.dataValues.due_time * 60),
        payment_options,
        deliveredDistrict:deliveredDistrict.district,
        deliveredSector,
        deliveredLocation,
        bonus:allowedBonus?req.body.bonus:null,
      }
      const result = await createOrders(data);
      const users = await findAllUsers();
      if(result){
        // users.map(async (user)=> (
        //   user.type==='admin'?
        //   await sendSMS(user.phoneNumber,`The client with ${sessionUser.email} orders the ${quantity} units of ${product.dataValues.name}`):null));
        
        // await sendSMS(sessionUser.phoneNumber, `You have ordered ${quantity} units of ${product.dataValues.name} from RICA
        // The product will be delivered within 3 days`);
        
        return successResponse(res,created,successCreation,null,result);
      }
    }
    catch(err){
      console.log(err);
        return errorResponse(res,badRequest,error);
    }
  }
  static getAll = async (req, res) => {
    try{
      const orders = await getAllOrders();
      return successResponse(res, ok, allOrders, null, orders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getAllStatusBased = async (req, res) => {
    const {status} = req.query;
    try{
      const orders = await getOrdersStatusBased(status);
      return successResponse(res, ok, allOrders, null, orders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOneOrders = async (req, res) => {
    try{
      const {id} = req.params;
      const oneOrders = await getOrders(id);
      return successResponse(res, ok, orders, null, oneOrders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static deleteOneOrders = async (req, res) => {
    try{
      const {id} = req.params;
      const order = await getOrders(id);
      const history = await createHistory(order.dataValues);
      await deleteOrders(id);
      return successResponse(res, ok, deleted, null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOneClientOrder = async (req, res) => {
    try{
      const {id} = req.params;
      const oneOrders = await getOrders(id);
      return successResponse(res, ok, orders, null, oneOrders);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static getClientOrders = async (req, res) => {
    try{
      const {sessionUser} = req;
      const allOrders = await getAllClientOrders(sessionUser.id);
      return successResponse(res, ok, orders, null, allOrders);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static clientOrderCanceled = async (req, res) => {
    try{
      const {id} = req.params;
      const data ={
        id,
        status:'canceled',
      }
      const order = await getOrders(id);
      if(order.dataValues.status == 'pending'){
        const product = await getProduct(order.dataValues.productId);
        product.dataValues.quantity = product.dataValues.quantity + order.dataValues.ordered_quantity;
        await updateProduct(product.dataValues);
        await changeOrderStatus(data);
        return successResponse(res, ok, 'the order is canceled', null, null);
      }
      return errorResponse(res, badRequest, 'You are not allowed to cancel this order');
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOnePayedOrders = async (req, res) => {
    try{
      const oneOrders = await getAllPayedClientOrders();
      return successResponse(res, ok, orders, null, oneOrders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static clientOrderdelivered = async (req, res) => {
    try{
      const {id} = req.params;
      const data ={
        id,
        status:'delivered',
      }
      await changeOrderStatus(data);
      return successResponse(res, ok, 'the order is delivered', null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static checkBonus = async (req, res) => {
    const {sessionUser} = req;
    const {id} = sessionUser;
    try{
      const allowedBonus = await allowDiscount({id,amount:0});
      if(allowedBonus){
      return successResponse(res, ok, 'Allowed bonus', null, true);
      }
      return successResponse(res, ok, 'Not allowed bonus', null, false);

    }
    catch(error){
      return errorResponse(res, badRequest, err.message);
    }
  }
  
}

export default OrdersController;