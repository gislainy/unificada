Template.estoqueList.helpers({
	estoqueList() {
		return _estoque;
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

_estoque = [
	{
		_id: 'estoqueBolaBasqueteId',
		nome: 'Bola de Basquete',
    quantidade: 9,
	},
	{
		_id: 'estoqueBolaFutebolId',
		nome: 'Bola de Futebol',
    quantidade: 6,
	},
	{
		_id: 'estoqueBolaHandebolId',
		nome: 'Bola de Handbool',
    quantidade: 8,
	},
	{
		_id: 'estoqueBolaFutsalId',
		nome: 'Bola de Futsal',
    quantidade: 10,
	},
	{
		_id: 'estoqueBolaVoleiId',
		nome: 'Bola de Vôlei',
    quantidade: 12,
	},
	{
		_id: 'estoqueConeId',
		nome: 'Cone',
    quantidade: 5,
	},
	{
		_id: 'estoqueRedeVoleiId',
		nome: 'Rede de Vôlei',
    quantidade: 5,
	},
];

