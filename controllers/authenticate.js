const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
	(username, password, done) => {
		User.findOne({
			username
		}, (err, user) => {
			if (err) return done(err);
			if (!user) {
				return done(null, false, {
					message: 'Incorrect username.'
				});
			}
			if (!user.validPassword(password)) {
				return done(null, false, {
					message: 'Incorrect password.'
				});
			}
			return done(null, user);
		});
	}
));

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, cb) => {
	db.users.findById(id, (err, user) => {
		if (err) return cb(err);
		cb(null, user);
	});
});

module.exports = passport;
