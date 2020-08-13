import OrdersServices from '../services/ordersServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import ProductServices from '../services/productServices';
import orderHelpers from '../helpers/orderHelper';

const {
  getOrders,
  ordersExists,
  getPayedOrders,
} = OrdersServices;
const {
  errorResponse,
} = responseHandler;
const {
  badRequest,
} = statusCode;
const {
  noproducts,
} = responseMessage;
const {
  productExists,
  updateProduct,
} = ProductServices;
const {
  updateForExpiredOrder,
} = orderHelpers;

const doesOrdersExist = async (req,res,next) => {
  let orders;
  const {id} = req.params;
  orders = await getOrders(id);
  if(orders){
    req.orders=orders.dataValues;
    return next();
  }
  return errorResponse(res,badRequest,'That order does not exist');
}
const doesOrderedProductExist = async (req, res, next) => {
  
  let product;
  product = await productExists('id', req.body.productId);
  if (product) {
    let ordered;    
    let quantity = await updateForExpiredOrder(req.body.productId);
    if (quantity > 0){
      product.dataValues.quantity = product.dataValues.quantity + quantity;
      await updateProduct(product.dataValues);
    }
    const {dataValues} = product;
    ordered = await ordersExists('productId', dataValues.id);
    if ((ordered && dataValues.quantity == 0) || dataValues.status == 'sold') {
      return errorResponse(res, badRequest, 'The product is already ordered');
    }
    if (dataValues.quantity < req.body.quantity){
      return errorResponse(res, badRequest, 'The requested quantity is more than what we have');
    }
    return next();
  }
  return errorResponse(res, badRequest, noproducts);
};
const isOrderYours = async (req, res, next) => {
  const {sessionUser} = req;
  const {id} = req.params;
  const order = await getOrders(id);
  if(order.orderedBy == sessionUser.id){
    return next();
  }
  return errorResponse(res, badRequest, 'This is not your order');
}
const isOrderPayed = async (req, res, next) => {
  const {id} = req.params;
  const order = await getPayedOrders(id);  
  if(order.status == 'pending'){
    return next();
  }
  if(order.status == 'canceled'){
    return errorResponse(res, badRequest, 'This is order is canceled');
  }
  return errorResponse(res, badRequest, 'This is order is payed or delivered');
}

export default { doesOrdersExist, doesOrderedProductExist, isOrderYours, isOrderPayed }