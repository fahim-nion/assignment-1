let obj = {
    a: 1,
    b: "harry"
}

console.log(obj);


//class

class Animal{
    constructor(name){
        this.name = name;
        console.log(`Object is created...named ${this.name}`)
    }
    eats(){
        console.log(`${this.name} khacche..`)
    }
    jumps(){
        console.log(`${this.name} lafaacche..`);
        
    }
}


class Lion extends Animal {
    constructor(name){
        super(name);
        console.log(`An animal is created named ${this.name}`);
        
    }
    eats(){
        super.eats();               // "shershah khacche" karon eta shudhu parent class er eats() function tukui call hobe.
        console.log(`${this.name} khacche.. pet pure`)
    }

}


let a = new Animal("Rumi");
// console.log(a);

let l = new Lion("shershah");
console.log(l);
l.eats()