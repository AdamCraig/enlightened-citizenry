import Ember from 'ember';

var urlHouse = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=ab3a673b4f5e4db09dad0ec880a7ac8a';
var urlSenate = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=ab3a673b4f5e4db09dad0ec880a7ac8a';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      house: Ember.$.getJSON(urlHouse).then(function(responseJSON){
        return responseJSON.results;
      }),
      senate: Ember.$.getJSON(urlSenate).then(function(responseJSON){
        return responseJSON.results;
      }),
    });
  },

});
