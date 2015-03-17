Meteor.publish('topics', function () {
  return topics.find();
});
