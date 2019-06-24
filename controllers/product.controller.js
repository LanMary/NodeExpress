// var db = require('../db');
var Product = require('../models/product.model');

module.exports.product = async function(req,res){
    // var  page = parseInt(req.query.page) || 1;//n
    // var perPage = 8; //x

    // var start = (page - 1) * perPage;
    // var end = page * perPage;
    
    // var drop = (page - 1) * perPage;
    // res.render('products',{
    //     // products: db.get('products').value().slice(start,end)   
    //     products: db.get('products').drop(drop).take(perPage).value()
    // });
    // Product.find().then(function(products){
        var products = await Product.find().limit(8);
        res.render('products',{
            products: products
        });
};