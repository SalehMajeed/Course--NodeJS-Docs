const assert = require('assert');

function strict_equal(actual, expected) {
	try {
		assert.strictEqual(actual, expected);
		console.log('\n passed \n');
	} catch (e) {
		console.log(e);
	}
}

strict_equal(1, 1);
strict_equal(1, '1');
