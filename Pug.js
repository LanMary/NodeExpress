var dotenv = require('dotenv').config();

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");     

var authMiddleware = require('./middleware/auth.middleware');

//require from project 
// var db = require('./db');
var userRoute = require('./routes/users.routes');
var authRoute = require('./routes/auth.routes');
var productRoute = require('./routes/product.routes');

var port=3000; 

///template engine (Pug)
app.set('view engine','pug');//cấu hình 
app.set('views','./views');

//body-parser
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing
app.use(cookieParser(process.env.SESSION_SECRET)); 

app.use(express.static('public'));

app.get("/",function(req,res){ 
    res.render("index",{
        name: "MaryLan"
    });
});

app.use('/users', authMiddleware.requireAuth,userRoute)
app.use('/auth',authRoute);
app.use('/products',productRoute);

app.listen(port,function(){
    console.log("Server listen on port" + port);
});