const assert = require('assert');
const str = 'does assert.doesNotMatch worked';

function does_not_match(v1, v2) {
	try {
		assert.doesNotMatch(v1, v2); // error the input was expected to not match.
		console.log("\n ohhk it's working \n");
	} catch (e) {
		console.log(e);
	}
}

does_not_match(str, new RegExp(/worked/));
