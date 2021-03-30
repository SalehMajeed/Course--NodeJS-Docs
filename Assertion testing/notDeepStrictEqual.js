const assert = require('assert');

function not_deep_strict_equal(actual, expected) {
	try {
		assert.notDeepStrictEqual(actual, expected);
		console.log('\n passed \n');
	} catch (e) {
		console.log(e);
	}
}

not_deep_strict_equal('i will pass', 'I will pass');
not_deep_strict_equal('i will pass', 'i will pass');
not_deep_strict_equal(
	{
		a: {
			b: 1,
		},
	},
	{
		a: {
			b: 2,
		},
	}
);
not_deep_strict_equal(
	{
		a: {
			b: 1,
		},
	},
	{
		a: {
			c: 1,
		},
	}
);

const obj1 = {
	a: {
		b: 1,
	},
};

const obj4 = Object.create(obj1);

not_deep_strict_equal(obj1, obj4);
not_deep_strict_equal(1, '1');
