const Car = require("./car");

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
    let prius 
beforeEach(()=> {
    prius = new Car("toyota","prius")
})
    test("[5]Car Class Testing",()=> {
        expect(Car).toBeDefined();
        expect(Car).toBeInstanceOf(Function)
    })
    test("[6]Has model and make",() => {
        expect(prius).toHaveProperty("make", "toyota");
        expect(prius).toHaveProperty("model", "prius")
        expect(prius).toMatchObject({make :  "toyota", model : "prius"})
    })
    test("[7]New cars start with the odometer at zero",()=> {
        expect(prius).toHaveProperty("odometer",0);
        expect(prius.odometer).toEqual(0); 
        expect(prius).toMatchObject({odometer : 0})
    })
    test("[8]Cars have a drive method",() => {
        expect(prius.drive).toBeDefined();
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test("[9]Drive methods takes distance and increases odometer by that distance",()=> {
        prius.drive(10);
        expect(prius.odometer).toBe(10);
        prius.drive(5);
        expect(prius.odometer).toBe(15);
    })
    test("[10]Drive async method resolves the updated odometer",async()=> {
        let updatedOdometer = await prius.driveAsync(7);
        expect(updatedOdometer).toBe(7);
        updatedOdometer = await prius.driveAsync(5);
        expect(updatedOdometer).toBe(12); 
    })
})