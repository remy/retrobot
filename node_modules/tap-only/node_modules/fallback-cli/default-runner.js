/* eslint global-require: 0 */
'use strict';
module.exports = defaultRunner;

function defaultRunner(opts) {
	return require(opts.cli);
}
