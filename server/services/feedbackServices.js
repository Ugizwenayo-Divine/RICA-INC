import models from '../models';

const { Feedback } = models;

class FeedbackServices {
    static createFeedback = async (data) => {
        const {dataValues} = await Feedback.create({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            fields:[
                'createdBy',
                'feedback',
                'createdAt',
                'updatedAt'
            ]
        });
        return dataValues;
    }
    static getAllFeedbacks = async () => {
        const allFeedback = await Feedback.findAll();
        return allFeedback;
    }
    static deleteFeedback = async (id) => {
        const deletedFeedback = await Feedback.destroy(
            { where: { id: id } }
        );
        return deletedFeedback;
    }
    static async feedbackExists(attr, val) {
        const feedback = await Feedback.findOne({ where: { [attr]: val } });
        return feedback;
      }
}

export default FeedbackServices;