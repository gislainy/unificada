Template.navigation.rendered = function () {

	// Initialize metisMenu
	$('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navigation.events({
	'click .itemMenu': function () {
		Router.go(this.rota);
	},
	'click .close-canvas-menu': function () {
		$('body').toggleClass("mini-navbar");
	}

});

Template.navigation.helpers({
	menuNavigation() {
		return _menu;
	}
})

_menu = [
	{
		template: 'home',
		rota: '/',
		nome: 'Home',
		icone: 'fa fa-home',
	},
	{
		template: 'atletaList',
		rota: '/atleta',
		nome: 'Atleta',
		icone: 'fa fa-users'
	},
	{
		template: 'usuarioList',
		rota: '/usuario',
		nome: 'Usuario',
		icone: 'fa fa-user'
	},
	{
		template: 'estoqueList',
		rota: '/estoque',
		nome: 'Estoque',
		icone: 'fa fa-archive'
	},{
		template: 'modalidades',
		rota: '/modalidades',
		nome: 'Modalidades',
		icone: 'fa fa-futbol-o'
	},
]