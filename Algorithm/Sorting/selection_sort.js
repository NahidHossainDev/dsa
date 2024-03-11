const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		let min = i; // set current index as minimum;
		let temp = array[i];

		for (let k = i + 1; k < length; k++) {
			if (array[k] < array[min]) {
				min = k;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

console.log(selectionSort(numbers));
