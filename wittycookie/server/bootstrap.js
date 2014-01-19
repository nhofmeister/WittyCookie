// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  console.log("bootstrap.js");
  if (Lists.find().count() === 0) {
    console.log("initializing lists");

          Lists.insert({ "proverb" : "Rotation. Ich beruehre die Tastatur. Sonnenaufgang.",
          "tags" : [ "german", "haiku" ]});     
          Lists.insert({ "proverb" : "Ein Hamsterrad sieht von innen aus wie eine Leiter.",
          "tags" : [ "german"]}); 
          Lists.insert({ "proverb" : "Do or do not, there is no try. - Master Yoda",
          "tags" : [ "english", "star wars" ]}); 
          Lists.insert({ "proverb" : "In jedem Scheitern steckt eine Chance.",
          "tags" : [ "german","wisdom"]}); 
          Lists.insert({ "proverb" : "Von mir lernen, heißt siegen lernen. - Holg0r",
          "tags" : [ "german","citation"]}); 

    /*var data = [
      {name: "proverbs",
       contents: [
         ["Rotation. Ich beruehre die Tastatur. Sonnenaufgang.", "german", "haiku"],
         ["Ein Hamsterrad sieht von innen aus wie eine Leiter.","german"],
         ["In jedem Scheitern steckt eine Chance.","german", "wisdom"],
         ["Irren ist menschlich.", "german", "wisdom"],
         ["Von mir lernen, heisst siegen lernen. - Holg0r", "german", "citation"],
         ["Do or do not, there is no try. - Master Yoda", "english", "star wars"],
         ["Du hast es nicht vergessen, du hast es nicht gemacht! - ein Mathelehrer", "german", "citation"],
         ["It is possible to commit no errors and still lose. That is not a weakness, that is live. - Captain Picard to Data", "english", "star trek"],
         ["I could have killed 'em all, I could've killed you. In town you're the law, out here it's me. Don't push it! Don't push it or I'll give you a war you won't believe. Let it go. Let it go! - John Rambo", "english", "rambo"],
         ["Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.", "english", "wisdom"]
       ]*/ 
      };
    


});
