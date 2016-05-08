#!/usr/bin/env node
'use strict';

console.log(__dirname);
try {
	require('../../tap/bin/run.js');
} catch (e) {
	console.error('could not find global tap executable - tap/bin/run.js');
	process.exit(1);
}
