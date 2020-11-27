let a = [2,3,4];
let b = [1,...a,5];
console.log(b);

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {e:10}
}
let obj2 = {
    ...obj1,
    e: 100
}
obj2.d.e = 11;
console.log(obj1, obj2);