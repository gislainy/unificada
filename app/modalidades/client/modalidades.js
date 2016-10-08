Template.modalidades.helpers({
	modalidadesList() {
		return _modalidades;
	}
});

Template.modalidades.events({
	'click .adicionar': function (event) {
		Router.go('/modalidades/add');
	},
	'click .modalidadeItem': function (event) {
		var self = this;
		Router.go('/modalidades/' + self._id);
	}
});

_modalidades = [
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
		nome: 'xadrez'
	},
  {
		_id: 'natacaoId',
		nome: 'natação'
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

