function sum(){
    const numbers = Array.from(arguments);
    return numbers.reduce((a,b)=>a+b);
}
var result = sum(1,2,3,4,5);
console.log(result);