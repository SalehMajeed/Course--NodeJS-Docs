const assert = require('assert').strict;

function does_not_throw(fn, err) {
	try {
		assert.doesNotThrow(fn, err); // error the input was expected to not match.
	} catch (e) {
		console.log(e);
	}
}

does_not_throw(() => {
	throw new TypeError('Wrong value');
}, SyntaxError);

does_not_throw(() => {
	throw new TypeError('Wrong value');
}, TypeError);
