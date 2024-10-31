// Destructuring = Extract values from an arrays and objects, then
//                 assign them to a variables in a convenient way
//             []= To perform array destructuring
//             {}= To perform object destructuring

// ----------------Swap the values------------------

// let a = 1;
// let b = 2;

// console.log(`a is ${a}`);
// console.log(`b is ${b}`);

// [a, b] = [b, a];

// console.log(`After destructuring a is ${a}`);
// console.log(`After destructuring b is ${b}`);

// //----------------- Swap two elements in an array--------------
// const colors = ["Red", "Green", "Blue"];
// [colors[0], colors[2]] = [colors[2], colors[0]];
// console.log(colors); 

//----------------------Extract values from objects--------------
// const Person1 = {
//     firstName: "Prathamesh",
//     lastName: "Mestry",
//     age: 22,
//     job: "Software Developer"
// }

// const Person2 = {
//     firstName: "Chetan",
//     lastName: "Mestry",
//     age: 22,
// }

// const {firstName, lastName, age, job} = Person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// const {firstName, lastName, age, job="Singer"} = Person2; // Here we can assign job value because second person dont have job property
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//------------------ Destructure in function parameter -----------------------
// function displayPerson({firstName, lastName, age, job}){
//     console.log(`Name : ${firstName} ${lastName}`);
//     console.log(`Age : ${age}`);
//     console.log(`Job : ${job}`);
// }

// WE CAN SET PROPERTY IN AN ARGUMENT
function displayPerson({firstName, lastName, age, job="Singer"}){
    console.log(`Name : ${firstName} ${lastName}`);
    console.log(`Age : ${age}`);
    console.log(`Job : ${job}`);
}

const Person1 = {
    firstName: "Prathamesh",
    lastName: "Mestry",
    age: 22,
    job: "Software Developer"
}

const Person2 = {
    firstName: "Chetan",
    lastName: "Mestry",
    age: 22,
}

// displayPerson(Person1);
displayPerson(Person2);
