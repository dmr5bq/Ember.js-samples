import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitSkill() {
      const n = this.get('name');
      const lev = this.get('level');

      const newSkill = this.store.createRecord('skill', {name: n, level: lev});

      newSkill.save().then(
        console.log('Saving the skill ' + name + ' was successful.')
      );

      this.set('response', `Skill added to the database`);
    }
  }
});
