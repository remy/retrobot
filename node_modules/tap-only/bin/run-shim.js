#!/usr/bin/env node
'use strict';

require('fallback-cli')('tap/bin/run.js', function (opts) {
	if (opts.localCli) {
		console.warn('Running Local TAP install');
		require(opts.localCli);
	} else if (opts.globalCli) {
		console.warn('Running Global TAP install');
		require(opts.globalCli);
	} else {
		console.warn('No TAP install found. Run `npm i tap`, or `npm i -g tap`');
		process.exit(1);
	}
});



