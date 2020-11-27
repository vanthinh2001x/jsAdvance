function test(a,...number){
console.log(number);
console.log(arguments);
}
test(1,2,3,4,5);

function sum(...num){
    return num.reduce((a,b)=>a+b);
}
console.log(sum(1,2,3,4,5));

function concat(separate,...strings){
    return strings.join(separate);
}

console.log(concat('.','a','b','c'));