var getRandomMessage = function()
{
   var wittyMessages=new Array("fooxxx","bar","blub");
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
    'click #js-keks' : function () {
      $( "#js-keks" ).effect( "shake" );

      $('.open-cookie').removeClass('hide');
      $('.closed-cookie').removeClass('hide');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
