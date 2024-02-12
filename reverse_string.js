// Reverse the string;
let a = "niassoH dihaN si eman yM";
// Output should be:  "My name is Nahid Hossain"

// traditional for loop
// Time Complexity O(n)
function reverseString(str) {
	if (str.length > 1) {
		let reverseStr = "";
		for (i = str.length - 1; i >= 0; i--) {
			reverseStr = reverseStr + str[i];
		}
		return reverseStr;
	} else if (str) {
		return str;
	} else return null;
}

// Using Js Buildin methods
function reverseString2(str) {
	if (str.length > 1) return str.split("").reverse().join("");
	else {
		return !!str ? str : null;
	}
}

console.log(reverseString2("ab"));
