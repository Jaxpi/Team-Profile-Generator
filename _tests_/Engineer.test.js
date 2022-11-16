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
    describe("methods", () => {
        it("getName should return Engineer name while initializing Engineer class", () => {
            const engineer = new Engineer("Max", 1234, "MaxO@gmail.com")
            expect(engineer.getName()).toEqual("Max")
        })
        it("getId should return Engineer id while initializing Engineer class", () => {
            const engineer = new Engineer("Max", 1234, "MaxO@gmail.com")
            expect(engineer.getId()).toEqual(1234)
        })
        it("getEmail should return Engineer email while initializing Engineer class", () => {
            const engineer = new Engineer("Max", 1234, "MaxO@gmail.com")
            expect(engineer.getEmail()).toEqual("MaxO@gmail.com")
        })
        it("getRole should return Engineer role while initializing Engineer class", () => {
            const engineer = new Engineer("Max", 1234, "MaxO@gmail.com")
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
})