// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
	// O(n)
	let fibonacciSeries = [0, 1];
	for (let i = 2; i <= n; i++) {
		const newItem = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
		fibonacciSeries.push(newItem);
	}
	return fibonacciSeries[n];
}

function fibonacciRecursive(n) {
	// O(2^n) very bad
	if (n < 2) {
		return n;
	} else {
		return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
	}
}

console.log(fibonacciIterative(40));
