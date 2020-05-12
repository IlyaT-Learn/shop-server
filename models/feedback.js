'use strict';
module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
        authorId: DataTypes.STRING,
        productId: DataTypes.STRING,
        numberStars: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    Feedback.associate = function (models) {
        // associations can be defined here
    };
    return Feedback;
};