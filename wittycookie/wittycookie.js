if (Meteor.isClient) {
    
  // var wittyMessages=new Array("foo","bar","blub");
    
  Template.hello.greeting = function () {
    return "Welcome to wittycookie.";
  };


  Template.hello.events({
    'click #b1' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    },
    'click #b2' : function () {
      alert("foo");

    },
    'click #js-keks' : function () {
      $( "#js-keks" ).effect( "shake" );
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
