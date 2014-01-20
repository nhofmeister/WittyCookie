Lists = new Meteor.Collection("lists");
Users = new Meteor.Collection("users");

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

          Lists.insert({ "proverb" : "Irren ist menschlich.",
          "tags" : [ "german","wisdom"]}); 
          Lists.insert({ "proverb" : "Du hast es nicht vergessen, du hast es nicht gemacht! - ein Mathelehrer",
          "tags" : [ "german","citation"]}); 
          Lists.insert({ "proverb" : "It is possible to commit no errors and still lose. That is not a weakness, that is live. - Captain Picard to Data",
          "tags" : [ "english","star trek"]}); 
          Lists.insert({ "proverb" : "I could have killed 'em all, I could've killed you. In town you're the law, out here it's me. Don't push it! Don't push it or I'll give you a war you won't believe. Let it go. Let it go! - John Rambo",
          "tags" : [ "english","rambo"]}); 
          Lists.insert({ "proverb" : "Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.",
          "tags" : [ "english","wisdom"]}); 
          Lists.insert({ "proverb" : "Wenn das Wörtchen wenn nicht wär, wär mein Vater Müllionär.",
          "tags" : [ "german","wisdom"]}); 


      };
    


});
