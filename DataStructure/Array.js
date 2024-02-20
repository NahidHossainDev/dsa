const strings = ["a", "b", "c", "d"];

// push
strings.push("e"); // O(1)

// pop  (remove last item)
strings.pop(); // O(1)

// unshift (add item begining of array)
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

/**
 * There have two types of array ,
 * (a) Static array - predefined spacific length,
 * its exist in C++.
 * int a[20] // here array size is 20 which hold integer,
 * for this array to increase the length of array we have to create a new array
 *  with predefined length and have to assign this array value
 *
 *
 * (b) Dynamic Array - dynamic length of array, means it expands length as we add new elements
 *
 */

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		shiftItems(index);
		delete this.data[this.length];
		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
	}
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("!");

newArray.pop();

newArray.delete(1);

console.log(newArray);
