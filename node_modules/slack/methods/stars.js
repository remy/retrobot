'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stars = require('./stars.add');

var _stars2 = _interopRequireDefault(_stars);

var _stars3 = require('./stars.list');

var _stars4 = _interopRequireDefault(_stars3);

var _stars5 = require('./stars.remove');

var _stars6 = _interopRequireDefault(_stars5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _stars2.default, list: _stars4.default, remove: _stars6.default
};
module.exports = exports['default'];