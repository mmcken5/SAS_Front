import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-highschoolcoursesmark', 'Integration | Component | delete highschoolcoursesmark', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{delete-highschoolcoursesmark}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#delete-highschoolcoursesmark}}
      template block text
    {{/delete-highschoolcoursesmark}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
