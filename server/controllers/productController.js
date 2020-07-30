import productHelper from '../services/productServices';
import picture from '../helpers/uploadImage';

/**
 * This class contains all methods
 * required to handle
 * products' request.
 */

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

        if (!image || image.includes('null')) {
          return res.status(415).json({
            status: 415,
            error: 'Please select the right type of image',
          });
        } else null;
        const { name, category, price, brand } = req.body;
        const datas = await productHelper.saveProduct({
          userId: id,
          name,
          category,
          price,
          image,
          brand,
        });
        return res.status(201).json({
          status: 201,
          message: 'Product Successfully Added',
          data: {
            name: datas.name,
            category: datas.category,
            price: datas.price,
            image: datas.image,
            brand: datas.brand,
            createdAt: datas.createdAt,
            updatedAt: datas.updatedAt,
          },
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
}
export default ProductController;
