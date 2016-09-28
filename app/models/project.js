import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    inProgress: DS.attr(),
    linkOut: DS.attr()
});
