Template.jogoList.helpers({
	jogosList() {
		var self = this;
		return self.jogos;
	},
	data() {
		var self = this;
		return moment(self.data).format('l');
	},
	horario() {
		var self = this;
		return moment(self.data).format('LT');
	},
	equipe() {
		var self = this;
		var equipe = Equipe.find({_id: self.equipeId}).fetch()[0];
		return equipe ? equipe.nome : 'Sem equipe';
	}
});

Template.jogoList.events({
	'click .excluir': function (event) {
		var self = this;
		Meteor.call('jogo.excluir', self._id);
	},
});