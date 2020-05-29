'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [
            {name: 'Молочные'},
            {name: 'Хлебобулочные'},
            {name: 'Сладости'},
            {name: 'Газировки'},
            {name: 'Мясо'},
            {name: 'Крупы'}
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};
