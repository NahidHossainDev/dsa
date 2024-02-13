const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "boat", "nigel", "squirt", "darla", "hank"];

const large = new Array(100000).fill("nemo");

function find(array, toFind) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === toFind) {
			console.log(`Found ${toFind}!`);
		}
	}
}

// find(large)  // O(n) --> Linear Time

function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]);
	console.log(boxes[0]);
}

// logFirstTwoBoxes([1, 2, 3, 4, 5, 6]); // O(1)  --> Constant Time

function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) {
		// O(n)
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}

funChallenge(someArray); // 3 + 4n --> BIG O(3 + 4n) --> O(n)

function loopInputs(input1, input2) {
	input1.forEach((el) => {
		console.log(el);
	});

	input2.forEach((el) => {
		console.log(el);
	});
}

// loopInputs(arr1, arr2)  // O(a + b) / O(m + n)
