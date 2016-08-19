const express = require('express');
const app = express();

const config = require('./config.js');

const appPort = config.app.port;

require('./routes')(app);

const passport = require('./controllers/authenticate.js')(app);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views'); //set view dir
app.set('view engine', 'pug'); //autorequires

app.listen(appPort, function() {
	console.log('Listening on port ', appPort);
});
