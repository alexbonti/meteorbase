// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'MeteorBase',
  DESCRIPTION: 'A boilerplate for meteorjs projects http://matteodem.github.io/meteor-boilerplate/'
};
