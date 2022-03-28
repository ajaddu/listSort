const sorted = require("../src/sorted")

test('Sort order for 1,2 is 1,2', ()=>{
    list = [1,2];
    expect(sorted(list)).toStrictEqual([1,2]);
})

test('Sort order for 2,1 is 1,2', ()=>{
    list = [2,1];
    expect(sorted(list)).toStrictEqual([1,2]);
})