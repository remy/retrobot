'use strict';

var slice = Array.prototype.slice;
var tap = require('tap');
var exclusive = false;
var started = false;
var tests = [];

function assertNotStarted() {
	if (started) {
		throw new Error('already started, use disableAutoStart() to delay start');
	}
}

function test() {
	assertNotStarted();
	if (!exclusive) {
		tests.push(slice.call(arguments));
	}
}

function only() {
	assertNotStarted();
	if (!exclusive) {
		exclusive = true;
		tests = [];
	}
	tests.push(slice.call(arguments));
}

function skip() {
	assertNotStarted();
}

function start() {
	if (started) {
		throw new Error('already started. Can\'t start again');
	}
	tests.forEach(function (args) {
		tap.test.apply(tap, args);
	});
}

var timeout = setTimeout(start);

function disableAutoStart() {
	if (started) {
		throw new Error('already started. It is to late to disable');
	}
	clearTimeout(timeout);
}

module.exports = test;
module.exports.only = only;
module.exports.start = start;
module.exports.skip = skip;
module.exports.disableAutoStart = disableAutoStart;
