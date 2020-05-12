'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Orders', [
            {userId: 1},
            {userId: 2},
            {userId: 3},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Order', null, {});
    }
};
