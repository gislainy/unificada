Template.estoqueEdit.events({
	'click .excluir': function (event) {
		var self = this;
		Meteor.call('estoque.excluir', self._id);
		Router.go('/estoque');
	},
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
		Meteor.call('estoque.alterar', self._id, estoque);
		Router.go('/estoque');
  }
});