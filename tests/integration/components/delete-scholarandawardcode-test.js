import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-scholarandawardcode', 'Integration | Component | delete scholarandawardcode', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{delete-scholarandawardcode}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#delete-scholarandawardcode}}
      template block text
    {{/delete-scholarandawardcode}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
