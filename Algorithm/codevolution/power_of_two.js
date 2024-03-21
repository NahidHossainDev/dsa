function isPowerOfTwo(n) {
	if (n < 1) return false;
	while (n > 1) {
		if (n % 2 !== 0) return false;
		n = n / 2;
	}
	return true;
} // O(log n)

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(6));
// console.log(isPowerOfTwo(8));

function isPowerOfTwoBitWise(n) {
	if (n < 1) return false;
	return (n & (n - 1)) === 0;
} // O(1)  constant time

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(6));
console.log(isPowerOfTwoBitWise(8));
