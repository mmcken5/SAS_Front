import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  DOB: DS.attr(),
  // ADDED MM
  avg: DS.attr(),
  // END ADDED MM
  resInfo: DS.belongsTo('residency',{ async: true }),
  gender: DS.belongsTo('gender',{ async: true }),
  country: DS.belongsTo('country',{ async: true }),
  province: DS.belongsTo('province',{ async: true }),
  city: DS.belongsTo('city',{ async: true }),
  academicload: DS.belongsTo('academicload',{ async: true }),
  grades: DS.hasMany('grade', { async: true }),
  distributionresults: DS.hasMany('distributionresult', { async: true }),
  itrprograms: DS.hasMany('itrprogram', {async: true})
});
