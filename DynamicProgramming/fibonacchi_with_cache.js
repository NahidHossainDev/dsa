// Dynamic programming is just some cacheing and mamosization technique
// 0 1 2 3 5 8
let cal = 0;
// O(2 ^ n)
function fib(n) {
	cal++;
	if (n < 2) return n;
	return fib(n - 1) + fib(n - 2);
}
console.log(fib(12), cal);

let cal2 = 0;
// O(n)
function fib_with_cache() {
	let cache = {};
	return function fibo(n) {
		cal2++;
		if (n in cache) return cache[n];
		else {
			if (n < 2) return n;
			cache[n] = fibo(n - 1) + fibo(n - 2);
			return cache[n];
		}
	};
}

const optimized_fib = fib_with_cache();
console.log(optimized_fib(12), cal2);
