'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exec;

var _httpplease = require('httpplease');

var _httpplease2 = _interopRequireDefault(_httpplease);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exec(ns, json, callback) {

  var query = _queryString2.default.stringify(json);
  var baseUrl = 'https://slack.com/api/';
  var url = '' + baseUrl + ns + '?' + query;

  _httpplease2.default.get(url, function (err, res) {
    if (err) {
      // if request failed bubble the error
      callback(err);
    } else {
      // success! clean up the response
      var _json = JSON.parse(res.body);
      if (_json.ok) {
        delete _json.ok;
        callback(null, _json);
      } else {
        callback(Error(_json.error));
      }
    }
  });
  /// eom
}
module.exports = exports['default'];