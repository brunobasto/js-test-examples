'use strict';

var baseConfig = require('./karma.conf.base.json');

baseConfig.files = baseConfig.files.concat([
	'tests/jasmine/test.js'
]);

baseConfig.frameworks = [
	'jasmine'
];

module.exports = function(config) {
	config.set(baseConfig);
};