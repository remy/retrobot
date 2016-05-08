'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _team = require('./team.accessLogs');

var _team2 = _interopRequireDefault(_team);

var _team3 = require('./team.info');

var _team4 = _interopRequireDefault(_team3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  accessLogs: _team2.default,
  info: _team4.default
};
module.exports = exports['default'];