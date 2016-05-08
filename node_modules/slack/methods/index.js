'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api.test');

var _api2 = _interopRequireDefault(_api);

var _api3 = require('./api.client');

var _api4 = _interopRequireDefault(_api3);

var _auth = require('./auth.test');

var _auth2 = _interopRequireDefault(_auth);

var _channels = require('./channels');

var _channels2 = _interopRequireDefault(_channels);

var _chat = require('./chat');

var _chat2 = _interopRequireDefault(_chat);

var _dnd = require('./dnd');

var _dnd2 = _interopRequireDefault(_dnd);

var _emoji = require('./emoji.list');

var _emoji2 = _interopRequireDefault(_emoji);

var _files = require('./files');

var _files2 = _interopRequireDefault(_files);

var _groups = require('./groups');

var _groups2 = _interopRequireDefault(_groups);

var _im = require('./im');

var _im2 = _interopRequireDefault(_im);

var _mpim = require('./mpim');

var _mpim2 = _interopRequireDefault(_mpim);

var _oauth = require('./oauth.access');

var _oauth2 = _interopRequireDefault(_oauth);

var _reactions = require('./reactions');

var _reactions2 = _interopRequireDefault(_reactions);

var _pins = require('./pins');

var _pins2 = _interopRequireDefault(_pins);

var _rtm = require('./rtm.client');

var _rtm2 = _interopRequireDefault(_rtm);

var _rtm3 = require('./rtm.start');

var _rtm4 = _interopRequireDefault(_rtm3);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _stars = require('./stars');

var _stars2 = _interopRequireDefault(_stars);

var _team = require('./team');

var _team2 = _interopRequireDefault(_team);

var _usergroups = require('./usergroups');

var _usergroups2 = _interopRequireDefault(_usergroups);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var describe = '\n  slack\n    api.client(token)\n    api.test(params, (err, data)=>)\n    auth.test(token, (err, data)=>)\n    channels.archive({token, channel}, (err, data)=>)\n    channels.create({token, name}, (err, data)=>)\n    channels.history({token, channel}, (err, data)=>)\n    channels.info\n    channels.invite\n    channels.join\n    channels.kick\n    channels.leave\n    channels.list({token, exclude_archived}, (err, data)=>)\n    channels.mark\n    channels.rename\n    channels.setPurpose\n    channels.setTopic\n    channels.unarchive\n    chat.delete\n    chat.postMessage({token, text, channel}, (err, data)=>)\n    chat.update\n    emoji.list\n    files.delete\n    files.info\n    files.list\n    files.upload\n    groups.archive\n    groups.close\n    groups.create\n    groups.createChild\n    groups.history\n    groups.info\n    groups.invite\n    groups.kick\n    groups.leave\n    groups.list\n    groups.mark\n    groups.open\n    groups.rename\n    groups.setPurpose\n    groups.setTopic\n    groups.unarchive\n    im.close\n    im.history\n    im.list\n    im.mark\n    im.open\n    mpim.close\n    mpim.history\n    mpim.list\n    mpim.mark\n    mpim.open\n    oauth.access({client_id, client_secret, code}, (err, data)=>)\n    pins.add\n    pins.list\n    pins.remove\n    reactions.add\n    reactions.get\n    reactions.list\n    reactions.remove\n    rtm.client()\n    rtm.start({token}, (err, data)=>)\n    search.all\n    search.files\n    search.messages\n    stars.add\n    stars.list\n    stars.remove\n    team.acccessLogs\n    team.info(token, (err, data)=>)\n    usergroups.create\n    usergroups.disable\n    usergroups.enable\n    usergroups.list\n    usergroups.update\n    usergroups.users.list\n    usergroups.users.update\n    users.getPresence\n    users.info\n    users.list(token, (err, data)=>)\n    users.setActive\n    users.setPresence\n';

exports.default = {
  describe: describe,
  api: { test: _api2.default, client: _api4.default },
  auth: { test: _auth2.default },
  channels: _channels2.default,
  chat: _chat2.default,
  dnd: _dnd2.default,
  emoji: { list: _emoji2.default },
  files: _files2.default,
  groups: _groups2.default,
  im: _im2.default,
  mpim: _mpim2.default,
  oauth: { access: _oauth2.default },
  reactions: _reactions2.default,
  pins: _pins2.default,
  rtm: { client: _rtm2.default, start: _rtm4.default },
  search: _search2.default,
  stars: _stars2.default,
  team: _team2.default,
  usergroups: _usergroups2.default,
  users: _users2.default
};
module.exports = exports['default'];