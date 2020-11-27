class hero{
    constructor(name,hp,damage){
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    applyDamage(damage){
        this.hp -= damage;
    }
    attack(enemy){
        enemy.applyDamage(this.damage);
    }
}

class RangeHero extends hero{
    constructor(name,hp,damage,range){
        super(name,hp,damage);
        this.range = range;
    }
    attack(enemy){
        super.attack(enemy);
        this.hp += this.damage;
    }
}
let heroA = new RangeHero('A', 200,40);
let heroB = new hero('B', 300,30,50);
console.log({heroA,heroB});
heroA.attack(heroB);
console.log({heroA,heroB});