'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chat = require('./chat.delete');

var _chat2 = _interopRequireDefault(_chat);

var _chat3 = require('./chat.postMessage');

var _chat4 = _interopRequireDefault(_chat3);

var _chat5 = require('./chat.update');

var _chat6 = _interopRequireDefault(_chat5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  postMessage: _chat4.default, delete: _chat2.default, update: _chat6.default
};
module.exports = exports['default'];