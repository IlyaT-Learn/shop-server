'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            categoryId: 1,
            name: 'testedProd_1',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 1.1,
            numberOfPromo: 3
        }, {
            categoryId: 2,
            name: 'testedProd_2',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 2.2,
            numberOfPromo: 2
        }, {
            categoryId: 1,
            name: 'testedProd_3',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 3.3,
            numberOfPromo: 5
        }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Product', null, {});
    }
};
