const assert = require('assert');

function equal(actual, expected) {
	try {
		assert.equal(actual, expected);
		console.log('matched');
	} catch (e) {
		console.log(e);
	}
}

equal(1, 1);
equal(1, '1');
equal(NaN, NaN); // error
equal(1, 2);
