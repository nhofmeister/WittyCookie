var getRandomMessage = function()
{
   var wittyMessages=new Array("Rotation. Ich beruehre die Tastatur. Sonnenaufgang.",
                               "Von mir lernen, heisst siegen lernen. - Holg0r",
                               "Do or do not, there is no try. - Master Yoda",
                               "Du hast es nicht vergessen, du hast es nicht gemacht! - ein Mathelehrer",
                               "It is possible to commit no errors and still lose. That is not a weakness, that is live. - Captain Picard to Data",
                               "I could have killed 'em all, I could've killed you. In town you're the law, out here it's me. Don't push it! Don't push it or I'll give you a war you won't believe. Let it go. Let it go! - John Rambo");   
   var i = Math.floor(Math.random()*wittyMessages.length);
   console.log(i);
   return wittyMessages[i];
};

if (Meteor.isClient) {
    
  Template.hello.greeting = function () {
    return "Keks";
  };


  Template.hello.events({
     
    'click #b1' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
      {
        $("#content").text(getRandomMessage());
      }  
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
