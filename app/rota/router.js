Router.configure({
	layoutTemplate: 'mainLayout',
});

Router.route('/login', function () {
	this.layout("blankLayout");
	this.render('login');
});

Router.route('/', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('home');
	},
});

Router.route('/home', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('home');
	},
});


Router.route('/atleta', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('atletaList');
	},
});

Router.route('/atleta/add', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('atletaAdd');
	},
});

Router.route('/atleta/:_atletaId', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('atletaEdit');
	},
	data: function () {
		var atletaId = this.params._atletaId;
		return Atleta.find({ _id: atletaId }).fetch()[0];
	}
});

Router.route('/modalidade', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('modalidadeList');
	},
});

Router.route('/modalidade/add', {
	before: function() {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('modalidadeAdd');
	},
});

Router.route('/modalidade/:_modalidadeId/edit', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('modalidadeEdit');
	},
	data: function () {
		var modalidadeId = this.params._modalidadeId;
		return Modalidade.find({ _id: modalidadeId }).fetch()[0];
	},
});
Router.route('/modalidade/:_modalidadeId', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('modalidadeView');
	},
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


Router.route('/usuario', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('usuarioList');
	},
});

Router.route('/usuario/add',{
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('usuarioAdd');
	},
});

Router.route('/usuario/:_usuarioId', {
	before: function () {
		if (!Meteor.loggingIn() && !Meteor.user()) {
			this.redirect("login");
		}
		else this.render('usuarioEdit');
	},
	data: function () {
		var usuarioId = this.params._usuarioId;
		return _usuario.filter(function (a) {
			return a._id === usuarioId;
		})[0];
	},
});