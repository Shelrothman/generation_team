/** @format */

const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.
//HINT: This class should inherit from Employee.
//add constructor and methods to it to pass the tests

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}
	getRole() {
		if (this.name && this.id && this.email && this.github) {
			return "Engineer";
		}
	}
	getGithub() {
		if (this.github) {
			return this.github;
		}
	}
}

module.exports = Engineer;
