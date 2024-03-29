class CircularQueue {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.rear = -1;
		this.front = -1;
		this.currentLength = 0;
	}

	isFull() {
		return this.capacity === this.currentLength;
	}

	isEmpty() {
		return this.currentLength === 0;
	}

	enqueue(item) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity; // pointing to the first index if rear is greater the capacity
			this.items[this.rear] = item;
			this.currentLength++;
			if (this.front === -1) this.front = this.rear;
		} else console.log("queue is full");
	}

	dequeue() {
		if (!this.isEmpty()) {
			const item = this.items[this.front];
			this.items[this.front] = null;
			this.front = (this.front + 1) % this.capacity; // pointing to the first index if front is greater the capacity
			this.currentLength--;
			if (this.isEmpty()) {
				this.front = -1;
				this.rear = -1;
			}
			return item;
		}
		return null;
	}
	print() {
		console.log(this.items);
	}
	peek() {
		if (this.isEmpty()) return null;
		return this.items[this.front];
	}
}

const circularQueue = new CircularQueue(3);

circularQueue.enqueue(10); // Big O(1)
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.print();
circularQueue.dequeue(); // Big O(1)
circularQueue.enqueue(40);
circularQueue.dequeue();
console.log(circularQueue.peek());
circularQueue.print();
