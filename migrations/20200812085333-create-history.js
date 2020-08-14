'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderedBy: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.FLOAT
      },
      currency: {
        type: Sequelize.STRING
      },
      ordered_quantity: {
        type: Sequelize.INTEGER
      },
      payment_options: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending','payed','delivered','canceled']
      },      
      due_time: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Histories');
  }
};