import DS from 'ember-data'; // Added model 1:00pm

export default DS.Model.extend({
	code: DS.attr(),
	progAction: DS.attr(),
	description: DS.attr(),
	notes: DS.attr(),
  	distributionresult: DS.belongsTo('distributionresult', { async: true }), // TODO: Ask Ouda if we should name the attribute
  																			 //       "distributionresults" or "comment" (refer to schema)
});
