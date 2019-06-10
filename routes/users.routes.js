var express = require('express');

//require from project 
var controller = require('../controllers/user.controller');

var router = express.Router();
module.exports= router;

router.get("/",controller.index);

router.get("/search",controller.search);

router.get("/create",controller.create);

router.get('/:id',controller.get);

router.post("/create",controller.postCreate);