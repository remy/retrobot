'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usergroups = require('./usergroups.create');

var _usergroups2 = _interopRequireDefault(_usergroups);

var _usergroups3 = require('./usergroups.disable');

var _usergroups4 = _interopRequireDefault(_usergroups3);

var _usergroups5 = require('./usergroups.enable');

var _usergroups6 = _interopRequireDefault(_usergroups5);

var _usergroups7 = require('./usergroups.list');

var _usergroups8 = _interopRequireDefault(_usergroups7);

var _usergroups9 = require('./usergroups.update');

var _usergroups10 = _interopRequireDefault(_usergroups9);

var _usergroupsUsers = require('./usergroups.users.list');

var _usergroupsUsers2 = _interopRequireDefault(_usergroupsUsers);

var _usergroupsUsers3 = require('./usergroups.users.update');

var _usergroupsUsers4 = _interopRequireDefault(_usergroupsUsers3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: _usergroups2.default,
  disable: _usergroups4.default,
  enable: _usergroups6.default,
  list: _usergroups8.default,
  update: _usergroups10.default,
  users: {
    list: _usergroupsUsers2.default,
    update: _usergroupsUsers4.default
  }
};
module.exports = exports['default'];