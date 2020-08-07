import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import HistoryServices from '../services/historyServices';

const {
  errorResponse,
  successResponse,
} = responseHandler;
const {
  allOrders,
  orders,
} = responseMessage;
const {
  badRequest,
  ok,
} = statusCode;
const {
  getAllHistory,
  getAllHistoryByCustomer,
  getHistoryStatusBased,
  getHistory,
} = HistoryServices;

class HistoryController {

  static getAll = async (req, res) => {
    try{
      const orders = await getAllHistory();
      return successResponse(res, ok, 'the orders from history', null, orders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getAllStatusBased = async (req, res) => {
    const {status} = req.query;
    try{
      const orders = await getHistoryStatusBased(status);
      return successResponse(res, ok, 'the orders from history', null, orders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOneHistoryOrders = async (req, res) => {
    try{
      const {id} = req.params;
      const oneOrders = await getHistory(id);
      return successResponse(res, ok, 'the order from history', null, oneOrders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getCustomerHistoryOrders = async (req, res) => {
    try{
      const {id} = req.params;
      const oneOrders = await getAllHistoryByCustomer(id);
      return successResponse(res, ok, 'the orders of this customers from history', null, oneOrders);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
}

export default HistoryController;