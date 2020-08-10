import AnnouncementServices from '../services/announcementService';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
const { getAnnouncement, AnnouncementExists } = AnnouncementServices;
const { errorResponse } = responseHandler;
const { noannouncements, announcementExist } = responseMessage;
const { badRequest } = statusCode;

const doesAnnouncementExist = async (req, res, next) => {
  let announcement;
  if (req.params.id) {
    const { id } = req.params;
    announcement = await getAnnouncement(id);
  } else {
    announcement = await AnnouncementExists('title', req.body.title);
  }
  if (announcement) {
    req.announcements = announcement.dataValues;
    return next();
  }
  return errorResponse(res, badRequest, noannouncements);
};
const doesAnnouncementNameExist = async (req, res, next) => {
  let announced;
  const { title } = req.body;
  announced = await AnnouncementExists('title', title);
  if (announced) {
    return errorResponse(res, badRequest, announcementExist);
  }
  return next();
};

export default { doesAnnouncementExist, doesAnnouncementNameExist };
