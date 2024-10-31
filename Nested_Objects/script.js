//Nested Object = Object inside other object.
//Allows you to represent more complex data structures
//Child object is enclosed by a parent object

// const person = {
//     fullName: "Prathamesh Mestry",
//     age: 22,
//     isStudent: false,
//     hobbies: ['Singing', 'Travelling', 'Cooking', 'Reading'],
//     address: {
//         street: "Redi-Belgavi Road",
//         city: "Sawantwadi",
//         country: "India"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

class Person{
    constructor(name, age, ...address){
        this.age = age;
        this.name = name;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Prathamesh Mestry", 22, "Redi-Belgavi Road", "Sawantwadi", "India");

console.log(person1);