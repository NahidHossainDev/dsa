// Return the first repeted character
let array1 = [0, 2, 5, 1, 3, 5, 1, 4]; // output 2
let array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // output 1
let array3 = [2, 3, 4, 5]; // output undefined

// Using Hash table   ---> O(n)
function findRecurringCharacter(arr) {
	let hash = {};

	if (arr.length > 1) {
		for (let i = 0; i <= arr.length; i++) {
			if (hash[arr[i]]) {
				return arr[i];
			} else {
				hash[arr[i]] = true;
			}
		}
	}
	return;
}

// let t1 = performance.now(); // To check the performance

// Using js build in method
function findRecurringCharacter2(arr) {
	let result = undefined;
	if (arr.length > 1) {
		for (let i = 0; i <= arr.length; i++) {
			if (arr.indexOf(arr[i]) < i) {
				result = arr[i];
				break;
			}
		}
	}
	return result;
}

console.log(findRecurringCharacter(array1));
