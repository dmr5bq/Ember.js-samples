import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    submitAbout() {
      // ensure that the description is only ever going to be looking at the last available record

      const description = this.get('description');

      const newAbout = this.store.createRecord('aboutdata', {description: description});

      newAbout.save().then(
        console.log('Successfully updated about me.')
      );
    }
  }
});
