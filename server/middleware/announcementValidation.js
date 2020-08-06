import { validateAnnouncement, displayErrorMessages } from '../helpers/validation';

const createAnnouncementValidation = async (req, res, next) => {
  const { error } = validateAnnouncement(req.body);
  displayErrorMessages(error, res, next);
};
const updateAnnouncementValidation = async (req, res, next) => {
  const { announcements } = req;
  let keys = Object.keys(req.body);
  let title = keys.find((key) => key == 'title');
  let announcement = keys.find((key) => key == 'announcement');
  const data = {
    title: title ? req.body.title : announcements.title,
    announcement: announcement ? req.body.announcement : announcements.announcement,
  };
  const { error } = validateAnnouncement(data);
  displayErrorMessages(error, res, next);
};

export default {
  createAnnouncementValidation,
  updateAnnouncementValidation,
};
