'use strict';
normalizeArgs.validate = validate;
module.exports = normalizeArgs;
var path = require('path');
var assert = require('assert');
var defaultRunner = require('./default-runner');
var thisDir = '.' + path.sep;

function normalizeArgs(args) {
	var opts = args[0];
	if (typeof opts === 'string') {
		opts = {
			path: opts
		};
		if (typeof args[1] === 'string') {
			opts.relative = args[1];
			opts.run = args[2];
		} else {
			opts.run = args[1];
		}
	}
	var cliPath = validate(opts.path, 'string', 'path');
	var relative = validate(opts.relative || thisDir + path.basename(cliPath), 'string', 'relative');
	var run = validate(opts.run || defaultRunner, 'function', 'run');

	var moduleName = cliPath.split(/[\/\\]/)[0];
	var pkgPath = path.join(moduleName, 'package.json');
	var globalPkg = path.join(
		path.dirname(relative),
		path.relative(path.dirname(cliPath), pkgPath)
	);
	if (!(globalPkg.charAt(0) === '.')) {
		globalPkg = thisDir + globalPkg;
	}

	if (path.basename(cliPath, '.js') !== path.basename(relative, '.js')) {
		throw new Error('cliPath(' + cliPath + ') and relativePath(' + relative + ') should point to the same file');
	}

	return {
		path: cliPath,
		relative: relative,
		run: run,
		moduleName: moduleName,
		pkgPath: pkgPath,
		globalPkg: globalPkg
	};
}

function validate(val, type, prop) {
	assert.strictEqual(typeof val, type, 'typeof options.' + prop);
	return val;
}
