const Employee = require('../lib/Employee');

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


