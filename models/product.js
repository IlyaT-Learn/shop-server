'use strict';
module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
        categoryId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        picture: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        numberOfPromo: DataTypes.INTEGER,
        rating: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    Product.associate = function (models) {
        // associations can be defined here
    };

    return Product;
};