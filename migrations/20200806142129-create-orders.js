'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderedBy: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      product: {
        type: Sequelize.STRING
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
      deliveredDistrict: {
        type: Sequelize.STRING
      },
      deliveredLocation: {
        type: Sequelize.STRING
      },
      bonus: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ['pending','payed','delivered','canceled','discounted']
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
    await queryInterface.dropTable('Orders');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Orders_status";');
  }
};