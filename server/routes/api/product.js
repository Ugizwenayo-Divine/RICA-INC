import express from 'express';
import ProductController from '../../controllers/productController';
import multiparty from 'connect-multiparty';
import authentication from '../../middleware/authentication';
import productValidation from '../../middleware/productValidation';

const multipart = multiparty();

const { isUserLoggedIn, isUserAdmin } = authentication;
const { createProductValidation } = productValidation;

const productRouter = express.Router();

productRouter.post(
  '/add',
  isUserLoggedIn,
  isUserAdmin,
  multipart,
  createProductValidation,
  ProductController.addProduct
);

export default productRouter;
