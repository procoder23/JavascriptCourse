// sort() = Method used to sort elements of an array in place.

let fruits = ['apple', 'orange', 'banana', 'coconut', 'pipeapple'];

fruits.sort();

console.log(fruits);

let number = [1,10,5,8,9,6,7,4,3,2];

number.sort((a, b)=>(a-b));
const desc = number.sort((a, b)=>(b-a));

console.log(number);
console.log(desc);

//------------------------------------------------------------------------------

const people = [ {name:"Prathamesh", age: 22, cgpa: 9.6},
                 {name: "Rajesh", age: 21, cgpa: 9.0},
                 {name: "Shivani", age: 24, cgpa: 9.6},
                 {name: "Shreya", age: 23, cgpa: 8.60}
                ];

const ageSort = people.sort((a, b)=>(a.age-b.age));
console.log(ageSort);
console.log(people.sort((a, b)=> a.name.localeCompare(b.name)));
console.log(people.sort((a, b)=> b.name.localeCompare(a.name)));