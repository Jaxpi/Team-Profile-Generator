const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, ID, email, and github properties", () => {
            //arrange
            const employee = new Employee("Max", 1234, "MaxO@gmail.com")
            //act
            //assert
            expect(employee).toEqual({
                name: "Max",
                id: "1234",
                email: "MaxO@gmail.com",
                github: "github.com/MaxTheGreat"
            })
        })
    })
})