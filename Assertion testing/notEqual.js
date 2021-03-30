const assert = require('assert');

function not_equal(actual, expected) {
	try {
		assert.notEqual(actual, expected);
		console.log('\n passed \n');
	} catch (e) {
		console.log(e);
	}
}

not_equal(1, 2);
not_equal(1, 1);
not_equal(1, '1');
not_equal({ a: 1 }, { a: 1 });
