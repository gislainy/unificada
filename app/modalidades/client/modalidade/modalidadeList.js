Template.modalidadeList.helpers({
	modalidadeList() {
		return Modalidade.find();
	}
});

Template.modalidadeList.events({
	'click .adicionar': function (event) {
		Router.go('/modalidade/add');
	},
	'click .modalidadeItem': function (event) {
		var self = this;
		Router.go('/modalidade/' + self._id);
	}
});

