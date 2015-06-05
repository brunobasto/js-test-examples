'use strict';

var baseConfig = require('./karma.conf.base.json');

baseConfig.files = [
	'tests/mocha/test.js'
];

baseConfig.frameworks = [
	'chai',
	'mocha'
];

module.exports = function(config) {
	config.set(baseConfig);
};