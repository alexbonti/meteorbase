/**
 * Creates initial user for the system. The initial user always has to exist.
 */

Meteor.startup(function () {

  // declare users
  var users = [
    {
      email: 'test@test.com',
      username: 'test',
      password: 'test',
      profile: {
        firstName: 'Test',
        lastName: 'User',


        }
      },

      {
          email: 'admin@admin.com',
          username: 'admin',
          password: 'admin',
          profile: {
              firstName: 'Admin',
              lastName: 'Admin',
              role:'admin'


              }

      },
    {
      email: 'another@test.com',
      username: 'another',
      password: 'another',
      profile: {
        firstName: 'Another',
        lastName: 'User'
      }
    },
      {
          email: 'alessio@test.com',
          username: 'alessio',
          password: 'totti',
          profile: {
              role:'admin',
              firstName: 'alessio',
              lastName: 'bonti'
          }
      }
  ];


  /**
   * Provide functionality to create a user (if the username doesn't already exists)
   * @param user - the user object
   */
  function createUser(user) {
    var userAlreadyExists = typeof Meteor.users.findOne({ username : user.username }) === 'object';

    if (!userAlreadyExists) {
      Accounts.createUser(user);
    }
  }
  // load users
  users.forEach(function(user) {
    createUser(user);
  });
});



