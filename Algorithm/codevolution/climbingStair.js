function climbingStair(n) {
	let numberOfWays = [1, 2];

	if (n > 1) {
		for (let i = 2; i < n; i++) {
			numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
		}
	}
	return numberOfWays[n - 1];
}

// Big O(n)

console.log(climbingStair(1));
console.log(climbingStair(2));
console.log(climbingStair(3));
console.log(climbingStair(5));
console.log(climbingStair(7));
