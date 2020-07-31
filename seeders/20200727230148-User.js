import authHelpers from '../server/helpers/authHelper';

const dummy1 = {
  firstName: 'Manzi',
  lastName: 'Guevara',
  email: 'manzi@gmail.com',
  gender: 'male',
  password: 'Manzi@2020',
  type: 'admin',
  phoneNumber: '0788547962',
  createdAt: new Date(),
  updatedAt: new Date(),
};
const up = (queryInterface) => queryInterface.bulkInsert('Users', [dummy1]);
const down = (queryInterface) => queryInterface.bulkDelete('Users', null, {});
export { up, down };
