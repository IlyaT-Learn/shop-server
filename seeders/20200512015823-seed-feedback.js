'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Feedbacks', [
            {
                authorId: 1,
                authorSign: 'Вася',
                productId: 1,
                numberStars: 3,
                body: 'Body of feedback_1'
            }, {
                authorId: 2,
                authorSign: 'Петя',
                productId: 2,
                numberStars: 4,
                body: 'Body of feedback_2'
            }, {
                authorId: 2,
                authorSign: 'Галя',
                productId: 2,
                numberStars: 4,
                body: 'Body of feedback_3'
            }, {
                authorId: 2,
                authorSign: 'Саша',
                productId: 2,
                numberStars: 4,
                body: 'Body of feedback_4'
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Feedback', null, {});
    }
};
