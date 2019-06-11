var db = require('../db');

module.exports.requireAuth = function(req,res,next){
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    // nếu có userid thì ktra có tồn tại trong db k
    var user = db.get('users').find({
        id: req.signedCookies.userId}).value();

    if(!user){
        res.redirect('auth/login');
        return;
    }
    res.locals.user = user;
    next();
};