var fs = require('fs');

module.exports = function(app){

  app.get('/', function(req, res){
    res.render('layout', {user: req.user});
  });

  fs.readdirSync(__dirname).forEach(function(file) {
    var ext = file.substr(file.lastIndexOf('.') + 1);
    if (file == "index.js" || ext !== 'js') return;
    var name = file.substr(0, file.indexOf('.'));
    require('./' + name)(app);
  });
}
