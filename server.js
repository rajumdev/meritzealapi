var connection = require('./connection');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  var router = express.Router();
  var connection = require('./connection');
app.listen(port);
connection.init();

app.get("/", function(req, res , next){
  res.send("Welcome to meritzeal Server");
});

app.use(function(req , res , next){
  res.header("Access-Control-Allow-Orign", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST , PUT , DELETE , OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-with");
  res.header("Access-Control-Allow-Headers", "Orign, X-Requested-With, Content ,Content-Type, Accept , access-control-allow-origin , cache-control , postman-token , token");
  next();
});
app.use(router);
require('./api/routes/meritzealRoutes')(app);
console.log('Meritzeal RESTful API server started on: ' + port);
