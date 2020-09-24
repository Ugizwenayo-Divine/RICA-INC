import models from '../models';

const { District } = models;

class LocationServices {

  static getAllDistricts = async () => {
    const allLocation = await District.findAll();
    return allLocation;
  }
  static updateDistrict = async (newData) => {
    const updated = await District.update(
      {
        price: newData.price,
      },
      { where: { district: newData.district } }
    );
    return updated;
  };
}
export default LocationServices;