Template.home.helpers({
    listaDeTarefa() {
        return _listaDeTarefa;
    }
});

var _listaDeTarefa = [
    {
        nome: 'Terminar o protótipo do sistema',
        tarefaId: 'terminarPrototipoId',
        checked: 'checked',
    },
    {
        nome: 'Marcar reunião com a atlética para aprovar protótipo',
        tarefaId: 'marcarReuniaoPrototipoId',
    },
    {
        nome: 'Verificar as páginas para ver se tem erros',
        tarefaId: 'verificarAsPaginasErroId',
    },
    {
        nome: 'Fazer banner para divulgar novo produto',
        tarefaId: 'fazerBannerDivulgacaoId',
    },
]
Template.home.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};