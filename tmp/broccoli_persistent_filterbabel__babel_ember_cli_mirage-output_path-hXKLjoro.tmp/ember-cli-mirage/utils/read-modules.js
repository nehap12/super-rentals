define('ember-cli-mirage/utils/read-modules', ['exports', 'ember', 'lodash/camelCase', 'ember-cli-mirage/utils/inflector', 'require'], function (exports, _ember, _lodashCamelCase, _emberCliMirageUtilsInflector, _require) {
  /* global requirejs, require */
  /* eslint-env node */
  'use strict';

  var assert = _ember['default'].assert;

  /*
    This function looks through all files that have been loaded by Ember CLI and
    finds the ones under /mirage/[factories, fixtures, scenarios, models]/, and exports
    a hash containing the names of the files as keys and the data as values.
  */

  exports['default'] = function (prefix) {
    var modules = ['factories', 'fixtures', 'scenarios', 'models', 'serializers', 'identity-managers'];
    var mirageModuleRegExp = new RegExp('^' + prefix + '/mirage/(' + modules.join('|') + ')');
    var modulesMap = modules.reduce(function (memo, name) {
      memo[(0, _lodashCamelCase['default'])(name)] = {};
      return memo;
    }, {});

    Object.keys(requirejs.entries).filter(function (key) {
      return mirageModuleRegExp.test(key);
    }).forEach(function (moduleName) {
      if (moduleName.match('.jshint')) {
        // ignore autogenerated .jshint files
        return;
      }
      var moduleParts = moduleName.split('/');
      var moduleType = (0, _lodashCamelCase['default'])(moduleParts[moduleParts.length - 2]);
      var moduleKey = moduleParts[moduleParts.length - 1];
      assert('Subdirectories under ' + moduleType + ' are not supported', moduleParts[moduleParts.length - 3] === 'mirage');

      if (moduleType === 'scenario') {
        assert('Only scenario/default.js is supported at this time.', moduleKey !== 'default');
      }

      /*
        Ensure fixture keys are pluralized
      */
      if (moduleType === 'fixtures') {
        moduleKey = (0, _emberCliMirageUtilsInflector.pluralize)(moduleKey);
      }

      var module = (0, _require['default'])(moduleName, null, null, true);
      if (!module) {
        throw new Error(moduleName + ' must export a ' + moduleType);
      }

      var data = module['default'];

      modulesMap[moduleType][(0, _lodashCamelCase['default'])(moduleKey)] = data;
    });

    return modulesMap;
  };
});