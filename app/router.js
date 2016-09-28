import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('projects');
  this.route('admin', function() {
    this.route('generate_project');
    this.route('view_projects');
    this.route('view_messages');
  });
});

export default Router;
