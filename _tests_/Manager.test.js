const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Manager Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, ID, email, and office number properties", () => {
            //arrange
            const manager = new Manager("Max", 1234, "MaxO@gmail.com", "505")
            //act
            //assert
            expect(manager).toEqual({
                name: "Max",
                id: 1234,
                email: "MaxO@gmail.com",
                officeNumber: "505"
            })
        })
    })
})