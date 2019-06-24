// var db = require('../db');
var User = require('../models/user.model');
var shortid = require("shortid");


module.exports.index = async function(req,res){
    var user = await User.find();
    res.render('users/index',{
        users: user
    });
    // res.render('users/index',{
    //     users:db.get('users').value()//get nd từ db
    // });
};

module.exports.search = function(req,res){
    var q = req.query.q;
    // req.query là một object và muốn lấy giá trị(q:)
    var matchUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render("users/index",{
        users:matchUsers
    
    })
};

module.exports.create = function(req,res){
    console.log(req.cookies);
    res.render("users/create");
};

module.exports.get = async function(req,res){
    var id = req.params.id;
    //console.log(typeof id);
    // var user = db.get('users').find({ id: id }).value();
    var user = await User.find();
    res.render('users/view',{
        users:user
    });
};

module.exports.postCreate =  function(req,res){
    // users.push(req.body);//lưu trữ thông tin user gửi lên->pug
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split("\\").slice(1).join("\\");

    db.get('users').push(req.body).write();
    res.redirect("/users");
};