const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allUsers = await db.User.findAll();

    return res.json({
        allUsers
    })
});

router.post('/getUserOrders', async ({body: {userId}}, res) => {
    const ordersUser = await db.Order.findAll({
        where: {
            userId
        }
    });

    return res.json({
        ordersUser
    });
});

router.post('/add', async ({body: {firstName, lastName, login, password, email, phone}}, res) => {
    const newUser = await db.User.create({
        firstName,
        lastName,
        login,
        password,
        email,
        phone
    }).then(response => response);

    return res.json({
        newUser
    })
});

router.post('/change', async ({body: {id, firstName, lastName, login, password, email, phone}}, res) => {
    const updateUser = await db.User.update({
        firstName,
        lastName,
        login,
        password,
        email,
        phone
    }, {
        where: {
            id
        }
    }).then(response => response);

    return res.json({
        newUser: updateUser
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.User.destroy({
        where: {
            id
        }
    });

    return res.json({
        numberOfDeleted
    });
});

router.post('/updateToken', async ({body: {id, lastToken}}, res) => {
    const newToken = await db.User.update({
        lastToken
    }, {
        where: {
            id
        }
    }).then(response => response);

    return res.json({
        newToken
    })
});

module.exports = router;
