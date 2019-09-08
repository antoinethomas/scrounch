//importing node framework
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 res.send("hello this world");
});

var port = 3000;

if(process.env.NODE_ENV === 'test') {
  port = 3002;
  // additional prod environemtn configuration
}

//listen to port 3000 by default
app.listen(port);
 
module.exports = app;