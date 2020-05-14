'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProductInOrder = sequelize.define('ProductInOrder', {
        productId: DataTypes.INTEGER,
        orderId: DataTypes.INTEGER,
        number: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    ProductInOrder.associate = function (models) {
        // associations can be defined here
    };

    return ProductInOrder;
};