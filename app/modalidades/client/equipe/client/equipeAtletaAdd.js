Template.equipeAtletaAdd.helpers({
	atletaQueNaoPertenceAModalidade() {
		debugger;
		var self = this;
		var atletas = [];
		self.atletas.forEach(function (atleta){
			var naoPertece = self.equipe.atletas.every(function (equipe){
				return atleta._id != equipe.atletaId;
			});
			if (naoPertece){
				atletas = atletas.concat(atleta);
			}

		});
		return atletas;
	},
});

Template.equipeAtletaAdd.events({
	'click .adicionar': function (event, templateInstance) {
		var self = this;
		debugger
        var atletaId = document.getElementById('equipeAtletaId').value;
		var titular = document.querySelector('[name="titularEquipe"]').value
		var atleta = {
			atletaId,
			principal: titular === 'true' ? true : false
		}
		Meteor.call('equipe.atleta.adicionar', self.equipe._id, atleta);
		$('#equipeAtletaAddModal').modal('toggle');
	},
});