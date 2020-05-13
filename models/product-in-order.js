'use strict';
module.exports = (sequelize, DataTypes) => {

    const ProductInCart = sequelize.define('ProductInOrder', {
        productId: DataTypes.INTEGER,
        orderId: DataTypes.INTEGER,
        number: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    ProductInCart.associate = function (models) {
        // associations can be defined here
    };

    return ProductInCart;
};