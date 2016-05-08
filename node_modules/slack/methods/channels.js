'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _channels = require('./channels.archive');

var _channels2 = _interopRequireDefault(_channels);

var _channels3 = require('./channels.create');

var _channels4 = _interopRequireDefault(_channels3);

var _channels5 = require('./channels.history');

var _channels6 = _interopRequireDefault(_channels5);

var _channels7 = require('./channels.info');

var _channels8 = _interopRequireDefault(_channels7);

var _channels9 = require('./channels.invite');

var _channels10 = _interopRequireDefault(_channels9);

var _channels11 = require('./channels.join');

var _channels12 = _interopRequireDefault(_channels11);

var _channels13 = require('./channels.kick');

var _channels14 = _interopRequireDefault(_channels13);

var _channels15 = require('./channels.leave');

var _channels16 = _interopRequireDefault(_channels15);

var _channels17 = require('./channels.list');

var _channels18 = _interopRequireDefault(_channels17);

var _channels19 = require('./channels.mark');

var _channels20 = _interopRequireDefault(_channels19);

var _channels21 = require('./channels.rename');

var _channels22 = _interopRequireDefault(_channels21);

var _channels23 = require('./channels.setPurpose');

var _channels24 = _interopRequireDefault(_channels23);

var _channels25 = require('./channels.setTopic');

var _channels26 = _interopRequireDefault(_channels25);

var _channels27 = require('./channels.unarchive');

var _channels28 = _interopRequireDefault(_channels27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  archive: _channels2.default,
  create: _channels4.default,
  history: _channels6.default,
  info: _channels8.default,
  invite: _channels10.default,
  join: _channels12.default,
  kick: _channels14.default,
  leave: _channels16.default,
  list: _channels18.default,
  mark: _channels20.default,
  rename: _channels22.default,
  setPurpose: _channels24.default,
  setTopic: _channels26.default,
  unarchive: _channels28.default
};
module.exports = exports['default'];