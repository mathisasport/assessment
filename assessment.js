Questions = new Mongo.Collection('questions');
StudentResponses = new Mongo.Collection('student_responses');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
      questions: function(){
	  return Questions.find({},{sort: {number:1}});
      }
  });  
  Template.multiple_choice.helpers({
      number: function(){
	  return this.number;
      },
      question_id: function(){
	  return this._id;
      },

  });
  Template.submit_answers.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.submit_answers.events({
    'click button': function() {
      Session.set('counter', Session.get('counter') + 1);
      $('form').each(function(){
	  var number = $(this).attr('name');
	  var my_query = "input[name=" + number +"]:checked";
          var radioValue = $(my_query).val();
	  StudentResponses.insert({question_number: number,response: radioValue});
      });
    }  
  });  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
