'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = client;

var _rtm = require('./rtm.start');

var _rtm2 = _interopRequireDefault(_rtm);

var _rtm3 = require('./rtm.events');

var _rtm4 = _interopRequireDefault(_rtm3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// socket factory
function client() {

  // build a new bot every time
  var bot = {
    handlers: {
      started: []
    }
  };

  // generate event handler registration methods
  _rtm4.default.forEach(function (e) {
    bot.handlers[e] = [];
    bot[e] = function (handler) {
      bot.handlers[e].push(handler);
    };
  });

  bot.started = function (handler) {
    bot.handlers['started'].push(handler);
  };

  // kicks up a web socket connection
  bot.listen = function botListen(params) {
    (0, _rtm2.default)(params, function (err, data) {
      if (err) {
        console.error(err, data);
      } else {
        // grab a handle on the socket
        bot.ws = new WebSocket(data.url);
        // delegate everything
        bot.ws.onmessage = function message(e) {
          var json = JSON.parse(e.data);
          bot.handlers[json.type].forEach(function (m) {
            return m.call({}, json);
          });
        };
        // call started callbacks
        bot.handlers['started'].forEach(function (m) {
          return m.call({}, data);
        });
      }
    });
  };

  // closes the socket
  bot.close = function botClose() {
    bot.ws.close();
  };

  //////////
  return bot;
}
module.exports = exports['default'];