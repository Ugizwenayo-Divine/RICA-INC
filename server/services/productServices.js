import models from '../models';

const { Product } = models;

class ProductHelper {
  static async saveProduct(product) {
    const acceptedProduct = await Product.create(
      {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: ['userId', 'name', 'category', 'price', 'image', 'brand', 'status', 'cloudinaryId'],
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
        image: newData.image,
        brand: newData.brand,
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
}

export default ProductHelper;
