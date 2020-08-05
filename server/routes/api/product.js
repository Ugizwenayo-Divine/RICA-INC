import express from 'express';
import ProductController from '../../controllers/productController';
import multiparty from 'connect-multiparty';
import authentication from '../../middleware/authentication';
import productValidation from '../../middleware/productValidation';
import productChecker from '../../middleware/productChecker';

const multipart = multiparty();

const { isUserLoggedIn, isUserAdmin } = authentication;
const {
  createProductValidation,
  searchProductName,
  searchProductCategory,
  updateProductValidation,
} = productValidation;

const { doesProductExist, doesProductNameExist } = productChecker;
const productRouter = express.Router();

productRouter.post(
  '/add',
  multipart,
  isUserLoggedIn,
  isUserAdmin,
  createProductValidation,
  doesProductNameExist,
  ProductController.addProduct
);
productRouter.get('/', ProductController.getAll);
productRouter.get('/searchname', searchProductName, ProductController.searchName);
productRouter.get('/searchcategory', searchProductCategory, ProductController.searchCategory);
productRouter.get('/:id', doesProductExist, ProductController.getOneProduct);
productRouter.delete(
  '/:id',
  isUserLoggedIn,
  isUserAdmin,
  doesProductExist,
  ProductController.delete
);
productRouter.patch(
  '/:id',
  multipart,
  isUserLoggedIn,
  isUserAdmin,
  doesProductExist,
  updateProductValidation,
  ProductController.productUpdation
);

export default productRouter;
