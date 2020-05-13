const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allCategories = await db.Category.findAll();

    return res.json({
        allCategories
    })
});

router.post('/add', async ({body: {name}}, res) => {
    const newCategory = await db.Category.create({name}).then(response => response);

    return res.json({
        newCategory
    })
});

router.post('/change', async ({body: {id, name}}, res) => {
    const numberOfChanges = await db.Category.update({name}, {
        where: {
            id
        }
    }).then(response => response);

    return res.json({
        numberOfChanges
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.Category.destroy({
        where: {
            id
        }
    });

    return res.json(numberOfDeleted);
});

module.exports = router;
