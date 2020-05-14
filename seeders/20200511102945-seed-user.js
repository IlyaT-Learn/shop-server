'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            firstName: 'user_1',
            lastName: 'user_1',
            login: 'user_1',
            password: 'user_1',
            email: 'testedUser_1@gmail.com',
            phone: '111-222-3333',
            lastToken: undefined,
            isAdmin: 0
        }, {
            firstName: 'user_2',
            lastName: 'user_2',
            login: 'user_2',
            password: 'user_2',
            email: 'testedUser_2@gmail.com',
            phone: '222-333-4444',
            lastToken: undefined,
            isAdmin: 0
        }, {
            firstName: 'user_3',
            lastName: 'user_3',
            login: 'user_3',
            password: 'user_3',
            email: 'testedUser_3@gmail.com',
            phone: '333-444-5555',
            lastToken: undefined,
            isAdmin: 0
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User', null, {});
    }
};
