/**
 *  The startup folder is handy to find out what should be initialized and how, also , trackers should be set here.
 *
 *  Tracker - a tracker is a function which continously observerves "observables" variables, which are all those variables which can be triggered by a status change,
 *  for example a db item or a Meteor.user() state
 */


Meteor.startup(function () {

    Session.set('showHeader',false);
    Session.set('lostConnection',false);



    // Setting notifications timeouts which is used by notificationJS
    _.extend(Notifications.defaultOptions, {
        timeout: 3000
    });

    /** Tracker SecurityBouncer
     *
     *  This tracker is used to keep track whether a user is logged in or not, if a person is not logged in, the user gets sent to the login screen ( / )
     *  Note : in order to avoid it to run the first time, I used the c.firstrun to find out if it was the first time running, therefore avoiding it all together.
     */


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

    /** Tracker ConnectionMonitor
     *
     * This tracker keeps track of the current connection to the server observing the DDP status through Meteor.status , when it fails,
     * the connecting template kicks in. To overcome 'minimal' sustainable connection losses, i have inserted a threshold, therefore the
     * connection is "lost" if after the threshold, the connection is still lost.
     */

    Tracker.autorun(function (c) {
        var connected=Meteor.status().connected;
        if(connected){
            Session.set('lostConnection',false)
        }else{
            console.log('testing if the connection is really dead');
            setTimeout(function(){
                newTest=Meteor.status().connected;
                if(newTest==false){
                    Session.set('lostConnection',true);
                }


            },globalVariable.connectionTime);
        }

    });

});