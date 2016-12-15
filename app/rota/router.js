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
		return Atleta.find({_id: atletaId}).fetch()[0];
	}
});

Router.route('/modalidade', function () {
	this.render('modalidadeList');
});

Router.route('/modalidade/add', function () {
	this.render('modalidadeAdd');
});

Router.route('/modalidade/:_modalidadeId/edit', {
	template: 'modalidadeEdit',
	data: function () {
		var modalidadeId = this.params._modalidadeId;
		return Modalidade.find({_id: modalidadeId}).fetch()[0];
	},
});
Router.route('/modalidade/:_modalidadeId', {
	template: 'modalidadeView',
	data: function () {
		var modalidadeId = this.params._modalidadeId;
		var equipe = Equipe.find({
			modalidadeId
		}).fetch()[0];
		var jogos = Jogo.find({
			modalidadeId
		}).fetch();
		var atletas = Atleta.find().fetch();
		return {
			jogos,
			equipe,
			modalidadeId,
			atletas
		};
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
		return Estoque.find({_id: estoqueId}).fetch()[0];
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