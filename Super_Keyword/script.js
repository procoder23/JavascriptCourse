class Animal{
    constructor(name){
        this.name = name;
    }
    speedCount(){
        return `${this.name} has speed `;
    }
}

class Cat extends Animal{
    constructor(name, runSpeed){
        super(name);
        this.runSpeed = runSpeed;
    }
    speedCount(){
        return `${super.speedCount()}of ${this.runSpeed}`;
    }
}

class Eagle extends Animal{
    constructor(name, flySpeed){
        super(name);
        this.flySpeed = flySpeed;
    }
    speedCount(){
        return `${super.speedCount()}of ${this.runSpeed}`;
    }
}

class Fish extends Animal{
    constructor(name, swimSpeed){
        super(name);
        this.swimSpeed = swimSpeed;
    }
    speedCount(){
        return `${super.speedCount()}of ${this.runSpeed}`;
    }
}

const cat = new Cat("Chingi", "50Kmph");

console.log(cat.speedCount());