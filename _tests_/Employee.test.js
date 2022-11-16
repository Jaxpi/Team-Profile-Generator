// This imports the information from the Employee.js file
const Employee = require('../lib/Employee');

// Here the Employee class is described (the expectations for it's output). In this case it's saying that when an employee is created it should result in an object that contains name, id, and email data points, and as an example a new employee is defined and the matching data points that should be expected are defined. When the test is run the example output should match the expected - if it doesn't then something is wrong
describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, ID, and email properties", () => {
            //arrange
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            //act
            //assert
            expect(employee).toEqual({
                name: "Max",
                id: 1234,
                email: "MaxO@gmail.com"
            })
        })
    })
    // This part breaks down each piece of the class so that we can see if any parts are working when others aren't
    describe("methods", () => {
        it("getName should return employee name while initializing Employee class", () => {
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            expect(employee.getName()).toEqual("Max")
        })
        it("getId should return employee id while initializing Employee class", () => {
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            expect(employee.getId()).toEqual(1234)
        })
        it("getEmail should return employee email while initializing Employee class", () => {
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            expect(employee.getEmail()).toEqual("MaxO@gmail.com")
        })
        it("getRole should return employee role while initializing Employee class", () => {
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            expect(employee.getRole()).toEqual("Employee")
        })
    })
})


