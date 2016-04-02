import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manage-highschoolsubject', 'Integration | Component | manage highschoolsubject', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{manage-highschoolsubject}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#manage-highschoolsubject}}
      template block text
    {{/manage-highschoolsubject}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
