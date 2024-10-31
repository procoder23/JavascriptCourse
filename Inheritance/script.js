class Animal{
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating.`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
}
class Fish extends Animal{
    name = "Fish";
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);
console.log(fish.alive);
rabbit.eat();
rabbit.sleep();