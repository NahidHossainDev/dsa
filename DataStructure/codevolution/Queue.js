class Queue {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}

	// always add new element to the end of the queue
	enqueue(item) {
		this.items[this.rear] = item;
		this.rear++;
	}

	// always remove element from the front of the queue
	dequeue() {
		const item = this.items[this.front];
		delete this.items[this.front];
		this.front++; //  front is now pointing to the next element of the queue
		return item;
	}

	size() {
		return this.rear - this.front;
	}

	isEmpty() {
		return this.size() === 0;
	}

	peek() {
		return this.items[this.front];
	}

	print() {
		console.log(this.items);
	}
}

const queue = new Queue();
queue.enqueue(10); // Big O(1)
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.size());
queue.dequeue(); // Big O(1)
console.log(queue.peek());
queue.print();
