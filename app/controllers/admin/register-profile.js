import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitProfile() {
      const first = this.get('firstname');
      const last = this.get('lastname');
      const age = this.get('age');
      const desc = this.get('description');

      const newProfile = this.store.createRecord('profile', {
        firstname: first,
        lastname: last,
        age: age,
        description: desc
      });

      newProfile.save().then(
        console.log('saved the profile')
      );
    }
  }
});
