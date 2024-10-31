// Constructor is the special method for defining properties and methods of objects

function Car(company, year, color, price){
    this.company = company,
    this.year = year,
    this.color = color,
    this.price = price,
    this.drive = function(){console.log(`Your car build in ${this.year}`)}
};

const car1 = new Car("Tata", 2023, "White", "7L");
const car2 = new Car("Suzuki", 2023, "Black", "10L");

console.log(car1);
console.log(car2);

car1.drive();