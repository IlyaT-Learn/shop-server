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
            categoryId: 1,
            name: 'testedProd_2',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 2.2,
            numberOfPromo: 2
        }, {
            categoryId: 2,
            name: 'testedProd_3',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 3.3,
            numberOfPromo: 5
        }, {
            categoryId: 2,
            name: 'testedProd_4',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 4.4,
            numberOfPromo: 2
        }, {
            categoryId: 3,
            name: 'testedProd_5',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 5.5,
            numberOfPromo: 2
        }, {
            categoryId: 3,
            name: 'testedProd_6',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 6.6,
            numberOfPromo: 2
        }, {
            categoryId: 4,
            name: 'testedProd_7',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 7.7,
            numberOfPromo: 2
        }, {
            categoryId: 4,
            name: 'testedProd_8',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 8.8,
            numberOfPromo: 2
        }, {
            categoryId: 5,
            name: 'testedProd_9',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 9.9,
            numberOfPromo: 2
        }, {
            categoryId: 5,
            name: 'testedProd_10',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 10.10,
            numberOfPromo: 2
        }, {
            categoryId: 6,
            name: 'testedProd_11',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 11.11,
            numberOfPromo: 2
        }, {
            categoryId: 6,
            name: 'testedProd_12',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 12.12,
            numberOfPromo: 2
        }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Product', null, {});
    }
};
