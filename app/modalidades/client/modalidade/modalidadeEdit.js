Template.modalidadeEdit.events({
	'click .salvar': function (event) {
		var self = this;
		var nome = document.getElementById('nomeModalidade').value;
		var modalidade = {
			nome
		}
		Meteor.call('modalidade.alterar', self._id, modalidade);
		Router.go('/modalidade');
	},
	'click .cancelar': function (event) {
		Router.back();
	}
});
