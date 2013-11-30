
if (Meteor.isServer) {
  Meteor.startup(function () {
    Quotes = new Meteor.Collection("quotes");
  });
}
