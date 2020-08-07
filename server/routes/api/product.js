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
  validateBestProducts,
  validateQuantity,
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
productRouter.patch('/add-quantity/:id', isUserLoggedIn, isUserAdmin, doesProductExist, validateQuantity, ProductController.addProductQuantity);
productRouter.patch('/best/:id', isUserLoggedIn, isUserAdmin, doesProductExist, validateBestProducts, ProductController.addRemoveToBestProducts);
productRouter.get('/available', isUserLoggedIn, isUserAdmin, ProductController.getAllAvailableProducts);
productRouter.get('/product-type', isUserLoggedIn, isUserAdmin, ProductController.getAllProductTypeBased);
productRouter.get('/:id', doesProductExist, ProductController.getOneProduct);

export default productRouter;
