'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactions = require('./reactions.add');

var _reactions2 = _interopRequireDefault(_reactions);

var _reactions3 = require('./reactions.get');

var _reactions4 = _interopRequireDefault(_reactions3);

var _reactions5 = require('./reactions.list');

var _reactions6 = _interopRequireDefault(_reactions5);

var _reactions7 = require('./reactions.remove');

var _reactions8 = _interopRequireDefault(_reactions7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _reactions2.default, get: _reactions4.default, list: _reactions6.default, remove: _reactions8.default
};
module.exports = exports['default'];