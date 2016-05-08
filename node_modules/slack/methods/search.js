'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _search = require('./search.all');

var _search2 = _interopRequireDefault(_search);

var _search3 = require('./search.files');

var _search4 = _interopRequireDefault(_search3);

var _search5 = require('./search.messages');

var _search6 = _interopRequireDefault(_search5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  all: _search2.default, files: _search4.default, messages: _search6.default
};
module.exports = exports['default'];