import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    result: DS.attr(),
    student: DS.belongsTo('student', { async: true }),
    commentcodes: DS.hasMany('commentcode', { async: true })
});
