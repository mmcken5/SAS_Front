import DS from 'ember-data';

export default DS.Model.extend({
    order: DS.attr(),
    eligibility: DS.attr(),
    student: DS.belongsTo('student', { async: true }),
    academicprogramcode: DS.belongsTo('academicprogramcode', {async: true})
});