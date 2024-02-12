// Merge Two array and sort it!

let a = [35, 31, 8, 4, 6];
let b = [4, 6, 30, 1];

// Menually merge and sort using for loop
function mergeTwoArrayAndSort(arr1, arr2) {
	let mergedArr = arr1.concat(arr2);
	let count = 0;
	for (let i = 0; i < mergedArr.length; i++) {
		// check if first element is greater than the next
		count++;
		// console.log(i);
		if (mergedArr[i] > mergedArr[i + 1]) {
			// swap the element
			let temp = mergedArr[i + 1];
			mergedArr[i + 1] = mergedArr[i];
			mergedArr[i] = temp;

			i = -1;
		}
	}
	console.log(count);
	return mergedArr;
}

console.log(mergeTwoArrayAndSort(a, b));
