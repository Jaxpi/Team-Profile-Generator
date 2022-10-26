const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, ID, email, and school name properties", () => {
            //arrange
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            //act
            //assert
            expect(employee).toEqual({
                name: "Max",
                id: "1234",
                email: "MaxO@gmail.com",
                school: "Columbia University"
            })
        })
    })
})