import models from '../models';

const { Bonus } = models;

class BonusServices {
    static createBonus = async (data) => {
        const {dataValues} = await Bonus.create({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            fields:[
                'name',
                'createdAt',
                'updatedAt'
            ]
        });
        return dataValues;
    }
    static getAllBonus = async () => {
        const allBonus = await Bonus.findAll();
        return allBonus;
    }
    static deleteBonus = async (id) => {
        const deletedBonus = await Bonus.destroy(
            { where: { id: id } }
        );
        return deletedBonus;
    }
    static async bonusExists(attr, val) {
        const bonus = await Bonus.findOne({ where: { [attr]: val } });
        return bonus;
    }
}

export default BonusServices;