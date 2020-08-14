import RefundServices from '../services/refundServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';

const { errorResponse, successResponse } = responseHandler;
const { error, allRefunds, refunds, deleted } = responseMessage;
const { badRequest, ok } = statusCode;

class RefundController {
  static async addRefund(req, res) {
    const { sessionUser } = req;
    const { id } = sessionUser;
    try {
      const { refundOrder, description } = req.body;
      const status = 'pending';
      const datas = await RefundServices.saveRefund({
        createdBy: id,
        refundOrder,
        description,
        status,
      });
      return res.status(201).json({
        status: 201,
        message: 'Refund Successfully Added',
        data: datas,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static getAll = async (req, res) => {
    try {
      const refunds = await RefundServices.getAllRefunds();
      return successResponse(res, ok, allRefunds, null, refunds);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getOneRefund = async (req, res) => {
    try {
      const { id } = req.params;
      const oneRefund = await RefundServices.getOneRefund(id);
      return successResponse(res, ok, refunds, null, oneRefund);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      await RefundServices.deleteRefund(id);
      return successResponse(res, ok, deleted, null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
  static RefundUpdation = async (req, res) => {
    try {
      const { id } = req.params;
      const { refunds } = req;
      const newData = {
        id,
        description: req.body.description || refunds.description,
      };
      await RefundServices.updateRefund(newData);
      return successResponse(res, ok, 'updated', null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
  static StatusUpdation = async (req, res) => {
    try {
      const { id } = req.params;
      const { refunds } = req;
      const newData = {
        id,
        status: req.body.status || refunds.status,
      };
      await RefundServices.updateRefundStatus(newData);
      return successResponse(res, ok, 'updated', null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getCustomerRefunds = async (req, res) => {
    const {sessionUser} = req;
    try {
      const refunds = await RefundServices.getAllCustomerRefunds(sessionUser.id);
      return successResponse(res, ok, allRefunds, null, refunds);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
}
export default RefundController;
