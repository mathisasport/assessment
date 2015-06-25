Questions = new Mongo.Collection('questions');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
      questions: function(){
	  return Questions.find({},{sort: {number:-1}});
      }
  });  
  Template.multiple_choice.helpers({
      number: function(){
	  return this.number;
      }
  });
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
