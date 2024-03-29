'use strict';
module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        lastToken: DataTypes.STRING,
        isAdmin: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    User.associate = function (models) {
        // associations can be defined here
    };

    return User;
};