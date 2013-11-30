var getRandomMessage = function()
{
   var wittyMessages=new Array("foo","bar","blub");
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

    }
  });
}