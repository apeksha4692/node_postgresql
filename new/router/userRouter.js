const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.post('/addChild', usersController.addChild);


module.exports = router;