import Ember from 'ember';

export default Ember.Controller.extend({

  model() {
    return this.store.findAll('aboutdata');
  },

  actions: {
    submitAbout(current) {
      // ensure that the description is only ever going to be looking at the last available record

      const description = this.get('description');

      const newAbout = this.store.createRecord('aboutdata', {description: description});

      current.destroyRecord();

      newAbout.save().then(
        console.log('Successfully updated about me.')
      );
    }
  }
});
