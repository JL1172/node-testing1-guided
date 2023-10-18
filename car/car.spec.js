const Car = require("./car")
function foo () {
    return "the foo";
}

// Test away!


describe("Our First Tests", () => {
    test("[1]sanity", ()=> {
        expect(5).toBeCloseTo(4.99999)
    })
    test("[2]Objects",()=> {
        const o = {a : 1}
        const oo = {a : 1}
        const ooo = oo;
        expect(o).toBe(o);
        expect(oo).toBe(ooo);
    })
    test("[3]Objects again",()=> {
        expect({a : 1}).toEqual({a : 1})
    })
})

describe("Our Second Tests",() => {
    test("[4]Foo Functions",()=> {
        expect(foo()).toBe("the foo"); 
        expect(foo()).toHaveLength(7);
    })
})

describe("Our Third Tests",()=> {
    test("[5]Car Class Testing",()=> {
        expect(Car).toBeDefined();
        expect(Car).toBeInstanceOf(Function)
    })
    test("[6]Has model and make",() => {
        const prius = new Car("toyota","prius");
        expect(prius).toHaveProperty("make", "toyota");
        expect(prius).toHaveProperty("model", "prius")
        expect(prius).toEqual({make :  "toyota", model : "prius"})
    })
})