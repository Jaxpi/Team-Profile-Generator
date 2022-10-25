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
                id: "1234",
                email: "MaxO@gmail.com"
            })
        })
    })
})