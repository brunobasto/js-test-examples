'use strict';

var baseConfig = require('./karma.conf.base.json');

baseConfig.files = baseConfig.files.concat([
	'tests/qunit/test.js'
]);

baseConfig.frameworks = [
	'qunit'
];

module.exports = function(config) {
	config.set(baseConfig);
};