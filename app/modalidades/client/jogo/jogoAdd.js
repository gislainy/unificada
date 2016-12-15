Template.jogoAdd.rendered = function () {
    // $('#datepicker').datepicker({
    //    	format: 'dd/mm/yyyy',
    // 	language: 'pt-BR',
    // 	weekStart: 0,
    // 	startDate:'0d',
    // 	todayHighlight: true
    // });
    $('#timepicker').datetimepicker({
        format: 'LT'
    });
    $('#datetimepicker').datetimepicker({
        format: 'DD/MM/YYYY'
    });
};

Template.jogoAdd.helpers({
    equipeModalidade() {
        var self = this;
        return self.equipe ? self.equipe.nome : 'Modalidade sem equipe';
    }
});

Template.jogoAdd.events({
    'click .adicionar': function (event) {
        debugger
        var self = this;
        var equipeId = self.equipe ? self.equipe._id : undefined;
        var modalidadeId = self.modalidadeId;
        var responsavel = document.getElementById('responsavelJogoId').value;
        var local = document.getElementById('localJogoId').value;
        var data = document.getElementById('dataJogoId').value;
        var horario = document.getElementById('horarioJogoId').value;
        data = data.split('/');
        horario = horario.split(':');
        var ano = data[2] || '2017';
        var mes = data[1] || '1';
        var dia = data[0] || '1';
        var hora = horario[0] || '00';
        var minutos = horario[1] || '00';
        var jogo = {
            responsavel,
            data: new Date(ano, parseInt(mes) - 1, dia, hora, minutos),
            local,
            equipeId,
            modalidadeId
        };
        Meteor.call('jogo.adicionar', jogo);
        $('#jogoAddModal').modal('toggle');
    },

});

