Template.login.events({
    'submit form': function(event){
        debugger;
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
        if(Meteor.userId())
            Router.go('/');
    }
})