'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            idCategories: 0,
            name: 'testedProd_1',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 1.1,
            numberOfPromo: 1
        }, {
            idCategories: 0,
            name: 'testedProd_2',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 2.2,
            numberOfPromo: 2
        }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Product', null, {});
    }
};
