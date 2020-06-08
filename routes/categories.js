const express = require('express');
const router = express.Router();
const db = require('../models'); // new require for db object

router.post('/', async ({body: {pageSize, currentPage}}, res) => {
    const allCategories = await db.Category.findAndCountAll({
        limit: pageSize,
        offset: currentPage - 1
    });

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
    const successOfChange = await db.Category.update({name}, {
        where: {
            id
        }
    }).then(response => response);

    return res.json(successOfChange)
});

router.post('/delete', async ({body: {id}}, res) => {
    const numberOfDeleted = await db.Category.destroy({
        where: {
            id
        }
    });

    return res.json(numberOfDeleted);
});

router.post('/getProductsOfCategory', async ({body: {categoryId, pageSize, currentPage}}, res) => {
    const allProductsOfCategory = await db.Product.findAndCountAll({
        where: {
            categoryId
        },
        limit: pageSize,
        offset: currentPage - 1
    });

    return res.json({
        allProductsOfCategory
    });
});

module.exports = router;
