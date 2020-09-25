import models from '../models';

const { District,Sector,Neighbourhood } = models;

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
  static getAllSectors = async () => {
    const allLocation = await Sector.findAll();
    return allLocation;
  }
  static getDistrictSectorS = async (id) => {
    const allLocation = await Sector.findAll({ where: { districtId:id } });
    return allLocation;
  }
}
export default LocationServices;