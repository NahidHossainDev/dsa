let a = [4, 6, 8, 31, 35];
let b = [1, 4, 6, 30];

function mergeTwoSortedArray(arr1, arr2) {
	let result = [];
	// if any array is empty return oposite one
	if (arr1.length === 0) return arr2;
	if (arr2.length === 0) return arr1;

	let arr1TargetIdx = 0;
	let arr2TargetIdx = 0;

	while (arr1[arr1TargetIdx] || arr2[arr2TargetIdx]) {
		if (arr1[arr1TargetIdx] > arr2[arr2TargetIdx]) {
			result.push(arr2[arr2TargetIdx]);
			arr2TargetIdx++;
		} else {
			result.push(arr1[arr1TargetIdx]);
			arr1TargetIdx++;
		}
	}
	return result;
}

console.log(mergeTwoSortedArray(a, b));
