var path = require('path');
var twelvePath = require.resolve('./_twelve.scss');

var twelveDir = path.dirname(twelvePath);

function includePaths() {
  return [twelveDir];
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
