'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('./users.getPresence');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('./users.info');

var _users4 = _interopRequireDefault(_users3);

var _users5 = require('./users.list');

var _users6 = _interopRequireDefault(_users5);

var _users7 = require('./users.setActive');

var _users8 = _interopRequireDefault(_users7);

var _users9 = require('./users.setPresence');

var _users10 = _interopRequireDefault(_users9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getPresence: _users2.default,
  info: _users4.default,
  list: _users6.default,
  setActive: _users8.default,
  setPresence: _users10.default
};
module.exports = exports['default'];