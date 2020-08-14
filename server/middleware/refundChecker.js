import RefundServices from '../services/refundServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import OrderServices from '../services/ordersServices';

const { getOneRefund, RefundExists } = RefundServices;
const { errorResponse } = responseHandler;
const { norefunds } = responseMessage;
const { badRequest } = statusCode;
const {
  getOrders,
} = OrderServices;

const doesRefundExist = async (req, res, next) => {
  let refund;
  if (req.params.id) {
    const { id } = req.params;
    refund = await getOneRefund(id);
  }
  else {
    refund = await RefundExists('description', req.body.description);
  }
  if (refund) {
    req.refunds = refund.dataValues;
    return next();
  }
  return errorResponse(res, badRequest, norefunds);
};
const doesRefundNotExist = async (req, res, next) => {

  const refund = await RefundExists('refundOrder', req.body.refundOrder);
  if (!refund) {
    return next();
  }
  return errorResponse(res, badRequest, 'The refund for that order is already requested');
};
const checkRefundOrder = async (req, res, next) => {
  let order;
  const {sessionUser} = req;
  if(req.body.refundOrder){
    const {refundOrder} = req.body;
    order = await getOrders(refundOrder);
  }
  else{
    return errorResponse(res, badRequest, 'refundOrder is required');
  }
  if (order) {
    if(sessionUser.id == order.dataValues.orderedBy){
      if(order.dataValues.status == 'payed'){
        return next();
      }
      return errorResponse(res, badRequest, 'The order is not yet payed');
    }
    return errorResponse(res, badRequest, 'The order is not yours');
  }
  return errorResponse(res, badRequest, 'the order does not exists');
};
const isRefundYours = async (req, res, next) => {
  let refund;
  const {sessionUser} = req;
  const { id } = req.params;
  refund = await getOneRefund(id);
  if (refund.dataValues.createdBy == sessionUser.id) {
    return next();
  }
  return errorResponse(res, badRequest, 'This is not your refund');
};

export default { doesRefundExist, checkRefundOrder, isRefundYours, doesRefundNotExist };
