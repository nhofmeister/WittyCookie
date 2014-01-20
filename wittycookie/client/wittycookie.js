Lists = new Meteor.Collection("lists");
Users = new Meteor.Collection("users");

var getRandomMessage = function()
{
   var allQuotes = Lists.find();
   var quotesArray = allQuotes.fetch()
   var i = Math.floor(Math.random()*quotesArray.length);
   
   return quotesArray[i].proverb;
};

if (Meteor.isClient) {
    
  Template.hello.greeting = function () {
    return "Keks";
  };

 

  Template.hello.events({
     
    'click #cookie' : function () {
      $( "#cookie" ).effect( "shake" );
      
      // identiy our visitors via cookie
      if(!document.cookie.match("ident=")) {
        // save the cookie for 5 years
        // attention: the uniqid might not be uniq enough.. might be fixed later...
        document.cookie = "ident=" + (Math.random() + '').replace('0.', '') + ";max-age=" + 60*60*24*365*5;
        // store cookie
          console.log("cookie (created):"+document.cookie)
          
      };

      var timer = setInterval(function(){
          $('#open-cookie').removeClass('hide');
          $('#closed-cookie').addClass('hide');
          var message = getRandomMessage();

          $("#content").text(message);

          Users.insert({ "cookie" : document.cookie, "proverb": message});  

          window.clearInterval(timer);
      }, 500);


    }
  });
}