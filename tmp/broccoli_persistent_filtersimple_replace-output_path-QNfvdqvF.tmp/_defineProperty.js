import getNative from './_getNative';

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch(e) { return null; }
}());

export default defineProperty;
