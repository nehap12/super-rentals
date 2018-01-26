define('super-rentals/components/rental-listing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    isWide: false,
    actions: {
      toggleImageSize: function toggleImageSize() {
        this.toggleProperty('isWide');
      }
    }
  });
});