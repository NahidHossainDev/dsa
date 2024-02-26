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
	constructor(value) {
		(this.head = {
			value: value,
			next: null,
		}),
			(this.tail = this.head);
		this.length = 1;
	}

	append(value) {
		const newNode = { value, next: null };
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		const newHead = { value, next: this.head };
		this.head = newHead;
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
		let newNode = {
			value,
			next: null,
		};
		let previousNode = this.getIndexedNode(index - 1);
		newNode.next = previousNode.next;
		previousNode.next = newNode;
		this.length++;

		return this;
	}

	remove(index) {
		if (index < 1) {
			this.head = this.head.next;
		} else {
			let previousNode = this.getIndexedNode(index - 1);
			previousNode.next = previousNode?.next?.next ?? null;
			this.length--;
		}
		return this;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.append(25);

console.log(myLinkedList.printList());
myLinkedList.insert(2, 12);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
