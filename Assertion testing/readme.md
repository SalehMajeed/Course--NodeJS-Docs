# Assertion testing

Assertion testing provides you a way to test your code.
it has several methods ->

1. assert(value[, message])
2. assert.deepEqual(actual, expected[, message]) -> deprecated.
3. assert.deepStrictEqual(actual, expected[, message])
4. assert.doesNotMatch(string, regexp[, message]) -> experimental.
5. assert.doesNotReject(asyncFn[, error][, message])
6. assert.doesNotThrow(fn[, error][, message])
7. assert.equal(actual, expected[, message]) -> deprecated.
8. assert.fail([message])
9. assert.fail(actual, expected[, message[, operator[, stackStartFn]]]) -> deprecated.
10. assert.ifError(value)
11. assert.match(string, regexp[, message]) -> experimental.
12. assert.notDeepEqual(actual, expected[, message]) -> deprecated
13. assert.notDeepStrictEqual(actual, expected[, message])
14. assert.notEqual(actual, expected[, message]) -> deprecated.
15. assert.notStrictEqual(actual, expected[, message])
16. assert.ok(value[, message])
17. assert.rejects(asyncFn[, error][, message])
18. assert.strictEqual(actual, expected[, message])
19. assert.throws(fn[, error][, message])

## legacy Assertion mode

in legacy Assertion mode below methods use abstract equality comparison ->

1. assert.deepEqual()
2. assert.equal()
3. assert.notDeepEqual()
4. assert.notEqual()