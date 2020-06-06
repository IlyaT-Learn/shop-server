const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object
const jsonParser = express.json();

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
    if ((await db.User.findAll({where: {email}})).length !== 0) {

        return res.json('A user with this address exists');
    }

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

router.post('/makeAdmin', async ({body: {id}}, res) => {
    const updateUser = await db.User.update({
        isAdmin: 1
    }, {
        where: {
            id
        }
    }).then(response => response);

    return res.json({
        updateUser
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

router.post('/login', async ({body: {email, password}}, res) => {
    const resultFind = await db.User.findAll({
        where: {
            email,
            password
        }
    });

    return res.json(
        !resultFind.length ? null : resultFind[0]
    );
});

/*
router.post('/login', jsonParser, async function (request, response) {
    console.log(request.body);
    if (!request.body) return response.sendStatus(400);

    await db.User.findAll({
        where: {
            email: request.body.email,
            password: request.body.password
        }
    }).then(data => {
        response.json(data[0].lastToken);
    }).catch(err => console.log(err));
    ;
});
*/

module.exports = router;
