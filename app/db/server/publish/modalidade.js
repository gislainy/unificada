Meteor.publish('modalidade', function() {
  return Modalidade.find();
});