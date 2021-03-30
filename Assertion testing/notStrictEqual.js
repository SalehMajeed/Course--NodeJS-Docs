const assert = require('assert');

function not_strict_equal(actual, expected) {
	try {
		assert.notStrictEqual(actual, expected);
		console.log('\n passed \n');
	} catch (e) {
		console.log(e);
	}
}

not_strict_equal(1, 2);
not_strict_equal(1, 1);
not_strict_equal(1, '1');
