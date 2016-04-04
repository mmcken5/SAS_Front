import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('view-highschoolsubject', 'Integration | Component | view highschoolsubject', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{view-highschoolsubject}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#view-highschoolsubject}}
      template block text
    {{/view-highschoolsubject}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
