'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pins = require('./pins.add');

var _pins2 = _interopRequireDefault(_pins);

var _pins3 = require('./pins.list');

var _pins4 = _interopRequireDefault(_pins3);

var _pins5 = require('./pins.remove');

var _pins6 = _interopRequireDefault(_pins5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _pins2.default, list: _pins4.default, remove: _pins6.default
};
module.exports = exports['default'];