import models from '../models';

const { Product } = models;

/**
 * This class contains
 * all methods required to save/edit/retrieve/delete
 * the Product data
 */

class ProductHelper {
  /**
   * Saves a Product in the DB.
   * @param {object} product The request sent by a user.
   * @returns {object} Product data.
   */
  static async saveProduct(product) {
    const acceptedProduct = await Product.create(
      {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: ['userId', 'name', 'category', 'price', 'image', 'brand'],
      }
    );

    return acceptedProduct;
  }
}
export default ProductHelper;
