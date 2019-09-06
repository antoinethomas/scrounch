//importing node framework
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 res.send("hello world");
});

var port = 3000;

app.configure('test', function(){
  port = 3002;
});

//listen to port
app.listen(port);
 
module.exports = app;