import models from '../models';

const {
  User
} = models;

class UserServices {

  static async userExists(attr, val) {
    const user = await User.findOne({ where: { [attr]: val } });
    return user;
  }

  static saveUser = async (data) => {
    const { dataValues } = await User.create(
      {
        ...data, type:'client',createdAt: new Date(), updatedAt: new Date()
      },
      {
        fields: [
            'firstName',
            'lastName',
            'userName',
            'email',
            'password',
            'gender',
            'phoneNumber',
            'type',
            'createAt',
            'updatedAt',
        ]
      }
    );
    return dataValues;
  }
}
export default UserServices;