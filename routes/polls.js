module.exports = function(app) {
	app.get('/', (req, res) => {
		console.log('this is polls router');
	});

	app.get('/polls', (req, res) => {
		const polls = {
			polls: [{
				name: 'fav teach',
				votes: '82'
			}, {
				name: 'fav car',
				votes: '34'
			}, {
				name: 'fav drink',
				votes: '21'
			}]
		};
		res.render('polls', polls);
	});
};
