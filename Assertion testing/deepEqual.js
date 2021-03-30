const assert = require('assert');
const message = "Oops it's seems that you have entered wrong values, try next time";

function deep_equal(v1, v2) {
	try {
		assert.deepEqual(v1, v2); //you can add message also that would be replaced by ERR_ASSERTION.
		console.log('\n !No errors, nice you did it \n');
	} catch (e) {
		console.log(e);
	}
}

deep_equal([[[1, 2, 3, 4]], 4, 3], [[[1, 2, '3', 4]], 4, 3]);
deep_equal({ a: { b: 10 } }, { a: { b: 10 } });
deep_equal({ a: { b: 10 } }, { a: { c: 10 } });
deep_equal('+00000000', false);
