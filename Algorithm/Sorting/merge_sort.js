const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array) {
	if (array.length === 1) return array;
	// Split Array in into right and left
	const mid = Math.floor(array.length / 2);
	const left = array.slice(0, mid);
	const right = array.slice(mid);

	return merge(quickSort(left), quickSort(right));
}

function merge(left, right) {
	let leftIndex = 0;
	let rightIndex = 0;
	let result = [];

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(quickSort(numbers));
