class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	[["adf", 4534]];

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const index = this._hash(key);
		if (!this.data[index]) this.data[index] = [];
		this.data[index].push([key, value]);
		return this.data;
	}

	get(key) {
		const index = this._hash(key);
		const currentBucket = this.data[index];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				console.log(this.data[i][0][0]);
				keysArray.push(this.data[i][0]);
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", "grapes");
myHashTable.set("grapes2", "grapes2");
myHashTable.set("nahid6hdghdghdghdghdghD", "nahid6hdghdghdghdghdghD");
myHashTable.set("nahid", "nahid");
myHashTable.set("hossain", "hossain");
myHashTable.set("adfadf", "adfadf");
myHashTable.keys();

myHashTable.get("grapes");

console.log(myHashTable.get("grapes"));
