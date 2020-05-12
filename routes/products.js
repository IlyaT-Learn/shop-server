const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allProduct = await db.Product.findAll();

    return res.json({
        prod: allProduct
    })
});

router.post('/add', async ({body: {idCategories, name, description, picture, price, numberOfPromo}}, res) => {
    const newProduct = await db.Product.create({
        idCategories,
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

router.post('/change', async ({body: {id, idCategories, name, description, picture, price, numberOfPromo}}, res) => {
    const numberOfChanged = await db.Product.update({
        idCategories,
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
        newProduct: numberOfChanged
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.Product.destroy({
        where: {
            id
        }
    });

    return res.json(numberOfDeleted);
});

module.exports = router;
