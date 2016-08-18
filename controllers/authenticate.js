var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({ username: username}, function(err, user){
      if(err) return done(err);
      if(!user){
        return done(null, false, {message: 'Incorrect username.'});
      }
      if(!user.validPassword(password)){
        return done(null, false, {message: 'Incorrect password.'});
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, cb){
  db.users.findById(id, function(err, user){
    if(err) return cb(err);
    cb(null, user);
  });
});

module.exports = passport;
