// Arrow function is a concise way to to write function expression
// good for simple functions that you use only once
// (parameters) => some code

// const hello = () => {
//     console.log("Hello Coders!");
// }
// hello();

//-----------------------------------------------

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbs = numbers.filter((element) => element % 2 === 0);
const oddNumbs = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNumbs);
console.log(oddNumbs);
console.log(total);