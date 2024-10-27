//Spread Operator = ... Allows an iterable such as an array or string to be
//                  expanded into separate elements (Unpack the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);