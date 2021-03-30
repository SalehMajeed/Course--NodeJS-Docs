const assert = require('assert').strict;

function does_not_reject(promise) {
	try {
		assert.doesNotReject(promise); // error the input was expected to not match.
	} catch (e) {
		console.log(e);
	}
}

does_not_reject(async () => {
	await assert.doesNotReject(async () => {
		throw new SyntaxError('Some syntax problem');
	}, SyntaxError);
});
