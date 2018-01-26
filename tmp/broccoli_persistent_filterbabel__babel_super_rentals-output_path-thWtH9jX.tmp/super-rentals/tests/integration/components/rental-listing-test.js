define('super-rentals/tests/integration/components/rental-listing-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var EmberObject = Ember.Object;
  var run = Ember.run;


  var rental = EmberObject.create({
    image: 'fake.png',
    title: 'test-title',
    owner: 'test-owner',
    propertyType: 'test-type',
    city: 'test-city',
    bedrooms: 3
  });

  (0, _emberQunit.moduleForComponent)('rental-listing', 'Integration | Component | rental listing', {
    integration: true
  });

  (0, _emberQunit.test)('should display rental details', function (assert) {
    this.set('rentalObj', rental);
    this.render(Ember.HTMLBars.template({
      "id": "s7erpyrj",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"rental-listing\",null,[[\"rental\"],[[19,0,[\"rentalObj\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
    assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'Owner: test-owner');
  });

  (0, _emberQunit.test)('should toggle wide class on click', function (assert) {
    this.set('rentalObj', rental);
    this.render(Ember.HTMLBars.template({
      "id": "s7erpyrj",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"rental-listing\",null,[[\"rental\"],[[19,0,[\"rentalObj\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
    run(function () {
      return document.querySelector('.image').click();
    });
    assert.equal(this.$('.image.wide').length, 0, 'rendered wide after click');
    run(function () {
      return document.querySelector('.image').click();
    });
    assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
  });
});