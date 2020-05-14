const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allProductInOrder = await db.ProductInOrder.findAll();

    return res.json({
        allProductInOrder
    })
});

router.post('/add', async ({body: {productId, orderId, number}}, res) => {
    const newProductInOrder = await db.ProductInOrder.create({
        productId,
        orderId,
        number
    }).then(response => response);

    return res.json({
        newProductInOrder
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.ProductInOrder.destroy({
        where: {
            id
        }
    });

    return res.json({
        numberOfDeleted
    });
});

module.exports = router;
