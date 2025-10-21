const { add } = require('./calculator.js');

/* These should return 0 when string is empty or doesn't have numbers */
test('01 return 0 for empty string input', () => {
	expect(add("")).toBe(0);
});
test('02 return 0 for string input with no number', () => {
	expect(add("sum")).toBe(0);
});

/* These should return the same one number sent in input */
test('03 return same number for single number input', () => {
	expect(add("1")).toBe(1);
});
test('04 return the same number for single number with text input', () => {
	expect(add("sum 5")).toBe(5);
});

/* These should return added values of 2 numbers in input */
test('05 return added value for two number input, separated by comma', () => {
	expect(add("1,2")).toBe(3);
});
test('06 return added value for two numbers with text input, separated by comma', () => {
	expect(add("sum this 5,3")).toBe(8);
});

/* These should return added values of n numbers delimited by comma in input */
test('07 return added value for n numbers input separated by comma', () => {
	expect(add("1,2,3,4")).toBe(10);
});
test('08 return added value for n numbers and text input separated by comma', () => {
	expect(add("sum this 5,3,2,40")).toBe(50);
});

/* These should return added values of n numbers delimited by space in input */
test('09 return added value for n numbers input separated by space', () => {
	expect(add("11 19 10 20")).toBe(60);
});
test('10 return added value for n numbers and text input separated by space', () => {
	expect(add("sum this 11 19 10 20 and give me value")).toBe(60);
});

/* These should return added values of n numbers delimited by underscore in input */
test('11 return added value for n numbers input separated by underscore', () => {
	expect(add("11_19_10_20")).toBe(60);
});
test('12 return added value for n numbers and text input separated by underscore', () => {
	expect(add("sum this 11_19_10_20 and give me value")).toBe(60);
});

/* These should return added values of n numbers delimited by semicolon in input */
test('13 return added value for n numbers input separated by semicolon', () => {
	expect(add("11;19;10;20")).toBe(60);
});
test('14 return added value for n numbers and text input separated by semicolon', () => {
	expect(add("sum this 11;19;10;20 and give me value")).toBe(60);
});

/* These should return added values of n numbers delimited by line feed (LF) \n or carriage return line feed (CRLF) \r\n in input */
test('15 return added value for n numbers input separated by line feed \n', () => {
	expect(add("15\n5\n35\n25")).toBe(80);
});
test('16 return added value for n numbers input separated by carriage return line feed \r\n', () => {
	expect(add("15\r\n5\r\n35\r\n25")).toBe(80);
});
test('17 return added value for n numbers and text input separated by line feed \n', () => {
	expect(add("sum this 15\n5\n35\n25 and give me value")).toBe(80);
});
test('18 return added value for n numbers and text input separated by carriage return line feed \r\n', () => {
	expect(add("sum this 15\r\n5\r\n35\r\n25 and give me value")).toBe(80);
});

/* These should return added values of n numbers delimited by space comma underscore semicolon LF and CRLF in input */
test('19 return added value for n numbers input separated by space, comma, underscore, semicolon, LF (\n), CRLF (\r\n)', () => {
	expect(add("10_2;3\n5 5\r\n10")).toBe(35);
});
test('20 return added value for n numbers and text input separated by space, comma, underscore, semicolon, LF (\n), CRLF (\r\n)', () => {
	expect(add("sum this and give me the value 10_2;3\n5 5\r\n10")).toBe(35);
});

/* These should throw an exception with a message that includes comma separated list of negative numbers from the input */
test('21 return one negative number exception for number input', () => {
	expect(() => add("10 -5 10")).toThrow("Negative numbers not allowed -5")
});
test('22 return one negative number exception for number and text input', () => {
	expect(() => add("sum this 10 -5 10")).toThrow("Negative numbers not allowed -5")
});
test('23 return n negative number exception for numbers input', () => {
	expect(() => add("10 -5 -20 10")).toThrow("Negative numbers not allowed -5,-20")
});
test('24 return n negative number exception for numbers and text input', () => {
	expect(() => add("sum this 10 -5 -20 10")).toThrow("Negative numbers not allowed -5,-20")
});
test('25 return n negative number exception for numbers input with comma, space, underscore, semicolon delimited string', () => {
	expect(() => add("10_-5,-20/10 -30\n50\r\n-60")).toThrow("Negative numbers not allowed -5,-20,-30,-60")
});
test('26 return n negative number exception for numbers and text input with comma, space, underscore, semicolon delimited string', () => {
	expect(() => add("sum this 10_-5,-20/10 -30\n50\r\n-60")).toThrow("Negative numbers not allowed -5,-20,-30,-60")
});

/* These should return added value of n numbers with a user specified demiliter */
test('27 return added value for n numbers input with a user specified delimiter (;)', () => {
	expect(add("//;\n5;2;10")).toBe(17)
});
test('28 return added value for n numbers input with a user specified delimiter (ADD)', () => {
	expect(add("//ADD\n5ADD2ADD10")).toBe(17)
});
test('29 return added value for n numbers input with a user specified delimiter (+)', () => {
	expect(add("//+\n5+2+10")).toBe(17)
});
test('30 return added value for n numbers input with a user specified delimiter (|)', () => {
	expect(add("//|\n5|2|10")).toBe(17)
});
test('31return exception for multiple delimiter', () => {
	expect(() => add("//;\n//-\n5,15,10")).toThrow("Multiple delimiters found //; //-")
});
test('32 return exception for missing delimiter', () => {
	expect(() => add("//\n5,15,10")).toThrow("Delimiter could not be deciphered. Expected something like //; followed by <enter> key for numbers but got //undefined")
});
test('33 return exception for delimiter with additional forward slash', () => {
	expect(() => add("///+\n5+15+10")).toThrow("Delimiter could not be deciphered. Expected //+ but got ///+")
});
test('34 return exception for delimiter with additional two forward slash', () => {
	expect(() => add("////+\n5+15+10")).toThrow("Delimiter could not be deciphered. Expected //+ but got ////+")
});
test('35 return exception for delimiter with additional five forward slash', () => {
	expect(() => add("///////+\n5+15+10")).toThrow("Delimiter could not be deciphered. Expected //+ but got ///////+")
});
