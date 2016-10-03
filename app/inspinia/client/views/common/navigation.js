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
		icone: 'fa fa-th-large',
	},
	{
		template: 'atletaList',
		rota: '/atleta',
		nome: 'Atleta',
		icone: 'fa fa-desktop'
	},
	{
		template: 'usuarioList',
		rota: '/usuario',
		nome: 'Usuario',
		icone: 'fa fa-diamond'
	},
	{
		template: 'estoqueList',
		rota: '/estoque',
		nome: 'Estoque',
		icone: 'fa fa-envelope'
	},
]