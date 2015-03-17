
Meteor.startup(function () {

    Session.set('showHeader',false);



    // Setting notifications timeouts
    _.extend(Notifications.defaultOptions, {
        timeout: 5000
    });


    if(globalVariable.loggingSecurity){
        Tracker.autorun(function (c) {
            var loggedIn=Meteor.user();
            console.log();
            if(c.firstRun){
                console.log('starting tracker');
            }else{
                if(loggedIn==null){
                    Router.go('/');
                    console.log('logged out');
                }else{
                    console.log('logged in');
                }

            }

        });

    }

});