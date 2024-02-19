// reference type
let obj1 = { value: 1 };
let obj2 = obj1;
let obj3 = { value: 1 };

// context vs scope

const object4 = {
	a: function () {
		console.log(this);
	},
};

// instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`weeeeeeeee I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic!");

// Classical Inheritance
let ClassicalPlayer = function (name, type) {
	this.name = name;
	this.type = type;
};

ClassicalPlayer.prototype.introduce = function () {
	console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
};

const ClassicaWizard1 = new Wizard("Shelly", "Healer");
const ClassicaWizard2 = new Wizard("Shawn", "Dark Magic!");

ClassicaWizard1.play = function () {
	console.log(`weeeeeeeee I'm a ${this.type}`);
};

ClassicaWizard2.play = function () {
	console.log(`weeeeeeeee I'm a ${this.type}`);
};
