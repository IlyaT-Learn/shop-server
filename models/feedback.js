'use strict';
module.exports = (sequelize, DataTypes) => {

    const Feedback = sequelize.define('Feedback', {
        authorId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        numberStars: DataTypes.INTEGER,
        body: DataTypes.STRING
    }, {
        timestamps: false
    });

    Feedback.associate = function (models) {
        // associations can be defined here
    };

    return Feedback;
};