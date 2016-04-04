import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('view-highschoolcoursesmark', 'Integration | Component | view highschoolcoursesmark', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{view-highschoolcoursesmark}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#view-highschoolcoursesmark}}
      template block text
    {{/view-highschoolcoursesmark}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
