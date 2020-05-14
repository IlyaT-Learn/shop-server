const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allProduct = await db.Product.findAll();

    return res.json({
        allProduct
    })
});

router.post('/add', async ({body: {categoryId, name, description, picture, price, numberOfPromo}}, res) => {
    const newProduct = await db.Product.create({
        categoryId,
        name,
        description,
        picture,
        price,
        numberOfPromo
    }).then(response => response);

    return res.json({
        newProduct,
        message: 'Product successfully added'
    })
});

router.post('/change', async ({body: {id, categoryId, name, description, picture, price, numberOfPromo}}, res) => {
    const accessOfChanged = await db.Product.update({
        categoryId,
        name,
        description,
        picture,
        price,
        numberOfPromo
    }, {
        where: {
            id
        }
    }).then(response => response);

    return res.json({
        accessOfChanged
    })
});

router.post('/productRating', async ({body: {productId}}, res) => {
    const allReviewsOfProduct = await db.Feedback.findAll({
        where: {
            productId
        }
    });
    const result = allReviewsOfProduct.reduce((sum, current) => sum + current.numberStars, 0);

    return res.json(result / allReviewsOfProduct.length);
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.Product.destroy({
        where: {
            id
        }
    });

    return res.json({
        numberOfDeleted
    });
});

module.exports = router;
