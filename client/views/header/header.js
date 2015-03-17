Template.header.created = function () {
};

Template['header'].helpers({
    profile:function(){
        return Meteor.user().profile;
    }

});

Template['header'].events({
    'click .logoutLI':function(){
        Meteor.logout(function(err){
            if(!err){

                Notifications.warn('Server', 'You have succesfully logged out');
            }
        });

    }


});

