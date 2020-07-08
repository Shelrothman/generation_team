/** @format */

// TODO: Write code to define and export the Intern class.
//HINT: This class should inherit from Employee.
//add constructor and methods to it to pass tests

const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email, school);
		this.school = school;
	}
	getRole() {
		if (this.name && this.id && this.email && this.school) {
			return "Intern";
		}
	}
	getSchool() {
		if (this.school) {
			return this.school;
		}
	}
}

module.exports = Intern;
