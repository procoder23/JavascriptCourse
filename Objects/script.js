//Object is a collection of related properties and/or methods can represent real world objects(people,places,products)
//object = {key:value,function()}

const person1 = {
    firstName: 'Prathamesh',
    lastName: 'Mestry',
    age: 22,
    isEmployed: false,
    sayHello: function(){console.log("Hi! I am Prathamesh Mestry") },
    sayBye: function(){console.log("Chalo!, Bye")}
};

console.log(person1.firstName, person1.lastName);
person1.sayHello();