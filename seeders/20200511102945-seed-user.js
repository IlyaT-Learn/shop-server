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
            lastToken: '12345qwe'
        }, {
            firstName: 'user_2',
            lastName: 'user_2',
            login: 'user_2',
            password: 'user_2',
            email: 'testedUser_2@gmail.com',
            phone: '222-333-4444',
            lastToken: '23456qwe'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User', null, {});
    }
};
