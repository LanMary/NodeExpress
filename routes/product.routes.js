var express = require('express');

//require from project 
var controller = require('../controllers/product.controller');

var router = express.Router();

router.get('/',controller.product);
module.exports= router;


