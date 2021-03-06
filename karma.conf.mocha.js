'use strict';

var baseConfig = require('./karma.conf.base.json');

baseConfig.files = baseConfig.files.concat([
	'tests/mocha/test.js'
]);

baseConfig.frameworks = [
	'chai',
	'mocha'
];

module.exports = function(config) {
	config.set(baseConfig);
};