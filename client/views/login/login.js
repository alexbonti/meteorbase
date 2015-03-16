Template.login.helpers({
});

Template.login.events({

    // login form submit, perform login
    'submit #login-form': function(e) {

        e.preventDefault();
        Meteor.call('testFunction', function (err, res) {
            if (err) console.log(err);
            else console.log('response: ', res);
        });
        var username = $('#login-username').val();
        var password = $('#login-password').val();
        // try to login
        Meteor.loginWithPassword(username, password, function(err) {
            if (err){
                // login failed
                $('input').addClass('error');
                $('button').addClass('btn-danger').removeClass('btn-primary').html('Login Failed');
            }
            else {
                // redirect to dashboard
                if(Meteor.user().profile.role=='Admin'){
                    Router.go('/admin');
                }else{
                    Router.go('/home');
                }

            }
        });

        return false;
    },

    // on keystroke reset the form style
    'keyup input': function() {
        $('input').removeClass('error');
        $('button').removeClass('btn-danger').addClass('btn-primary').html('Log In');
    }

});

Template.login.redered=function(){
    Meteor.logout();
};
