const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) array.unshift(array.splice(i, 1)[0]);
		else {
			for (let k = 1; k < length; k++) {
				if (array[i] > array[k - 1] && array[i] < array[k]) {
					array.splice(k, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}
	return array;
}

console.log(mergeSort(numbers));
