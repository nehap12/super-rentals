define('super-rentals/tests/integration/helpers/rental-property-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('rental-property-type', 'helper:rental-property-type', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "0PwxknhX",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"rental-property-type\",[[19,0,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'Standalone');
  });
});