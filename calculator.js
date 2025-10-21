/**
	* A string calculator that adds the numbers given in a string input
	* param input_string: is a string of numbers in the format 5,3,1 or specified with a custom delimiter in the format //;\n5;3;1
	* return: added value of all numbers from the input string
**/
function add(input_string) {
	// If the input is blank, return 0 as value
	if (input_string === "" || input_string.length === 0) { return_value = 0; }
	// Check if the input specifies a delimiter by checking if there is double forward slash (//)
	let is_delimited = input_string.match(/(\/\/)/gm);
	if (is_delimited) {
		// if there are more than one delimiter definition, throw exception as multiple delimiter is not allowed 
		if (is_delimited.length > 1) {
			throw new Error("Multiple delimiter definitions found. Only one delimiter definition allowed. Example \\; followed by <enter> key and numbers");
		}
		is_delimited = input_string.match(/(\/\/)(.+)?\n/gm);
		if (!is_delimited) {
			throw new Error("Malformed delimiter definition. Correct example \\; followed by <enter> key and numbers");
		}
		let is_delimited_groups = is_delimited[0].match(/(\/\/)(.+)?\n/);
		// if the delimiter character is present, procced, else throw exception for missing delimiter character
		// if the delimiter character has forward or backward slash, throw exception, else proceed to convert the string to a comma separated list
		if (!is_delimited_groups[1] || !is_delimited_groups[2] || is_delimited_groups[2].match(/\//) || is_delimited_groups[2].match(/[\t\n\r\f\v]/)) {
			throw new Error("Delimiter could not be deciphered. Expected something like //; followed by <enter> key for numbers. Ensure you provided a delimited and avoid delimiting with forward or backward slash.");
		}
		input_string = input_string.replace(new RegExp(regexEscape(is_delimited_groups[0]), 'g'), '');
		input_string = input_string.replace(new RegExp(regexEscape(is_delimited_groups[2]), 'g'), ',');
		input_string = input_string.replace(new RegExp(regexEscape(is_delimited_groups[2]), 'g'), ',');
		input_string = input_string.replace(/[a-z]*\s*/g, '');
		if (!input_string.match(/^\d+(\.\d+)?(?:,\d+(\.\d+)?)*$/)) {
			throw new Error("Delimiter is valid, but the entered string seems to be malformed. Correct example would be //; followed by <enter> key and numbers separated by the same delimiter 5;3;1");
		}
	}
	// pick out the numbers from the string into a number array
	let number_string_array = input_string.match(/-?\d+(\.\d+)?/gm);
	// if number array is blank, return 0 as value, else if number array is 1 in length, return that number
	// if number array has more than one value, then proceed
	if (number_string_array === null) {
		return 0;
	} else {
		let numbers = number_string_array.map(Number);
		if (numbers.length === 1) { return numbers[0]; }
		let added_value = 0;
		// if there are negative numbers in the number array, throw exception with the list of negative numbers separated by comma
		// if there are no negative numbers, proceed to add the numbers and return the added value
		let negative_numbers = [];
		negative_numbers = numbers.filter(number => number < 0);
		if (negative_numbers.length > 0) {
			throw new Error("Negative numbers not allowed " + negative_numbers.join(","));
		}
		added_value = numbers.reduce((sum, n) => sum + n, 0);
		return added_value;
	}
}

/**
	* A function that accepts string and returns regex escaped string for regular expressions
	* param in_str: is a text string which may or may not contain special characters from a regular expression definition
	* return: a string value which is properly escaped for regular expressions special characters
**/
function regexEscape(in_str) {
	let special_chars = ['^', '$', '\\', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '|'];
	let in_str_arr = in_str.split('');
	let out_str = '';
	in_str_arr.forEach(item => {
		// if there is a special character, escape it with double backward slash
		if (special_chars.includes(item)) {
			out_str = out_str + '\\' + item; 
		} else {
			out_str = out_str + item;
		}
	});
	return out_str;
}

module.exports = { add }
