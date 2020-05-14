const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allOrders = await db.Order.findAll();

    return res.json(allOrders)
});

router.post('/add', async ({body: {userId}}, res) => {
    const newOrder = await db.Order.create({userId}).then(response => response);

    return res.json({
        newOrder
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.Order.destroy({
        where: {
            id
        }
    });

    return res.json(numberOfDeleted);
});

router.post('/getOrder', async ({body: {id}}, res) => {
    const order = await db.ProductInOrder.findAll({
        where: {
            orderId: id
        }
    });

    return res.json({
        order
    });
});

module.exports = router;
