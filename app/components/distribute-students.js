import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isCompleteDistribution: false,
  isDistributionInProgress: false,

  facultyModel: Ember.computed(function(){
    return this.get('store').findAll('faculty');
  }),

  actions: {
    distributeStudents() {
      this.set('isDistributionInProgress', true);
    },

    distributionComplete() {
    	this.set('isCompleteDistribution', true);
    	this.set('isDistributionInProgress', false);
    }
  }
});
