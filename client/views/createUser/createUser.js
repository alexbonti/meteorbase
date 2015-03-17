Template['createUser'].helpers({
});

Template['createUser'].events({
    // login form submit, perform login
    'submit #login-form': function(e) {

        e.preventDefault();
        var username = $('#login-username').val();
        var password = $('#login-password').val();
        var verifyPassword=$('#verify-password').val();
        var firstName = $('#login-name').val();
        var lastName = $('#login-lastName').val();
        var user={
            username:username,
            password:password,
            profile:{
                role:'user',
                firstName: firstName,
                lastName: lastName
            }
        }
        if(password.length<8){
            bootbox.alert('Your password is too short, should be at least 8 characters');
            $('#buttonSubmit').addClass('error');
            $('#buttonSubmit').addClass('btn-danger').removeClass('btn-primary').html('Registration Error');
        }else{
            if(password==verifyPassword){
                Meteor.call('createUserAccount',user,function (err, res) {
                    if (err) {
                        console.log('Error, username already taken');
                        bootbox.alert('Apologies, but that Username is already taken');
                        $('#buttonSubmit').addClass('error');
                        $('#buttonSubmit').addClass('btn-danger').removeClass('btn-primary').html('Registration Error');
                    }else {
                        console.log('Account Created :', res)};
                        bootbox.alert('Account Succesfully created');
                        Router.go('/');

                });

            }else{
                bootbox.alert('Password and verify password do not match ');
                $('#buttonSubmit').addClass('error');
                $('#buttonSubmit').addClass('btn-danger').removeClass('btn-primary').html('Registration Error');
            }

        }

        return false;
    },

    // on keystroke reset the form style
    'keyup input': function() {
        $('input').removeClass('error');
        $('button').removeClass('btn-danger').addClass('btn-primary').html('Register');
    }

});
