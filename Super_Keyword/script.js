class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Cat extends Animal{
    constructor(runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Eagle extends Animal{
    constructor(flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

class Fish extends Animal{
    constructor(swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const cat = new Cat("Chingi", 2, "50Kmph");
const eagle = new Eagle("Mic", 3, "80Kmph");
const fish = new Eagle("Shark", 6, "3Kmph");