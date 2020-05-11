var express = require('express');
var router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async (req, res) => {
    const allCategories = await db.Category.findAll();

    return res.json({
        cats: allCategories
    })
});

router.post('/add', async ({body: {name}}, res) => {
    const newCategory = await db.Category.create({name}).then(response=>response);

    return res.json({
        category: newCategory
    })
});

router.post('/add', async ({body: {name}}, res) => {
    const newCategory = await db.Category.create({name}).then(response=>response);

    return res.json({
        category: newCategory
    })
});

router.post('/delete', async ({body: {id}}, res) => {
    const result = await db.Category.destroy({
        where: {
            id
        }
    });

    return res.json(result);
});

module.exports = router;
