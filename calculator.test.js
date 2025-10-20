const { add } = require('./calculator.js');

/* These should return 0 when string is empty or doesn't have numbers */
test('return 0 for empty string input', () => {
	expect(add("")).toBe(0);
});
test('return 0 for string input with no number', () => {
	expect(add("sum")).toBe(0);
});

/* These should return the same one number sent in input */
test('return same number for single number input', () => {
	expect(add("1")).toBe(1);
});
test('return the same number for single number with text input', () => {
	expect(add("sum 5")).toBe(5);
});

/* These should return added values of 2 numbers in input */
test('return added value for two number input, separated by comma', () => {
	expect(add("1,2")).toBe(3);
});
test('return added value for two numbers with text input, separated by comma', () => {
	expect(add("sum this 5,3")).toBe(8);
});

/* These should return added values of n numbers delimited by comma in input */
test('return added value for n numbers input separated by comma', () => {
	expect(add("1,2,3,4")).toBe(10);
});
test('return added value for n numbers and text input separated by comma', () => {
	expect(add("sum this 5,3,2,40")).toBe(50);
});

/* These should return added values of n numbers delimited by space in input */
test('return added value for n numbers input separated by space', () => {
	expect(add("11 19 10 20")).toBe(60);
});
test('return added value for n numbers and text input separated by space', () => {
	expect(add("sum this 11 19 10 20 and give me value")).toBe(60);
});

/* These should return added values of n numbers delimited by underscore in input */
test('return added value for n numbers input separated by underscore', () => {
	expect(add("11_19_10_20")).toBe(60);
});
test('return added value for n numbers and text input separated by underscore', () => {
	expect(add("sum this 11_19_10_20 and give me value")).toBe(60);
});

/* These should return added values of n numbers delimited by semicolon in input */
test('return added value for n numbers input separated by semicolon', () => {
	expect(add("11;19;10;20")).toBe(60);
});
test('return added value for n numbers and text input separated by semicolon', () => {
	expect(add("sum this 11;19;10;20 and give me value")).toBe(60);
});

/* These should return added values of n numbers delimited by space comma underscore and/or semicolon in input */
test('return added value for n numbers input separated by space, comma, underscore and/or semicolon', () => {
	expect(add("10_2;3 5 5;10")).toBe(35);
});
test('return added value for n numbers and text input separated by space, comma, underscore and/or semicolon', () => {
	expect(add("sum this and give me the value 10_2;3 5 5;10")).toBe(35);
});

/* These should throw an exception with a message that includes comma separated list of negative numbers from the input */
test('return one negative number exception for number input', () => {
	expect(() => add("10 -5 10")).toThrow('Negative numbers not allowed -5')
});
test('return one negative number exception for number and text input', () => {
	expect(() => add("sum this 10 -5 10")).toThrow('Negative numbers not allowed -5')
});
test('return n negative number exception for numbers input', () => {
	expect(() => add("10 -5 -20 10")).toThrow('Negative numbers not allowed -5,-20')
});
test('return n negative number exception for numbers and text input', () => {
	expect(() => add("sum this 10 -5 -20 10")).toThrow('Negative numbers not allowed -5,-20')
});
test('return n negative number exception for numbers input with comma, space, underscore, semicolon delimited string', () => {
	expect(() => add("10_-5,-20/10 -30")).toThrow('Negative numbers not allowed -5,-20,-30')
});
test('return n negative number exception for numbers and text input with comma, space, underscore, semicolon delimited string', () => {
	expect(() => add("sum this 10_-5,-20/10 -30")).toThrow('Negative numbers not allowed -5,-20,-30')
});