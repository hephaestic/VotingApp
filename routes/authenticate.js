module.exports = function(app){

  app.get('/', function(req, res){
    console.log('this is authenticate router');
  });

  app.route('login')
  .get(function(req, res){
    res.render('login');
  })
  .post(
    passport.authenticate('local', {failureRedirect: '/login'}),
    function(req, res){
      res.redirect('/');
    }
  );

}
