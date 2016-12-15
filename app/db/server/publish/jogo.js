Meteor.publish('jogo', function() {
  return Jogo.find();
});