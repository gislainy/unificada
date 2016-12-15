Modalidade = new Meteor.Collection('modalidade');

modalidadeArrary = [
	{
		_id: 'futebolDeSalaoId',
		nome: 'Futebol de salão'
	},
	{
		_id: 'futebolDeCampoId',
		nome: 'Futebol de campo'
	},
	{
		_id: 'futebolDeSocietyId',
		nome: 'Futebol de Society'
	},
	{
		_id: 'handballId',
		nome: 'Handball'
	},
	{
		_id: 'xadrezId',
		nome: 'Xadrez'
	},
	{
		_id: 'natacaoId',
		nome: 'Natação'
	},
	{
		_id: 'petecaId',
		nome: 'Peteca'
	},
	{
		_id: 'jogosEtilicosId',
		nome: 'Jogos Etilicos'
	},
	{
		_id: 'caboDeGuerraId',
		nome: 'Cabo De Guerra'
	},
	{
		_id: 'tenisDeMesaId',
		nome: 'Tênis De Mesa'
	},
	{
		_id: 'sinucaId',
		nome: 'Sinuca'
	}
];

if (Modalidade.find().count() === 0) {
	modalidadeArrary.forEach(function (atleta) {
		Modalidade.insert(
			atleta
		);
	});
}