Template.modalidadeList.helpers({
	modalidadeList() {
		return _modalidade;
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

_modalidade = [
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

