import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    faculty: DS.belongsTo('faculty', {async: true}),
    programadministration: DS.hasMany('programadministration', {async: true})
});