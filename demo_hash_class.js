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
		this.data[index] = [key, value];
	}

	get(key) {
		const index = this._hash(key);
		return this.data[index];
	}
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", "grapes");
myHashTable.set("grapes2", "grapes2");
myHashTable.set("nahid6hdghdghdghdghdghD", "nahid6hdghdghdghdghdghD");
myHashTable.set("nahid", "nahid");
myHashTable.set("hossain", "hossain");
myHashTable.set("adfadf", "adfadf");

myHashTable.get("grapes");

console.log(myHashTable.get("grapes"));
