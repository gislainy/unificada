// Template.atletaEdit.helpers({

// });


Template.atletaEdit.events({
	'click .cancelar': function (event) {
		Router.go('/atleta');
	},
	'click .excluir': function (event) {
		var self = this;
		Meteor.call('atleta.excluir', self._id);
		Router.go('/atleta');
	},
	'click .salvar': function (event) {
		var self = this;
		var nome = document.getElementById('nomeAtleta').value;
		var matricula = document.getElementById('matriculaAtleta').value;
		var telefone = document.getElementById('telefoneAtleta').value;
		var email = document.getElementById('emailAtleta').value;
		var cursoCod = parseInt(document.getElementById('cursoAtleta').value);
		var curso;
		switch (cursoCod) {
			case 1:
				curso = "Ciência da Computação";
				break;
			case 2:
				curso = "Engenharia de software";
				break;
			case 3:
				curso = "Sistema de Informação";
				break;
		
			default:
				curso = "Sem curso";
				break;
		};
		var atleta = {
			nome,
			matricula,
			telefone,
			email,
			cursoCod,
			curso
		}
		Meteor.call('atleta.alterar', self._id, atleta);
		Router.go('/atleta');
  }
});

		// _id: 'atletaMichaelzimberId',
		// image: 'img/a4.jpg',
		// nome: 'Michael Zimber',
		// curso: 'Ciência da Computação',
		// cursoCod: 1,
		// email: 'michaelzimber@gmail.com',
		// matricula: '201600017',
		// telefone: '(62) 99456-7890'