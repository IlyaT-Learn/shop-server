'use strict';

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('Products', [{
            categoryId: 1,
            name: 'testedProd_1',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 1.1,
            numberOfPromo: 1
        }, {
            categoryId: 1,
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
            numberOfPromo: 3
        }, {
            categoryId: 1,
            name: 'testedProd_4',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 4.4,
            numberOfPromo: 2
        }, {
            categoryId: 1,
            name: 'testedProd_5',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 5.5,
            numberOfPromo: 2
        }, {
            categoryId: 2,
            name: 'testedProd_6',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 6.6,
            numberOfPromo: 2
        }, {
            categoryId: 2,
            name: 'testedProd_7',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 7.7,
            numberOfPromo: 2
        }, {
            categoryId: 2,
            name: 'testedProd_8',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 8.8,
            numberOfPromo: 2
        }, {
            categoryId: 2,
            name: 'testedProd_9',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 9.9,
            numberOfPromo: 2
        }, {
            categoryId: 2,
            name: 'testedProd_10',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 10.10,
            numberOfPromo: 2
        }, {
            categoryId: 3,
            name: 'testedProd_11',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 1.1,
            numberOfPromo: 1
        }, {
            categoryId: 3,
            name: 'testedProd_12',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 2.2,
            numberOfPromo: 2
        }, {
            categoryId: 3,
            name: 'testedProd_13',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 3.3,
            numberOfPromo: 3
        }, {
            categoryId: 3,
            name: 'testedProd_14',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 4.4,
            numberOfPromo: 2
        }, {
            categoryId: 3,
            name: 'testedProd_15',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 5.5,
            numberOfPromo: 2
        }, {
            categoryId: 4,
            name: 'testedProd_16',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 6.6,
            numberOfPromo: 2
        }, {
            categoryId: 4,
            name: 'testedProd_17',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 7.7,
            numberOfPromo: 2
        }, {
            categoryId: 4,
            name: 'testedProd_18',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 8.8,
            numberOfPromo: 2
        }, {
            categoryId: 4,
            name: 'testedProd_19',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 9.9,
            numberOfPromo: 2
        }, {
            categoryId: 4,
            name: 'testedProd_20',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 10.10,
            numberOfPromo: 2
        }, {
            categoryId: 5,
            name: 'testedProd_21',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 1.1,
            numberOfPromo: 1
        }, {
            categoryId: 5,
            name: 'testedProd_22',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 2.2,
            numberOfPromo: 2
        }, {
            categoryId: 5,
            name: 'testedProd_23',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 3.3,
            numberOfPromo: 3
        }, {
            categoryId: 5,
            name: 'testedProd_24',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 4.4,
            numberOfPromo: 2
        }, {
            categoryId: 5,
            name: 'testedProd_25',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 5.5,
            numberOfPromo: 2
        }, {
            categoryId: 6,
            name: 'testedProd_26',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 6.6,
            numberOfPromo: 2
        }, {
            categoryId: 6,
            name: 'testedProd_27',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 7.7,
            numberOfPromo: 2
        }, {
            categoryId: 6,
            name: 'testedProd_28',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 8.8,
            numberOfPromo: 2
        }, {
            categoryId: 6,
            name: 'testedProd_29',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 9.9,
            numberOfPromo: 2
        }, {
            categoryId: 6,
            name: 'testedProd_30',
            description: 'tested Description products',
            picture: 'lint to picture',
            price: 10.10,
            numberOfPromo: 2
        }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Product', null, {});
    }
};
