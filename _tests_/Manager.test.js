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
    describe("methods", () => {
        it("getName should return Manager name while initializing Manager class", () => {
            const manager = new Manager("Max", 1234, "MaxO@gmail.com")
            expect(manager.getName()).toEqual("Max")
        })
        it("getId should return Manager id while initializing Manager class", () => {
            const manager = new Manager("Max", 1234, "MaxO@gmail.com")
            expect(manager.getId()).toEqual(1234)
        })
        it("getEmail should return Manager email while initializing Manager class", () => {
            const manager = new Manager("Max", 1234, "MaxO@gmail.com")
            expect(manager.getEmail()).toEqual("MaxO@gmail.com")
        })
        it("getRole should return Manager role while initializing Manager class", () => {
            const manager = new Manager("Max", 1234, "MaxO@gmail.com")
            expect(manager.getRole()).toEqual("Manager")
        })
    })
})