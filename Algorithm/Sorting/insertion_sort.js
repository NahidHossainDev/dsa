const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		// If the selected item smaller than the first item move item to the first position
		if (array[i] < array[0]) array.unshift(array.splice(i, 1)[0]);
		else {
			// Find where item should go
			for (let j = 1; j < length; j++) {
				if (array[i] > array[j - 1] && array[i] < array[j]) {
					// Move item to the right position
					array.splice(j, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}
	return array;
}

console.log(insertionSort(numbers));
