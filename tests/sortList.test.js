const sortList = require("../src/sortList")

test('Sorted list 9,6,1,4,8 must be 1,4,6,8,9', ()=>{
    list = [9,6,1,4,8];
    expect(sortList(list)).toStrictEqual([1,4,6,8,9]);
})

test('Sort order for 2,1,3,4,6,9,8 is 1,2,3,4,6,8,9', ()=>{
    list = [2,1,3,4,6,9,8];
    expect(sortList(list)).toStrictEqual([1,2,3,4,6,8,9]);
})

test('Sort order for 9,2,7,4,6,5,3,8,1 is 1,2,3,4,5,6,7,8,9', ()=>{
    list = [9,2,7,4,6,5,3,8,1];
    expect(sortList(list)).toStrictEqual([1,2,3,4,5,6,7,8,9]);
})