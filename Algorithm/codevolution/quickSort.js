const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const sortedNumbers = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

let count = 0;
function mergeSort(arr) {
	count++;
	if (arr.length < 2) return arr;
	let pivot = arr[arr.length - 1];
	let leftArr = [];
	let rightArr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) leftArr.push(arr[i]);
		else rightArr.push(arr[i]);
	}
	return [...mergeSort(leftArr), pivot, ...mergeSort(rightArr)];
}
// Worst case O(n^2)
// Average case O(n logn)

// it take more time for almost sorted array

console.log(mergeSort(numbers));
console.log(count);

count = 0;

console.log(mergeSort(sortedNumbers));
console.log(count);
