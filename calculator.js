function add(input_string) {
	if (input_string === "" || input_string.length === 0) { return_value = 0; }
	let is_delimited = input_string.match(/(\/\/)(.+)?\n/gm);
	if (is_delimited) {
		if (is_delimited.length === 1) {
			let is_delimited_groups = is_delimited[0].match(/(\/\/)(.+)?\n/);
			if (is_delimited_groups[1]  && is_delimited_groups[2]) {
				if (!is_delimited_groups[2].match(/\//)) {
					input_string = input_string.replace(new RegExp(is_delimited_groups[1], 'g'), '');
					input_string = input_string.replace(new RegExp(regexEscape(is_delimited_groups[2]), 'g'), ',');
				} else {
					throw new Error("Delimiter could not be deciphered. Expected //" + is_delimited_groups[2].replace(/\//g, '') + " but got " + is_delimited_groups[1] + is_delimited_groups[2]);
				}
			} else {
					throw new Error("Delimiter could not be deciphered. Expected something like //; followed by <enter> key for numbers but got " + is_delimited_groups[0].replace(/\n/gm));
			}
		} else {
			throw new Error("Multiple delimiters found " + is_delimited.join(" ").replace(/\n/gm, ''));
		}
	}
	let number_string_array = input_string.match(/-?\d+(\.\d+)?/gm);
	if (number_string_array === null) {
		return 0;
	} else {
		let numbers = number_string_array.map(Number);
		if (numbers.length === 1) { return numbers[0]; }
		let added_value = 0;
		let negative_numbers = [];
		negative_numbers = numbers.filter(number => number < 0);
		if (negative_numbers.length > 0) {
			throw new Error("Negative numbers not allowed " + negative_numbers.join(","));
		}
		added_value = numbers.reduce((sum, n) => sum + n, 0);
		return added_value;
	}
}

function regexEscape(in_str) {
	let special_chars = ['^', '$', '\\', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '|'];
	let in_str_arr = in_str.split('');
	let out_str = '';
	in_str_arr.forEach(item => {
		if (special_chars.includes(item)) {
			out_str = out_str + '\\' + item; 
		} else {
			out_str = out_str + item;
		}
	});
	return out_str;
}

module.exports = { add }
