Template.estoqueAdd.events({
	'click .cancelar': function (event) {
		Router.go('/estoque');
	},
	'click .salvar': function (event) {
		var self = this;
		var nome = document.getElementById('nomeEstoque').value;
		var quantidade = parseInt(document.getElementById('quantidadeEstoque').value);

		var estoque = {
			nome,
			quantidade
		};
		Meteor.call('estoque.adicionar', estoque);
		Router.go('/estoque');
	}
});