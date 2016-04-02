import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manage-scholarandawardcode', 'Integration | Component | manage scholarandawardcode', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{manage-scholarandawardcode}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#manage-scholarandawardcode}}
      template block text
    {{/manage-scholarandawardcode}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
