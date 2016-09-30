import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', function () {
    this.route('skills');
  });
  this.route('contact');
  this.route('projects');
  this.route('admin', function() {
    this.route('generate_project');
    this.route('view_messages');
    this.route('edit_skills');
    this.route('edit_about_me');
  });
});

export default Router;
