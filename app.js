var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(3000);


var bodyParser = require("body-parser");//nhúng thư viện body-parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/",function(req,res){
    // res.send("<font color=red>Hello</font>");
    res.sendFile(__dirname + "/index.html");// sendFile đưa đường dẫn về một file-->nd file
});
//xây dựng một server với module Express

app.get("/gioithieu.aspx",function(req,res){
    res.send("GIỚI THIỆU ROUTING");// sendFile đưa đường dẫn về một file-->nd file
});

//Nhập DL Post với body-parser
app.post("/gioithieu",urlencodedParser,function(req,res){
    var u = req.body.username;
    var p= req.password;
    res.send("Username" + u + " Password" + p);
});

//get paramaters
app.get("/tinhtong/:soa/:sob",function(req,res){
    var a = req.params.soa;
    a = parseInt(a);

    var b = req.params.sob;
    b= parseInt(b);

    var sum = a+b;
    res.send("<h1>"+ sum +"</h1>")
});





