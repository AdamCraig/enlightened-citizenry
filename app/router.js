import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('zip-results', {path : '/zip-result/:zip'});
  this.route('committee-results');
  this.route('subcommittee-results', {path : '/subcommittee-result/:committee_id'});
});

export default Router;
