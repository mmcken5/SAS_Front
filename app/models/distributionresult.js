import DS from 'ember-data'; // Added model 1:00pm

export default DS.Model.extend({
  	date: DS.attr(),
  	student: DS.belongsTo('student', { async: true }),
  	commentcodes: DS.hasMany('commentcode', { async: true })
});
