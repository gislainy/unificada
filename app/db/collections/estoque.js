Estoque = new Meteor.Collection('estoque');

estoqueArray = [
	{
		_id: 'estoqueBolaBasqueteId',
		nome: 'Bola de Basquete',
		quantidade: 9,
		alocado: []
	},
	{
		_id: 'estoqueBolaFutebolId',
		nome: 'Bola de Futebol',
		quantidade: 6,
		alocado: [
			{
				modalidadeId: 'futebolDeSalaoId',
				quantidade: 2
			}
		]
	},
	{
		_id: 'estoqueBolaHandebolId',
		nome: 'Bola de Handbool',
		quantidade: 8,
		alocado: []
	},
	{
		_id: 'estoqueBolaFutsalId',
		nome: 'Bola de Futsal',
		quantidade: 10,
		alocado: []
	},
	{
		_id: 'estoqueBolaVoleiId',
		nome: 'Bola de Vôlei',
		quantidade: 12,
		alocado: []
	},
	{
		_id: 'estoqueConeId',
		nome: 'Cone',
		quantidade: 5,
		alocado: []
	},
	{
		_id: 'estoqueRedeVoleiId',
		nome: 'Rede de Vôlei',
		quantidade: 5,
		alocado: []
	},
];

if (Estoque.find().count() === 0) {
	estoqueArray.forEach(function (estoque) {
		Estoque.insert(
			estoque
		);
	});
}