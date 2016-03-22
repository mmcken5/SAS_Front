import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingStudents: true,
  isManagingGrades: false,
  isManagingDistributionresults: false,
  isManagingItrprograms: false,
  isManagingProgramadministration: false,
  isManagingAdmissionrules: false,
  model: null,
  
    model: Ember.computed(function(){
      var self = this;
      return this.get('store').findAll('student');
    }),

  actions: {
    manageStudents() {
      this.set('isManagingStudents', true);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
      // ADDED
      this.set('isDistributingStudents', false);
      // END ADDED
    },
    manageGrades() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', true);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
      // ADDED
      this.set('isDistributingStudents', false);
      // END ADDED
    },
    manageDistributionresults() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', true);
      this.set('isManagingItrprograms', false);
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
      // ADDED
      this.set('isDistributingStudents', false);
      // END ADDED
    },
    manageItrprograms() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', true);
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
      // ADDED
      this.set('isDistributingStudents', false);
      // END ADDED
    },
    manageProgramadministration() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
      this.set('isManagingProgramadministration', true);
      this.set('isManagingAdmissionrules', false);
      // ADDED
      this.set('isDistributingStudents', false);
      // END ADDED
    },
    manageAdmissionrules() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', true);
      // ADDED
      this.set('isDistributingStudents', false);
      // END ADDED
    }
    // ADDED MM
    ,
    manageStudentDistribution() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
      this.set('isDistributingStudents', true);
    }
    // END ADDED
  }
});
