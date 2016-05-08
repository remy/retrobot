'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exec;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var req = _request2.default.defaults({
  baseUrl: 'https://slack.com/api/',
  headers: {
    Accept: 'application/json'
  },
  json: true
});

function exec(url, form, callback) {

  // always post
  req.post({ url: url, form: form }, function (err, res) {
    if (err) {
      // if request failed bubble the error
      callback(err);
    } else if (res.body.error) {
      // if Slack returns an error bubble the error
      callback(Error(res.body.error));
    } else {
      // success! clean up the response
      var json = res.body;
      delete json.ok;
      callback(null, json);
    }
  });
  /// eom
}
module.exports = exports['default'];