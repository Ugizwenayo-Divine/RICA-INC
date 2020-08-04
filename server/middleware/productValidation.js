import {
  validateProducts,
  validateSearchName,
  validateSearchCategory,
  displayErrorMessages,
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
  const data = {
    name: name ? req.body.name : products.name,
    category: category ? req.body.category : products.category,
    price: price ? req.body.price : products.price,
    brand: brand ? req.body.brand : products.brand,
  };
  const { error } = validateProducts(data);
  displayErrorMessages(error, res, next);
};

export default {
  createProductValidation,
  updateProductValidation,
  searchProductName,
  searchProductCategory,
};
