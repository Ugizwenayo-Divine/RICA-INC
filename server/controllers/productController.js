import productHelper from '../services/productServices';
import picture from '../helpers/uploadImage';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import ProductHelper from '../services/productServices';

const { errorResponse, successResponse } = responseHandler;
const {
  error,
  wrongType,
  allProducts,
  productCategoryFound,
  productNameFound,
  products,
  deleted,
  best,
  notBest,
} = responseMessage;
const { badRequest, unSupportedMedia, ok } = statusCode;

class ProductController {
  static async addProduct(req, res) {
    const { sessionUser } = req;
    const { id } = sessionUser;
    try {
      if (req.files && req.files.image) {
        let image;
        if (req.files.image.type || req.files.image.length) {
          image = await picture.uploader(req.files.image);
        } else {
          return res.status(400).json({
            status: 400,
            error: 'Please select atleast one image',
          });
        }

        if (!image || image.url.includes('null')) {
          return res.status(415).json({
            status: 415,
            error: 'Please select the right type of image',
          });
        } else null;
        const { name, category, price, brand, due_time, quantity } = req.body;
        const datas = await productHelper.saveProduct({
          userId: id,
          name,
          category,
          price: `${price} RWF`,
          quantity,
          image: image.url,
          brand,
          due_time,
          cloudinaryId: image.public_id,
        });
        return res.status(201).json({
          status: 201,
          message: 'Product Successfully Added',
          data: datas,
        });
      }
      return res.status(401).json({
        status: 401,
        error: 'Please select one or more images',
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
      const products = await ProductHelper.getAllProducts();
      return successResponse(res, ok, allProducts, null, products);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getOneProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const oneProduct = await ProductHelper.getProduct(id);
      return successResponse(res, ok, products, null, oneProduct);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static searchName = async (req, res) => {
    try {
      const { name } = req.query;
      const foundName = await ProductHelper.searchByName(name);
      if (foundName.length == 0) {
        return errorResponse(res, badRequest, 'Product does not exist');
      } else {
        return successResponse(res, ok, productNameFound, null, foundName);
      }
    } catch (error) {
      console.log(error,'erroraaaaaa');
      return errorResponse(res, badRequest, error);
    }
  };
  static searchCategory = async (req, res) => {
    try {
      const { category } = req.query;
      const foundCategory = await ProductHelper.searchByCategory(category);
      if (foundCategory.length >= 1) {
        return successResponse(res, ok, productCategoryFound, null, foundCategory);
      } else {
        return res.status(400).json({
          status: 400,
          error: 'Product with that category does not exist',
        });
      }
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const { products } = req;
      await picture.deleteTheImage(products.cloudinaryId);
      await ProductHelper.deleteProduct(id);
      return successResponse(res, ok, deleted, null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
  static productUpdation = async (req, res) => {
    let image;
    try {
      const { id } = req.params;
      let imageUrl = null,
        imageId = null;
      const { products } = req;

      if (req.files && req.files.image) {
        await picture.deleteTheImage(products.cloudinaryId);
        image = await picture.uploader(req.files.image);
        if (!image || image.url.includes('null')) {
          return errorResponse(res, unSupportedMedia, wrongType);
        }
        const { url, public_id } = image;
        imageUrl = url;
        imageId = public_id;
      }
      const newData = {
        id,
        name: req.body.name || products.name,
        category: req.body.category || products.category,
        price: `${req.body.price || products.price} RWF`,
        quantity: req.body.quantity || products.quantity,
        image: imageUrl || products.image,
        brand: req.body.brand || products.brand,
        cloudinaryId: imageId || products.cloudinaryId,
      };
      await ProductHelper.updateProduct(newData);
      return successResponse(res, ok, 'updated', null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
  static addRemoveToBestProducts = async (req, res) => {
    try{
      const {type} = req.body;
      const {id} = req.params;
      const data ={
        id,
        type,
      }
      await ProductHelper.addRemoveToBestProducts(data);
      return successResponse(res, ok, notBest, null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, err.message);
    }
  };
  static getAllProductTypeBased = async (req, res) => {
    const {type} = req.query
    try{
      const products = await ProductHelper.getAllBestProducts(type);
      return successResponse(res, ok, 'All requested products', null, products);
    }
    catch(err){
      return errorResponse(res, badRequest, err.message);
    }
  };
  static getAllAvailableProducts = async (req, res) => {
    try{
      const products = await ProductHelper.getAllAvailableProducts();
      return successResponse(res, ok, 'All available products', null, products);
    }
    catch(err){
      return errorResponse(res, badRequest, err.message);
    }
  }
  static addProductQuantity = async (req, res) => {
    const {id} = req.params;
    const {products} = req;
    const product ={
      id,
      quantity: parseInt(products.quantity) + parseInt(req.body.quantity)
    }
    try{
      const products = await ProductHelper.insertProductQuantity(product);
      return successResponse(res, ok, 'Quantity inserted', null, products);
    }
    catch(err){
      return errorResponse(res, badRequest, err.message);
    }
  }
  static searchAny = async (req, res) => {
    try {
      const { search } = req.query;
      const foundName = await ProductHelper.findByNameCategoryBrand(search);
      if (foundName.length == 0) {
        return errorResponse(res, badRequest, 'Product does not exist');
      } else {
        return successResponse(res, ok, productNameFound, null, foundName);
      }
    } catch (error) {
      console.log(error,'erroraaaaaa');
      return errorResponse(res, badRequest, error);
    }
  };
}
export default ProductController;
