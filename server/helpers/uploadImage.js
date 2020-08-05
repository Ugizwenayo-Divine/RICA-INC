import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});
const extensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'PNG', 'JPG'];
class ImageUploader {
  static async uploadImage(image) {
    const imgExt = image.name.split('.').pop();
    if (extensions.includes(imgExt)) {
      const result = await cloudinary.uploader.upload(image.path);
      return result;
    }
    return null;
  }

  static async uploader(image) {
    let uploaded;
    let combinedLinks = '';
    if (!image.length) {
      uploaded = await this.uploadImage(image);
      return uploaded;
    }
    if (image.length) {
      const arr = image;
      for (let i = 0; i < arr.length; i += 1) {
        uploaded = await this.uploadImage(arr[i]);
        combinedLinks += `${uploaded.url}, `;
      }
      return combinedLinks;
    }
  }
  static async deleteTheImage(cloudinaryId) {
    const result = cloudinary.uploader.destroy(cloudinaryId);
    return result;
  }
}
export default ImageUploader;
