const assert = require('assert');
const message = "Oops it's seems that you have entered wrong values, try next time";

const date = new Date();
const object = {};
const fake_date = {};
Object.setPrototypeOf(fake_date, Date.prototype);

const symbol1 = Symbol();
const symbol2 = Symbol();

function deep_strict_equal(v1, v2) {
	try {
		assert.deepStrictEqual(v1, v2); //you can add message also that would be replaced by ERR_ASSERTION.
		console.log('\n !No errors, nice you did it \n');
	} catch (e) {
		console.log(e);
	}
}

deep_strict_equal([[[1, 2, 3, 4]], 4, 3], [[[1, 2, '3', 4]], 4, 3]);
deep_strict_equal({ a: { b: 10 } }, { a: { b: 10 } });
deep_strict_equal('0', false);
deep_strict_equal(object, fake_date);
deep_strict_equal(-0, 0);
deep_strict_equal({ [symbol1]: 1 }, { [symbol1]: 1 });
deep_strict_equal({ [symbol1]: 1 }, { [symbol2]: 1 });
