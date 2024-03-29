class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// let myLinkedList = {
//     head:{
//         value:10,
//         next:{    /// 1 current
//             value:15,
//             next:{
//                 value:16,
//                 next:{
//                    value:18,
//                    next: null
//                 }
//             }
//         }
//     }
// }

// 10 --> 15 --> 16 --> 18

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
		this.tail = this.head;
	}

	isEmpty() {
		return this.size === 0;
	}
	geSize() {
		return this.size;
	}

	// O(1)
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.size++;
	}

	append(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.head = newNode;
		} else {
			let prevNode = this.head;
			while (prevNode.next) {
				prevNode = prevNode.next;
			}
			prevNode.next = newNode;
		}
		this.size++;
	}

	insert(index, value) {
		if (index < 1) this.prepend(value);
		else if (index >= this.size) this.append(value);
		else {
			let prevNode = this.head;
			let count = 1;
			while (index > count) {
				prevNode = prevNode.next;
				count++;
			}
			const newNode = new Node(value);
			newNode.next = prevNode.next;
			prevNode.next = newNode;
			this.size++;
		}
	}

	remove(index) {
		if (index < 0 || index >= this.size) return null;
		else if (index === 0) {
			const toRemove = this.head;
			this.head = this.head.next;
			this.size--;
			return toRemove.value;
		} else {
			let prevNode = this.head;
			let count = 1;
			while (index > count) {
				prevNode = prevNode.next;
				count++;
			}
			const toRemove = prevNode.next;
			prevNode.next = toRemove.next;
			this.size--;
			return toRemove.value;
		}
	}

	// O(n)
	print() {
		if (this.isEmpty()) console.log("List is empty");
		else {
			let result = [];
			let currentNode = this.head;
			while (currentNode) {
				result.push(currentNode.value);
				currentNode = currentNode.next;
			}
			return result;
		}
	}

	reverse() {
		let prev = null;
		let currentNode = this.head;
		while (currentNode) {
			let next = currentNode.next;
			currentNode.next = prev;
			prev = currentNode;
			currentNode = next;
		}
		console.log("done!");
		this.head = prev;
	}

	// O(n)
	findIndex(value) {
		if (this.isEmpty()) return -1;
		else {
			let index = 0;
			let currentNode = this.head;
			while (currentNode) {
				if (currentNode.value === value) return index;
				currentNode = currentNode.next;
				index++;
			}
			return -1;
		}
	}
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.append(40);
list.append(50);
list.append(60);
list.remove(0);
// list.insert(list.size, 70);

console.log(list.print());
list.reverse();
console.log(list.print());

console.log(list.findIndex(70));
