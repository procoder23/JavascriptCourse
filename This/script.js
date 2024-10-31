// This is a reference to the object where this is used
// (The object depends on the immediate context)
// person.name = this.name

const person = {
    name: "Sharukh Khan",
    favFood: "Chicken Tikka",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}
};
person.sayHello();

//Note: This keyword dont work in arrow function. 