Template.atletaAdd.events({
	'click .cancelar': function (event) {
		Router.go('/atleta');
	},
	'click .salvar': function (event) {
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
			curso,
			image: "img/user.png"
		};
		Meteor.call('atleta.adicionar', atleta);
		Router.go('/atleta');
	}
});