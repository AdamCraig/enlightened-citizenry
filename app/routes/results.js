import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=ab3a673b4f5e4db09dad0ec880a7ac8a&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON);
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
