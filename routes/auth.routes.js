var express = require("express");

var controller = require('../controllers/auth.controller');
// v ar validate = require('../validate/user.validate');

var router = express.Router();

router.get('/login',controller.login);

router.post('/login',controller.postLogin);
module.exports = router;