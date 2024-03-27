const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let k = 0; k < array.length; k++) {
			if (array[k] > array[k + 1]) {
				[array[k], array[k + 1]] = [array[k + 1], array[k]]; // swapping the elements
			}
		}
	}
}

bubbleSort(numbers);
console.log(numbers);
