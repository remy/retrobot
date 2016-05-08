'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _im = require('./im.close');

var _im2 = _interopRequireDefault(_im);

var _im3 = require('./im.history');

var _im4 = _interopRequireDefault(_im3);

var _im5 = require('./im.list');

var _im6 = _interopRequireDefault(_im5);

var _im7 = require('./im.mark');

var _im8 = _interopRequireDefault(_im7);

var _im9 = require('./im.open');

var _im10 = _interopRequireDefault(_im9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  close: _im2.default, history: _im4.default, list: _im6.default, mark: _im8.default, open: _im10.default
};
module.exports = exports['default'];