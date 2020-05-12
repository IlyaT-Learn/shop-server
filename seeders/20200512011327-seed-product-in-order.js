'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ProductInOrders', [{
            productId: 1,
            orderId: 1,
            number: 1
        }, {
            productId: 2,
            orderId: 2,
            number: 2
        }, {
            productId: 3,
            orderId: 3,
            number: 3
        },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ProductInOrder', null, {});
    }
};
