Template.equipeList.helpers({
	equipeList() {
        debugger
		var self = this;
		return self.equipe ? self.equipe.atletas : [];
	},
	titular() {
        return this.principal ? 'Sim' : 'Não';
	},
    nome(){
        var self = this;
        var atleta = Atleta.find({_id: self.atletaId}).fetch()[0];
        return atleta ? atleta.nome : '';
    },
    messagem() {
        var self = this;
        return self.equipe ? 
            'Não existe atleta cadastrado na equipe!' :
            'Não existe equipe cadastrada para essa modalidade!';
    },
    naoTemEquipe() {
        return !this.equipe;
    }
});

Template.equipeList.events({
	'click .excluirAtleta': function (event, templateInstance) {
		var self = this;
        var equipeId = templateInstance.data.equipe._id;
		Meteor.call('equipe.atleta.excluir', equipeId, self.atletaId);
	},
});