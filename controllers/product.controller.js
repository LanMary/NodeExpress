var db = require('../db');

module.exports.product = function(req,res,next){
    res.render('products/index',{
        products:db.get('products').value()
    });
};