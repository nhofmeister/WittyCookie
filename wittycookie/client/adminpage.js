Users = new Meteor.Collection("users");


if (Meteor.isClient) {
    
  Template.userlist.users = function () {
    return Users.find({}, {sort: {cookie: 1}});
  
  };

 

  Template.userlist.events({
     
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
          var message = getRandomMessage(document.cookie);

          $("#content").text(message);

          Users.insert({ "cookie" : document.cookie, "proverb": message});  

          window.clearInterval(timer);
      }, 500);


    }
  });
}