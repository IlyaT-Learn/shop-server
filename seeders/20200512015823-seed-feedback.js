'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Feedbacks', [
            {
                authorId: 1,
                productId: 1,
                numberStars: 3,
                body: 'Body of feedback_1'
            }, {
                authorId: 2,
                productId: 2,
                numberStars: 4,
                body: 'Body of feedback_2'
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Feedback', null, {});
    }
};
