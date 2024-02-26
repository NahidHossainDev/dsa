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

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			prev: null,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = { value, prev: null, next: null };
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		const newHead = { value, prev: null, next: this.head };
		this.head = newHead;
		this.head.prev = newHead;
		this.length++;
	}

	printList() {
		let arr = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arr;
	}

	getIndexedNode(index) {
		let currentNode = this.head;
		let counter = 0;

		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = {
			value: value,
			prev: null,
			next: null,
		};
		const leader = this.getIndexedNode(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;

		return this;
	}

	remove(index) {
		if (index < 1) {
			this.head = this.head.next;
		} else {
			let previousNode = this.getIndexedNode(index - 1);
			previousNode.next = previousNode?.next?.next ?? null;
			previousNode.next.prev = previousNode;
			this.length--;
		}
		return this;
	}

	reverse() {
		if (!this.head.next) return this.head;
	}
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(15);
// myLinkedList.append(20);
// myLinkedList.append(25);

console.log(myLinkedList.printList());
myLinkedList.insert(2, 12);
console.log(myLinkedList.printList());
const current = myLinkedList.remove(0);
const tojson = JSON.stringify(myLinkedList.printList());
console.log(tojson);
// console.log(myLinkedList.printList());
