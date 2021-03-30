const assert = require('assert');

function throws(fn, err) {
	try {
		assert.throws(fn, err);
		console.log('\n back \n');
	} catch (e) {
		console.log(e);
	}
}

const err = new TypeError('Wrong Value');
err.code = 404;
err.foo = 'bar';
err.info = {
	nested: true,
	baz: 'text',
};
err.reg = /abc/i;

throws(
	() => {
		throw err;
	},
	{
		name: 'TypeError',
		message: 'Wrong value',
		info: {
			nested: true,
			baz: 'text',
		},
	}
);

throws(
	() => {
		throw err;
	},
	{
		name: /^TypeError$/,
		message: /Wrong/,
		foo: 'bar',
		info: {
			nested: true,
			// It is not possible to use regular expressions for nested properties!
			baz: 'text',
		},
		// The `reg` property contains a regular expression and only if the
		// validation object contains an identical regular expression, it is going
		// to pass.
		reg: /abc/i,
	}
);

throws(() => {
	throw new Error('Wrong value');
});
