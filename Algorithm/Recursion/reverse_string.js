function reverseString(str) {
	let res = "";
	for (let i = 0; i < str.length; i++) {
		res = str[i] + res;
	}
	return res;
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
	return str && reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

console.log(reverseStringRecursive("yoyo master"));
