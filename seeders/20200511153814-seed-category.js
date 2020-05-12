'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [
            {name: 'Auto'},
            {name: 'Moto'},
            {name: 'Velo'},
            {name: 'Mopedo'}
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};
