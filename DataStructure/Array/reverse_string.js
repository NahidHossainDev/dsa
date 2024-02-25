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
	return str.split("").reverse().join("");
}

// Method 3
const reverseString3 = (str) => [...str].reverse().join("");

// console.log([...a]);
console.log(reverseString3("ab"));
