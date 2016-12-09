Meteor.publish('estoque', function() {
  return Estoque.find();
});