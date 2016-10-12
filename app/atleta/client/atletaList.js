Template.atletaList.helpers({
	atletaList() {
		return _atletas;
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

_atletas = [
	{
		_id: 'atletaJohnsmithId',
		image: 'img/a2.jpg',
		nome: 'John Smith',
		curso: 'Sistemas de Informação',
		cursoCod: 3,
		email: 'johnsmith@gmail.com',
		matricula: '201106666',
		telefone: '(62) 99456-7890'
	},
	{
		_id: 'atletaAlexjohnatanId',
		image: 'img/a1.jpg',
		nome: 'Alex Johnatan',
		curso: 'Engenharia de Software',
		cursoCod: 2,
		email: 'alexjohnatan@gmail.com',
		matricula: '201303346',
		telefone: '(62) 99456-7890'
	},
	{
		_id: 'atletaMonicasmithId',
		image: 'img/a3.jpg',
		nome: 'Monica Smith',
		curso: 'Engenharia de Software',
		cursoCod: 2,
		email: 'monicasmith@gmail.com',
		matricula: '201500117',
		telefone: '(62) 99456-7890'
	},
	{
		_id: 'atletaMichaelzimberId',
		image: 'img/a4.jpg',
		nome: 'Michael Zimber',
		curso: 'Ciência da Computação',
		cursoCod: 1,
		email: 'michaelzimber@gmail.com',
		matricula: '201600017',
		telefone: '(62) 99456-7890'
	},
	{
		_id: 'atletaSandrasmithId',
		image: 'img/a5.jpg',
		nome: 'Sandra Smith',
		curso: 'Sistemas de Informação',
		cursoCod: 3,
		email: 'sandrasmith@gmail.com',
		matricula: '201405018',
		telefone: '(62) 99456-7890'
	},
	{
		_id: 'atletaJanetcartonId',
		image: 'img/a6.jpg',
		nome: 'Janet Carton',
		curso: 'Engenharia de Software',
		cursoCod: 2,
		email: 'janetcarton@gmail.com',
		matricula: '201405018',
		telefone: '(62) 99456-7890'
	},
];

