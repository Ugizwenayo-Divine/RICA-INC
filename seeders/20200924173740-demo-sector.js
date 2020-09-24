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
   await queryInterface.bulkInsert ('Sectors',[
    {
      districtId:1,
      sector: 'Bumbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Gatsata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Gikomero',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Gisozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Jabana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Jali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Kacyiru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Kimihurura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Kimironko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Kinyinya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Ndera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Nduba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Rusororo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:1,
      sector: 'Rutunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Gahanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Gatenga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Gikondo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Kagarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Kanombe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Kicukiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Kigarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Masaka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Niboye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:2,
      sector: 'Nyarugunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Gitega',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Kanyinya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Kigali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Kimisagara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Mageragere',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Muhima',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Nyakabanda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Nyamirambo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Nyarugenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:3,
      sector: 'Rwezamenyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Bwishyura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Gishari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Gishyita',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Gitesi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Mubuga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Murambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Murundi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Mutuntu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Rubengera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Rugabano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Ruganda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Rwankuba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:4,
      sector: 'Twumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Bwira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Gatumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Hindiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Kabaya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Kageyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Kavumu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Matyazo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Muhanda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Muhororo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Ndaro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Ngororero',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Nyange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:5,
      sector: 'Sovu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Bigogwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Jenda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Jomba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Kabatwa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Karago',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Kintobo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Mukamira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Muringa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Rambura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Rugera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Rurembo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:6,
      sector: 'Shirya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Bushekeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Bushenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Cyato',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Gihombo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Kagano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Kanjongo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Karambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Karengera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Kirimbi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Macuba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Mahembe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Nyabitekeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Rangiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Ruharambuga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:7,
      sector: 'Shangi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Bugeshi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Busasamana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Cyanzarwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Gisenyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Kanama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Kanzenze',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Mudende',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Nyakiriba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Nyamyumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Nyundo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Rubavu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:8,
      sector: 'Rugero',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Bugarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Butare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Bweyeye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Gashonga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Giheke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Gihundwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Gikundamvura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Gitambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Kamembe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Muganza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Mururu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Nkanka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Nkombo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Nkungu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Nyakabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Nyakarenzo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Nzahaha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:9,
      sector: 'Rwimbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Boneza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Gihango',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Kigeyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Kivumu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Manihira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Mukura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Murunda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Musasa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Mushonyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Mushubati',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Nyabirasi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Ruhango',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:10,
      sector: 'Rusebeya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Gashora',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Juru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Kamabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Mareba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Mayange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Musenyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Mwogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Ngeruka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Ntarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Nyamata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Nyarugenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Rilima',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Ruhuha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Rweru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:11,
      sector: 'Shyara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Gasange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Gatsibo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Gitoki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Kabarore',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Kageyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Kiramuruzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Kiziguro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Muhura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Murambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Ngarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Nyagihanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Rugarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:12,
      sector: 'Rwimbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Gahini',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Kabare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Kabarondo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Mukarange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Murama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Murundi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Mwiri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Ndego',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Nyamirama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Rukara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Ruramira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:13,
      sector: 'Rwinkwavu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Gahara',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Gatore',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Kigarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Kigina',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Kirehe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Mahama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Mpanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Musaza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Mushikiri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Nasho',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Nyamugari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:14,
      sector: 'Nyarubuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Gashanda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Jarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Karembo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Kazo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Kibungo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Mugesera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Murama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Mutenderi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Rukira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Rukumberi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Rurenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Sake',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:15,
      sector: 'Zaza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Gatunda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Karama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Karangazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Katabagemu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Kiyombe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Matimba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Mimuri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Mukama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Musheri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Nyagatare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Rukomo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Rwempasha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Rwimiyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:16,
      sector: 'Tabagwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Fumbwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Gahengeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Gishali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Karenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Kigabiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Muhazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Munyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Munyiginya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Musha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Muyumbu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Mwulire',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Nyakariro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Nzige',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:17,
      sector: 'Rubona',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Bungwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Butaro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Cyanika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Cyeru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Gahunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Gatebe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Gitovu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Kagogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Kinoni',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Kinyababa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Kivuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Nemba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Rugarama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Rugengabari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Ruhunde',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Rusarabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:18,
      sector: 'Rwerere',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Busengo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Coko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Cyabingo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Gakenke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Gashenyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Janja',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Kamubuga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Karambo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Kivuruga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Mataba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Minazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Mugunga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Muhondo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Muyongwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Muzo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Nemba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Ruli',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Rusasa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:19,
      sector: 'Rushashi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Bukure',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Bwisige',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Byumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Cyumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Giti',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Kageyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Kaniga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Manyagiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Miyove',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Mukarange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Muko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Mutete',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Nyamiyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Nyankenke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Rubaya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Rukomo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Rushaki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Rutare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Ruvune',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Rwamiko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:20,
      sector: 'Shangasha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Busogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Cyuve',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Gacaca',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Gashaki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Gataraga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Kimonyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Kinigi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Muhoza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Muko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Musanze',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Nkotsi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Nyange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Remera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Rwaza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:21,
      sector: 'Shingiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Base',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Burega',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Bushoki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Buyoga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Cyinzuzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Cyungo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Kinihira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Kisaro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Masoro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Mbogo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Murambi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Ngoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Ntarabana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Rukozo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Rusiga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Shyorongi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:22,
      sector: 'Tumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Gikonko',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Gishubi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Kansi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Kibirizi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Kigembe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Mamba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Muganza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Mugombwa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Mukingo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Musha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Ndora',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Nyanza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:23,
      sector: 'Save',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Gishamvu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Huye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Karama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Kigoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Kinazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Maraba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Mbazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Mukura',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Ngoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Ruhashya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Rusatira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Rwaniro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Simbi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:24,
      sector: 'Tumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Gacurabwenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Karama',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Kayenzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Kayumbu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Mugina',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Musambira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Ngamba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Nyamiyaga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Nyarubaka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Rugarika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Rukoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:25,
      sector: 'Runda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Cyeza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Kabacuzi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Kibangu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Kiyumba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Muhanga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Mushishiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Nyabinoni',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Nyamabuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Nyarusange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Rongi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Rugendabari',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:26,
      sector: 'Shyogwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Buruhukiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Cyanika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Gasaka',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Gatare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Kaduha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Kamegeri',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Kibirizi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Kibumbwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Kitabi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Mbazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Mugano',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Musange',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Musebeya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Mushubi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Nkomane',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Tare',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:27,
      sector: 'Uwinkingi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Busasamana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Busoro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Cyabakamyi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Kibirizi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Kigoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Mukingo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Muyira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Ntyazo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Nyagisozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:28,
      sector: 'Rwabicuma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Busanze',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Cyahinda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Kibeho',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Kivu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Mata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Muganza',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Munini',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Ngera',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Ngoma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Nyabimata',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Nyagisozi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Ruheru',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Ruramba',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:29,
      sector: 'Rusenge',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Bweramana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Byimana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Kabagali',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Kinazi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Kinihira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Mbuye',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Mwendo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Ntongwe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      districtId:30,
      sector: 'Ruhango',
      createdAt: new Date(),
      updatedAt: new Date()
    }
       ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Sectors', null, {});
  }
};
