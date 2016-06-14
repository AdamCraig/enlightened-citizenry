import Ember from 'ember';

export default Ember.Component.extend({
  counter: "hello",
  didRender() {
    var committee = this.get('committee');

    var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + committee.committee_id + '&apikey=ab3a673b4f5e4db09dad0ec880a7ac8a';

    var helperResult = "Hello!";

    var self = this;
    Ember.$.getJSON(url).then(function(responseJSON) {

      if (responseJSON.count > 0) {
        helperResult = Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
      } else {
        helperResult = "";
      }

      self.set('counter', helperResult);
    });
  }


});
