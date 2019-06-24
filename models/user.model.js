var mongoose = require('mongoose');

//schema khai báo những field có trong object
var UserSchema = new mongoose.Schema({
    email:String,
    password: String,
    name: String,
    avatar: String,
    phone: String
});

var User = mongoose.model('User',UserSchema,'users');

module.exports = User;