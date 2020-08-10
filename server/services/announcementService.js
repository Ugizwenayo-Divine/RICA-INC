import models from '../models';

const { Announcement } = models;

class AnnouncementService {
  static async saveAnnouncement(announcement) {
    const acceptedAnnouncement = await Announcement.create(
      {
        ...announcement,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: ['announcedBy', 'title', 'announcement'],
      }
    );

    return acceptedAnnouncement;
  }
  static getAllAnnouncement = async () => {
    const allAnnouncements = await Announcement.findAll();
    return allAnnouncements;
  };
  static getAnnouncement = async (id) => {
    const allAnnouncements = await Announcement.findOne({ where: { id: id } });
    return allAnnouncements;
  };
  static deleteAnnouncement = async (id) => {
    const deletedAnnouncement = await Announcement.destroy({ where: { id: id } });
    return deletedAnnouncement;
  };
  static updateAnnouncement = async (newData) => {
    const updatedAnnouncement = await Announcement.update(
      {
        title: newData.title,
        announcement: newData.announcement,
      },
      { where: { id: newData.id } }
    );
    return updatedAnnouncement;
  };
  static async AnnouncementExists(attr, val) {
    const announcement = await Announcement.findOne({ where: { [attr]: val } });
    return announcement;
  }
}

export default AnnouncementService;
