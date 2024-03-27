const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedNumbers = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

let count = 0;
function quickSort(arr) {
	count++;
	if (arr.length < 2) return arr;
	let midIndex = Math.floor(arr.length / 2);
	let leftArr = arr.slice(0, midIndex);
	let rightArr = arr.slice(midIndex);

	return merge(quickSort(leftArr), quickSort(rightArr));
}

function merge(leftArr, rightArr) {
	let sortedArr = [];

	while (leftArr.length && rightArr.length) {
		if (leftArr[0] < rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}

	return [...sortedArr, ...leftArr, ...rightArr];
}

// Big O(n logn)

console.log(quickSort(numbers));
console.log(count);

count = 0;

console.log(quickSort(sortedNumbers));
console.log(count);
