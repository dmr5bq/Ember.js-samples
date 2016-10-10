import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',

  name_empty: Ember.computed.empty('name'),
  email_empty: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  message_empty: Ember.computed.empty('message'),

  name_or_email_empty: Ember.computed.or('name_empty', 'email_empty'),

  isDisabled: Ember.computed.or('name_or_email_empty', 'message_empty'),

  actions: {
    confirmEmail() {
      const name = this.get('name');
      const email = this.get('email');
      const message = this.get('message');

      const emaildata = this.store.createRecord('emaildata', {
        name: name,
        email: email,
        message: message,
        datetime: new Date().toLocaleString()
      });

      emaildata.save();
      this.set('response', `We've sent your email. You'll hear back soon!`);
    }

  }
});
