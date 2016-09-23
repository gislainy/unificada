Router.configure({
  layoutTemplate: 'main',
//   loadingTemplate: 'loading',
//   waitOn: function () {
//     return Meteor.subscribe('posts');
//   }
});

Router.map(function () {
  this.route('main', {path: '/'});
});
