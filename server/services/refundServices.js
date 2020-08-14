import models from '../models';

const { Refund } = models;

class RefundService {
  static async saveRefund(refund) {
    const acceptedRefund = await Refund.create(
      {
        ...refund,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: ['createdBy', 'refundOrder', 'description', 'status'],
      }
    );

    return acceptedRefund;
  }
  static getAllRefunds = async () => {
    const allRefunds = await Refund.findAll();
    return allRefunds;
  };
  static getOneRefund = async (id) => {
    const allRefunds = await Refund.findOne({ where: { id: id } });
    return allRefunds;
  };
  static deleteRefund = async (id) => {
    const deletedRefund = await Refund.destroy({ where: { id: id } });
    return deletedRefund;
  };
  static updateRefund = async (newData) => {
    const updatedRefund = await Refund.update(
      {
        description: newData.description,
      },
      { where: { id: newData.id } }
    );
    return updatedRefund;
  };
  static updateRefundStatus = async (newData) => {
    const updatedRefundStatus = await Refund.update(
      {
        status: newData.status,
      },
      { where: { id: newData.id } }
    );
    return updatedRefundStatus;
  };
  static async RefundExists(attr, val) {
    const refund = await Refund.findOne({ where: { [attr]: val } });
    return refund;
  }
  static getAllCustomerRefunds = async (id) => {
    const allRefunds = await Refund.findAll({where: {createdBy:id}});
    return allRefunds;
  };
}

export default RefundService;
