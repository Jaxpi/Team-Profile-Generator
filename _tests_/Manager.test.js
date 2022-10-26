const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Manager Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, ID, email, and office number properties", () => {
            //arrange
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            //act
            //assert
            expect(employee).toEqual({
                name: "Max",
                id: "1234",
                email: "MaxO@gmail.com",
                office: "505"
            })
        })
    })
})