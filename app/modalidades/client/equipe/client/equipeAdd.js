Template.equipeAdd.events({
	'click .cadastrar': function (event, templateInstance) {
        debugger;
		var self = this;
        var modalidadeId = self.modalidadeId;
        var nome = document.getElementById('nomeEquipeId').value;
        var equipe = {
            nome,
            modalidadeId
        }
		Meteor.call('equipe.adicionar', equipe);
        $('#equipeAddModal').modal('toggle');
	},
});