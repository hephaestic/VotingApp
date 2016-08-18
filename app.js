var app = require('express')();

var config = require('./config.js');
var appPort = config.app.port;

var router = require('./routers/index.js')(app);

app.set('views', './views');    //set view dir
app.set('view engine', 'pug'); //autorequires

// app.get('/', function(req, res){
//   res.send('here');
// });

app.listen(appPort, function(){
  console.log('Listening on port ', appPort);
})
