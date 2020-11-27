class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log('Eating....');
    }
}
class Bird extends Animal{
    fly(){
        console.log('Flying....');
    }
}

let bird = new Bird('Thong');
bird.fly();

class Parrot extends Bird{
    speak(){
        console.log('Speaking....');
    }
}

let parrot = new Parrot("t");
parrot.speak();