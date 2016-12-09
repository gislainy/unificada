Meteor.methods({
    'atleta.adicionar': function (atleta) {
        return Atleta.insert({
            nome: atleta.nome,
            matricula: atleta.matricula,
            curso: atleta.curso,
            cursoCod: atleta.cursoCod,
            matricula: atleta.matricula,
            telefone: atleta.telefone,
            email: atleta.email,
            image: atleta.image
        });
    },
    'atleta.alterar': function (atletaId, atleta) {
        return Atleta.update({ _id: atletaId }, {
            $set: {
                nome: atleta.nome,
                matricula: atleta.matricula,
                curso: atleta.curso,
                cursoCod: atleta.cursoCod,
                matricula: atleta.matricula,
                telefone: atleta.telefone,
                email: atleta.email
            }
        });
    },
    'atleta.excluir': function (atletaId) {
        return Atleta.remove({
            _id: atletaId
        });
    },
    'estoque.adicionar': function (estoque) {
        return Estoque.insert({
                nome: estoque.nome,
                quantidade: estoque.quantidade
            });
    },
    'estoque.alterar': function (estoqueId, estoque) {
        return Estoque.update({
            _id: estoqueId
        },
            {
                $set: {
                    nome: estoque.nome,
                    quantidade: estoque.quantidade
                }
            });
    },
    'estoque.excluir': function (estoqueId) {
        return Estoque.remove({
            _id: estoqueId
        });
    },
});