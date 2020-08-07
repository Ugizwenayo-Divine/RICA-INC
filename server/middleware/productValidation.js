import {
  validateProducts,
  validateSearchName,
  validateSearchCategory,
  displayErrorMessages,
  validateAddProductQuantity,
  validateBestProduct,
} from '../helpers/validation';

const createProductValidation = async (req, res, next) => {
  const { error } = validateProducts(req.body);
  displayErrorMessages(error, res, next);
};
const searchProductName = async (req, res, next) => {
  const { error } = validateSearchName(req.body);
  displayErrorMessages(error, res, next);
};
const searchProductCategory = async (req, res, next) => {
  const { error } = validateSearchCategory(req.body);
  displayErrorMessages(error, res, next);
};
const updateProductValidation = async (req, res, next) => {
  const { products } = req;
  let keys = Object.keys(req.body);
  let name = keys.find((key) => key == 'name');
  let category = keys.find((key) => key == 'category');
  let price = keys.find((key) => key == 'price');
  let brand = keys.find((key) => key == 'brand');
  let quantity = keys.find((key) => key == 'quantity');  
  let due_time = keys.find((key) => key == 'due_time');
  console.log(products,req.body);
  let newPrice = products.price.split(' ');
  const data = {
    name: name ? req.body.name : products.name,
    category: category ? req.body.category : products.category,
    price: price ? req.body.price : newPrice[0],
    brand: brand ? req.body.brand : products.brand,
    quantity: quantity ? req.body.quantity : (products.quantity).toString(),
    due_time: due_time ? req.body.due_time : (products.due_time).toString(),
  };
  const { error } = validateProducts(data);
  displayErrorMessages(error, res, next);
};
const validateQuantity = async (req, res, next) => {
  const { error } = validateAddProductQuantity(req.body);
  displayErrorMessages(error, res, next);
};
const validateBestProducts = async (req, res, next) => {
  const { error } = validateBestProduct(req.body);
  displayErrorMessages(error, res, next);
};

export default {
  createProductValidation,
  updateProductValidation,
  searchProductName,
  searchProductCategory,
  validateBestProducts,
  validateQuantity,
};
