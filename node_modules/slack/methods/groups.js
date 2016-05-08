'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _groups = require('./groups.archive');

var _groups2 = _interopRequireDefault(_groups);

var _groups3 = require('./groups.close');

var _groups4 = _interopRequireDefault(_groups3);

var _groups5 = require('./groups.create');

var _groups6 = _interopRequireDefault(_groups5);

var _groups7 = require('./groups.createChild');

var _groups8 = _interopRequireDefault(_groups7);

var _groups9 = require('./groups.history');

var _groups10 = _interopRequireDefault(_groups9);

var _groups11 = require('./groups.info');

var _groups12 = _interopRequireDefault(_groups11);

var _groups13 = require('./groups.invite');

var _groups14 = _interopRequireDefault(_groups13);

var _groups15 = require('./groups.kick');

var _groups16 = _interopRequireDefault(_groups15);

var _groups17 = require('./groups.leave');

var _groups18 = _interopRequireDefault(_groups17);

var _groups19 = require('./groups.list');

var _groups20 = _interopRequireDefault(_groups19);

var _groups21 = require('./groups.mark');

var _groups22 = _interopRequireDefault(_groups21);

var _groups23 = require('./groups.open');

var _groups24 = _interopRequireDefault(_groups23);

var _groups25 = require('./groups.rename');

var _groups26 = _interopRequireDefault(_groups25);

var _groups27 = require('./groups.setPurpose');

var _groups28 = _interopRequireDefault(_groups27);

var _groups29 = require('./groups.setTopic');

var _groups30 = _interopRequireDefault(_groups29);

var _groups31 = require('./groups.unarchive');

var _groups32 = _interopRequireDefault(_groups31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  archive: _groups2.default,
  close: _groups4.default,
  create: _groups6.default,
  createChild: _groups8.default,
  history: _groups10.default,
  info: _groups12.default,
  invite: _groups14.default,
  kick: _groups16.default,
  leave: _groups18.default,
  list: _groups20.default,
  mark: _groups22.default,
  open: _groups24.default,
  rename: _groups26.default,
  setPurpose: _groups28.default,
  setTopic: _groups30.default,
  unarchive: _groups32.default
};
module.exports = exports['default'];