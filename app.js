var app = require('express')();

var config = require('./config.js');
var appPort = config.app.port;

var router = require('./routes')(app);

var passport = require('./controllers/authenticate.js')(app);
app.use(passport.initialize());
app.use(passport.session());

app.set('views', __dirname+'/views');    //set view dir
app.set('view engine', 'pug');          //autorequires

app.listen(appPort, function(){
  console.log('Listening on port ', appPort);
})
