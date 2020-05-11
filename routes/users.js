var express = require('express');
var router = express.Router();
const db = require('../models'); // new require for db object

const createUser = async ({name, password}) => {
    return await db.User.create({name, password});
};
const getAllUsers = async () => {
    return await db.User.findAll();
};
const getUser = async obj => {
    return await db.User.findOne({
        where: obj,
    });
};

router.get('/', function (req, res) {
    getAllUsers().then(user => res.json(user));
});
// register route
router.post('/register', function (req, res, next) {
    const {login, password} = req.body;
    createUser({login, password}).then(user =>
        res.json({
            user, msg: `account created successfully`
        }))
    ;
});

module.exports = router;
