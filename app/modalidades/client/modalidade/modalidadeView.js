Template.modalidadeView.events({
	'click .excluir': function (event) {
		var self = this;
		Meteor.call('modalidade.excluir', self.modalidadeId);
		Router.go('/modalidade');
	},
	'click .alterar': function (event) {
		var self = this;
		Router.go('/modalidade/' + self.modalidadeId +'/edit');
	}
});

