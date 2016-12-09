Template.atletaList.helpers({
	atletaList() {
		return Atleta.find();
	}
});
Template.atletaList.events({
	'click .adicionar': function (event) {
		Router.go('/atleta/add');
	},
	'click .atletaItem': function (event) {
		var self = this;
		Router.go('/atleta/' + self._id);
	}
});


