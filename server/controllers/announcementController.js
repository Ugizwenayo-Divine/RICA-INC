import AnnouncementServices from '../services/announcementService';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';

const { errorResponse, successResponse } = responseHandler;
const { error, allAnnouncements, announcements, deleted } = responseMessage;
const { badRequest, ok } = statusCode;

class AnnouncementController {
  static async addAnnouncement(req, res) {
    const { sessionUser } = req;
    const { id } = sessionUser;
    try {
      const { title, announcement } = req.body;
      const datas = await AnnouncementServices.saveAnnouncement({
        announcedBy: id,
        title,
        announcement,
      });
      return res.status(201).json({
        status: 201,
        message: 'Announcement Successfully Added',
        data: {
          title: datas.title,
          announcement: datas.announcement,
          createdAt: datas.createdAt,
          updatedAt: datas.updatedAt,
        },
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
      const announcements = await AnnouncementServices.getAllAnnouncement();
      return successResponse(res, ok, allAnnouncements, null, announcements);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getOneAnnouncement = async (req, res) => {
    try {
      const { id } = req.params;
      const oneAnnouncement = await AnnouncementServices.getAnnouncement(id);
      return successResponse(res, ok, announcements, null, oneAnnouncement);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      await AnnouncementServices.deleteAnnouncement(id);
      return successResponse(res, ok, deleted, null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
  static AnnouncementUpdation = async (req, res) => {
    try {
      const { id } = req.params;
      const { announcements } = req;
      const newData = {
        id,
        title: req.body.title || announcements.title,
        announcement: req.body.announcement || announcements.announcement,
      };
      await AnnouncementServices.updateAnnouncement(newData);
      return successResponse(res, ok, 'updated', null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
}
export default AnnouncementController;
