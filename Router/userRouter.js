const express = require('express');
const router = express.Router();
const usersController = require('../controller/User');

router.post('/addUser', usersController.createUser);
router.get('/allUSer', usersController.allUSer);
router.post('/getUserDetail', usersController.getUserDetail);


module.exports = router;