Template.estoqueList.helpers({
	estoqueList() {
		return Estoque.find();
	}
});
Template.estoqueList.events({
	'click .adicionar': function (event) {
		Router.go('/estoque/add');
	},
	'click .estoqueItem': function (event) {
		var self = this;
		Router.go('/estoque/' + self._id);
	}
});



