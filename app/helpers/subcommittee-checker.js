import Ember from 'ember';

export function subcommitteeChecker(params) {
  var committee = params[0];

  var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + committee.committee_id + '&apikey=ab3a673b4f5e4db09dad0ec880a7ac8a';

  var helperResult = "Hello!";

  return Ember.$.getJSON(url).then(function(responseJSON) {
    // console.log(responseJSON.count);
    if (responseJSON.count > 0) {
      helperResult = "****";
    } else {
      helperResult = "!!!";
    }
    // console.log("helperResult: " + helperResult);
    return helperResult;
  });

}

export default Ember.Helper.helper(subcommitteeChecker);
