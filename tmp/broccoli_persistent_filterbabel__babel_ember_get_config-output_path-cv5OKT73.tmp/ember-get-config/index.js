define('ember-get-config/index', ['exports', 'super-rentals/config/environment'], function (exports, _superRentalsConfigEnvironment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _superRentalsConfigEnvironment['default'];
    }
  });
});