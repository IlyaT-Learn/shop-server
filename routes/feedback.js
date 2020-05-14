const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allProductInOrder = await db.Feedback.findAll();

    return res.json({
        allProductInOrder
    })
});

router.post('/productReviews', async ({body: {productId}}, res) => {
    const allReviewsOfProduct = await db.Feedback.findAll({
        where: {
            productId
        }
    });

    return res.json({
        allReviewsOfProduct
    })
});

router.post('/add', async ({body: {authorId, authorSign, productId, numberStars}}, res) => {
    const newFeedback = await db.Feedback.create({
        authorId,
        authorSign,
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

    return res.json({
        numberOfDeleted
    });
});

module.exports = router;
