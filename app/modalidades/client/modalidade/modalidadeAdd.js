Template.modalidadeAdd.events({
	'click .cancelar': function (event) {
		Router.go('/modalidade');
	},
	'click .salvar': function (event) {
		var nome = document.getElementById('nomeModalidade').value;
		var modalidade = {
			nome
		}
		Meteor.call('modalidade.adicionar', modalidade);
		Router.go('/modalidade/');
	}
});
