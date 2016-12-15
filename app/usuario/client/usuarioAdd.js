Template.usuarioAdd.events({
    'click .salvar': function(event){
        debugger;
        event.preventDefault();
        var nome = $('[name=nome]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email,
            password,
            profile  : {
                nome
            }
        });
        // Router.back();
    }
});