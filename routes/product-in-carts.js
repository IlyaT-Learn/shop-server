const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allProductInCart = await db.ProductInCart.findAll();

    return res.json({
        allProductInCart
    })
});

router.post('/add', async ({body: {productId, userId, number}}, res) => {
    const existingProduct = await db.ProductInCart.findAll({
        where: {
            userId,
            productId
        }
    }).then(response => response);

    if (existingProduct.length) {
        await db.ProductInCart.update({
            number: existingProduct[0].number + +number
        }, {
            where: {
                userId,
                productId
            }
        }).then(response => response);

        return res.json('update');
    }

    await db.ProductInCart.create({
        productId,
        userId,
        number
    }).then(response => response);

    return res.json('create');
});

router.post('/changeNumber', async ({body: {id, number}}, res) => {
    const accessOfChanged = await db.ProductInCart.update({
        number
    }, {
        where: {
            id
        }
    }).then(response => response);

    return res.json({
        accessOfChanged
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.ProductInCart.destroy({
        where: {
            id
        }
    });

    return res.json({
        numberOfDeleted
    });
});

router.post('/deleteAll', async ({body: {userId}}, res) => {
    const numberOfDeleted = await db.ProductInCart.destroy({
        where: {
            userId
        }
    });

    return res.json({
        numberOfDeleted
    });
});

router.post('/userCart', async ({body: {userId}}, res) => {
    const cartCurrentUser = await db.ProductInCart.findAll({
        where: {
            userId
        }
    });

    return res.json({
        cartCurrentUser
    });
});

module.exports = router;
