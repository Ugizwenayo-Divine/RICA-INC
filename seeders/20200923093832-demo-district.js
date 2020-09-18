'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Districts', [
      {
        price:0,
        district: 'Gasabo',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:0,
        district: 'Kicukiro',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
      {
        price:0,
       district: 'Nyarugenge',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        price:500,
        district: 'Karongi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price:700,
       district: 'Ngororero',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        price:2000,
       district: 'Nyabihu',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        price:2500,
       district: 'Nyamasheke',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        price:2000,
        district: 'Rubavu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price:2500,
        district: 'Rusizi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price:1400,
       district: 'Rutsiro',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       price:330,
       district: 'Bugesera',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       price:1500,
       district: 'Gatsibo',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       price:400,
       district: 'Kayonza',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       price:650,
       district: 'Kirehe',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       price:700,
       district: 'Ngoma',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       price:300,
       district: 'Nyagatare',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       price:500,
       district: 'Rwamagana',
       createdAt: new Date(),
       updatedAt: new Date()
      },
       {
        price:700,
        district: 'Burera',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:1200,
        district: 'Gakenke',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        price:1000,
        district: 'Gicumbi',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Musanze',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:1000,
        district: 'Rulindo',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Gisagara',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Huye',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Kamonyi',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Muhanga',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:1000,
        district: 'Nyamagabe',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Nyanza',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Nyaruguru',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        price:500,
        district: 'Ruhango',
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Districts', null, {});

  }
};
