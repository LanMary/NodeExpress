var express = require('express');

//require from project 
var controller = require('../controllers/product.controller');

var router = express.Router();

router.get('/index',controller.product);
module.exports= router;


