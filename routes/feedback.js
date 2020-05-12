const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allProductInOrder = await db.Feedback.findAll();

    return res.json({
        allProductInOrder
    })
});

router.post('/add', async ({body: {authorId, productId, numberStars}}, res) => {
    const newFeedback = await db.Feedback.create({
        authorId,
        productId,
        numberStars
    }).then(response => response);

    return res.json({
        newFeedback
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.Feedback.destroy({
        where: {
            id
        }
    });

    return res.json(numberOfDeleted);
});

module.exports = router;
