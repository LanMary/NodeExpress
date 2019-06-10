var db = require('../db');
var shortid = require("shortid");


module.exports.index = function(req,res){
    res.render('users/index',{
        users:db.get('users').value()//get nd từ db
    });
};

module.exports.search = function(req,res){
    var q = req.query.q;
    // req.query là một object và muốn lấy giá trị(q:)
    var matchUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render("users/index",{
        users:matchUsers
        //key:value
    })
};

module.exports.create = function(req,res){
    res.render("users/create");
};

module.exports.get = function(req,res){
    var id = req.params.id;
    //console.log(typeof id);
    var user = db.get('users').find({ id: id }).value();
    
    res.render('users/view',{
        user:user
    });
};

module.exports.postCreate = function(req,res){
    // users.push(req.body);//lưu trữ thông tin user gửi lên->pug
    req.body.id = shortid.generate();
    var err = [];

    if(!req.body.name){
        err.push('Name is require!');
    }
    if(!req.body.phone){
        err.push('Phone is require!');
    }
    if(err.length){
        res.render('users/create',{
            err: err,
            values: req.body
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect("/users");
};