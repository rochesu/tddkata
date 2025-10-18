const { add } = require('./calculator.js');

/* These should return 0 when string is empty or doesn't have numbers */
test('return 0 for empty string input', () => {
	expect(add("")).toBe(0);
});
