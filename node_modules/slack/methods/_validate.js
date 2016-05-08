'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

var _api = require('./api.json');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(method, params) {
  // get all the requried params for this method
  var required = _api2.default[method].filter(function (param) {
    return param.required === 'Required';
  });
  // collect any missing params
  var missing = required.filter(function (param) {
    return typeof params[param.name] === 'undefined';
  });
  // optimisitcally assume the best
  var err = false;
  // but have a plan for the worst
  if (missing.length) {
    var bullets = missing.map(function (param) {
      return '- ' + param.name + ' ... ' + param.description;
    });
    var msg = method + ' missing params:\n' + bullets.join('\n');
    err = Error(msg);
  }
  return err;
} //
// validate returns an error object if any required params are missing
//
// example usage:
//
//   // token and id are required params
//   function apiCall(params, callback) {
//     let err = validate('api.signature', params)
//     if (err) {
//       callback(err)
//     }
//     else {
//       // do api call
//     }
//   }
//

module.exports = exports['default'];