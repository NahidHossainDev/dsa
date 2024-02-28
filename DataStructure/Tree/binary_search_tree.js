class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// OWN SOLUTION
	// insert(value) {
	// 	if (!this.root) this.root = new Node(value);
	// 	else this.recursive(this.root, value);
	// }
	// recursive(node, value) {
	// 	if (node.value < value) {
	// 		// Right side
	// 		if (!node.right) node.right = new Node(value);
	// 		else this.recursive(node.right, value);
	// 	} else {
	// 		// Left side
	// 		if (!node.left) node.left = new Node(value);
	// 		else this.recursive(node.left, value);
	// 	}
	// }

	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			return (this.root = newNode);
		}
		let currentNode = this.root;
		while (true) {
			if (value < currentNode.value) {
				// Left side
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				} else currentNode = currentNode.left;
			} else {
				// Right side
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				} else currentNode = currentNode.right;
			}
		}
	}

	lookup(value) {
		if (!this.root) return false;
		let currentNode = this.root;

		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (value === currentNode.value) {
				return currentNode;
			}
		}
		return null;
	}

	// remove(value) {

	// }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
const searchedVal = tree.lookup(20);
// JSON.stringify(traverse(tree.root));
console.log(JSON.stringify(searchedVal));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
