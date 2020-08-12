import RefundServices from '../services/refundServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
const { getOneRefund, RefundExists } = RefundServices;
const { errorResponse } = responseHandler;
const { norefunds } = responseMessage;
const { badRequest } = statusCode;

const doesRefundExist = async (req, res, next) => {
  let refund;
  if (req.params.id) {
    const { id } = req.params;
    refund = await getOneRefund(id);
  } else {
    refund = await RefundExists('description', req.body.description);
  }
  if (refund) {
    req.refunds = refund.dataValues;
    return next();
  }
  return errorResponse(res, badRequest, norefunds);
};

export default { doesRefundExist };
