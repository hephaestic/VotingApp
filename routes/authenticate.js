module.exports = function name(app) {
	app.get('/', (req, res) => {
		console.log('this is authenticate router');
	});
	app.route('login')
	.get((req, res) => {
		res.render('login');
	})
  .post(
		passport.authenticate('local', {
			failureRedirect: '/login'
		}),
		(req, res) => {
			res.redirect('/');
		}
  );
};
