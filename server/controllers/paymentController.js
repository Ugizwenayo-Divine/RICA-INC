import payment from '../payment/payment';
import ProductServices from '../services/productServices';
import OrderServices from '../services/ordersServices';
import responseHandler from '../helpers/responseHandler';
import orderHelper from '../helpers/orderHelper';
import transactionService from '../services/transactionServices';
import statusCode from '../helpers/statusCode';
import responseMessage from '../helpers/customMessages';
import sendNotification from '../helpers/smsNotification';
import AuthServices from '../services/authServices';

const {
    rwn_mobilemoney,
    cardPayment,
    verifyPayment,
} = payment;
const {
    updateProductStatus,
} = ProductServices;
const {
    getOrders,
} = OrderServices;
const {
  errorResponse,
  successResponse,
} = responseHandler;
const {
  clientOrderPayed,
} = orderHelper;
const {
  getTransaction,
  updateStatus,
  getAllTransactions,
} = transactionService;
const {
  badRequest,
  ok,
} = statusCode;
const {
  allTransactions,
  paymentDone,
  paymentInitiated,
  paymentInitiatedError,
  paymentError,
  transactionNotExist,
} = responseMessage;
const {
  sendSMS
} = sendNotification;
const {
  findAllUsers,
} = AuthServices;
export default class PaymentController {

  static async orderPaymentCreation(req, res) {
    const { sessionUser } = req;
    const {id} = req.params;
    let result = '';
    let url = '';
    try {
      const order = await getOrders(id);
      const data = {
        email:sessionUser.email,
        fullname: sessionUser.firstName+' '+sessionUser.lastName,
        phone_number: sessionUser.phoneNumber,
        currency: order.dataValues.currency,
        amount: order.dataValues.amount,
      };      
      const userData = {
        transactedBy:order.dataValues.orderedBy,
        order_id:order.dataValues.id,
        phone_number:sessionUser.phoneNumber,
        type:order.dataValues.payment_options
      };
      if(order.dataValues.payment_options == 'card'){
        result = await cardPayment(userData, data);
        url = result.data.link;
      }
      else{
        result = await rwn_mobilemoney(userData, data);
        url = result.meta.authorization.redirect;
      }
      if (result.status == 'success'){
        return successResponse(res, ok, paymentInitiated, null, {'redirect': url});
      }
      return errorResponse(res, badRequest, paymentInitiatedError);
    }
    catch(err){
      return errorResponse(res, badRequest, err.message);          
    }
  }
  static async paymentVerification(req, res) {
    const {transaction_id} = req.params;
    try {
      const result = await verifyPayment(transaction_id);
      const {tx_ref, amount, currency } = result.data;
      const transaction = await getTransaction(tx_ref);
      const transactionData = {
        tx_ref,
        transaction_id,
      }
      if(transaction){
        const {Order} = transaction.dataValues;
        if (result.status == 'success' && amount >= Order.dataValues.amount && currency == Order.dataValues.currency){
          await updateStatus(transactionData);
          await clientOrderPayed(Order.dataValues.id);
          return successResponse(res, ok, paymentDone, null, null);
        }
        return errorResponse(res, badRequest, paymentError);
      }
      return errorResponse(res, badRequest, transactionNotExist);
    }
    catch(err){
      return errorResponse(res, badRequest, err.message);          
    }
  }
    static async verification(req, res) {  
      let transaction_id='';
      transaction_id = req.body.data.id || req.body.transaction_id;

      try {
        const result = await verifyPayment(transaction_id);
        const {tx_ref, amount, currency } = result.data;
        const transaction = await getTransaction(tx_ref);
        const transactionData = {
          tx_ref,
          transaction_id,
        }
        if(transaction){
          const {Order} = transaction.dataValues;
          const users = await findAllUsers();
          if (result.status == 'success' && amount >= Order.dataValues.amount && currency == Order.dataValues.currency){
            await updateStatus(transactionData);
            await clientOrderPayed(Order.dataValues.id);
            users.map(async (user)=> (
              user.type==='admin'?
              await sendSMS(user.phoneNumber,`The payment of ${Order.dataValues.amount} RWF is made for ${Order.id} order`):null));
            await sendSMS(transaction.dataValues.phone_number, `The payment of ${Order.dataValues.amount} RWF for ${Order.dataValues.product} from RICA is done`);
            return successResponse(res, ok, paymentDone, null, null);
          }
          return errorResponse(res, badRequest, paymentError);
        }
        return errorResponse(res, badRequest, transactionNotExist);
      }
      catch(err){
        return errorResponse(res, badRequest, err.message);          
      }

  }
  static getVerifiedTransactions = async (req, res) => {
    try{
      const transactions = await getAllTransactions();
      return successResponse(res, ok, allTransactions, null, transactions);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getPayment = async (req, res) => {
    return successResponse(res,ok,'success',null,null);
}
    
}
  