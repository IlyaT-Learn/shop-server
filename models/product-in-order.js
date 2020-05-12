'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProductInCart = sequelize.define('ProductInOrder', {
        productId: DataTypes.STRING,
        orderId: DataTypes.STRING,
        number: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    ProductInCart.associate = function (models) {
        // associations can be defined here
    };
    return ProductInCart;
};