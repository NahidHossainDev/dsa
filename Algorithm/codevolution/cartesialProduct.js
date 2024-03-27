let a = [1, 2];
let b = [4, 5, 6];

function cartisanProduct(arr1, arr2) {
	let result = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			result.push([arr1[i], arr2[j]]);
		}
	}
	return result;
}
// Bog O(mn)

console.log(cartisanProduct(a, b));
