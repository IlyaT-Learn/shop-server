'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        idCategories: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        picture: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        numberOfPromo: DataTypes.INTEGER
    }, {
        timestamps: false
    });
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};