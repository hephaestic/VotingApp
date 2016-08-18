const fs = require('fs');

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('layout', {
			user: req.user
		});
	});

	fs.readdirSync(__dirname).forEach(file => {
		const ext = file.substr(file.lastIndexOf('.') + 1);
		if (file === 'index.js' || ext !== 'js') return;
		const name = file.substr(0, file.indexOf('.'));
		require('./${name}')(app);
	});
};
