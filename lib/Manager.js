/** @format */

// TODO: Write code to define and export the Manager class.
// HINT: This class should inherit from Employee.
// add constructor and method to pass tests

const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email, officeNumber);
		this.officeNumber = officeNumber;
	}

	getRole() {
		if (this.name && this.id && this.email && this.officeNumber) {
			return "Manager";
		}
	}
	getOfficeNumber() {
		if (this.officeNumber) {
			return this.officeNumber;
		}
	}
}

module.exports = Manager;
