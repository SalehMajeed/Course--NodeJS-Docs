const assert = require('assert');

function fail_multi_parameters(actual, expected, message, operator) {
	try {
		assert.fail(actual, expected, message, operator);
	} catch (e) {
		console.log(e);
	}
}

fail_multi_parameters(1, 2, undefined, '!==', fail_multi_parameters);
