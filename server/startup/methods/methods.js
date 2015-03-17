Meteor.methods({
    createUserAccount:function(user) {
        /*user={
            username:string
            email:string
            password:password
            profile
        }
            */
        check(user,user);

        var result=Accounts.createUser(user);
        console.log(result);
        return result;

    }
});