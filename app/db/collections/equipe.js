Equipe = new Meteor.Collection('equipe');

equipeArray = [
    {
        _id: 'equipeFutebolDeSalaoId',
        modalidadeId: 'futebolDeSalaoId',
        nome: 'Equipe Futebol de salão',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: true,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: true,
            },
        ]
    },
    {
        _id: 'equipeFutebolDeCampoId',
        modalidadeId: 'futebolDeCampoId',
        nome: 'Equipe Futebol de campo',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: true,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: true,
            },
        ]

    },
    {
        _id: 'equipeFutebolSocietyId',
        modalidadeId: 'futebolDeSocietyId',
        nome: 'Equipe Futebol de Society',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: true,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: true,
            },
        ]
    },
    {
        _id: 'equipeHandballId',
        modalidadeId: 'handballId',
        nome: 'Equipe Handball',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: true,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: true,
            },
        ]
    },
    {
        _id: 'equipeXadrezId',
        modalidadeId: 'xadrezId',
        nome: 'Equipe Xadrez',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: false,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: false,
            },
        ]
    },
    {
        _id: 'equipeNatacaoId',
        modalidadeId: 'natacaoId',
        nome: 'Equipe Natação',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: false,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: false,
            },
        ]
    },
    {
        _id: 'equipePatecaId',
        modalidadeId: 'petecaId',
        nome: 'Equipe Peteca',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: false,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: false,
            },
        ]
    },
    {
        _id: 'equipeJogosEtilicosId',
        modalidadeId: 'jogosEtilicosId',
        nome: 'Equipe Jogos Etilicos',
        atletas: [
            {
                atletaId: 'atletaJanetcartonId',
                principal: true,
            },
            {
                atletaId: 'atletaMichaelzimberId',
                principal: false,
            },
            {
                atletaId: 'atletaAlexjohnatanId',
                principal: false,
            },
        ]
    },
    {
        _id: 'equipeCaboDeGuerraId',
        modalidadeId: 'caboDeGuerraId',
        nome: 'Equipe Cabo De Guerra',
        atletas: []
    },
    {
        _id: 'equipeTenisDeMesaId',
        modalidadeId: 'tenisDeMesaId',
        nome: 'Equipe Tênis De Mesa',
        atletas: []
    },
    {
        _id: 'equipeSinucaId',
        modalidadeId: 'sinucaId',
        nome: 'Equipe Sinuca',
        atletas: []
    }
];

if (Equipe.find().count() === 0) {
    equipeArray.forEach(function (equipe) {
        Equipe.insert(
            equipe
        );
    });
}