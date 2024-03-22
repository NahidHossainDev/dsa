const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let target = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > target) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = target;
	}

	return arr;
}
// Big O(n^2)

console.log(mergeSort(numbers));
