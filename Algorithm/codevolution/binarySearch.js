function binarySearch(arr, target) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		const mid = Math.floor((leftIndex + rightIndex) / 2);
		if (arr[mid] === target) return mid;
		else if (arr[mid] < target) {
			// check to the right side
			leftIndex = mid + 1;
		} else if (arr[mid] > target) {
			rightIndex = mid - 1;
		}
	}

	return -1;
} // O(log n)

function binarySearchRecursive(arr, target, leftIndex, rightIndex) {
	const mid = Math.floor((leftIndex + rightIndex) / 2);
	if (arr[mid] === target) return mid;
	if (leftIndex >= rightIndex) return -1;
	else if (arr[mid] < target) {
		return binarySearchRecursive(arr, target, mid + 1, rightIndex);
	} else if (arr[mid] > target) {
		return binarySearchRecursive(arr, target, leftIndex, mid - 1);
	}
} // O(log n)

const arr = [-5, 2, 4, 6, 10];

console.log(binarySearchRecursive(arr, 10, 0, arr.length - 1)); // 4
console.log(binarySearchRecursive(arr, 6, 0, arr.length - 1)); // 3
console.log(binarySearchRecursive(arr, 2, 0, arr.length - 1)); // 1
console.log(binarySearchRecursive(arr, 162, 0, arr.length - 1)); // -1
