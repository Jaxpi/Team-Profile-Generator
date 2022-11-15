// Constructor for Employee values 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = parseInt(id);
        this.email = email 
    }

    // Gets employee name
    getName () {
        return this.name;
    }

    // Gets employee ID
    getId () {
        return this.id;
    }   

    // Gets employee email
    getEmail () {
        return this.email;
    }

    // Gets employee role 
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 