import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + params.committee_id + '&apikey=ab3a673b4f5e4db09dad0ec880a7ac8a';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
