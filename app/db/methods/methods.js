Meteor.methods({
    'atleta.adicionar': function (atleta) {
        return Atleta.insert({
            nome: atleta.nome,
            matricula: atleta.matricula,
            curso: atleta.curso,
            cursoCod: atleta.cursoCod,
            telefone: atleta.telefone,
            email: atleta.email,
            image: atleta.image,
        });
    },
    'atleta.alterar': function (atletaId, atleta) {
        return Atleta.update({ _id: atletaId }, {
            $set: {
                nome: atleta.nome,
                matricula: atleta.matricula,
                curso: atleta.curso,
                cursoCod: atleta.cursoCod,
                telefone: atleta.telefone,
                email: atleta.email,
            }
        });
    },
    'atleta.excluir': function (atletaId) {
        return Atleta.remove({
            _id: atletaId
        });
    },
    'modalidade.adicionar': function (modalidade) {
        return Modalidade.insert({
            nome: modalidade.nome
        });
    },
    'modalidade.alterar': function (modalidadeId, modalidade) {
        return Modalidade.update({
            _id: modalidadeId,
        },
        {
            $set: {
                nome: modalidade.nome
            }
        });
    },
    'modalidade.excluir': function (modalidadeId) {
         return Modalidade.remove({    
            _id: modalidadeId
        });
    },
    'jogo.adicionar': function (jogo) {
        return Jogo.insert({
            modalidadeId: jogo.modalidadeId,
            data: jogo.data,
            local: jogo.local,
            responsavel: jogo.responsavel,
            equipeId: jogo.equipeId,
        });
    },
    'jogo.excluir': function (jogoId) {
        return Jogo.remove({    
            _id: jogoId
        });
    },
    'equipe.adicionar': function (equipe) {
        return Equipe.insert({
            nome: equipe.nome,
            modalidadeId: equipe.modalidadeId,
            atletas: []
        });
    },
    'equipe.atleta.excluir': function (equipeId, atletaId) {
        return Equipe.update({
            _id: equipeId
        },
        {
            $pull: {
                atletas: {
                    atletaId
                }
            }
        });
    },
    'equipe.atleta.adicionar': function (equipeId, atleta) {
        return Equipe.update({
            _id: equipeId
        },
        {
            $push: {
                atletas: {
                    atletaId: atleta.atletaId,
                    principal: atleta.principal
                }
            }
        });
    },
});