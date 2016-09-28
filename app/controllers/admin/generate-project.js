import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        submitProject() {
            const name = this.get('name');
            const desc = this.get('description');
            const link = this.get('linkOut');
            
            const newProject = this.store.createRecord('project', {name: name, description: desc, linkOut: link, inProgress: true});
            
            newProject.save().then(
                console.log('Saving the project ' + name + ' was successful.')
            );
            
            this.set('response', `Project added to the database`);
        }
    }
});
