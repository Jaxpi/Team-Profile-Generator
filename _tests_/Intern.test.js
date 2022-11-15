const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, ID, email, and school name properties", () => {
            //arrange
            const intern = new Intern("Max", 1234, "MaxO@gmail.com", "Columbia University")
            //act
            //assert
            expect(intern).toEqual({
                name: "Max",
                id: 1234,
                email: "MaxO@gmail.com",
                school: "Columbia University"
            })
        })
    })
})