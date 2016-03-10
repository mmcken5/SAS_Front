import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingLogicalExpression: false,
  
    admissionruleModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('admissionrule').then(function(records){
        self.set ('selectedAdmissionrule', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('admissionrule');
    }),

  actions: {
    saveLogicalExpression (){
      var myStore = this.get('store');
      var chosenAdmissionrule = myStore.peekRecord('admissionrule', this.get ('selectedAdmissionrule'));
      var newLogicalExpression = myStore.createRecord('logicalexpression', {
        booleanExp: this.get('expression'),
        logicalLink: this.get('link'),
        admissionrule: chosenAdmissionrule
      });
      newLogicalExpression.save().then(() => {
        this.set('isManagingLogicalExpression', false);
      });
    },

    cancelLogicalExpression() {
      this.set('isManagingLogicalExpression', false);
    },

    manageLogicalExpression() {
      this.set('isManagingLogicalExpression', true);
    },

    addLogicalExpression() {
      this.set('isManagingLogicalExpression', true);
    },
    doneLogicalExpression(){
      this.set('isManagingLogicalExpression', false);
    }
  }
});