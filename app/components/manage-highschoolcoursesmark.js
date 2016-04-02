import Ember from 'ember';

export default Ember.Component.extend({
    isHighschoolcoursesmarkFormEditing: false,
    store: Ember.inject.service(),
    selectedStudent: null,
    //selectedStudent: null,

    studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

    actions: {
      saveHighschoolcoursesmark () {
        var myStore = this.get('store');
        var chosenStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
        var newHighschoolcoursesmark = myStore.createRecord('highschoolcoursesmark', {
          level: this.get('level'),
          source: this.get('source'),
          unit: this.get('unit'),
          grade: this.get('grade'),
          secondaryschool: chosenStudent//,
          //highshchoolsubject: 
        });

        newHighschoolcoursesmark.save().then(() => {
          this.set('isHighschoolcoursesmarkFormEditing', false);
        });
      },

      selectStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

      addHighschoolcoursesmark () {
        this.set('isHighschoolcoursesmarkFormEditing', true);
      },

      cancelHighschoolcoursesmark () {
        this.set('isHighschoolcoursesmarkFormEditing', false);
      }

    }
});
