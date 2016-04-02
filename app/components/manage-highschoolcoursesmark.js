import Ember from 'ember';

export default Ember.Component.extend({
    isHighschoolcoursesmarkFormEditing: false,
    store: Ember.inject.service(),
    selectedSchool: null,
    selectedSubject: null,

    secondarySchoolModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('secondaryschool').then(function(records){
        self.set ('selectedSchool', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('secondaryschool');
    }),

    highSchoolSubjectModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('highschoolsubject').then(function(records){
        self.set ('selectedSubject', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('highschoolsubject');
    }),

    actions: {
      saveHighschoolcoursesmark () {
        var myStore = this.get('store');
        var chosenSchool = myStore.peekRecord('secondaryschool', this.get ('selectedSchool'));
        var chosenSubject = myStore.peekRecord('highschoolsubject', this.get ('selectedSubject'));
        var newHighschoolcoursesmark = myStore.createRecord('highschoolcoursesmark', {
          level: this.get('level'),
          source: this.get('source'),
          unit: this.get('unit'),
          grade: this.get('grade'),
          secondaryschool: chosenSchool,
          highschoolsubject: chosenSubject
        });

        newHighschoolcoursesmark.save().then(() => {
          this.set('isHighschoolcoursesmarkFormEditing', false);
        });
      },

      selectSchool (secondarySchool){
        this.set('selectedSchool', secondarySchool);
        Ember.Logger.log(this.get('selectedSchool'));
      },

      selectSubject (subject){
        this.set('selectedSubject', subject);
        Ember.Logger.log(this.get('selectedSubject'));
      },

      addHighschoolcoursesmark () {
        this.set('isHighschoolcoursesmarkFormEditing', true);
      },

      cancelHighschoolcoursesmark () {
        this.set('isHighschoolcoursesmarkFormEditing', false);
      }

    }
});
