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

Router.route('/home', function () {
	this.render('home');
});

Router.route('/agenda', function () {
	this.render('agendaList');
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

Router.route('/modalidades', function () {
	this.render('modalidades');
});

Router.route('/modalidades/add', function () {
	this.render('modalidades/add');
});

Router.route('/modalidades/:_id', {
	template: 'modalidadesEdit',
	data: function () {
		var atletaId = this.params._atletaId;
		return _atletas.filter(function (a) {
			return a._id === atletaId;
		})[0];
	},
});


Router.route('/estoque/add', function () {
	this.render('estoqueAdd');
});

Router.route('/estoque', function () {
	this.render('estoqueList');
});


Router.route('/estoque/:_estoqueId', {
	template: 'estoqueEdit',
	data: function () {
		var estoqueId = this.params._estoqueId;
		return _estoque.filter(function (a) {
			return a._id === estoqueId;
		})[0];
	},
});

Router.route('/usuario', function () {
	this.render('usuarioList');
});

Router.route('/usuario/add', function () {
	this.render('usuarioAdd');
});

Router.route('/usuario/:_usuarioId', {
	template: 'usuarioEdit',
	data: function () {
		var usuarioId = this.params._usuarioId;
		return _usuario.filter(function (a) {
			return a._id === usuarioId;
		})[0];
	},
});


// Router.route('/galeria', function () {
// 	this.render('galeriaList');
// });