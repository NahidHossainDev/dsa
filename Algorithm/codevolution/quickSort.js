const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedNumbers = [0, 1, 2, 4, 5, 6, 44, 63, 87, 283, 99];

let count = 0;
function quickSort(arr) {
	count++;
	if (arr.length < 2) return arr;
	let pivot = arr[arr.length - 1];
	let leftArr = [];
	let rightArr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) leftArr.push(arr[i]);
		else rightArr.push(arr[i]);
	}
	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
// Worst case O(n^2)
// Average case O(n logn)

// it take more time for almost sorted array

console.log(quickSort(numbers));
console.log(count);

count = 0;

console.log(quickSort(sortedNumbers));
console.log(count);
