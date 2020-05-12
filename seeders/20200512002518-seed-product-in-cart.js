'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ProductInCarts', [{
            productId: 1,
            userId: 1,
            number: 1
        }, {
            productId: 2,
            userId: 2,
            number: 2
        }, {
            productId: 3,
            userId: 3,
            number: 3
        }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ProductInCart', null, {});
    }
};
