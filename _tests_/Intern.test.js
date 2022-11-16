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
    describe("methods", () => {
        it("getName should return Engineer name while initializing Intern class", () => {
            const intern = new Intern("Max", 1234, "MaxO@gmail.com")
            expect(intern.getName()).toEqual("Max")
        })
        it("getId should return Intern id while initializing Intern class", () => {
            const intern = new Intern("Max", 1234, "MaxO@gmail.com")
            expect(intern.getId()).toEqual(1234)
        })
        it("getEmail should return Intern email while initializing Intern class", () => {
            const intern = new Intern("Max", 1234, "MaxO@gmail.com")
            expect(intern.getEmail()).toEqual("MaxO@gmail.com")
        })
        it("getRole should return Intern role while initializing Intern class", () => {
            const intern = new Intern("Max", 1234, "MaxO@gmail.com")
            expect(intern.getRole()).toEqual("Intern")
        })
    })
})