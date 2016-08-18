module.exports = function(app){

  app.get('/', function(req, res){
    res.render('layout');
  });

  app.get('/polls', function(req, res){
    var polls = {polls: [
        {name: 'fav teach', votes: '82'},
        {name: 'fav car', votes: '34'},
        {name: 'fav drink', votes: '21'}
      ]
    }
    res.render('polls', polls);
  });

}
