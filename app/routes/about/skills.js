import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('accessed firebase');
    return this.store.findAll('skill');
  }
});
