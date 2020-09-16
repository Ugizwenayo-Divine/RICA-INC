import Sequelize from 'sequelize';
import models from '../models';

const { Product } = models;
const Op = Sequelize.Op;

class ProductHelper {
  static async saveProduct(product) {
    const acceptedProduct = await Product.create(
      {
        ...product,
        type: 'normal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: ['userId', 'name', 'category', 'price', 'quantity', 'image', 'brand', 'description', 'due_time', 'type', 'cloudinaryId', 'createdAt', 'updatedAt'],
      }
    );

    return acceptedProduct;
  }
  static getAllProducts = async () => {
    const allProducts = await Product.findAll();
    return allProducts;
  };
  static getProduct = async (id) => {
    const allProducts = await Product.findOne({ where: { id: id } });
    return allProducts;
  };
  static deleteProduct = async (id) => {
    const deletedProduct = await Product.destroy({ where: { id: id } });
    return deletedProduct;
  };
  static updateProduct = async (newData) => {
    const updatedProduct = await Product.update(
      {
        name: newData.name,
        category: newData.category,
        price: newData.price,
        quantity: newData.quantity,
        image: newData.image,
        brand: newData.brand,
        description: newData.description,
        cloudinaryId: newData.cloudinaryId,
      },
      { where: { id: newData.id } }
    );
    return updatedProduct;
  };
  static async productExists(attr, val) {
    const product = await Product.findOne({ where: { [attr]: val } });
    return product;
  }
  static searchByName = async (name) => {
    const allProducts = await Product.findAll({ where: { name: name } });
    return allProducts;
  };
  static searchByCategory = async (category) => {
    const allProducts = await Product.findAll({ where: { category: category } });
    return allProducts;
  };
  static addRemoveToBestProducts = async (product) => {
    const updatedProduct = await Product.update(
      { 
        type: product.type,
      }, 
      { where: { id: product.id } }
    );
    return updatedProduct;
  }
  static getAllBestProducts = async (type) => {
    const allProducts = await Product.findAll({ where: { type: type } });
    return allProducts;
  };
  static getAllAvailableProducts = async () => {
    const allProducts = await Product.findAll({ where: { quantity: {[Op.ne]:0} } });
    return allProducts;
  };
  static insertProductQuantity = async (product) => {
    const updatedProduct = await Product.update(
      { 
        quantity: product.quantity,
      }, 
      { where: { id: product.id } }
    );
    return updatedProduct;
  }
  static findByNameCategoryBrand = async (value) => {
    let product = await Product.findAll({
      where: { 
        [Op.or]:[{name: {[Op.iLike]:`%${value}%`} },{category:{[Op.iLike]:`%${value}%`}},{brand:{[Op.iLike]:`%${value}%`}}],
      }
    });
    return product;
  };
}

export default ProductHelper;
