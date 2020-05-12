'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProductInCart = sequelize.define('ProductInCart', {
        productId: DataTypes.STRING,
        userId: DataTypes.STRING,
        number: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    ProductInCart.associate = function (models) {
        // associations can be defined here
    };
    return ProductInCart;
};