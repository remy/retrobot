'use strict';
var path = require('path');
var dirname = path.dirname;
var resolve = require('resolve');
var caller = require('caller');
var normalizeArgs = require('./normalize-args');

module.exports = function (opts) {
	opts = normalizeArgs(arguments);

	var currentDirectory = process.cwd();
	var shimDirectory = dirname(caller());

	var localCli = resolveSync(opts.path, currentDirectory);
	var localPkg = null;
	if (localCli) {
		localPkg = resolveSync(opts.pkgPath, currentDirectory);
	}

	var globalCli = resolveSync(opts.relative, shimDirectory);
	if (globalCli === localCli) {
		globalCli = null;
	}
	var globalPkg = null;
	if (globalCli) {
		globalPkg = resolveSync(
			opts.globalPkg,
			shimDirectory
		);
	}

	if (!(localCli || globalCli)) {
		throw new Error('fallback-cli could not find local or global');
	}

	var callbackOptions = {
		moduleName: opts.moduleName,
		localCli: localCli,
		localPkg: localPkg,
		globalCli: globalCli,
		globalPkg: globalPkg,
		cli: localCli || globalCli,
		pkg: localCli ? localPkg : globalPkg,
		location: localCli ? 'local' : 'global'
	};

	return opts.run(callbackOptions);
};

function resolveSync(path, basedir) {
	try {
		return resolve.sync(path, {basedir: basedir});
	} catch (e) {
		return null;
	}
}
