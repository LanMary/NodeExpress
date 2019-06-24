var dotenv = require('dotenv').config();

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser"); 
// var csurf = require('csurf');   
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.midleware');
 
//require from project 
// var db = require('./db');
var userRoute = require('./routes/users.routes');
var authRoute = require('./routes/auth.routes');
var productRoute = require('./routes/product.routes');
var cartRoute = require('./routes/cart.route');   
var transferRoute = require('./routes/transfer.route');

var port=3000; 

///template engine (Pug)
app.set('view engine','pug');//cấu hình 
app.set('views','./views');

//body-parser
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing
app.use(cookieParser(process.env.SESSION_SECRET)); 
app.use(sessionMiddleware);
// app.use(csurf({ cookie: true }));//function -> middleware phải để sau cookie

app.use(express.static('public'));

//////////////// 
app.get('/',function(req,res){ 
    res.render('index',{//path
        name: "Mary Lan" 
    });
});
///////////use////////////
app.use('/users', authMiddleware.requireAuth,userRoute)
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.use('/cart',cartRoute);
app.use('/transfer',authMiddleware.requireAuth,transferRoute);

app.listen(port,function(){
    console.log("Server listen on port" + port);
});