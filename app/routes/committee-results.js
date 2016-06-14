import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var urlHouse = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=ab3a673b4f5e4db09dad0ec880a7ac8a';
    var urlSenate = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&apikey=ab3a673b4f5e4db09dad0ec880a7ac8a';

    var houseCommitteesList = Ember.$.getJSON(urlHouse).then(function(responseJSON){
      return responseJSON.results;
    });

    var senateCommitteesList = Ember.$.getJSON(urlSenate).then(function(responseJSON){
      return responseJSON.results;
    });

    console.log(houseCommitteesList);
    console.log(senateCommitteesList);

    var bothCommitteesList = {
      senate: senateCommitteesList,
      house: houseCommitteesList,
    };

    console.log(bothCommitteesList);

    return bothCommitteesList;
  },

});
