import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('struct-comp-grid-one-column', 'Integration | Component | struct comp grid one column', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{struct-comp-grid-one-column}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#struct-comp-grid-one-column}}
      template block text
    {{/struct-comp-grid-one-column}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
