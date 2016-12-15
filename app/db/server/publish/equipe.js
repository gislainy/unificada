Meteor.publish('equipe', function() {
  return Equipe.find();
});