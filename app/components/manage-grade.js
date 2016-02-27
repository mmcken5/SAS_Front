import Ember from 'ember';

export default Ember.Component.extend({
    isGradeFormEditing: false,
    store: Ember.inject.service(),
    selectedCoursecode: null,
    selectedStudent: null,

    coursecodeModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('coursecode').then(function(records){
        self.set ('selectedCoursecode', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('coursecode');
    }),

    studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

    actions: {
      saveGrade () {
        var myStore = this.get('store');
        var chosenCoursecode = myStore.peekRecord('coursecode', this.get ('selectedCoursecode'));
        var chosenStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
        var newGrade = myStore.createRecord('grade', {
          mark: this.get('mark'),
          section: this.get('section'),
          coursecode: chosenCoursecode,
          student: chosenStudent
        });

        newGrade.save().then(() => {
          this.set('isGradeFormEditing', false);
        });
      },

      selectStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

      selectCoursecode (coursecode){
        this.set('selectedCoursecode', coursecode);
        Ember.Logger.log(this.get('selectedCoursecode'));
      },

      addNewGrade () {
        this.set('isGradeFormEditing', true);
      },

      cancel () {
        this.set('isGradeFormEditing', false);
      }

    }
});