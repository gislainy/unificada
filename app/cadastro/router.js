Router.configure({
	layoutTemplate: 'mainLayout',
});

Router.route('/login', function () {
	this.layout("blankLayout");
	this.render('login');
});

Router.route('/', function () {
	this.render('home');
});

Router.route('/atleta', function () {
	this.render('atletaList');
});

Router.route('/atleta/add', function () {
	this.render('atletaAdd');
});

Router.route('/atleta/:_atletaId', {
	template: 'atletaEdit',
	data: function () {
		var atletaId = this.params._atletaId;
		return _atletas.filter(function (a) {
			return a._id === atletaId;
		})[0];
	},
});

Router.route('/usuario', function () {
	this.render('usuarioList');
});



