'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ProductInCarts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productId: {
                type: Sequelize.STRING
            },
            userId: {
                type: Sequelize.STRING
            },
            number: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ProductInCarts');
    }
};