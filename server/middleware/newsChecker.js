import NewsServices from '../services/newsService';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
const {
  getNews,
  newsExists,
} = NewsServices;
const {
  errorResponse,
} = responseHandler;
const {
  noNews,
  newsExist,
} = responseMessage;
const {
  badRequest,
} = statusCode;

const doesNewsExist = async (req,res,next) => {
  let news;
  if (req.params.id){
    const {id} = req.params;
    news = await getNews(id);
  }
  else{
    news = await newsExists('title', req.body.title);
  }
  if(news){
    req.news=news.dataValues;
    return next();
  }
  return errorResponse(res,badRequest,noNews);
}
const doesNewsTitleExist = async (req,res,next) => {
  let news;
  const {title} = req.body;
  news = await newsExists('title', title);
  if(news){
    return errorResponse(res,badRequest,newsExist);
  }
  return next();
}

export default { doesNewsExist, doesNewsTitleExist }