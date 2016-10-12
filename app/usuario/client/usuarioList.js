Template.usuarioList.helpers({
	usuarioList() {
		return _usuario;
	}
});
Template.usuarioList.events({
	'click .adicionar': function (event) {
		Router.go('/usuario/add');
	},
	'click .usuarioItem': function (event) {
		var self = this;
		Router.go('/usuario/' + self._id);
	}
});

_usuario = [
  {
    _id: 'usuarioCarlosId',
    nome: 'Carlos Antônio',
    email: 'carlosantonio@gmail.com'
  },
  {
    _id: 'usuarioMartaId',
    nome: 'Marta Angélica',
    email: 'martaangelica@gmail.com'
  },
  {
    _id: 'usuarioHenriqueId',
    nome: 'Henrique',
    email: 'henrique@gmail.com'
  },
]