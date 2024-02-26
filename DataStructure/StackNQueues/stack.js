class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = { value, next: this.top };
		if (!this.bottom) this.bottom = newNode;
		this.top = newNode;
		this.length++;
	}

	pop() {
		if (!this.top) return null;
		if (this.top === this.bottom) this.bottom = null;

		const popedItem = this.top;
		this.top = this.top.next;
		this.length--;
		return popedItem;
	}
}

const myStack = new Stack();

myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
// myStack.pop();

console.log(JSON.stringify(myStack));
