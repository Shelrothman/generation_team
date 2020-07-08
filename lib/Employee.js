/** @format */

// TODO: Write code to define and export the Employee class

class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getName() {
		if (this.name) {
			return this.name;
		}
	}
	getId() {
		if (this.id) {
			return this.id;
		}
    }
    getEmail() {
        if (this.email) {
            return this.email;
        }
    }
    getRole() {
        if (this.name && this.id && this.email) {
            return "Employee"; 
        }
    }
}

module.exports = Employee;
