import { validateRefund, displayErrorMessages, validateRefundStatus } from '../helpers/validation';

const createRefundValidation = async (req, res, next) => {
  const { error } = validateRefund(req.body);
  displayErrorMessages(error, res, next);
};
const updateRefundValidation = async (req, res, next) => {
  const { refunds } = req;
  let keys = Object.keys(req.body);
  let description = keys.find((key) => key == 'description');
  const data = {
    description: description ? req.body.description : refunds.description,
  };
  const { error } = validateRefund(data);
  displayErrorMessages(error, res, next);
};
const updateRefundStatusValidation = async (req, res, next) => {
  const { refunds } = req;
  let keys = Object.keys(req.body);
  let status = keys.find((key) => key == 'status');
  const data = {
    status: status ? req.body.status : refunds.status,
  };
  const { error } = validateRefundStatus(data);
  displayErrorMessages(error, res, next);
};

export default {
  createRefundValidation,
  updateRefundValidation,
  updateRefundStatusValidation,
};
