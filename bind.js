var mouse = {
    name: 'mickey',
    sayHi: function(){
        console.log('Hi, my name is ', this.name);
    }
};

mouse.sayHi();
var say = mouse.sayHi;
say(); // => undefined


var cat = {
    name: 'Tom'
};
var say1 = mouse.sayHi.bind(cat);
say1();