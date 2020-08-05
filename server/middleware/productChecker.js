import ProductServices from '../services/productServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
const { getProduct, productExists } = ProductServices;
const { errorResponse } = responseHandler;
const { noproducts, productExist } = responseMessage;
const { badRequest } = statusCode;

const doesProductExist = async (req, res, next) => {
  let product;
  if (req.params.id) {
    const { id } = req.params;
    product = await getProduct(id);
  } else {
    product = await productExists('name', req.body.name);
  }
  if (product) {
    req.products = product.dataValues;
    return next();
  }
  return errorResponse(res, badRequest, noproducts);
};
const doesProductNameExist = async (req, res, next) => {
  let product;
  const { name } = req.body;
  product = await productExists('name', name);
  if (product) {
    return errorResponse(res, badRequest, productExist);
  }
  return next();
};

export default { doesProductExist, doesProductNameExist };
