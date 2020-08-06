import NewsServices from '../services/newsService';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import uploadTheImage from '../helpers/uploadImage';

const {
  createNews,
  getAllNews,
  getNews,
  deleteNews,
  updateNews,
} = NewsServices;
const {
  errorResponse,
  successResponse,
} = responseHandler;
const {
  error,
  successCreation,
  wrongType,
  selectImage,
  allNews,
  news,
  deleted,
} = responseMessage;
const {
  badRequest,
  created,
  unAuthorized,
  unSupportedMedia,
  ok,
} = statusCode;

class NewsController {
  static addNews = async (req,res) => {
    const {sessionUser} = req;
    const {id} = sessionUser;
    const { title, description } = req.body;

    try{
      if (req.files && req.files.image) {
        let image;
        if (req.files.image.type || req.files.image.length) {
          image = await uploadTheImage.uploader(req.files.image);
        } else {
          return errorResponse(res, badRequest, selectImage);
        }

        if (!image.url || image.url.includes('null')) {
          return errorResponse(res, unSupportedMedia, wrongType);
        } else null;
        const data = {
          userId:id,
          title,
          description,
          image:image.url,
          cloudinaryId:image.public_id,
        }
        const result = await createNews(data);
        return successResponse(res,created,successCreation,null,result);
      }
      return errorResponse(res, unAuthorized, selectImage);

    }
    catch(err){
        return errorResponse(res,badRequest,error);
    }
  }
  static getAll = async (req, res) => {
    try{
      const news = await getAllNews();
      return successResponse(res, ok, allNews, null, news);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOneNews = async (req, res) => {
    try{
      const {id} = req.params;
      const oneNews = await getNews(id);
      return successResponse(res, ok, news, null, oneNews);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static deleteOneNews = async (req, res) => {
    try{
      const {id} = req.params;
      const {news} = req;
      await uploadTheImage.deleteTheImage(news.cloudinaryId);
      await deleteNews(id);
      return successResponse(res, ok, deleted, null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static newsUpdation = async (req, res) => {
    let image;
    try{
      const {id} = req.params;
      let imageUrl=null,imageId=null;
      const {news} = req;
      
      if (req.files && req.files.image){

        await uploadTheImage.deleteTheImage(news.cloudinaryId);
        image = await uploadTheImage.uploader(req.files.image);
        if (!image || image.url.includes('null')) {
          return errorResponse(res, unSupportedMedia, wrongType);
        }
        const {url, public_id} = image;
        imageUrl = url;
        imageId = public_id;
      }
      const newData = {
        id,
        title: req.body.title || news.title,
        description: req.body.description || news.description,
        image: imageUrl || news.image,
        cloudinaryId: imageId || news.cloudinaryId,
      }
      await updateNews(newData);
      return successResponse(res, ok, 'updated', null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
}

export default NewsController;