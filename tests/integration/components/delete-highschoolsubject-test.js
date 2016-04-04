import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-highschoolsubject', 'Integration | Component | delete highschoolsubject', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{delete-highschoolsubject}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#delete-highschoolsubject}}
      template block text
    {{/delete-highschoolsubject}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
