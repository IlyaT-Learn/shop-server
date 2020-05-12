'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Feedbacks', [
            {
                authorId: 1,
                productId: 2,
                numberStars: 3
            }, {
                authorId: 4,
                productId: 5,
                numberStars: 1
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Feedback', null, {});
    }
};
