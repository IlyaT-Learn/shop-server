'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [
            {name: 'Auto'},
            {name: 'Morocco'},
            {name: 'Bike'},
            {name: 'Mopeds'}
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};
