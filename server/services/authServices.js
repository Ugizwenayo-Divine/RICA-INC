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
          'email',
          'password',
          'gender',
          'phoneNumber',
          'type',
          'createdAt',
          'updatedAt',
        ]
      }
    );
    return dataValues;
  }
  static updateType = async (newData) => {
    const updateType = await User.update(
      { type: newData.type }, 
      { where: { email: newData.email } }
    );
    return updateType;
  }

  static deleteUser = async (newData) => {
    const deletedUser = await User.destroy(
      { where: { id: newData.id } }
    );
    return deletedUser;
  }

  static findAllUsers = async () => {
    const allUsers = await User.findAll();
    return allUsers;
  }

}
export default UserServices;