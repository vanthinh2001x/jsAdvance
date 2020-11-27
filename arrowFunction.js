var a = {
    name: 'AAA',
    run: function(){
        var run2 =function(){
            console.log(this.name);
        }
        run2();
    }
};
a.run(); //-> undefined

//c1
var a = {
    name: 'AAA',
    run: function(){
        var run2 =function(){
            console.log(this.name);
        }
        run2.bind(a)();
    }
};
a.run(); // -> 'AAA'

//c2
var a = {
    name: 'AAA',
    run: function(){
        var run2 =function(){
            console.log(this.name);
        }.bind(this); //bind(a) cx dc
        run2();
    }
};
a.run(); // -> 'AAA'

//c3
var a = {
    name: 'AAA',
    run: function(){
        var run2 =()=>{ 
            console.log(this.name);
        }  //arrow function kh co context nen context cua no la context cua thang gan nhat (run).
        run2();  
    }
};
a.run(); // -> 'AAA'