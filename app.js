var app = require('express')();

var config = require('./config.js');
var router = require('./router/index.js');


app.listen(config.app.port, function(){
  console.log('Listening on port ', port);
})
