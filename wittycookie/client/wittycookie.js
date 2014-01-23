Lists = new Meteor.Collection("lists");


var getRandomMessage = function(usercookie)
{
  var arrayOfUserDocuments=Users.find({cookie:usercookie}).fetch();
  var arrayOfAlreadySeenProverbs = new Array;

  arrayOfUserDocuments.forEach(function(entry) {
      arrayOfAlreadySeenProverbs.push(entry.proverb);
  });

   
   var allQuotes = Lists.find({proverb: {$nin:arrayOfAlreadySeenProverbs}});

   var quotesArray = allQuotes.fetch()
   var i = Math.floor(Math.random()*quotesArray.length);
   
   //console.log("getting proverb for user with cookie:"+usercookie);
    if (quotesArray[i]) 
      {
        return quotesArray[i].proverb;
      }
    else 
      {
        return undefined;
      }
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
          var message = getRandomMessage(document.cookie);

          if (message) 
            {
              $("#content").text(message);
              Users.insert({ "cookie" : document.cookie, "proverb": message});  
            }
            else
            {
              $("#content").text("The End is here!");
            }

          

          window.clearInterval(timer);
      }, 500);


    }
  });

