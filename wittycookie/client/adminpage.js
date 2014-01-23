Users = new Meteor.Collection("users");


  Template.userlist.uniqueusers = function () {
    var userarray=Users.find().fetch();
  
   var u = {}, a = [];
   for(var i = 0, l = userarray.length; i < l; ++i){
      if(u.hasOwnProperty(userarray[i].cookie)) {
         continue;
      }
      //console.log(userarray[i].cookie);
      a.push(userarray[i].cookie);
      u[userarray[i].cookie] = 1;
   }

    return a; //find({}, {sort: {cookie: 1}});
  };


    Template.cookie.cookie = function () {
      return this;
    };


  Template.cookie.proverblist = function () {
    var proverbs=Users.find({cookie:this.toString()}).fetch();
    return proverbs;
  };

  Template.proverb.proverb = function () {
    return this.proverb;      
  };



 

