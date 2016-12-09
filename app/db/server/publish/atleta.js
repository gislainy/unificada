Meteor.publish('atleta', function() {
  return Atleta.find();
});