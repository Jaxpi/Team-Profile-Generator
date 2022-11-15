const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, ID, email, and github properties", () => {
            //arrange
            const engineer = new Engineer("Max", 1234, "MaxO@gmail.com", "github.com/MaxTheGreat")
            //act
            //assert
            expect(engineer).toEqual({
                name: "Max",
                id: 1234,
                email: "MaxO@gmail.com",
                github: "github.com/MaxTheGreat"
            })
        })
    })
})