//apply
//call: func.call(this, param1, param2, ...);
//apply: func.apply(this,[param1, param2, ...]);
function geeting(){
    console.log(`Hi! ${this.name}. I am ${this.age}.`);
}

const cat = {
    name: 'Tom',
    age: '10'
};

geeting.apply(cat);

function sum(){
    return Array.from(arguments).reduce((a,b)=>a+b)
}

function average(){
    return sum.apply(null, arguments)/arguments.length;
}

console.log(average(1,2,3,4,5))