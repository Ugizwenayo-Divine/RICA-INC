import { validateNews, displayErrorMessages } from '../helpers/validation';
import news from '../models/news';

const createNewsValidation = async (req, res, next) => {
  const { error } = validateNews(req.body);
  displayErrorMessages(error, res, next);
};
const updateNewsValidation = async (req, res, next) => {
  const {news} =req;
  let keys = Object.keys(req.body);
  let title = keys.find(key=> key == 'title');
  let description = keys.find(key=> key == 'description');
  const data = {
    title: title ? req.body.title : news.title,
    description: description ? req.body.description : news.description,
  }
  const { error } = validateNews(data);
  displayErrorMessages(error, res, next);
}


export default { createNewsValidation, updateNewsValidation };
