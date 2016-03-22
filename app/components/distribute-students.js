import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isCompleteDistribution: false,
  isDistributionInProgress: false,
  student: null,
  grades: null,
  ID: null,
  coursecode: null,


  actions: {
    distributeStudents() {
      this.set('isDistributionInProgress', true);

        // IN PROGRESS 1

        var self = this; // Maintain reference to this javascript file when doing queries (i.e the function call below will assign this = grades)
		var myStore = this.get('store');

		this.set('student', myStore.findAll('student')).then(function(e){
			//for(i= 0; i < i, )

			self.set('ID',e.objectAt(0).get('id'));

			console.log("ID: " + self.get('ID'));
			console.log("Number: " + e.objectAt(0).get('number'));
			console.log(e.objectAt(0).get('firstName'));
			console.log(e.objectAt(0).get('lastName'));

			myStore.query('grade', {student: self.get('ID')}).then(function (grades) {
				self.set('grades', grades);
				self.set('coursecode', grades.objectAt(0).get('coursecode'));
				console.log("Grade 0, coursecode: " + self.get('coursecode'));
				console.log("Grade 0, coursecode ID: " + self.get('coursecode').get('id')); // THIS WORKS
				console.log("Grade 0, coursecode number: " + self.get('coursecode').get('number')); // BUT THIS DOES NOT??
				console.log("Grade 0, coursecode name: " + self.get('coursecode').get('name'));
				console.log("Grade 0, mark: " + grades.objectAt(0).get('mark'));

				// TODO: ADD ANOTHER QUERY TO GET THE COURSECODE OBJECT INSTEAD OF DOING THE THING BELOW, THEN I CAN GET THE ATTRIBUTE (CAN'T CALL 2 .GETS IN A ROW)
				// IN PROGRESS 1
				myStore.query('coursecode', {id: self.get('coursecode').get('id')}).then(function (coursecode) {
					console.log('coursecode id: ' + self.get('coursecode').get('id'));
					console.log("coursecode: " + coursecode); // TODO: PULLS THE WRONG RECORD, DOESN'T SEARCH BY ID FOR SOME REASON
					console.log("coursecode object 0: " + coursecode.objectAt(0));
					console.log("coursecode object 0, number: " + coursecode.objectAt(0).get('number')); // THIS WORKS
					//console.log("coursecode id: " + coursecode.get('id')); // TODO: FIGURE OUT WHY UNDEFINED
					//console.log("coursecode number: " + coursecode.get('number')); // TODO: FIGURE OUT WHY UNDEFINED
				
				});
				// END IN PROGRESS			
						
			});
		})

		
		// END IN PROGRESS
    },

    distributionComplete() {
    	this.set('isCompleteDistribution', true);
    	this.set('isDistributionInProgress', false);
    },

    saveResults() {
    	// TODO: SAVE THE RESULTS IN THE DATABASE
    },

    cancel()
    {
    	this.set('isCompleteDistribution', false);
    	this.set('isDistributionInProgress', false);
    }
  }
});
