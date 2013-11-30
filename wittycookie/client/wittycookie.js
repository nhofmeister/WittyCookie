var getRandomMessage = function()
{
var wittyMessages=new Array("Rotation. Ich beruehre die Tastatur. Sonnenaufgang.",
                               "Von mir lernen, heisst siegen lernen. - Holg0r",
                               "Do or do not, there is no try. - Master Yoda",
                               "Du hast es nicht vergessen, du hast es nicht gemacht! - ein Mathelehrer",
                               "It is possible to commit no errors and still lose. That is not a weakness, that is live. - Captain Picard to Data",
                               "I could have killed 'em all, I could've killed you. In town you're the law, out here it's me. Don't push it! Don't push it or I'll give you a war you won't believe. Let it go. Let it go! - John Rambo",
                               "Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.",
                               "Ein Hamsterrad sieht von innen aus wie eine Leiter.",
                               "In jedem Scheitern steckt eine Chance.",
                               "Irren ist menschlich.");   
   var i = Math.floor(Math.random()*wittyMessages.length);
   console.log(i);
   return wittyMessages[i];
};

Quotes = new Meteor.Collection("quotes");

  
Template.hello.greeting = function () {
  return "Keks";
};

Template.hello.events({

  'click #cookie' : function () {
    $( "#cookie" ).effect( "shake" );

    var timer = setInterval(function(){
        $('#open-cookie').removeClass('hide');
        $('#closed-cookie').addClass('hide');

        $("#content").text(getRandomMessage());

        window.clearInterval(timer);
        
        Quotes.insert( {foo: "bar"} );
        console.log(Quotes.find().fetch());
    }, 500);


  },
  'click #new-quote-button' : function () {
      Quotes.insert({quote: $('#new-quote-input').val()});
      
      console.log(Quotes.find());
      var allQuotes = Quotes.find();
      var count = 1;
      var quoteString = "";
      allQuotes.forEach(function (bla) {
        quoteString += bla.quote + "<br />";
        count += 1;
      });
      $('#quote-list').html( quoteString );
  },

  'click #find-quote-button' : function () {
      var search = $('#find-quote-input').val();
      var result = Quotes.findOne({quote: search});
      if ( undefined !== result )
        console.log( result );
      else
        alert("");
  }
});